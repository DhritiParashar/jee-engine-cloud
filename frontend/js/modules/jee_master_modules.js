// ==============================================================================
// GOALISB JEE MASTER — COMPLETE 6-TAB NATIVE ENGINE (ZERO GRE/IPMAT LEGACY)
// ==============================================================================
(function () {
  const EXAM = "JEE";
  const IS_JEE = (EXAM === "JEE");
  const MODES = [{'label': 'JEE Main Standard (75 Qs)', 'sub': '(300 Marks Scale)', 'sections': 'Physics (20 MCQ + 5 Num) &bull; Chemistry (20 MCQ + 5 Num) &bull; Mathematics (20 MCQ + 5 Num)'}, {'label': 'JEE Advanced Multi-Concept', 'sub': '(Paper 1 & 2)', 'sections': 'Multi-Correct, Matrix Match, Paragraph & Integer-Type PCM Discriminators'}, {'label': 'Section B Numerical Value Clinic', 'sub': '(15 Qs • +4/-1)', 'sections': 'Zero-Option Exact Integer/Decimal Computation across Physics, Chemistry & Math'}];
  const TABS = ['1. Physics, Chem & Math (12x12)', '2. Organic & Derivation Lab', '3. Section B Numerical Studio', '4. 75-Q NTA CBT Mock', '5. Trap Doctor & AI Doubts', '6. JEE Percentile & IIT/NIT Forecaster'];

  function enforceScienceBrand() {
    document.documentElement.classList.remove("dark"); document.body.classList.remove("dark"); document.title = "GOALisB JEE Master";
    document.querySelectorAll("div, span, h1, p").forEach(el => {
      const t = (el.textContent || "").trim();
      if (el.children.length === 0) {
        if (t === "GRE") el.textContent = "JEE";
        else if (t === "GOALisB GRE Master") el.textContent = "GOALisB JEE Master";
        else if (t === "GRE GENERAL") el.textContent = "JEE MAIN & ADV";
        else if (t.startsWith("Quant (27 Qs")) el.innerHTML = `Physics (25 Qs &bull; 100m) &bull; Chemistry (25 Qs &bull; 100m) &bull; Mathematics (25 Qs &bull; 100m) &bull; 300 Marks Scale`;
        else if (t.includes("Target: 332/340")) el.innerHTML = `Target: 99.5%ile JEE Main &bull; Readiness: 218/300 (~99.2%ile)`;
      }
      if (t.startsWith("Exam Sections: Quant")) el.innerHTML = `<span class="font-bold">Exam Sections:</span> ${MODES[0].sections}`;
      else if (t.startsWith("Pattern: 54 Qs")) el.innerHTML = `<span class="font-bold">Pattern:</span> 75 Compulsory Qs | 180 Mins | NTA CBT Interface`;
      else if (t.startsWith("Marking: MCQ +1/0")) el.innerHTML = `<span class="font-bold text-rose-600">Marking:</span> Section A MCQ +4/-1 | Section B Numerical +4/-1`;
    });

    document.querySelectorAll("button").forEach(btn => {
      const txt = (btn.textContent || "").trim();
      if (txt.includes("GRE General Standard")) btn.innerHTML = `${MODES[0].label} <span class="opacity-80 font-normal">${MODES[0].sub}</span>`;
      else if (txt.includes("Quant 170 Perfection")) btn.innerHTML = `${MODES[1].label} <span class="opacity-80 font-normal">${MODES[1].sub}</span>`;
      else if (txt.includes("Verbal 165+")) btn.innerHTML = `${MODES[2].label} <span class="opacity-80 font-normal">${MODES[2].sub}</span>`;
      else if (txt.startsWith("1. Quantitative Reasoning")) btn.textContent = TABS[0];
      else if (txt.startsWith("2. Data Interpretation")) btn.textContent = TABS[1];
      else if (txt.startsWith("3. Verbal Studio")) btn.textContent = TABS[2];
      else if (txt.startsWith("4. Section-Adaptive Mock")) btn.textContent = TABS[3];
      else if (txt.startsWith("5. Trap Doctor")) btn.textContent = TABS[4];
      else if (txt.startsWith("6. GRE Score Forecaster")) btn.textContent = TABS[5];
    });

    // Hide any lingering legacy PYQ vault container outside main-workspace
    document.querySelectorAll("section, div").forEach(box => {
      const h = box.querySelector("h3");
      if (h && (h.textContent || "").includes("Live PostgreSQL Worked PYQs")) {
        box.style.display = "none";
      }
    });
  }

  window._SCI_MODULES = [];
  window._SCI_QUESTIONS = [];
  window._SCI_HYDRATED = false;
  window._SCI_MOD_IDX = 0;
  window._SCI_SUB = "THEORY";
  window._SCI_QIDX = 0;
  window._SCI_ATT = {};
  window._SCI_MOCK_ANS = {};
  window._SCI_MOCK_SUBMITTED = false;

  async function hydrateFromNeon() {
    if (window._SCI_HYDRATED && window._SCI_MODULES.length) return;
    try {
      const [mRes, qRes] = await Promise.all([
        fetch("/api/science/modules?exam=" + EXAM),
        fetch("/api/science/questions?exam=" + EXAM + "&limit=500")
      ]);
      if (mRes.ok) {
        const md = await mRes.json();
        if (md.ok && Array.isArray(md.modules) && md.modules.length) {
          window._SCI_MODULES = md.modules.map(m => ({
            ...m,
            laws: typeof m.laws_json === "string" ? JSON.parse(m.laws_json) : (m.laws_json || []),
            worked_examples: typeof m.worked_examples_json === "string" ? JSON.parse(m.worked_examples_json) : (m.worked_examples_json || [])
          }));
        }
      }
      if (qRes.ok) {
        const qd = await qRes.json();
        if (qd.ok && Array.isArray(qd.questions) && qd.questions.length) {
          window._SCI_QUESTIONS = qd.questions.map(q => ({
            ...q,
            options_json: typeof q.options_json === "string" ? JSON.parse(q.options_json) : q.options_json
          }));
        }
      }
      if (window._SCI_MODULES.length) window._SCI_HYDRATED = true;
    } catch (_) {}
  }

  function getTarget(el) {
    return el || document.getElementById("main-workspace") || document.getElementById("tab-content") || document.querySelector("main");
  }

  // ============================================================================
  // TAB 1: 12x12 NCERT PCM / PCB MASTER MODULES & WORKED EXAMPLES + DRILLS
  // ============================================================================
  window.renderScienceTab1 = async function (el) {
    enforceScienceBrand();
    const target = getTarget(el);
    if (!target) return;
    await hydrateFromNeon();

    const mods = window._SCI_MODULES.filter(x => !String(x.module_code || "").startsWith("JEE-T2-"));
    if (!mods.length) {
      target.innerHTML = `<div class="p-8 text-center text-sm font-bold text-slate-500">Connecting to Neon PostgreSQL Science Bank...</div>`;
      return;
    }

    const modIdx = Math.min(mods.length - 1, Math.max(0, Number(window._SCI_MOD_IDX || 0)));
    const m = mods[modIdx];
    const modPrefix = String(m.module_code || "").replace(/-MOD$/, "");
    let drills = window._SCI_QUESTIONS.filter(q => String(q.question_code || "").startsWith(modPrefix));
    if (!drills.length) drills = window._SCI_QUESTIONS.filter(q => q.subject === m.subject && Number(q.ncert_class) === Number(m.ncert_class));
    if (!drills.length) drills = window._SCI_QUESTIONS.filter(q => q.subject === m.subject);

    const qIdx = Math.min(Math.max(0, drills.length - 1), Math.max(0, Number(window._SCI_QIDX || 0)));
    const d = drills[qIdx];
    const attMap = window._SCI_ATT[modIdx] || {};

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">JEE PCM MODULES (6 CHAPTERS • 12x12 NEON BANK)</div>
          ${mods.map((item, idx) => `
            <button type="button" onclick="window._SCI_MOD_IDX=${idx}; window._SCI_QIDX=0; window.renderScienceTab1();"
              class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === modIdx
                ? "bg-indigo-50/90 dark:bg-indigo-950/60 border-indigo-500 shadow-sm"
                : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300"}">
              <div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.subject} &bull; NCERT CLASS ${item.ncert_class}</div>
              <div class="font-extrabold text-sm text-slate-900 dark:text-white leading-snug mt-0.5">${item.chapter_title}</div>
              <div class="text-xs text-slate-500 mt-1">${item.subtitle}</div>
            </button>
          `).join("")}
        </div>

        <div class="lg:col-span-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4 shadow-sm">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.subject} &bull; NCERT CLASS ${m.ncert_class}</span>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${m.chapter_title}</h2>

          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="window._SCI_SUB='THEORY'; window.renderScienceTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._SCI_SUB === "THEORY" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Chapter Refresher & 12 Worked Examples (${m.worked_examples.length})
            </button>
            <button type="button" onclick="window._SCI_SUB='DRILLS'; window.renderScienceTab1();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._SCI_SUB === "DRILLS" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"}">
              Practice Drills (${drills.length} Items &bull; +4 / -1)
            </button>
          </div>

          ${window._SCI_SUB === "THEORY" ? `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
              <div class="flex items-center justify-between">
                <span class="font-extrabold uppercase text-[11px] text-indigo-600">COMPREHENSIVE CHAPTER OVERVIEW &amp; CONCEPT BRIDGE</span>
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">12&times;12 Master Guide</span>
              </div>
              <p>${m.overview}</p>
              <p><strong>Concept Bridge:</strong> ${m.concept_bridge}</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">Exam Weightage</div><div class="font-extrabold mt-0.5">${m.weightage_label}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">Target Pace</div><div class="font-extrabold text-emerald-600 mt-0.5">${m.target_pace}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50 dark:bg-slate-950"><div class="text-[10px] font-bold uppercase text-slate-400">Core Strategy</div><div class="font-extrabold text-amber-600 mt-0.5">${m.strategy_tag}</div></div>
            </div>

            <div class="space-y-2">
              ${m.laws.map(r => `
                <div class="p-3.5 rounded-xl border bg-white dark:bg-slate-950 text-xs">
                  <div class="font-extrabold">${r.name}</div>
                  <div class="text-slate-600 dark:text-slate-300 mt-0.5">${r.desc}</div>
                </div>
              `).join("")}
            </div>

            <div class="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-3">
              <div class="text-xs font-extrabold uppercase text-emerald-800 dark:text-emerald-300">GRADED WORKED EXAMPLES (${m.worked_examples.length} SOLVED STEP-BY-STEP)</div>
              ${m.worked_examples.map(w => `
                <div class="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-extrabold text-slate-900 dark:text-white">${w.p}</span>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold shrink-0">${w.tier}</span>
                  </div>
                  <div class="text-slate-600 dark:text-slate-300 whitespace-pre-line">${w.s}</div>
                </div>
              `).join("")}
            </div>
          ` : (d ? `
            <div class="p-5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE PRACTICE WORKBENCH (${drills.length} ITEMS &bull; NEON POSTGRESQL)</div>
                  <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${Object.keys(attMap).length}/${drills.length}</strong> &bull; Correct: <strong class="text-emerald-600">${Object.values(attMap).filter(Boolean).length}</strong></div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${drills.map((_, i) => `
                    <button type="button" onclick="window._SCI_QIDX=${i}; window.renderScienceTab1();"
                      class="w-7 h-7 rounded-lg text-xs font-bold border cursor-pointer ${i === qIdx ? "bg-indigo-600 text-white border-indigo-600" : (attMap[i] ? "bg-emerald-600 text-white border-emerald-600" : "bg-white dark:bg-slate-900 border-slate-300")}">${i + 1}</button>
                  `).join("")}
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-indigo-600">${d.question_code} &bull; Question ${qIdx + 1} of ${drills.length}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">${d.question_type} &bull; +4 / -1</span>
                </div>
                <div class="text-sm font-bold text-slate-900 dark:text-white leading-relaxed whitespace-pre-line">${d.prompt}</div>

                ${d.question_type === "NUMERICAL_INT" ? `
                  <div class="flex flex-wrap items-center gap-2 pt-1">
                    <input id="sci-num-input" type="text" placeholder="Enter exact numerical value..." class="rounded-xl border border-slate-300 dark:border-slate-700 px-3.5 py-2 text-sm font-mono font-bold" />
                    <button type="button" onclick="const v=(document.getElementById('sci-num-input').value||'').trim(); const ok=(v==='${d.correct_answer}'); window._SCI_ATT[${modIdx}]=window._SCI_ATT[${modIdx}]||{}; window._SCI_ATT[${modIdx}][${qIdx}]=ok; const s=document.getElementById('sci-t1-sol'); s.classList.remove('hidden'); s.innerHTML='<strong>'+(ok?'Correct (+4)! ':'Incorrect (-1). Expected: ${d.correct_answer} — ')+'</strong>'+s.dataset.exp;"
                      class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">Submit Numerical (+4 / -1)</button>
                  </div>
                ` : `
                  <div class="grid grid-cols-1 gap-2 text-xs">
                    ${(d.options_json || []).map((opt, oi) => `
                      <button type="button" onclick="const ok=(String(${oi})==='${d.correct_answer}'); window._SCI_ATT[${modIdx}]=window._SCI_ATT[${modIdx}]||{}; window._SCI_ATT[${modIdx}][${qIdx}]=ok; document.getElementById('sci-t1-sol').classList.remove('hidden'); this.classList.add(ok ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold' : 'bg-rose-100 border-rose-400 text-rose-900');"
                        class="text-left p-3 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-indigo-500 font-medium cursor-pointer"><strong>(${String.fromCharCode(65 + oi)})</strong> ${opt}</button>
                    `).join("")}
                  </div>
                `}

                <div id="sci-t1-sol" data-exp="${String(d.explanation || '').replace(/"/g, '&quot;')}" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Official Solution:</strong> ${d.explanation}
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                  <button type="button" onclick="if(window._SCI_QIDX>0){window._SCI_QIDX--; window.renderScienceTab1();}" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
                  <button type="button" onclick="if(window._SCI_QIDX<${drills.length - 1}){window._SCI_QIDX++; window.renderScienceTab1();}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
                </div>
              </div>
            </div>
          ` : `<div class="text-xs text-slate-500">Loading items...</div>`)}
        </div>
      </div>
    `;
  };

  // ============================================================================
  // TAB 2: ORGANIC & DERIVATION LAB (JEE) / NCERT BIO LINE-BY-LINE VAULT (NEET)
  // ============================================================================
  window._T2_MOD_IDX = 0;
  window._T2_SUB = "THEORY";
  window._T2_QIDX = 0;
  window._T2_ATT = {};

  window.renderScienceTab2 = async function (el) {
    enforceScienceBrand();
    const target = getTarget(el);
    if (!target) return;
    await hydrateFromNeon();

    const mods = window._SCI_MODULES.filter(x => String(x.module_code || "").startsWith("JEE-T2-"));
    if (!mods.length) {
      target.innerHTML = `<div class="p-8 text-center text-sm font-bold text-slate-500">Loading Tab 2 Derivation &amp; Organic Lab from Neon...</div>`;
      return;
    }

    const modIdx = Math.min(mods.length - 1, Math.max(0, Number(window._T2_MOD_IDX || 0)));
    const m = mods[modIdx];
    const modPrefix = String(m.module_code || "").replace(/-MOD$/, "");
    const drills = window._SCI_QUESTIONS.filter(q => String(q.question_code || "").startsWith(modPrefix));
    const qIdx = Math.min(Math.max(0, drills.length - 1), Math.max(0, Number(window._T2_QIDX || 0)));
    const d = drills[qIdx];
    const attMap = window._T2_ATT[modIdx] || {};

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div class="lg:col-span-4 space-y-2.5">
          <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">ORGANIC &amp; DERIVATION LAB (6 CHAPTERS &bull; 12&times;12 NEON BANK)</div>
          ${mods.map((item, idx) => `
            <button type="button" onclick="window._T2_MOD_IDX=${idx}; window._T2_QIDX=0; window.renderScienceTab2();"
              class="w-full text-left p-4 rounded-2xl border transition cursor-pointer ${idx === modIdx
                ? "bg-indigo-50/90 border-indigo-500 shadow-sm"
                : "bg-white border-slate-200 hover:border-indigo-300"}">
              <div class="text-[10px] font-extrabold uppercase text-indigo-600">${item.subject} &bull; NCERT CLASS ${item.ncert_class}</div>
              <div class="font-extrabold text-sm text-slate-900 leading-snug mt-0.5">${item.chapter_title}</div>
              <div class="text-xs text-slate-500 mt-1">${item.subtitle}</div>
            </button>
          `).join("")}
        </div>

        <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <span class="text-[10px] font-extrabold uppercase tracking-wider text-indigo-600">${m.subject} &bull; NCERT CLASS ${m.ncert_class}</span>
          <h2 class="text-xl font-extrabold text-slate-900">${m.chapter_title}</h2>

          <div class="flex flex-wrap items-center gap-2">
            <button type="button" onclick="window._T2_SUB='THEORY'; window.renderScienceTab2();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._T2_SUB === "THEORY" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-700"}">
              Derivations &amp; 12 Worked Examples (${m.worked_examples.length})
            </button>
            <button type="button" onclick="window._T2_SUB='DRILLS'; window.renderScienceTab2();"
              class="px-4 py-2 rounded-full text-xs font-bold cursor-pointer ${window._T2_SUB === "DRILLS" ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-700"}">
              Practice Drills (${drills.length} Items &bull; +4 / -1)
            </button>
          </div>

          ${window._T2_SUB === "THEORY" ? `
            <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5 text-xs leading-relaxed text-slate-700">
              <div class="flex items-center justify-between">
                <span class="font-extrabold uppercase text-[11px] text-indigo-600">EXHAUSTIVE CHAPTER OVERVIEW &amp; CONCEPT BRIDGE</span>
                <span class="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold">12&times;12 Lab Guide</span>
              </div>
              <p>${m.overview}</p>
              <p><strong>Concept Bridge:</strong> ${m.concept_bridge}</p>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
              <div class="p-3 rounded-xl border bg-slate-50"><div class="text-[10px] font-bold uppercase text-slate-400">Exam Weightage</div><div class="font-extrabold mt-0.5">${m.weightage_label}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50"><div class="text-[10px] font-bold uppercase text-slate-400">Target Pace</div><div class="font-extrabold text-emerald-600 mt-0.5">${m.target_pace}</div></div>
              <div class="p-3 rounded-xl border bg-slate-50"><div class="text-[10px] font-bold uppercase text-slate-400">Core Strategy</div><div class="font-extrabold text-amber-600 mt-0.5">${m.strategy_tag}</div></div>
            </div>

            <div class="space-y-2">
              ${m.laws.map(r => `
                <div class="p-3.5 rounded-xl border bg-white text-xs">
                  <div class="font-extrabold">${r.name}</div>
                  <div class="text-slate-600 mt-0.5">${r.desc}</div>
                </div>
              `).join("")}
            </div>

            <div class="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-3">
              <div class="text-xs font-extrabold uppercase text-emerald-800">GRADED WORKED EXAMPLES (${m.worked_examples.length} SOLVED STEP-BY-STEP)</div>
              ${m.worked_examples.map(w => `
                <div class="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1.5">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-extrabold text-slate-900">${w.p}</span>
                    <span class="px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-extrabold shrink-0">${w.tier}</span>
                  </div>
                  <div class="text-slate-600 whitespace-pre-line">${w.s}</div>
                </div>
              `).join("")}
            </div>
          ` : (d ? `
            <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">INTERACTIVE PRACTICE WORKBENCH (${drills.length} ITEMS &bull; NEON POSTGRESQL)</div>
                  <div class="text-xs text-slate-500 mt-0.5">Attempted: <strong>${Object.keys(attMap).length}/${drills.length}</strong> &bull; Correct: <strong class="text-emerald-600">${Object.values(attMap).filter(Boolean).length}</strong></div>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${drills.map((_, i) => `
                    <button type="button" onclick="window._T2_QIDX=${i}; window.renderScienceTab2();"
                      class="w-7 h-7 rounded-lg text-xs font-bold border cursor-pointer ${i === qIdx ? "bg-indigo-600 text-white border-indigo-600" : (attMap[i] ? "bg-emerald-600 text-white border-emerald-600" : "bg-white border-slate-300")}">${i + 1}</button>
                  `).join("")}
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-xs font-extrabold text-indigo-600">${d.question_code} &bull; Question ${qIdx + 1} of ${drills.length}</span>
                  <span class="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-extrabold">${d.question_type} &bull; +4 / -1</span>
                </div>
                <div class="text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line">${d.prompt}</div>

                ${d.question_type === "NUMERICAL_INT" ? `
                  <div class="flex flex-wrap items-center gap-2 pt-1">
                    <input id="t2-num-input" type="text" placeholder="Enter exact numerical value..." class="rounded-xl border border-slate-300 px-3.5 py-2 text-sm font-mono font-bold" />
                    <button type="button" onclick="const v=(document.getElementById('t2-num-input').value||'').trim(); const ok=(v==='${d.correct_answer}'); window._T2_ATT[${modIdx}]=window._T2_ATT[${modIdx}]||{}; window._T2_ATT[${modIdx}][${qIdx}]=ok; const s=document.getElementById('t2-sol'); s.classList.remove('hidden'); s.innerHTML='<strong>'+(ok?'Correct (+4)! ':'Incorrect (-1). Expected: ${d.correct_answer} — ')+'</strong>'+s.dataset.exp;"
                      class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">Submit Numerical (+4 / -1)</button>
                  </div>
                ` : `
                  <div class="grid grid-cols-1 gap-2 text-xs">
                    ${(d.options_json || []).map((opt, oi) => `
                      <button type="button" onclick="const ok=(String(${oi})==='${d.correct_answer}'); window._T2_ATT[${modIdx}]=window._T2_ATT[${modIdx}]||{}; window._T2_ATT[${modIdx}][${qIdx}]=ok; document.getElementById('t2-sol').classList.remove('hidden'); this.classList.add(ok ? 'bg-emerald-100 border-emerald-500 text-emerald-900 font-bold' : 'bg-rose-100 border-rose-400 text-rose-900');"
                        class="text-left p-3 rounded-xl border border-slate-200 hover:border-indigo-500 font-medium cursor-pointer"><strong>(${String.fromCharCode(65 + oi)})</strong> ${opt}</button>
                    `).join("")}
                  </div>
                `}

                <div id="t2-sol" data-exp="${String(d.explanation || '').replace(/"/g, '&quot;')}" class="hidden p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900">
                  <strong>Official Solution:</strong> ${d.explanation}
                </div>
                <div class="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button type="button" onclick="if(window._T2_QIDX>0){window._T2_QIDX--; window.renderScienceTab2();}" class="px-3.5 py-1.5 rounded-xl border text-xs font-bold cursor-pointer">&larr; Previous</button>
                  <button type="button" onclick="if(window._T2_QIDX<${drills.length - 1}){window._T2_QIDX++; window.renderScienceTab2();}" class="px-3.5 py-1.5 rounded-xl bg-indigo-600 text-white text-xs font-bold cursor-pointer">Next Question &rarr;</button>
                </div>
              </div>
            </div>
          ` : `<div class="text-xs text-slate-500">Loading items...</div>`)}
        </div>
      </div>
    `;
  };

  // ============================================================================
  // TAB 3: SECTION B NUMERICAL STUDIO (INTERACTIVE INPUT + VIRTUAL KEYPAD + +4/-1)
  // ============================================================================
  window._T3_SUBJ = "ALL";
  window._T3_TIER = "ALL";
  window._T3_ANS = {};
  window._T3_RES = {};

  window.renderScienceTab3 = async function (el) {
    enforceScienceBrand();
    const target = getTarget(el);
    if (!target) return;
    await hydrateFromNeon();

    const allNums = window._SCI_QUESTIONS.filter(q => q.question_type === "NUMERICAL_INT");
    const filtered = allNums.filter(q =>
      (window._T3_SUBJ === "ALL" || q.subject === window._T3_SUBJ) &&
      (window._T3_TIER === "ALL" || q.difficulty_tier === window._T3_TIER)
    );

    const attempted = Object.keys(window._T3_RES).length;
    const correct = Object.values(window._T3_RES).filter(Boolean).length;
    const wrong = attempted - correct;
    const netScore = correct * 4 - wrong;

    target.innerHTML = `
      <div class="max-w-6xl mx-auto pt-4 pb-10 space-y-4">
        <div class="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <div class="text-xs font-extrabold uppercase tracking-wider text-indigo-600">NTA SECTION B COMPULSORY NUMERICAL VALUE STUDIO (${allNums.length} NEON ITEMS)</div>
              <h2 class="text-xl font-extrabold text-slate-900 mt-0.5">3. Section B Numerical Studio (+4 Correct / -1 Incorrect)</h2>
            </div>
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="px-3 py-1.5 rounded-xl bg-indigo-50 border border-indigo-200 font-extrabold text-indigo-900">Net Score: ${netScore} (${correct}/${attempted} Correct)</span>
              <button type="button" onclick="window._T3_ANS={}; window._T3_RES={}; window.renderScienceTab3();" class="px-3 py-1.5 rounded-xl border border-slate-300 font-bold hover:bg-slate-50 cursor-pointer">Reset Studio</button>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-slate-100">
            <div class="flex flex-wrap gap-1.5">
              ${["ALL", "PHYSICS", "CHEMISTRY", "MATHEMATICS"].map(s => `
                <button type="button" onclick="window._T3_SUBJ='${s}'; window.renderScienceTab3();"
                  class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer ${window._T3_SUBJ === s ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}">${s}</button>
              `).join("")}
            </div>
            <div class="flex flex-wrap gap-1.5">
              ${[["ALL", "All Tiers"], ["FOUNDATION", "Foundation"], ["CONTENDER_98_650", "98+%ile"], ["AIR_TOP_500", "AIR Top 500"]].map(([k, lbl]) => `
                <button type="button" onclick="window._T3_TIER='${k}'; window.renderScienceTab3();"
                  class="px-3 py-1.5 rounded-full text-xs font-bold cursor-pointer ${window._T3_TIER === k ? "bg-emerald-600 text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}">${lbl}</button>
              `).join("")}
            </div>
          </div>

          <div class="space-y-4">
            ${filtered.map((q, idx) => {
              const qKey = q.question_code;
              const evaluated = (qKey in window._T3_RES);
              const isOk = window._T3_RES[qKey];
              return `
                <div class="p-5 rounded-2xl border ${evaluated ? (isOk ? "border-emerald-400 bg-emerald-50/30" : "border-rose-400 bg-rose-50/30") : "border-slate-200 bg-slate-50"} space-y-3 text-xs">
                  <div class="flex flex-wrap items-center justify-between gap-2">
                    <span class="font-extrabold text-indigo-700">#${idx + 1} &bull; ${q.question_code} &bull; ${q.subject} (Class ${q.ncert_class})</span>
                    <span class="px-2.5 py-0.5 rounded-full bg-white border border-slate-200 font-bold text-slate-600">${q.difficulty_tier}</span>
                  </div>
                  <div class="text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line">${q.prompt}</div>

                  <div class="flex flex-wrap items-center gap-2 pt-1">
                    <input id="inp-${qKey}" type="text" value="${window._T3_ANS[qKey] || ""}" placeholder="Enter integer / decimal..."
                      class="w-48 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-sm font-mono font-extrabold text-slate-900" />
                    <button type="button" onclick="const v=(document.getElementById('inp-${qKey}').value||'').trim(); if(!v)return; window._T3_ANS['${qKey}']=v; window._T3_RES['${qKey}']=(Number(v)===Number('${q.correct_answer}') || v==='${q.correct_answer}'); window.renderScienceTab3();"
                      class="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-extrabold cursor-pointer">Check Answer (+4 / -1)</button>
                    ${evaluated ? `<span class="font-extrabold ${isOk ? "text-emerald-700" : "text-rose-700"}">${isOk ? "✓ Correct (+4 Marks)" : "✗ Incorrect (-1 Mark) • Expected: " + q.correct_answer}</span>` : ""}
                  </div>

                  ${evaluated ? `
                    <div class="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs text-slate-800 leading-relaxed">
                      <strong class="text-emerald-800">Step-by-Step Solution:</strong> ${q.explanation}
                    </div>
                  ` : ""}
                </div>
              `;
            }).join("")}
          </div>
        </div>
      </div>
    `;
  };

  // ============================================================================
  // TAB 4: FULL 75-QUESTION (300-MARK) NTA JEE MAIN CBT MOCK SIMULATOR
  // ============================================================================
  window._CBT_SUBJ = "PHYSICS";
  window._CBT_IDX = 0;
  window._CBT_ANS = {};
  window._CBT_REVIEW = {};
  window._CBT_VISITED = { 0: true };
  window._CBT_SUBMITTED = false;
  window._CBT_SEC_LEFT = 180 * 60;
  window._CBT_TIMER_ID = window._CBT_TIMER_ID || null;

  function build75CbtPaper() {
    const subjects = ["PHYSICS", "CHEMISTRY", "MATHEMATICS"];
    const paper = [];
    subjects.forEach(subj => {
      const mcqs = window._SCI_QUESTIONS.filter(q => q.subject === subj && q.question_type !== "NUMERICAL_INT");
      const nums = window._SCI_QUESTIONS.filter(q => q.subject === subj && q.question_type === "NUMERICAL_INT");
      for (let i = 0; i < 20; i++) {
        const base = mcqs[i % Math.max(1, mcqs.length)];
        if (base) paper.push({ ...base, cbt_sec: "Section A (MCQ)", cbt_subj: subj });
      }
      for (let i = 0; i < 5; i++) {
        const base = nums[i % Math.max(1, nums.length)];
        if (base) paper.push({ ...base, cbt_sec: "Section B (Numerical)", cbt_subj: subj });
      }
    });
    return paper;
  }

  function ensureCbtTimer() {
    if (window._CBT_TIMER_ID) return;
    window._CBT_TIMER_ID = setInterval(() => {
      if (window._CBT_SUBMITTED) return;
      const el = document.getElementById("cbt-clock");
      if (!el) return;
      if (window._CBT_SEC_LEFT > 0) window._CBT_SEC_LEFT--;
      const h = String(Math.floor(window._CBT_SEC_LEFT / 3600)).padStart(2, "0");
      const m = String(Math.floor((window._CBT_SEC_LEFT % 3600) / 60)).padStart(2, "0");
      const s = String(window._CBT_SEC_LEFT % 60).padStart(2, "0");
      el.textContent = `${h}:${m}:${s}`;
    }, 1000);
  }

  window.renderScienceTab4 = async function (el) {
    enforceScienceBrand();
    const target = getTarget(el);
    if (!target) return;
    await hydrateFromNeon();
    ensureCbtTimer();

    const paper = build75CbtPaper();
    if (!paper.length) {
      target.innerHTML = `<div class="p-8 text-center text-sm font-bold text-slate-500">Assembling 75-Question NTA CBT Paper from Neon...</div>`;
      return;
    }

    const qIdx = Math.min(paper.length - 1, Math.max(0, Number(window._CBT_IDX || 0)));
    window._CBT_VISITED[qIdx] = true;
    const q = paper[qIdx];
    const activeSubj = q.cbt_subj;

    const h = String(Math.floor(window._CBT_SEC_LEFT / 3600)).padStart(2, "0");
    const m = String(Math.floor((window._CBT_SEC_LEFT % 3600) / 60)).padStart(2, "0");
    const s = String(window._CBT_SEC_LEFT % 60).padStart(2, "0");

    // Compute scorecard if submitted
    let totalScore = 0, totalCorrect = 0, totalWrong = 0;
    const subjStats = { PHYSICS: { c: 0, w: 0, s: 0 }, CHEMISTRY: { c: 0, w: 0, s: 0 }, MATHEMATICS: { c: 0, w: 0, s: 0 } };
    if (window._CBT_SUBMITTED) {
      paper.forEach((item, idx) => {
        const ans = window._CBT_ANS[idx];
        if (ans !== undefined && String(ans).trim() !== "") {
          const ok = (String(ans).trim() === String(item.correct_answer).trim()) || (item.question_type === "NUMERICAL_INT" && Number(ans) === Number(item.correct_answer));
          if (ok) { totalScore += 4; totalCorrect++; subjStats[item.cbt_subj].c++; subjStats[item.cbt_subj].s += 4; }
          else { totalScore -= 1; totalWrong++; subjStats[item.cbt_subj].w++; subjStats[item.cbt_subj].s -= 1; }
        }
      });
    }

    const projPct = totalScore >= 250 ? "99.92+ %ile" : totalScore >= 210 ? "99.35 %ile" : totalScore >= 170 ? "98.10 %ile" : totalScore >= 120 ? "94.80 %ile" : "88.50+ %ile";

    target.innerHTML = `
      <div class="max-w-7xl mx-auto pt-4 pb-10 space-y-4">
        <!-- NTA CBT Top Control Strip -->
        <div class="bg-white border border-slate-200 rounded-2xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div class="flex flex-wrap items-center gap-2">
            ${[["PHYSICS", 0], ["CHEMISTRY", 25], ["MATHEMATICS", 50]].map(([subName, startIdx]) => `
              <button type="button" onclick="window._CBT_IDX=${startIdx}; window.renderScienceTab4();"
                class="px-4 py-2 rounded-xl text-xs font-extrabold cursor-pointer ${activeSubj === subName ? "bg-indigo-600 text-white shadow-sm" : "bg-slate-100 text-slate-700 hover:bg-slate-200"}">
                ${subName} (25 Qs)
              </button>
            `).join("")}
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <div class="px-3.5 py-1.5 rounded-xl bg-slate-900 text-amber-300 font-mono text-sm font-extrabold">
              Time Left: <span id="cbt-clock">${h}:${m}:${s}</span>
            </div>
            ${!window._CBT_SUBMITTED ? `
              <button type="button" onclick="window._CBT_SUBMITTED=true; window.renderScienceTab4();"
                class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold shadow-sm cursor-pointer">Submit 75-Q CBT Test</button>
            ` : `
              <button type="button" onclick="window._CBT_ANS={}; window._CBT_REVIEW={}; window._CBT_VISITED={0:true}; window._CBT_SUBMITTED=false; window._CBT_SEC_LEFT=10800; window._CBT_IDX=0; window.renderScienceTab4();"
                class="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Retake Fresh CBT</button>
            `}
          </div>
        </div>

        ${window._CBT_SUBMITTED ? `
          <div class="bg-white border-2 border-emerald-500 rounded-2xl p-6 space-y-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div class="text-xs font-extrabold uppercase text-emerald-700">OFFICIAL NTA JEE MAIN CBT SCORECARD</div>
                <h3 class="text-2xl font-black text-slate-900">Total Score: ${totalScore} / 300 &bull; Projected ${projPct}</h3>
              </div>
              <div class="text-xs font-bold text-slate-600">Correct: <span class="text-emerald-700 font-extrabold">${totalCorrect} (+${totalCorrect * 4})</span> &bull; Incorrect: <span class="text-rose-700 font-extrabold">${totalWrong} (-${totalWrong})</span></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              ${["PHYSICS", "CHEMISTRY", "MATHEMATICS"].map(sn => `
                <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div class="font-extrabold text-indigo-700">${sn}</div>
                  <div class="text-lg font-black text-slate-900 mt-0.5">${subjStats[sn].s} / 100</div>
                  <div class="text-slate-600 mt-0.5">Correct: ${subjStats[sn].c} &bull; Incorrect: ${subjStats[sn].w}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}

        <!-- Main CBT Question + 75-Question Palette Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-5">
          <div class="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <span class="text-xs font-extrabold uppercase text-indigo-600">Question ${qIdx + 1} of 75 &bull; ${q.cbt_subj} &bull; ${q.cbt_sec}</span>
                <div class="text-[11px] text-slate-500">Code: ${q.question_code} &bull; Chapter: ${q.chapter_name}</div>
              </div>
              <span class="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-extrabold">+4 Correct / -1 Incorrect</span>
            </div>

            <div class="text-sm font-bold text-slate-900 leading-relaxed whitespace-pre-line min-h-[90px]">${q.prompt}</div>

            ${q.question_type === "NUMERICAL_INT" ? `
              <div class="space-y-2 pt-2">
                <label class="block text-xs font-extrabold text-slate-600">Enter Exact Numerical Value (Section B):</label>
                <input id="cbt-num-box" type="text" value="${window._CBT_ANS[qIdx] || ""}" onchange="window._CBT_ANS[${qIdx}]=this.value.trim();"
                  placeholder="Type numerical answer..." class="w-56 rounded-xl border border-slate-300 px-4 py-2.5 text-base font-mono font-extrabold" />
              </div>
            ` : `
              <div class="grid grid-cols-1 gap-2.5 text-xs pt-1">
                ${(q.options_json || []).map((opt, oi) => {
                  const selected = String(window._CBT_ANS[qIdx]) === String(oi);
                  return `
                    <button type="button" onclick="window._CBT_ANS[${qIdx}]='${oi}'; window.renderScienceTab4();"
                      class="text-left p-3.5 rounded-xl border transition cursor-pointer ${selected ? "bg-indigo-600 text-white border-indigo-600 font-bold shadow-sm" : "bg-slate-50 border-slate-200 hover:border-indigo-400 text-slate-900"}">
                      <strong>(${String.fromCharCode(65 + oi)})</strong> ${opt}
                    </button>
                  `;
                }).join("")}
              </div>
            `}

            ${window._CBT_SUBMITTED ? `
              <div class="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950">
                <strong>Official Answer:</strong> ${q.options_json ? q.options_json[Number(q.correct_answer)] : q.correct_answer}<br/>
                <strong>Solution:</strong> ${q.explanation}
              </div>
            ` : ""}

            <div class="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-slate-100">
              <div class="flex flex-wrap gap-2">
                <button type="button" onclick="const nb=document.getElementById('cbt-num-box'); if(nb) window._CBT_ANS[${qIdx}]=nb.value.trim(); if(window._CBT_IDX<74) window._CBT_IDX++; window.renderScienceTab4();"
                  class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold cursor-pointer">Save &amp; Next</button>
                <button type="button" onclick="const nb=document.getElementById('cbt-num-box'); if(nb) window._CBT_ANS[${qIdx}]=nb.value.trim(); window._CBT_REVIEW[${qIdx}]=true; if(window._CBT_IDX<74) window._CBT_IDX++; window.renderScienceTab4();"
                  class="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-extrabold cursor-pointer">Mark for Review &amp; Next</button>
                <button type="button" onclick="delete window._CBT_ANS[${qIdx}]; delete window._CBT_REVIEW[${qIdx}]; window.renderScienceTab4();"
                  class="px-3.5 py-2 rounded-xl border border-slate-300 text-xs font-bold cursor-pointer">Clear Response</button>
              </div>
              <div class="flex gap-1.5">
                <button type="button" onclick="if(window._CBT_IDX>0){window._CBT_IDX--; window.renderScienceTab4();}" class="px-3 py-2 rounded-xl border text-xs font-bold cursor-pointer">&larr; Prev</button>
                <button type="button" onclick="if(window._CBT_IDX<74){window._CBT_IDX++; window.renderScienceTab4();}" class="px-3 py-2 rounded-xl border text-xs font-bold cursor-pointer">Next &rarr;</button>
              </div>
            </div>
          </div>

          <!-- Right NTA Question Palette -->
          <div class="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-5 space-y-4 shadow-sm">
            <div class="text-xs font-extrabold uppercase tracking-wider text-slate-700">NTA CBT QUESTION PALETTE (75 Qs)</div>
            <div class="grid grid-cols-2 gap-2 text-[11px] font-bold">
              <div class="flex items-center gap-1.5"><span class="w-3.5 h-3.5 rounded bg-emerald-600 inline-block"></span> Answered (${Object.keys(window._CBT_ANS).filter(k => window._CBT_ANS[k] !== "").length})</div>
              <div class="flex items-center gap-1.5"><span class="w-3.5 h-3.5 rounded bg-purple-600 inline-block"></span> Marked (${Object.keys(window._CBT_REVIEW).length})</div>
              <div class="flex items-center gap-1.5"><span class="w-3.5 h-3.5 rounded bg-rose-500 inline-block"></span> Not Answered</div>
              <div class="flex items-center gap-1.5"><span class="w-3.5 h-3.5 rounded bg-slate-200 inline-block"></span> Not Visited</div>
            </div>

            <div class="max-h-[360px] overflow-y-auto pr-1 grid grid-cols-5 gap-1.5">
              ${paper.map((_, idx) => {
                const hasAns = window._CBT_ANS[idx] !== undefined && String(window._CBT_ANS[idx]).trim() !== "";
                const isRev = !!window._CBT_REVIEW[idx];
                const isVis = !!window._CBT_VISITED[idx];
                let cls = "bg-slate-100 text-slate-700 border-slate-300";
                if (isRev) cls = "bg-purple-600 text-white border-purple-600";
                else if (hasAns) cls = "bg-emerald-600 text-white border-emerald-600";
                else if (isVis) cls = "bg-rose-500 text-white border-rose-500";
                if (idx === qIdx) cls += " ring-2 ring-indigo-500 ring-offset-1";
                return `<button type="button" onclick="window._CBT_IDX=${idx}; window.renderScienceTab4();" class="h-8 rounded-lg text-xs font-extrabold border cursor-pointer ${cls}">${idx + 1}</button>`;
              }).join("")}
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // ============================================================================
  // TAB 5: TRAP DOCTOR & AI DOUBT SOLVER
  // ============================================================================
  window.renderScienceTab5 = function (el) {
    const target = getTarget(el);
    if (!target) return;
    target.innerHTML = `
      <div class="max-w-4xl mx-auto pt-4 pb-10">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
          <div class="text-xs font-extrabold uppercase text-indigo-600">AI CONCEPT &amp; DERIVATION DOUBT TUTOR</div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${TABS[4]}</h2>
          <p class="text-xs text-slate-600 dark:text-slate-300">Paste any ${IS_JEE ? "JEE Physics, Chemistry, or Mathematics" : "NEET Physics, Chemistry, Botany, or Zoology"} question or NCERT line below for a step-by-step derivation and trap check.</p>
          <textarea id="sci-doubt-q" rows="4" class="w-full rounded-2xl border border-slate-300 dark:border-slate-700 p-3.5 text-sm" placeholder="Enter your PCM/PCB problem or NCERT doubt..."></textarea>
          <button type="button" onclick="(async()=>{const box=document.getElementById('sci-doubt-out'); const q=document.getElementById('sci-doubt-q').value.trim(); if(!q)return; box.classList.remove('hidden'); box.textContent='Solving with GOALisB Science Tutor...'; try{const r=await fetch('/api/doubt',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:q,exam:EXAM})}); const d=await r.json(); box.textContent=d.answer||d.response||JSON.stringify(d);}catch(e){box.textContent='Check connection and retry.';}})();"
            class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Solve Step-by-Step</button>
          <div id="sci-doubt-out" class="hidden p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border text-xs whitespace-pre-line leading-relaxed"></div>
        </div>
      </div>
    `;
  };

  // ============================================================================
  // TAB 6: JEE PERCENTILE / IIT-NIT FORECASTER OR NEET AIR / AIIMS-GMC FORECASTER
  // ============================================================================
  window.renderScienceTab6 = function (el) {
    const target = getTarget(el);
    if (!target) return;
    target.innerHTML = `
      <div class="max-w-4xl mx-auto pt-4 pb-10">
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
          <div class="text-xs font-extrabold uppercase text-indigo-600">${IS_JEE ? "NTA JEE MAIN PERCENTILE & IIT/NIT ADMISSION PREDICTOR" : "NTA NEET UG ALL INDIA RANK (AIR) & AIIMS/GMC PREDICTOR"}</div>
          <h2 class="text-xl font-extrabold text-slate-900 dark:text-white">${TABS[5]}</h2>
          <div class="flex flex-wrap items-center gap-3">
            <input id="sci-score-in" type="number" min="0" max="${IS_JEE ? 300 : 720}" value="${IS_JEE ? 215 : 655}" class="rounded-xl border px-4 py-2 text-base font-extrabold w-40" />
            <button type="button" onclick="const s=Number(document.getElementById('sci-score-in').value||0); const out=document.getElementById('sci-rank-out'); out.innerHTML = ${IS_JEE} ? ('Projected JEE Main Percentile: <strong>' + (s>=250?'99.92+ %ile (Top NIT CSE / Adv AIR < 1500)':s>=210?'99.35 %ile (NIT Trichy/Surathkal Core)':s>=170?'98.10 %ile (Top IIIT / NIT)':'94.5+ %ile') + '</strong>') : ('Projected NEET UG Standing: <strong>' + (s>=695?'AIR < 350 (AIIMS New Delhi / MAMC)':s>=660?'AIR ~3,200 (Top State Govt Medical College)':s>=625?'AIR ~14,500 (Govt MBBS All-India Quota)':'Focus on NCERT Bio 345+ Sprint') + '</strong>');"
              class="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-extrabold cursor-pointer">Predict Rank &amp; Colleges</button>
          </div>
          <div id="sci-rank-out" class="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-sm text-emerald-950">
            ${IS_JEE ? "Projected JEE Main Percentile: <strong>99.35 %ile (NIT Trichy / Surathkal / Warangal Core)</strong>" : "Projected NEET UG Standing: <strong>AIR ~3,800 (Top State Govt Medical College / AIIMS)</strong>"}
          </div>
        </div>
      </div>
    `;
  };

  // Lock all 6 tab renderers so legacy scripts can never hijack them
  const tabMap = {
    renderTab1: window.renderScienceTab1,
    renderQuantTab: window.renderScienceTab1,
    renderTab2: window.renderScienceTab2,
    renderTab3: window.renderScienceTab3,
    renderTab4: window.renderScienceTab4,
    renderTab5: window.renderScienceTab5,
    renderTab6: window.renderScienceTab6
  };
  Object.entries(tabMap).forEach(([k, fn]) => {
    Object.defineProperty(window, k, { get: () => fn, set: () => {}, configurable: true });
  });

  window.addEventListener("DOMContentLoaded", () => {
    enforceScienceBrand();
    window.renderScienceTab1();
    setTimeout(() => { enforceScienceBrand(); window.renderScienceTab1(); }, 350);
  });
})();
