(function(){
  let activeChapter='all', searchTerm='';

  function buildUI(){
    // Overlay
    const ov=document.createElement('div');
    ov.id='fp-overlay';
    ov.onclick=closePanel;
    document.body.appendChild(ov);

    // Floating button
    const btn=document.createElement('button');
    btn.id='fp-btn';
    btn.title='Formula Sheet';
    btn.innerHTML='📐';
    btn.onclick=openPanel;
    document.body.appendChild(btn);

    // Panel
    const panel=document.createElement('div');
    panel.id='fp-panel';
    panel.innerHTML=`
      <div id="fp-header">
        <div style="font-size:18px">📐</div>
        <h2>Formula Sheet</h2>
        <button id="fp-close" onclick="document.getElementById('fp-panel').classList.remove('open');document.getElementById('fp-overlay').classList.remove('open')">✕</button>
      </div>
      <input id="fp-search" type="text" placeholder="Search formula, chapter..." oninput="window._fpSearch(this.value)"/>
      <div id="fp-chapter-list"></div>
      <div id="fp-body"></div>
    `;
    document.body.appendChild(panel);

    // Build chapter chips
    buildChips();
    renderContent();
  }

  function buildChips(){
    const list=document.getElementById('fp-chapter-list');
    const all=document.createElement('div');
    all.className='fp-chip active';
    all.textContent='All';
    all.onclick=()=>setChapter('all',all);
    list.appendChild(all);
    FORMULA_DATA.chapters.forEach(ch=>{
      const c=document.createElement('div');
      c.className='fp-chip';
      c.textContent=ch.name;
      c.onclick=()=>setChapter(ch.id,c);
      list.appendChild(c);
    });
  }

  function setChapter(id,el){
    activeChapter=id;
    document.querySelectorAll('.fp-chip').forEach(c=>c.classList.remove('active'));
    el.classList.add('active');
    renderContent();
  }

  window._fpSearch=function(val){
    searchTerm=val.toLowerCase();
    renderContent();
  };

  function renderContent(){
    const body=document.getElementById('fp-body');
    const chapters = activeChapter==='all'
      ? FORMULA_DATA.chapters
      : FORMULA_DATA.chapters.filter(c=>c.id===activeChapter);

    const filtered = searchTerm
      ? chapters.filter(ch=>{
          const haystack=(ch.name+ch.tricks.join('')+ch.memory.join('')+
            ch.cards.map(c=>c.title+c.formulas.flat().join('')).join('')).toLowerCase();
          return haystack.includes(searchTerm);
        })
      : chapters;

    if(!filtered.length){
      body.innerHTML='<div class="fp-empty">No results found</div>';
      return;
    }

    body.innerHTML=filtered.map(ch=>`
      <div class="fp-chapter-section">
        <div class="fp-chapter-title">
          <div class="fp-chapter-icon" style="background:${ch.color}22;color:${ch.color}">${ch.icon}</div>
          <span class="fp-chapter-name">${ch.name}</span>
          <span class="fp-chapter-tag">${ch.tag}</span>
        </div>
        ${ch.cards.map(card=>`
          <div class="fp-card" style="--cc:${ch.color}">
            <div class="fp-card-title">${card.title}</div>
            ${card.formulas.map(([k,v])=>`
              <div class="fp-formula-row">
                <span class="fp-fkey">${k}</span>
                <span class="fp-fval">${v}</span>
              </div>`).join('')}
          </div>`).join('')}
        <div class="fp-tricks">
          <div class="fp-tricks-title">⚡ Tricks</div>
          ${ch.tricks.map(t=>`<div class="fp-trick">${t}</div>`).join('')}
        </div>
        <div class="fp-memory">
          <div class="fp-memory-title">🧠 Memory Aids</div>
          ${ch.memory.map(m=>`<div class="fp-mem">${m}</div>`).join('')}
        </div>
      </div>`).join('');
  }

  function openPanel(){
    document.getElementById('fp-panel').classList.add('open');
    document.getElementById('fp-overlay').classList.add('open');
  }
  function closePanel(){
    document.getElementById('fp-panel').classList.remove('open');
    document.getElementById('fp-overlay').classList.remove('open');
  }

  // Init after DOM ready
  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',buildUI);
  } else {
    buildUI();
  }
})();
