// ============================================
// PDF BUILDER — Atelier de Aprofundare Dativ — Lecția 4 (FINAL): Verben + Präposition + Dativ
// Extrage materia din celelalte JS-uri și o livrează printabil
// Claudia Toth · model PDF după TV1 (commit fb1f150, validat 20 mai 2026)
// ============================================

(function () {
    if (typeof document === 'undefined') return;
    document.addEventListener('DOMContentLoaded', buildPDF);

    function buildPDF() {
        const root = document.getElementById('pdf-content');
        if (!root) return;
        let html = '';
        html += buildTheory();
        html += buildExercises();
        html += buildFlashcards();
        html += buildVerbs();
        root.innerHTML = html;
    }

    // ============================================
    // 1. TEORIE — preia din theoryHTML și curăță elementele interactive
    // ============================================
    function buildTheory() {
        if (typeof theoryHTML !== 'string') return '';
        let t = theoryHTML;
        // FIX BUG 20 mai (regex lacom): anchor precis pe </span>\s*</div> (finalul real al lesson-audio)
        t = t.replace(/<div class="lesson-audio">[\s\S]*?<\/span>\s*<\/div>/g, '');
        // Scoate butoanele cu onclick (audio + dialog players)
        t = t.replace(/<button[^>]*onclick="[^"]*"[^>]*>[^<]*<\/button>/g, '');
        // Înlocuiește header-ele subsecțiunilor cu h2.sub-chapter
        t = t.replace(/<div class="sub-section-header"[^>]*>\s*<span>([^<]+)<\/span>\s*<span class="sub-arrow">[^<]*<\/span>\s*<\/div>/g,
            '<h2 class="sub-chapter">$1</h2>');
        // Elimină wrapper-ele div sub-section / sub-section-content (păstrăm conținutul)
        t = t.replace(/<div class="sub-section">/g, '<div>');
        t = t.replace(/<div class="sub-section-content"[^>]*>/g, '<div>');
        // Înlocuiește andreea-note în box de info
        t = t.replace(/<div class="andreea-note"[^>]*>[\s\S]*?<div class="andreea-note-content">/g, '<div class="theory-box info-box"><div>');
        // Scoate imaginile (avatare etc.)
        t = t.replace(/<img[^>]*>/g, '');
        // Convertește dialog-box și dialog-bubble la dialog-line minimalist
        t = t.replace(/<div class="dialog-box">/g, '<div>');
        t = t.replace(/<div class="dialog-line">/g, '<div class="dialog-line">');
        t = t.replace(/<div class="dialog-bubble"[^>]*>/g, '<div>');
        t = t.replace(/<div class="dialog-speaker">/g, '<div class="speaker">');
        t = t.replace(/<div class="dialog-text">/g, '<div>');
        t = t.replace(/<span class="translation">/g, '<div class="ro">');
        t = t.replace(/<\/span>\s*<\/div>\s*<\/div>\s*<\/div>(?=\s*<div class="dialog-line"|\s*<\/div>)/g, '</div></div></div></div>');
        // grammar-table → table (deja gestionat de CSS)
        t = t.replace(/<table class="grammar-table">/g, '<table>');
        // Clean misc inline styles pentru consistență
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#fef3c7[^"]*"[^>]*>/g, '<div class="theory-box warn-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#d1fae5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="background:\s*#ecfdf5[^"]*"[^>]*>/g, '<div class="theory-box">');
        t = t.replace(/<div class="theory-box"\s+style="margin:[^"]*"[^>]*>/g, '<div class="theory-box">');
        return `<h1 class="chapter">📘 1. Teorie — Verben + Präposition + Dativ (lecția finală + recap atelier)</h1>` + t;
    }

    // ============================================
    // 2. EXERCIȚII — toate 7 cu rezolvări (banner verde)
    // ============================================
    function buildExercises() {
        let html = `<h1 class="chapter new-section">📝 2. Exerciții — cu rezolvări complete</h1>
            <p style="margin-bottom: 10px; color: #6b7280; font-style: italic;">7 exerciții × 10 itemi = <strong>70 itemi de practică</strong>. Pentru fiecare exercițiu, întâi citește instrucțiunea, încearcă pe cont propriu, apoi verifică rezolvările.</p>`;

        const exercises = [
            { num: 1, title: 'Übung 1 — 🤝 Verbele cu MIT + Dativ', instr: 'sprechen mit · fahren mit · spielen mit · sich treffen mit · arbeiten mit · tanzen mit.', data: typeof ex1Data !== 'undefined' ? ex1Data : [] },
            { num: 2, title: 'Übung 2 — 🏢 Verbele cu BEI + Dativ', instr: 'helfen bei (activitate) · arbeiten bei (firmă) · wohnen bei · sein bei · bleiben bei.', data: typeof ex2Data !== 'undefined' ? ex2Data : [] },
            { num: 3, title: 'Übung 3 — 📨 Verbele cu VON + Dativ', instr: 'träumen von · bekommen von · kommen von · erzählen von · hören von · wissen von.', data: typeof ex3Data !== 'undefined' ? ex3Data : [] },
            { num: 4, title: 'Übung 4 — 🎯 Verbele cu ZU și NACH + Dativ', instr: 'ZU: gratulieren · einladen · gehören · passen. NACH: fragen · suchen · schmecken · riechen.', data: typeof ex4Data !== 'undefined' ? ex4Data : [] },
            { num: 5, title: 'Übung 5 — 🚨 CONTRAST: verbe cu Akkusativ (NU Dativ!)', instr: 'warten AUF · denken AN · sich freuen AUF/ÜBER · sich erinnern AN · sich interessieren FÜR · hoffen AUF.', data: typeof ex5Data !== 'undefined' ? ex5Data : [] },
            { num: 6, title: 'Übung 6 — 🔑 Alege prepoziția potrivită pentru verb', instr: 'Pattern fix: memorezi VERB + PREPOZIȚIE împreună.', data: typeof ex6Data !== 'undefined' ? ex6Data : [] },
            { num: 7, title: 'Übung 7 — 🎬 Dialog 6 personaje (sinteză MASIVĂ Atelier complet)', instr: 'Testează verbele cu mit/bei/von/zu + Dativ ȘI capcanele auf/an + Akk!', data: typeof ex7Data !== 'undefined' ? ex7Data : [] }
        ];

        exercises.forEach(ex => {
            html += `<div class="ex-block">
                <h3>${ex.title}</h3>
                <div class="instruction">${ex.instr}</div>
                <div class="rezolvare-banner">✓ Rezolvare</div>`;
            ex.data.forEach((it, i) => {
                const sentence = it.sentence.replace(/____/g, '<strong style="color:#047857;">' + it.correct + '</strong>');
                html += `<div class="ex-item">
                    <span class="ex-num">${i + 1}</span>
                    <div class="ex-body">
                        <div class="ex-q">${sentence}</div>
                        <div class="ex-a">${it.correct}</div>
                        <div class="ex-tr">💬 ${it.translation}</div>
                    </div>
                </div>`;
            });
            html += `</div>`;
        });

        return html;
    }

    // ============================================
    // 3. FLASHCARDS — listă completă DE | RO în 2 coloane
    // ============================================
    function buildFlashcards() {
        let html = `<h1 class="chapter new-section">📇 3. Vocabular complet (Flashcards)</h1>
            <p style="margin-bottom: 14px;">Cele <strong>${typeof flashcardsData !== 'undefined' ? flashcardsData.length : 0} carduri</strong> ale lecției, grupate pe teme. Folosește ca dicționar de referință.</p>
            <div class="flashcards-grid">`;
        if (typeof flashcardsData !== 'undefined') {
            flashcardsData.forEach(card => {
                html += `<div class="fc-row"><span class="de">${card.de}</span><span class="ro">— ${card.ro}</span></div>`;
            });
        }
        html += `</div>`;
        return html;
    }

    // ============================================
    // 4. VERB-KONJUGATION — 9 verbe complete
    // ============================================
    function buildVerbs() {
        let html = `<h1 class="chapter new-section">🔁 4. Verb-Konjugation — 4 verbe-cheie verb+prep</h1>
            <div class="theory-box warn-box">
                <p><strong>📌 Cele 4 verbe-cheie ale lecției finale:</strong> sprechen (recap tare e→i · mit/über/von cu sens diferit) · helfen (recap tare · DAT direct + bei + Dat) · gratulieren (NEW slab -ieren · DAT persoană + zu + Dat eveniment) · einladen (NEW tare separabil e→ä · AKK persoană + zu + Dat eveniment!). Toate verificate PONS.</p>
            </div>`;

        if (typeof verbsData !== 'undefined') {
            verbsData.forEach((v, idx) => {
                const isStrong = v.typ.indexOf('tare') === 0;
                const typeBadge = isStrong
                    ? '<span class="badge strong">TARE (neregulat)</span>'
                    : '<span class="badge weak">REGULAT</span>';
                const auxBadge = v.aux === 'sein'
                    ? '<span class="badge sein">Perfekt + sein</span>'
                    : '<span class="badge haben">Perfekt + haben</span>';

                html += `<div class="verb-card">
                    <div class="vh">
                        <span class="name">${idx + 1}. ${v.inf}</span>
                        <span class="ro">— ${v.ro}</span>
                        ${typeBadge}
                        ${auxBadge}
                    </div>

                    <h5>Präsens</h5>
                    <table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praes.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>

                    <h5>Präteritum (imperfect / mai mult ca perfect — RO: imperfect)</h5>
                    <table><thead><tr><th>Pronume</th><th>Formă</th><th>Traducere RO</th></tr></thead><tbody>`;
                v.praet.forEach(row => {
                    html += `<tr><td><strong>${row[0]}</strong></td><td class="verb">${row[1]}</td><td class="ro-text">${row[2]}</td></tr>`;
                });
                html += `</tbody></table>

                    <h5>Perfekt (timp vorbit)</h5>
                    <div class="perfekt-box">
                        <div class="de">Auxiliar <strong>${v.aux}</strong> + participiu <strong>${v.part}</strong></div>
                        <div class="de" style="margin-top: 3px;">Exemplu: ${v.perf[2][0]} <strong>${v.perf[2][1]}</strong></div>
                        <div class="ro">${v.perf[2][2]}</div>
                    </div>

                    <div class="note"><strong>📌 Notă:</strong> ${v.note}</div>
                </div>`;
            });
        }

        html += `<div class="theory-box">
            <h4>🏆 RECAP MASIV — tot Atelierul de Aprofundare Dativ în 4 reguli</h4>
            <ol>
                <li>📍 <strong>Wo? = Dat</strong> (poziție) · <strong>Wohin? = Akk</strong> (mișcare spre) · <strong>Woher? = Dat</strong> (mișcare dinspre · cu aus/von)</li>
                <li>🟢 <strong>16 prepoziții Dativ</strong>: 9 Wechselpräp în Wo? (in/an/auf/vor/hinter/über/unter/neben/zwischen) + 7 fixe (mit/zu/bei/von/aus/nach/seit)</li>
                <li>🪨 <strong>12 Stolpersteine</strong>: nach/zu Hause · bei vs zu cu persoane · beim + activitate · țări cu/fără articol · materiale · seit/vor temporale · mit/für/gegen · Sein/arbeiten bei/als</li>
                <li>🤝 <strong>Verb + prepoziție fixă</strong>: memorezi verbul ÎMPREUNĂ cu prepoziția (sprechen mit · helfen bei · träumen von · gratulieren zu · warten AUF (Akk!) · denken AN (Akk!) · sich freuen über/auf (Akk!) · sich erinnern an (Akk!) · sich interessieren für (Akk!))</li>
            </ol>
            <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">🎉 ATELIERUL COMPLET! Dativul german n-are secrete pentru tine. 🛠️🦋🏆</p>
        </div>`;

        return html;
    }
})();
