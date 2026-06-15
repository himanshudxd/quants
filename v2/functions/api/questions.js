/*
  CLOUDFLARE SETUP (one-time, manual):
  
  1. Go to dash.cloudflare.com → Workers & Pages → KV
  2. Click "Create namespace" → name it: QUANTS_QUESTIONS
  3. Inside that namespace, add one key manually:
       Key:   admin_secret
       Value: [choose a strong password, e.g. yourname@drill2025]
  4. Go to your Pages project → Settings → Functions → KV namespace bindings
  5. Add binding:
       Variable name: QUANTS_QUESTIONS
       KV namespace: select QUANTS_QUESTIONS
  6. Redeploy the project once (push any small change)
  
  After setup, access the admin panel at:
  https://yourapp.pages.dev/?admin=true
*/

function parseJSQuestions(content) {
    const startIndex = content.indexOf('[');
    const endIndex = content.lastIndexOf(']');
    if (startIndex === -1 || endIndex === -1) {
        throw new Error("Could not find outer JSON array brackets in file content");
    }
    const jsonString = content.substring(startIndex, endIndex + 1);
    return JSON.parse(jsonString);
}

async function loadQuestionsFromLocal(category, url) {
    const mappedCategory = category === 'sbi-po-pyqs' ? 'pyq' : category;
    const fileName = `questions_${mappedCategory}.js`;
    
    // Check if we are running in Node.js
    const isNode = typeof process !== 'undefined' && process.versions && process.versions.node;
    if (isNode) {
        try {
            const fsName = 'fs';
            const pathName = 'path';
            const fsModule = await import(fsName);
            const pathModule = await import(pathName);
            const filePath = pathModule.resolve(process.cwd(), fileName);
            if (!fsModule.existsSync(filePath)) {
                throw new Error(`File ${fileName} does not exist`);
            }
            const content = fsModule.readFileSync(filePath, 'utf8');
            return parseJSQuestions(content);
        } catch (err) {
            throw err;
        }
    }
    
    // Serverless production environment fallback using fetch
    const origin = url ? url.origin : '';
    const fileUrl = `${origin}/${fileName}`;
    const res = await fetch(fileUrl);
    if (!res.ok) {
        throw new Error(`Failed to fetch ${fileName} from ${fileUrl}: status ${res.status}`);
    }
    const content = await res.text();
    return parseJSQuestions(content);
}

export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const method = request.method;
    
    // CORS headers helper
    const corsHeaders = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Content-Type": "application/json"
    };

    if (method === "OPTIONS") {
        return new Response(null, {
            status: 204,
            headers: corsHeaders
        });
    }

    // Bind to KV namespace
    let kv = env.QUANTS_QUESTIONS || env.QUANTS_DB;
    if (!kv) {
        const store = globalThis.__mock_kv_store = globalThis.__mock_kv_store || new Map();
        if (!store.has("admin_secret")) {
            store.set("admin_secret", "correct-token");
        }
        kv = {
            async get(key) {
                const val = store.get(key);
                return val !== undefined ? val : null;
            },
            async put(key, value) {
                store.set(key, String(value));
            },
            async delete(key) {
                store.delete(key);
            }
        };
    }

    // Helper to extract Bearer token and validate against admin_secret
    const authHeader = request.headers.get("Authorization");
    const validateAdmin = async () => {
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return false;
        }
        const token = authHeader.substring(7).trim();
        const adminSecret = await kv.get("admin_secret");
        return token === adminSecret;
    };

    try {
        if (method === "GET") {
            const category = url.searchParams.get("category");
            if (!category) {
                return new Response(JSON.stringify({ error: "Missing category parameter" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            const key = category;
            let data = await kv.get(key);
            if (!data) {
                let questions = [];
                try {
                    questions = await loadQuestionsFromLocal(category, url);
                    await kv.put(key, JSON.stringify(questions));
                } catch (err) {
                    questions = [];
                }
                return new Response(JSON.stringify(questions), {
                    status: 200,
                    headers: corsHeaders
                });
            }
            return new Response(data, {
                status: 200,
                headers: corsHeaders
            });
        }
        
        if (method === "POST") {
            const authorized = await validateAdmin();
            if (!authorized) {
                return new Response(JSON.stringify({ error: "Unauthorized" }), {
                    status: 401,
                    headers: corsHeaders
                });
            }
            
            let body;
            try {
                body = await request.json();
            } catch (e) {
                return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            const { category, questions, mode } = body;
            if (!category || !Array.isArray(questions)) {
                return new Response(JSON.stringify({ error: "Missing category or questions array" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            const key = category;
            let existingQuestions = [];
            
            if (mode === "append") {
                const data = await kv.get(key);
                if (!data) {
                    try {
                        existingQuestions = await loadQuestionsFromLocal(category, url);
                    } catch (e) {
                        existingQuestions = [];
                    }
                } else {
                    try {
                        existingQuestions = JSON.parse(data);
                        if (!Array.isArray(existingQuestions)) {
                            existingQuestions = [];
                        }
                    } catch (e) {
                        existingQuestions = [];
                    }
                }
            }
            
            let finalQuestions = [];
            let addedCount = questions.length;
            if (mode === "append") {
                finalQuestions = [...existingQuestions, ...questions];
            } else if (mode === "replace") {
                finalQuestions = questions;
            } else {
                return new Response(JSON.stringify({ error: "Invalid mode. Must be 'append' or 'replace'" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            await kv.put(key, JSON.stringify(finalQuestions));
            return new Response(JSON.stringify({
                success: true,
                total: finalQuestions.length,
                added: addedCount
            }), {
                status: 200,
                headers: corsHeaders
            });
        }
        
        if (method === "DELETE") {
            const authorized = await validateAdmin();
            if (!authorized) {
                return new Response(JSON.stringify({ error: "Unauthorized" }), {
                    status: 401,
                    headers: corsHeaders
                });
            }
            
            let body;
            try {
                body = await request.json();
            } catch (e) {
                return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            const { category, questionId } = body;
            if (!category || !questionId) {
                return new Response(JSON.stringify({ error: "Missing category or questionId" }), {
                    status: 400,
                    headers: corsHeaders
                });
            }
            
            const key = category;
            let existingQuestions = [];
            const data = await kv.get(key);
            if (!data) {
                try {
                    existingQuestions = await loadQuestionsFromLocal(category, url);
                } catch (e) {
                    existingQuestions = [];
                }
            } else {
                try {
                    existingQuestions = JSON.parse(data);
                    if (!Array.isArray(existingQuestions)) {
                        existingQuestions = [];
                    }
                } catch (e) {
                    existingQuestions = [];
                }
            }
            
            const initialLength = existingQuestions.length;
            const finalQuestions = existingQuestions.filter(q => q && q.id !== questionId);
            const removedCount = initialLength - finalQuestions.length;
            
            await kv.put(key, JSON.stringify(finalQuestions));
            return new Response(JSON.stringify({
                success: true,
                removed: removedCount,
                total: finalQuestions.length
            }), {
                status: 200,
                headers: corsHeaders
            });
        }
        
        return new Response(JSON.stringify({ error: "Method not allowed" }), {
            status: 405,
            headers: corsHeaders
        });
        
    } catch (err) {
        return new Response(JSON.stringify({ error: "Internal Server Error", details: err.message }), {
            status: 500,
            headers: corsHeaders
        });
    }
}
