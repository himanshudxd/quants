const FORMULA_DATA = {
  chapters: [
    {
      id: "percentage",
      name: "Percentage",
      color: "#c0392b",
      icon: "%",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Core Formula",
          formulas: [
            ["x% of y", "x×y ÷ 100"],
            ["% change", "(Change ÷ Original) × 100"],
            ["New value", "Original × (1 ± r/100)"]
          ]
        },
        {
          title: "% ↔ Fraction",
          formulas: [
            ["50%", "1/2"],["33.33%","1/3"],["25%","1/4"],
            ["20%","1/5"],["16.67%","1/6"],["12.5%","1/8"],
            ["10%","1/10"],["11.11%","1/9"],["14.28%","1/7"]
          ]
        },
        {
          title: "Successive % Change",
          formulas: [
            ["Two changes a,b", "a+b+(ab/100)"],
            ["Both increase", "result is +ve"],
            ["One inc, one dec", "check sign of ab/100"]
          ]
        }
      ],
      tricks: [
        "x% of y = y% of x — swap when easier",
        "20% increase then 20% decrease ≠ 0 → net = −4%",
        "If price ↑ by r%, consumption must ↓ by r/(100+r)×100 to keep expenditure same",
        "Population after n years = P×(1+r/100)ⁿ"
      ],
      memory: [
        "FRACTION TABLE is your biggest time saver — memorise 1/1 to 1/12",
        "'Successive' means multiply factors: 1.2 × 0.8 = 0.96 → 4% loss"
      ]
    },
    {
      id: "ratio",
      name: "Ratio & Proportion",
      color: "#2980e8",
      icon: "∶",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Core Concepts",
          formulas: [
            ["a:b = c:d", "ad = bc (cross multiply)"],
            ["3rd proportional", "b²/a"],
            ["4th proportional", "bc/a"],
            ["Mean proportional", "√(ab)"]
          ]
        },
        {
          title: "Compound Ratio",
          formulas: [
            ["Compound a:b & c:d", "ac : bd"],
            ["Duplicate of a:b", "a² : b²"],
            ["Sub-duplicate", "√a : √b"],
            ["Triplicate", "a³ : b³"]
          ]
        },
        {
          title: "Division of Amount",
          formulas: [
            ["A+B+C = total T", "A = T × a/(a+b+c)"],
            ["Ratio a:b:c", "each share = T×part/sum"]
          ]
        }
      ],
      tricks: [
        "If a:b = 2:3 and b:c = 4:5, then a:b:c = 8:12:15 (make b common)",
        "Increase ratio a:b in ratio m:n → new values = am : bn",
        "When sum is given, just multiply ratio parts by T/sum"
      ],
      memory: [
        "Cross multiply to verify proportion — if ad=bc it's proportion",
        "To combine two ratios, LCM the middle term"
      ]
    },
    {
      id: "partnership",
      name: "Partnership",
      color: "#8e44ad",
      icon: "🤝",
      tag: "Prelims",
      cards: [
        {
          title: "Simple Partnership",
          formulas: [
            ["Profit ratio", "Capital₁ : Capital₂"],
            ["Share of A", "Total × CA/(CA+CB)"]
          ]
        },
        {
          title: "Time-based Partnership",
          formulas: [
            ["Ratio", "C₁×T₁ : C₂×T₂"],
            ["If same capital", "ratio = T₁ : T₂"],
            ["If same time", "ratio = C₁ : C₂"]
          ]
        },
        {
          title: "Working Partner",
          formulas: [
            ["Working partner gets", "salary first, then profit split"],
            ["Remaining profit", "split by capital ratio"]
          ]
        }
      ],
      tricks: [
        "Always convert to Capital × Time before finding ratio",
        "If A invests for full year and B joins mid-year — calculate months carefully",
        "Sleeping partner gets profit in capital ratio only"
      ],
      memory: [
        "Think of it as: profit is proportional to 'money × time invested'",
        "Working partner salary is deducted FIRST from total profit"
      ]
    },
    {
      id: "mixture",
      name: "Mixture & Alligation",
      color: "#27ae60",
      icon: "⚗",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Alligation Rule",
          formulas: [
            ["Cheaper : Dearer", "(Mean−Cheaper) : (Dearer−Mean)"],
            ["Ratio of mixing", "d−m : m−c"]
          ]
        },
        {
          title: "Removal & Replacement",
          formulas: [
            ["After n operations", "C×(1−r/T)ⁿ"],
            ["C = initial qty", "T = total volume"],
            ["r = removed each time", "n = number of times"]
          ]
        },
        {
          title: "Average in Mixture",
          formulas: [
            ["Avg of mixture", "(n₁a₁+n₂a₂)/(n₁+n₂)"],
            ["n = quantity", "a = attribute (price/%)"]
          ]
        }
      ],
      tricks: [
        "Draw the cross (alligation diagram) — put cheaper top-left, dearer top-right, mean in center",
        "Cross subtract diagonally to get ratio",
        "Removal formula: each time you remove r litres from T litres total"
      ],
      memory: [
        "Alligation = shortcut for weighted average problems",
        "The cross diagram always gives cheaper:dearer ratio"
      ]
    },
    {
      id: "si_ci",
      name: "SI & CI",
      color: "#e67e22",
      icon: "₹",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Simple Interest",
          formulas: [
            ["SI", "P×R×T / 100"],
            ["Amount", "P + SI"],
            ["P", "SI×100 / (R×T)"],
            ["R", "SI×100 / (P×T)"]
          ]
        },
        {
          title: "Compound Interest",
          formulas: [
            ["Amount", "P×(1+R/100)ⁿ"],
            ["CI", "A − P"],
            ["Half-yearly", "P×(1+R/200)²ⁿ"],
            ["Quarterly", "P×(1+R/400)⁴ⁿ"]
          ]
        },
        {
          title: "CI Shortcuts",
          formulas: [
            ["CI for 2 yrs", "P×r/100×(2+r/100)"],
            ["Diff CI−SI (2yr)", "P(r/100)²"],
            ["Diff CI−SI (3yr)", "P(r/100)²×(3+r/100)"]
          ]
        }
      ],
      tricks: [
        "CI for 2 years = SI for 2 years + SI on first year's interest",
        "If rate is same: CI > SI always (for more than 1 year)",
        "For half-yearly: double n, halve r"
      ],
      memory: [
        "SI is linear — same interest every year",
        "CI is exponential — interest on interest compounds",
        "Difference formula (2yr) = P×(r/100)² — memorise this cold"
      ]
    },
    {
      id: "profit_loss",
      name: "Profit & Loss",
      color: "#16a085",
      icon: "📈",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Core Formulas",
          formulas: [
            ["Profit%", "(P/CP)×100"],
            ["Loss%", "(L/CP)×100"],
            ["SP", "CP×(100+P%)/100"],
            ["CP", "SP×100/(100+P%)"]
          ]
        },
        {
          title: "Discount",
          formulas: [
            ["SP", "MP×(100−d%)/100"],
            ["Discount", "MP − SP"],
            ["d%", "(Discount/MP)×100"]
          ]
        },
        {
          title: "Successive Discount",
          formulas: [
            ["Two discounts a,b", "net = a+b−ab/100"],
            ["SP after a% & b%", "MP×(1−a/100)×(1−b/100)"]
          ]
        }
      ],
      tricks: [
        "If same SP but different CP — profit% and loss% are NOT same",
        "Goods sold at CP but with false weights: profit% = (True−False)/False × 100",
        "When two items sold at same SP, one at x% profit and other at x% loss → always a loss = x²/100 %"
      ],
      memory: [
        "CP → multiply by (100+P%)/100 to get SP",
        "SP → multiply by 100/(100+P%) to get CP",
        "Two same-SP equal-% problems: always loss. Formula x²/100"
      ]
    },
    {
      id: "time_work",
      name: "Time & Work",
      color: "#2c3e50",
      icon: "⚙",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Core Concept",
          formulas: [
            ["1 day work of A", "1/T (if A takes T days)"],
            ["A+B together", "1/TA + 1/TB"],
            ["Days together", "TATB/(TA+TB)"]
          ]
        },
        {
          title: "Efficiency Method",
          formulas: [
            ["Total work", "LCM of all days"],
            ["A's efficiency", "TotalWork / TA"],
            ["Days = ", "TotalWork / combined eff."]
          ]
        },
        {
          title: "Wages",
          formulas: [
            ["Wage ratio", "= efficiency ratio"],
            ["Individual wage", "Total × (own eff / total eff)"]
          ]
        }
      ],
      tricks: [
        "LCM method is fastest — take LCM of days as total work unit",
        "If A is twice as fast as B → A takes half the time",
        "M men in D days = M×D man-days (total work is constant)"
      ],
      memory: [
        "Work = Rate × Time. If work is 1, rate = 1/time",
        "LCM method: assign 'units' to work, avoid fractions entirely"
      ]
    },
    {
      id: "pipes",
      name: "Pipes & Cisterns",
      color: "#1abc9c",
      icon: "🚰",
      tag: "Prelims",
      cards: [
        {
          title: "Fill & Empty",
          formulas: [
            ["Filling pipe rate", "+1/T"],
            ["Emptying pipe rate", "−1/T"],
            ["Net rate", "sum of all rates"],
            ["Time to fill", "1 / net rate"]
          ]
        },
        {
          title: "Combined Pipes",
          formulas: [
            ["Two fill pipes", "AB/(A+B)"],
            ["One fill, one empty", "AB/(A−B) if A>B"],
            ["Net work in 1 hr", "1/A − 1/B"]
          ]
        }
      ],
      tricks: [
        "Treat exactly like Time & Work — fill = positive, empty = negative",
        "Leak problem: with leak takes longer → leak rate = 1/normal − 1/with_leak",
        "If a pipe fills in A hrs and empties in B hrs, and both open: time = AB/(A−B)"
      ],
      memory: [
        "Pipes & Cisterns = Time & Work with signs (+/−)",
        "Fill pipes add, drain pipes subtract — net rate gives answer"
      ]
    },
    {
      id: "tsd",
      name: "Time Speed Distance",
      color: "#e74c3c",
      icon: "🚀",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Core Triangle",
          formulas: [
            ["Speed", "Distance / Time"],
            ["Distance", "Speed × Time"],
            ["Time", "Distance / Speed"]
          ]
        },
        {
          title: "Average Speed",
          formulas: [
            ["Two equal distances", "2uv/(u+v)"],
            ["Two equal times", "(u+v)/2"],
            ["Note", "avg ≠ (u+v)/2 for dist"]
          ]
        },
        {
          title: "Relative Speed",
          formulas: [
            ["Same direction", "|u − v|"],
            ["Opposite direction", "u + v"],
            ["Meeting time", "D / rel. speed"]
          ]
        },
        {
          title: "Conversions",
          formulas: [
            ["km/h → m/s", "× 5/18"],
            ["m/s → km/h", "× 18/5"]
          ]
        }
      ],
      tricks: [
        "Average speed for equal distances = HARMONIC mean = 2uv/(u+v), NOT arithmetic mean",
        "If A is x km/h faster and they meet in t hours — distance = x×t÷2 (when starting opposite ends)",
        "Train problems: distance = length of train + length of object being crossed"
      ],
      memory: [
        "Cover/Cover/Cover triangle — cover the one you want",
        "Opposite → add speeds, Same → subtract speeds",
        "km/h to m/s: multiply by 5/18 (think: 5 and 18 — 1km=1000m, 1hr=3600s → 1000/3600=5/18)"
      ]
    },
    {
      id: "boats",
      name: "Boats & Streams",
      color: "#3498db",
      icon: "⛵",
      tag: "Prelims",
      cards: [
        {
          title: "Core Speeds",
          formulas: [
            ["Downstream speed", "B + S"],
            ["Upstream speed", "B − S"],
            ["Boat speed B", "(D+U)/2"],
            ["Stream speed S", "(D−U)/2"]
          ]
        },
        {
          title: "Time & Distance",
          formulas: [
            ["Time downstream", "d/(B+S)"],
            ["Time upstream", "d/(B−S)"],
            ["Still water time", "d/B"]
          ]
        }
      ],
      tricks: [
        "B and S are always the unknowns — D and U (downstream/upstream speeds) are given",
        "B = avg of D and U, S = half their difference",
        "If a man rows to a place and back in T hours: T = d/(B+S) + d/(B−S)"
      ],
      memory: [
        "Stream helps downstream (add), resists upstream (subtract)",
        "Two formulas to remember: B=(D+U)/2, S=(D−U)/2"
      ]
    },
    {
      id: "mensuration",
      name: "Mensuration",
      color: "#9b59b6",
      icon: "📐",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "2D Shapes",
          formulas: [
            ["Rectangle A", "l×b"],
            ["Triangle A", "½×b×h"],
            ["Circle A", "πr²"],
            ["Trapezium A", "½(a+b)×h"],
            ["Rhombus A", "½×d₁×d₂"]
          ]
        },
        {
          title: "3D Shapes",
          formulas: [
            ["Cube V", "a³, TSA=6a²"],
            ["Cuboid V", "lbh, TSA=2(lb+bh+lh)"],
            ["Cylinder V", "πr²h, CSA=2πrh"],
            ["Cone V", "⅓πr²h, CSA=πrl"],
            ["Sphere V", "4/3πr³, SA=4πr²"]
          ]
        }
      ],
      tricks: [
        "Cone slant height l = √(r²+h²) — always",
        "TSA = CSA + area of bases",
        "Hemisphere: CSA=2πr², TSA=3πr² (base is πr²)"
      ],
      memory: [
        "4/3 for sphere — 1/3 for cone — both have the '3'",
        "CSA of cylinder = rectangle rolled up: 2πr × h"
      ]
    },
    {
      id: "number_system",
      name: "Number System",
      color: "#e67e22",
      icon: "∞",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Divisibility Rules",
          formulas: [
            ["÷2", "last digit even"],
            ["÷3", "sum of digits ÷3"],
            ["÷4", "last 2 digits ÷4"],
            ["÷8", "last 3 digits ÷8"],
            ["÷9", "sum of digits ÷9"],
            ["÷11", "alt sum = 0 or ÷11"]
          ]
        },
        {
          title: "HCF & LCM",
          formulas: [
            ["HCF×LCM", "= Product of two numbers"],
            ["HCF of fractions", "HCF(num)/LCM(den)"],
            ["LCM of fractions", "LCM(num)/HCF(den)"]
          ]
        },
        {
          title: "Remainders & Powers",
          formulas: [
            ["Unit digit of aⁿ", "cycle of 4 for most"],
            ["2 cycle", "2,4,8,6,2,4,8,6..."],
            ["3 cycle", "3,9,7,1,3,9,7,1..."],
            ["Last 2 digits", "use binomial or pattern"]
          ]
        }
      ],
      tricks: [
        "Divisibility by 7: double last digit, subtract from rest — if result ÷7, original ÷7",
        "HCF×LCM = product — only works for TWO numbers",
        "Unit digit cycles: 1→1, 5→5, 6→6, 0→0 (always same). Others cycle in 4"
      ],
      memory: [
        "HCF = Highest Common Factor = GCD",
        "LCM = Least Common Multiple",
        "For fractions: HCF goes opposite (num stays HCF, den becomes LCM)"
      ]
    },
    {
      id: "simplification",
      name: "Simplification",
      color: "#c0392b",
      icon: "=",
      tag: "Prelims",
      cards: [
        {
          title: "BODMAS",
          formulas: [
            ["Order", "B → O → D → M → A → S"],
            ["B", "Brackets"],
            ["O", "Of (powers/roots)"],
            ["DM", "Division & Multiplication (L to R)"],
            ["AS", "Addition & Subtraction (L to R)"]
          ]
        },
        {
          title: "Key Identities",
          formulas: [
            ["(a+b)²", "a²+2ab+b²"],
            ["(a−b)²", "a²−2ab+b²"],
            ["a²−b²", "(a+b)(a−b)"],
            ["(a+b)³", "a³+3a²b+3ab²+b³"],
            ["a³+b³", "(a+b)(a²−ab+b²)"],
            ["a³−b³", "(a−b)(a²+ab+b²)"]
          ]
        },
        {
          title: "Surds & Indices",
          formulas: [
            ["aᵐ×aⁿ", "aᵐ⁺ⁿ"],
            ["aᵐ/aⁿ", "aᵐ⁻ⁿ"],
            ["(aᵐ)ⁿ", "aᵐⁿ"],
            ["a⁰", "1"],
            ["a⁻ⁿ", "1/aⁿ"],
            ["√a×√b", "√(ab)"]
          ]
        }
      ],
      tricks: [
        "Approximate aggressively in simplification — options are far apart",
        "Square numbers to memorise: 1² to 30², cube: 1³ to 15³",
        "√2=1.414, √3=1.732, √5=2.236, √6=2.449, √7=2.646"
      ],
      memory: [
        "BODMAS = order of operations — brackets always first",
        "a²−b² = (a+b)(a−b) is the most used identity in banking exams"
      ]
    },
    {
      id: "number_series",
      name: "Number Series",
      color: "#1abc9c",
      icon: "…",
      tag: "Prelims",
      cards: [
        {
          title: "Common Patterns",
          formulas: [
            ["Arithmetic", "add/subtract constant"],
            ["Geometric", "multiply/divide constant"],
            ["Squares", "1,4,9,16,25..."],
            ["Cubes", "1,8,27,64,125..."],
            ["Prime", "2,3,5,7,11,13..."]
          ]
        },
        {
          title: "Mixed Patterns",
          formulas: [
            ["Difference series", "find 1st,2nd diff"],
            ["×2+1, ×2−1", "alternating operations"],
            ["Two interleaved", "odd/even position separately"],
            ["Square±n", "4+1=5, 9+2=11, 16+3=19..."]
          ]
        }
      ],
      tricks: [
        "Always find differences first — if differences form a pattern, you have it",
        "Check: is it AP? GP? Square? Cube? In that order",
        "Two alternating series: separate odd-position and even-position terms"
      ],
      memory: [
        "Step 1: subtract consecutive terms. Step 2: look at those differences",
        "If differences grow → likely square or exponential. If constant → AP"
      ]
    },
    {
      id: "quadratic",
      name: "Quadratic Equations",
      color: "#8e44ad",
      icon: "x²",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "Methods",
          formulas: [
            ["Factorisation", "find p,q: p+q=b, p×q=c (for x²+bx+c)"],
            ["Formula", "x = (−b ± √(b²−4ac)) / 2a"],
            ["Sum of roots", "−b/a"],
            ["Product of roots", "c/a"]
          ]
        },
        {
          title: "Nature of Roots",
          formulas: [
            ["D = b²−4ac", "Discriminant"],
            ["D > 0", "two distinct real roots"],
            ["D = 0", "two equal real roots"],
            ["D < 0", "no real roots"]
          ]
        },
        {
          title: "Comparison",
          formulas: [
            ["x>y", "all x values > all y values"],
            ["x≥y", "—"],
            ["x<y", "—"],
            ["Relationship?", "check all combinations"]
          ]
        }
      ],
      tricks: [
        "For comparison Qs: find both roots of I and II, compare systematically",
        "If product of roots is negative → roots have opposite signs",
        "Factor method faster than formula — try it first always"
      ],
      memory: [
        "Sum = −b/a, Product = c/a — these let you verify roots quickly",
        "D < 0 → no real roots → skip that equation in comparison"
      ]
    },
    {
      id: "di",
      name: "Data Interpretation",
      color: "#2c3e50",
      icon: "📊",
      tag: "Prelims + Mains",
      cards: [
        {
          title: "DI Types",
          formulas: [
            ["Table", "read row×column carefully"],
            ["Bar Graph", "read height = value"],
            ["Line Graph", "read intersection"],
            ["Pie Chart", "value = %×total/100"],
            ["Caselet", "read carefully, form equations"]
          ]
        },
        {
          title: "Key Calculations",
          formulas: [
            ["% of total", "(part/total)×100"],
            ["% change", "(new−old)/old×100"],
            ["Ratio", "simplify by dividing both"],
            ["Average", "sum/count"]
          ]
        }
      ],
      tricks: [
        "In pie charts, total degrees = 360. x° = x/360 × total value",
        "For % change, denominator is always the OLD value",
        "Approximate — DI options are usually 2-5% apart, not exact"
      ],
      memory: [
        "Read the heading and units before solving — kg vs tonnes, lakhs vs crores",
        "Pie chart: angle = (value/total)×360"
      ]
    },
    {
      id: "approximation",
      name: "Approximation",
      color: "#16a085",
      icon: "≈",
      tag: "Prelims",
      cards: [
        {
          title: "Strategy",
          formulas: [
            ["Round to nearest 5/10", "simplify the number"],
            ["Sqrt approx", "find nearest perfect square"],
            ["% approx", "use fraction equivalent"],
            ["Error allowed", "usually ±2% of option"]
          ]
        },
        {
          title: "Key Square Roots",
          formulas: [
            ["√2","1.414"],["√3","1.732"],["√5","2.236"],
            ["√6","2.449"],["√7","2.646"],["√10","3.162"],
            ["√11","3.317"],["√13","3.606"],["√17","4.123"]
          ]
        }
      ],
      tricks: [
        "Never solve exactly — the question is designed for approximation",
        "If √625.4 → treat as √625 = 25",
        "34.8% of 501 → 35% of 500 = 175"
      ],
      memory: [
        "Round first, calculate second — never the other way",
        "Square roots: between which two perfect squares? Take closer one"
      ]
    }
,
    {
      id:"averages",name:"Averages",color:"#f39c12",icon:"x\u0304",tag:"Prelims + Mains",
      cards:[
        {title:"Core Formulas",formulas:[["Average","Sum / Count"],["Sum","Average x Count"],["Count","Sum / Average"]]},
        {title:"Weighted Average",formulas:[["Wtd Avg","(n1*a1+n2*a2)/(n1+n2)"],["New avg after adding x","(old sum+x)/(n+1)"],["Replacement","new avg = old avg +/- diff/n"]]},
        {title:"Score Trick",formulas:[["Avg up by x","new = old avg + (n+1)*x"],["Avg down by x","new = old avg - (n+1)*x"],["Consecutive nos","avg = middle term"]]}
      ],
      tricks:["Replacement: change in avg x n = change in values","Consecutive numbers avg = (first+last)/2","Number above avg raises avg; below lowers it"],
      memory:["Average = balancing point","Replacement shortcut: delta_avg x n = delta_value"]
    },
    {
      id:"probability",name:"Probability",color:"#e74c3c",icon:"P",tag:"Mains",
      cards:[
        {title:"Core Formula",formulas:[["P(E)","Favourable / Total"],["P(not E)","1 - P(E)"],["P(A or B)","P(A)+P(B)-P(A and B)"],["P(A and B)","P(A)*P(B) if independent"]]},
        {title:"Cards and Dice",formulas:[["Total cards","52"],["Each suit","13"],["Face cards","12 (J,Q,K x4)"],["Aces","4"],["Two dice","36 outcomes"]]},
        {title:"Key Rules",formulas:[["Mutually exclusive","P(A and B)=0"],["Exhaustive","all probs sum to 1"],["Conditional P(A|B)","P(A and B)/P(B)"]]}
      ],
      tricks:["At least one = 1 - P(none)","Cards: 52 total, 4 suits, 12 face cards, 4 aces","Two dice: 36 total outcomes"],
      memory:["At least one uses complement: 1-P(none)","Independent = multiply. Mutually exclusive = add"]
    },
    {
      id:"pnc",name:"Permutation & Combination",color:"#1abc9c",icon:"nCr",tag:"Mains",
      cards:[
        {title:"Core Formulas",formulas:[["nPr","n!/(n-r)!"],["nCr","n!/(r!(n-r)!)"],["nC0=nCn","1"],["nCr=nC(n-r)","symmetry"]]},
        {title:"Arrangements",formulas:[["n distinct items","n! ways"],["Circular","(n-1)!"],["Necklace","(n-1)!/2"],["With repetition","n^r"],["Identical items","n!/(p!q!r!)"]]},
        {title:"Selection",formulas:[["r from n","nCr"],["At least 1 from n","2^n - 1"],["None selected","1"]]}
      ],
      tricks:["P = order matters, C = order does not matter","Circular: fix 1 person, arrange rest = (n-1)!","At least 1 from n items = 2^n - 1"],
      memory:["P for Position (order matters)","C for Choose (order does not matter)","nCr = nPr divided by r!"]
    },
    {
      id:"ages",name:"Problems on Ages",color:"#3498db",icon:"Age",tag:"Prelims + Mains",
      cards:[
        {title:"Setup",formulas:[["Present age","let = x"],["n years ago","x - n"],["n years later","x + n"],["Age difference","constant always"]]},
        {title:"Common Patterns",formulas:[["A is n times B","A = n*B"],["Sum given","A+B = total"],["Future ratio","(A+t):(B+t) = m:n"],["Past ratio","(A-t):(B-t) = m:n"]]}
      ],
      tricks:["Age difference never changes — use to verify","Let present age = x, build one equation","Two unknowns need two equations (sum + ratio)"],
      memory:["Difference is constant across time","Future ratio: add t to both sides. Past: subtract t from both"]
    }
  ]
};

if (typeof module !== 'undefined') module.exports = FORMULA_DATA;
