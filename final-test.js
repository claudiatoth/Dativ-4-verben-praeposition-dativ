// ============================================
// TEST FINAL - Atelier Dativ — Lecția 4: Verben + Präposition + Dativ
// Claudia Toth · 25 întrebări (pattern dens — final atelier!)
// ============================================

function normalizeTestAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

const finalTestData = [
    // 5× mit + Dat
    { type: 'multiple', category: '🤝 mit + Dat', question: 'Andreea spricht ____ ihrer Mutter.', options: ['mit', 'bei', 'von', 'zu'], correct: 'mit', explanation: 'sprechen MIT + Dat = a vorbi cu cineva.' },
    { type: 'luckentext', category: '🤝 mit + Dat', question: 'Completează (sich treffen + Dat):', sentence: 'Carolina trifft sich ____ ihrem Freund.', translation: 'Carolina se întâlnește cu prietenul ei.', accept: ['mit'], correct: 'mit', explanation: 'sich treffen MIT + Dat (reflexiv + mit + Dat).' },
    { type: 'multiple', category: '🤝 mit + Dat', question: 'Florian fährt ____ Bus. (der Bus · cu = mit)', options: ['mit', 'bei dem', 'mit dem', 'mit den'], correct: 'mit dem', explanation: 'fahren MIT + Dat masc (der Bus → dem Bus).' },
    { type: 'luckentext', category: '🤝 mit + Dat', question: 'Completează (arbeiten cu cineva):', sentence: 'Acar arbeitet ____ seinen Kollegen.', translation: 'Acar lucrează cu colegii lui.', accept: ['mit'], correct: 'mit', explanation: 'arbeiten MIT + Dat = a lucra cu cineva.' },
    { type: 'multiple', category: '🤝 mit + Dat', question: 'sprechen — care e CORECT pentru „cu cineva"?', options: ['sprechen zu', 'sprechen von', 'sprechen mit', 'sprechen über'], correct: 'sprechen mit', explanation: 'sprechen MIT + Dat = cu cineva. sprechen über/von = despre ceva.' },

    // 4× bei + Dat
    { type: 'multiple', category: '🏢 bei + Dat', question: 'Mihai hilft ____ Hausarbeit. (die Hausarbeit · la = bei · NU se contractă!)', options: ['bei dem', 'bei der', 'beim', 'mit der'], correct: 'bei der', explanation: 'helfen BEI + die Hausarbeit → bei DER Hausarbeit. NU se contractă (fem).' },
    { type: 'luckentext', category: '🏢 bei + Dat', question: 'Completează (arbeiten + companie):', sentence: 'Acar arbeitet ____ Audi.', translation: 'Acar lucrează la Audi.', accept: ['bei'], correct: 'bei', explanation: 'arbeiten BEI + companie (fără articol).' },
    { type: 'multiple', category: '🏢 bei + Dat', question: 'helfen — care construcție e CORECTĂ pentru „o ajut la gătit"?', options: ['Ich helfe ihr beim Kochen.', 'Ich helfe sie beim Kochen.', 'Ich helfe ihr mit Kochen.', 'Ich helfe ihr zu Kochen.'], correct: 'Ich helfe ihr beim Kochen.', explanation: 'helfen + Dat direct (ihr) + bei + Dat activitate (beim Kochen). Persoana e DAT, NU Akk!' },
    { type: 'luckentext', category: '🏢 bei + Dat', question: 'Completează (wohnen la cineva):', sentence: 'Andreea wohnt ____ ihrer Tante.', translation: 'Andreea locuiește la mătușa ei.', accept: ['bei'], correct: 'bei', explanation: 'wohnen BEI + Dat = la cineva.' },

    // 4× von + Dat
    { type: 'multiple', category: '📨 von + Dat', question: 'Andreea träumt ____ einer Reise.', options: ['mit', 'von', 'zu', 'auf'], correct: 'von', explanation: 'träumen VON + Dat = a visa la ceva.' },
    { type: 'luckentext', category: '📨 von + Dat', question: 'Completează (a primi de la):', sentence: 'Mihai bekommt ein Geschenk ____ Annette.', translation: 'Mihai primește un cadou de la Annette.', accept: ['von'], correct: 'von', explanation: 'bekommen VON + Dat = a primi de la cineva.' },
    { type: 'multiple', category: '📨 von + Dat', question: 'Florian kommt ____ Arbeit. (die Arbeit · de la = von · NU se contractă!)', options: ['vom', 'von der', 'von dem', 'beim'], correct: 'von der', explanation: 'kommen VON + die Arbeit → von DER Arbeit. NU se contractă (fem).' },
    { type: 'luckentext', category: '📨 von + Dat', question: 'Completează (a auzi de la):', sentence: 'Acar hat ____ Mihai gehört.', translation: 'Acar a auzit de la Mihai.', accept: ['von'], correct: 'von', explanation: 'hören VON + nume propriu (fără articol).' },

    // 3× zu/nach + Dat
    { type: 'multiple', category: '🎯 zu/nach + Dat', question: 'Annette lädt alle ____ Party ein. (die Party · la = zu)', options: ['zum', 'zur', 'zu der', 'bei der'], correct: 'zur', explanation: 'einladen ZU + die Party → ZUR Party (contracție zu+der = zur).' },
    { type: 'luckentext', category: '🎯 zu/nach + Dat', question: 'Completează (a întreba de):', sentence: 'Andreea fragt ____ dem Weg.', translation: 'Andreea întreabă de drum.', accept: ['nach'], correct: 'nach', explanation: 'fragen NACH + Dat = a întreba de.' },
    { type: 'multiple', category: '🎯 zu/nach + Dat', question: 'Mihai gratuliert Andreea ____ Geburtstag. (der Geburtstag · pentru = zu)', options: ['zur', 'zum', 'zu', 'beim'], correct: 'zum', explanation: 'gratulieren + Dat persoană (Andreea) + ZU + Dat eveniment. zu+dem = ZUM.' },

    // 5× Akk-prepoziție (CONTRAST!)
    { type: 'multiple', category: '🚨 Akk-prep CONTRAST', question: 'warten — care e CORECT?', options: ['warten auf den Bus', 'warten auf dem Bus', 'warten mit dem Bus', 'warten zu dem Bus'], correct: 'warten auf den Bus', explanation: 'warten AUF + AKKUSATIV! NU Dativ. der Bus → AUF DEN Bus.' },
    { type: 'luckentext', category: '🚨 Akk-prep CONTRAST', question: 'Completează (denken + AKK!):', sentence: 'Andreea denkt ____ ihre Familie.', translation: 'Andreea se gândește la familia ei.', accept: ['an'], correct: 'an', explanation: 'denken AN + Akkusativ (ihre Familie = Akk plural).' },
    { type: 'multiple', category: '🚨 Akk-prep CONTRAST', question: 'Care e CORECT? „Carolina se bucură de concediu" (viitor)', options: ['Carolina freut sich über den Urlaub.', 'Carolina freut sich auf den Urlaub.', 'Carolina freut sich mit dem Urlaub.', 'Carolina freut sich von dem Urlaub.'], correct: 'Carolina freut sich auf den Urlaub.', explanation: 'sich freuen AUF + Akk = abia așteaptă (viitor). sich freuen ÜBER + Akk = se bucură (prezent/trecut).' },
    { type: 'luckentext', category: '🚨 Akk-prep CONTRAST', question: 'Completează (sich erinnern + AKK):', sentence: 'Acar erinnert sich ____ seine Kindheit.', translation: 'Acar își amintește de copilăria lui.', accept: ['an'], correct: 'an', explanation: 'sich erinnern AN + Akkusativ. seine Kindheit = Akk fem.' },
    { type: 'multiple', category: '🚨 Akk-prep CONTRAST', question: 'sich interessieren — ce prepoziție + caz?', options: ['für + Dat', 'für + Akk', 'mit + Dat', 'von + Dat'], correct: 'für + Akk', explanation: 'sich interessieren FÜR + Akkusativ. ex: für die Geschichte (Akk fem).' },

    // 4× Verbe Dativ direct (gehören, gefallen, danken, helfen)
    { type: 'multiple', category: '🔑 Dat direct', question: '„Cartea îmi aparține." Care e CORECT?', options: ['Das Buch gehört zu mir.', 'Das Buch gehört mir.', 'Das Buch gehört für mich.', 'Das Buch gehört bei mir.'], correct: 'Das Buch gehört mir.', explanation: 'gehören + DATIV DIRECT (fără prepoziție). mir = pronume Dativ.' },
    { type: 'luckentext', category: '🔑 Dat direct', question: '„Îmi place" (a-mi plăcea) — completează:', sentence: 'Das Geschenk gefällt ____.', translation: 'Cadoul îmi place.', accept: ['mir'], correct: 'mir', explanation: 'gefallen + Dat direct. mir = Dat pronume. Pattern românesc identic („îmi place").' },
    { type: 'multiple', category: '🔑 Dat direct', question: 'danken — care e CORECT?', options: ['Ich danke dich.', 'Ich danke dir.', 'Ich danke für dich.', 'Ich danke mit dir.'], correct: 'Ich danke dir.', explanation: 'danken + DATIV DIRECT (dir = Dat). NU Akk (dich)!' },
    { type: 'luckentext', category: '🔑 Dat direct', question: 'Completează (helfen + cui?):', sentence: 'Mihai hilft ____ Mutter beim Kochen. (mama lui = pronume posesiv + persoană Dat)', translation: 'Mihai o ajută pe mama la gătit.', accept: ['seiner'], correct: 'seiner', explanation: 'helfen + DAT direct (persoana ajutată). die Mutter Dat → seiner Mutter (posesiv masc → seiner pentru fem Dat).' }
];

let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Test FINAL al Atelierului!</h3>
            <p>Test final cu <strong>${finalTestData.length} întrebări</strong> despre verbele cu prepoziție specifică Dativ + capcanele Akk-prep.</p>
            <ul class="test-info-list">
                <li>📋 Format: o întrebare pe pagină, navigare Înapoi / Următor</li>
                <li>✅ Feedback instant la fiecare întrebare</li>
                <li>🎓 Prag de promovare: 70%</li>
                <li>🏆 ULTIMA lecție din Atelierul de Aprofundare Dativ — felicitări că ai ajuns aici!</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            <div id="question-container"></div>
            <div class="feedback" id="test-feedback"></div>
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

function startFinalTest() {
    testStarted = true; testCompleted = false; currentQuestionIndex = 0; userAnswers = {};
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    showQuestion(0);
}

function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    feedback.className = 'feedback'; feedback.textContent = '';
    let html = '';
    if (q.type === 'multiple') {
        let opts = '';
        q.options.forEach((o, i) => { opts += `<div class="mc-option"><input type="radio" name="test-answer" value="${o.replace(/"/g, '&quot;')}" id="test-opt-${i}"><label for="test-opt-${i}">${o}</label></div>`; });
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="mc-options test-mc">${opts}</div></div>`;
    } else if (q.type === 'luckentext') {
        html = `<div class="test-question"><div class="test-question-label">${q.question}</div><div class="test-question-content">${q.sentence}</div><small class="test-translation">💬 ${q.translation}</small><input type="text" id="test-answer" class="test-input" placeholder="Scrie răspunsul..."></div>`;
    }
    container.innerHTML = html;
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            document.querySelectorAll('input[name="test-answer"]').forEach(r => { if (r.value === userAnswers[index].answer) r.checked = true; });
        } else {
            const inp = document.getElementById('test-answer');
            if (inp) inp.value = userAnswers[index].answer;
        }
        if (userAnswers[index].checked) {
            displayFeedback(index); checkBtn.disabled = true; setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false; setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false; setAnswerDisabled(q.type, false);
    }
}

function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    if (q.type === 'multiple') {
        const sel = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = sel ? sel.value : '';
    } else {
        const inp = document.getElementById('test-answer');
        userAnswer = inp ? inp.value.trim() : '';
    }
    if (!userAnswer) {
        const fb = document.getElementById('test-feedback');
        fb.className = 'feedback incorrect';
        fb.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    let isCorrect = false;
    if (q.type === 'multiple') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        const norm = normalizeTestAnswer(userAnswer);
        // 🆕 22 mai 2026 — acceptă atât fragmentul cât și propoziția întreagă
        // Test 1: fragmentul scurt (ex: "auf den")
        isCorrect = q.accept.some(a => normalizeTestAnswer(a) === norm);
        // Test 2: propoziția întreagă cu răspunsul inclus (ex: "Andreea denkt an ihre Familie.")
        if (!isCorrect && q.sentence) {
            const sentenceClean = q.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
            isCorrect = q.accept.some(a => {
                const full = sentenceClean.replace(/____+/g, a);
                return normalizeTestAnswer(full) === norm;
            });
        }
    }
    userAnswers[currentQuestionIndex] = { answer: userAnswer, correct: isCorrect, checked: true };
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const fb = document.getElementById('test-feedback');
    if (ans.correct) {
        fb.className = 'feedback correct';
        fb.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        fb.className = 'feedback incorrect';
        fb.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) { finishTest(); }
    else { currentQuestionIndex++; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) { currentQuestionIndex--; showQuestion(currentQuestionIndex); scrollToTest(); }
}

function scrollToTest() {
    const w = document.getElementById('test-wizard');
    if (w) w.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function finishTest() {
    testCompleted = true;
    let correct = 0;
    finalTestData.forEach((q, i) => { if (userAnswers[i] && userAnswers[i].correct) correct++; });
    const total = finalTestData.length;
    const pct = Math.round((correct / total) * 100);
    const passed = pct >= 70;
    let emoji, message, messageRo, badge;
    if (pct === 100) { emoji = '🏆'; badge = 'PERFEKT!'; message = 'Ausgezeichnet!'; messageRo = 'Performanță excelentă!'; }
    else if (pct >= 90) { emoji = '⭐'; badge = 'AUSGEZEICHNET'; message = 'Sehr gut!'; messageRo = 'Foarte bine!'; }
    else if (pct >= 80) { emoji = '🎓'; badge = 'SEHR GUT'; message = 'Sehr gute Leistung!'; messageRo = 'Performanță foarte bună!'; }
    else if (pct >= 70) { emoji = '✅'; badge = 'BESTANDEN'; message = 'Bestanden!'; messageRo = 'Promovat! Mai exersează puțin.'; }
    else if (pct >= 50) { emoji = '📚'; badge = 'NICHT BESTANDEN'; message = 'Wiederhole die Theorie!'; messageRo = 'Repetă teoria!'; }
    else { emoji = '💪'; badge = 'WEITER ÜBEN'; message = 'Mehr Übung nötig!'; messageRo = 'Mai exersează!'; }
    const stats = {};
    finalTestData.forEach((q, i) => {
        if (!stats[q.category]) stats[q.category] = { c: 0, t: 0 };
        stats[q.category].t++;
        if (userAnswers[i] && userAnswers[i].correct) stats[q.category].c++;
    });
    let statsH = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const k in stats) {
        const s = stats[k]; const p = Math.round((s.c / s.t) * 100);
        statsH += `<li>${k}: <strong>${s.c}/${s.t}</strong> (${p}%)</li>`;
    }
    statsH += '</ul></div>';
    let mistH = '';
    const mist = [];
    finalTestData.forEach((q, i) => { if (userAnswers[i] && !userAnswers[i].correct) mist.push({ q, i, u: userAnswers[i].answer }); });
    if (mist.length) {
        mistH = '<div class="test-mistakes"><h4>📝 Întrebările greșite:</h4>';
        mist.forEach(m => {
            mistH += `<div class="mistake-item"><strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br><span style="color:#991b1b;">Răspunsul tău: <em>${m.u}</em></span><br><span style="color:#065f46;">Corect: <strong>${m.q.correct}</strong></span><br><small style="color:#6b7280;">${m.q.explanation}</small></div>`;
        });
        mistH += '</div>';
    }
    const w = document.getElementById('test-wizard');
    const r = document.getElementById('test-results');
    w.style.display = 'none'; r.style.display = 'block';
    r.innerHTML = `
        <div class="test-back-top"><button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button></div>
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${pct}%</div>
            <div class="test-result-message"><p><strong>${message}</strong></p><p style="margin-top:8px;">${messageRo}</p></div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins! 🏆 ATELIER COMPLET!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        ${statsH}
        ${mistH}
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    r.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartTest() {
    if (confirm('Sigur vrei să reiei testul?')) {
        currentQuestionIndex = 0; userAnswers = {}; testCompleted = false;
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0); scrollToTest();
    }
}

function goBackToTheory() {
    const t = document.getElementById('main-section-0');
    const a = document.querySelectorAll('.arrow')[0];
    if (t && !t.classList.contains('active')) {
        t.classList.add('active');
        if (a) a.classList.add('rotated');
    }
    const ts = document.getElementById('teorie');
    if (ts) ts.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

buildFinalTest();
