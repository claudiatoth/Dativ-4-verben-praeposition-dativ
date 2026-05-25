// ============================================
// EXERCIȚII - Atelier Dativ — Lecția 4: Verben + Präposition + Dativ
// Claudia Toth · 7 exerciții × 10 itemi = 70 itemi (pattern dens)
// ============================================

function normalizeAnswer(str) {
    return (str || '')
        .toString().toLowerCase().trim()
        .replace(/ß/g, 'ss').replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue')
        .replace(/[ăâ]/g, 'a').replace(/î/g, 'i').replace(/[șş]/g, 's').replace(/[țţ]/g, 't')
        .replace(/…/g, '...').replace(/\s*\.\.\.\s*/g, ' ')
        .replace(/\s*\/\s*/g, ' ').replace(/\s*,\s*/g, ' ')
        .replace(/\s+/g, ' ').replace(/[.!?;:]/g, '');
}

// 🆕 22 mai 2026 — acceptă DOUĂ forme la verificare:
//  1. Fragmentul lipsă: ex. "auf den"
//  2. Propoziția întreagă cu răspunsul inclus: ex. "Carolina freut sich auf den Urlaub."
// Cursantul scrie cum îi vine natural. Hint-urile din paranteze sunt ignorate la comparație.
function answerMatches(item, userInput) {
    const u = normalizeAnswer(userInput);
    if (!u) return false;
    // Test 1: doar fragmentul scurt
    if (item.accept.some(a => normalizeAnswer(a) === u)) return true;
    // Test 2: propoziția întreagă (curăță hint-urile din paranteze)
    const sentenceClean = item.sentence.replace(/\s*\([^)]*\)\s*/g, ' ');
    return item.accept.some(a => {
        const full = sentenceClean.replace(/____+/g, a);
        return normalizeAnswer(full) === u;
    });
}

// EX 1: mit + Dativ (parteneri / instrumente)
const ex1Data = [
    { id: 'a', sentence: 'Andreea spricht ____ ihrer Mutter.', translation: 'Andreea vorbește cu mama ei.', correct: 'mit', accept: ['mit'] },
    { id: 'b', sentence: 'Florian fährt ____ Bus zur Arbeit. (der Bus · cu = mit)', translation: 'Florian merge cu autobuzul la lucru.', correct: 'mit dem', accept: ['mit dem'] },
    { id: 'c', sentence: 'Carolina trifft sich ____ ihrem Freund. (reflexiv + mit + Dat)', translation: 'Carolina se întâlnește cu prietenul ei.', correct: 'mit', accept: ['mit'] },
    { id: 'd', sentence: 'Mihai spielt ____ seinen Kindern.', translation: 'Mihai se joacă cu copiii lui.', correct: 'mit', accept: ['mit'] },
    { id: 'e', sentence: 'Acar arbeitet ____ seinen Kollegen.', translation: 'Acar lucrează cu colegii lui.', correct: 'mit', accept: ['mit'] },
    { id: 'f', sentence: 'Annette tanzt ____ dem Direktor.', translation: 'Annette dansează cu directorul.', correct: 'mit', accept: ['mit'] },
    { id: 'g', sentence: 'Andreea telefoniert ____ ihrer Freundin.', translation: 'Andreea vorbește la telefon cu prietena ei.', correct: 'mit', accept: ['mit'] },
    { id: 'h', sentence: 'Carolina fährt ____ Fahrrad. (das Fahrrad · cu = mit)', translation: 'Carolina merge cu bicicleta.', correct: 'mit dem', accept: ['mit dem'] },
    { id: 'i', sentence: 'Florian arbeitet ____ einem Computer.', translation: 'Florian lucrează cu un calculator.', correct: 'mit', accept: ['mit'] },
    { id: 'j', sentence: 'Mihai kocht ____ seiner Frau.', translation: 'Mihai gătește cu soția lui.', correct: 'mit', accept: ['mit'] }
];

function buildEx1() {
    const c = document.getElementById('ex1-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🤝 Verbele cu MIT + Dativ.</strong><br>sprechen mit · fahren mit · spielen mit · sich treffen mit · arbeiten mit · tanzen mit · telefonieren mit · kochen mit.<br><em>💡 La mijloace de transport: mit dem/der + transport.</em></div>';
    ex1Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex1-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex1-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx1() {
    let correct = 0; const total = ex1Data.length;
    ex1Data.forEach(it => { const inp = document.getElementById(`ex1-${it.id}`); const fb = document.getElementById(`ex1-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 2: bei + Dativ (loc / activitate / persoană)
const ex2Data = [
    { id: 'a', sentence: 'Mihai hilft ____ Hausarbeit. (die Hausarbeit · la = bei · ATENȚIE: feminin NU se contractă!)', translation: 'Mihai ajută la treburile casei.', correct: 'bei der', accept: ['bei der'] },
    { id: 'b', sentence: 'Acar arbeitet ____ Audi. (Audi = companie · la = bei · ATENȚIE: companii NU primesc articol!)', translation: 'Acar lucrează la Audi.', correct: 'bei', accept: ['bei'] },
    { id: 'c', sentence: 'Andreea wohnt ____ ihrer Tante.', translation: 'Andreea locuiește la mătușa ei.', correct: 'bei', accept: ['bei'] },
    { id: 'd', sentence: 'Florian ist ____ Arzt. (POZIȚIE — beim = bei+dem)', translation: 'Florian e la doctor.', correct: 'beim', accept: ['beim'] },
    { id: 'e', sentence: 'Carolina bleibt ____ ihrer Entscheidung.', translation: 'Carolina rămâne la decizia ei.', correct: 'bei', accept: ['bei'] },
    { id: 'f', sentence: 'Annette hilft den Schülern ____ Lernen. (la învățat — beim = bei+dem)', translation: 'Annette îi ajută pe elevi la învățat.', correct: 'beim', accept: ['beim'] },
    { id: 'g', sentence: 'Mihai arbeitet ____ einem Restaurant.', translation: 'Mihai lucrează la un restaurant.', correct: 'bei', accept: ['bei'] },
    { id: 'h', sentence: 'Andreea hilft ihrer Mutter ____ Kochen.', translation: 'Andreea o ajută pe mama la gătit.', correct: 'beim', accept: ['beim'] },
    { id: 'i', sentence: 'Acar war ____ einer Konferenz.', translation: 'Acar a fost la o conferință.', correct: 'bei', accept: ['bei'] },
    { id: 'j', sentence: 'Florian arbeitet ____ Charité. (die Charité · la = bei · ATENȚIE: feminin NU se contractă!)', translation: 'Florian lucrează la Charité.', correct: 'bei der', accept: ['bei der'] }
];

function buildEx2() {
    const c = document.getElementById('ex2-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🏢 Verbele cu BEI + Dativ.</strong><br>helfen bei (la activitate) · arbeiten bei (la firmă) · wohnen bei · sein bei · bleiben bei.<br><em>💡 beim = bei+dem (contracție). bei der NU se contractă.</em></div>';
    ex2Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex2-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex2-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx2() {
    let correct = 0; const total = ex2Data.length;
    ex2Data.forEach(it => { const inp = document.getElementById(`ex2-${it.id}`); const fb = document.getElementById(`ex2-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 3: von + Dativ (sursă / vis)
const ex3Data = [
    { id: 'a', sentence: 'Andreea träumt ____ einer Reise nach Italien.', translation: 'Andreea visează la o călătorie în Italia.', correct: 'von', accept: ['von'] },
    { id: 'b', sentence: 'Mihai bekommt ein Geschenk ____ Annette.', translation: 'Mihai primește un cadou de la Annette.', correct: 'von', accept: ['von'] },
    { id: 'c', sentence: 'Florian kommt gerade ____ Arbeit. (die Arbeit · de la = von · ATENȚIE: feminin NU se contractă!)', translation: 'Florian vine chiar acum de la lucru.', correct: 'von der', accept: ['von der'] },
    { id: 'd', sentence: 'Carolina erzählt ____ ihrer Reise.', translation: 'Carolina povestește despre călătoria ei.', correct: 'von', accept: ['von'] },
    { id: 'e', sentence: 'Acar hat ____ Mihai gehört, dass er heiraten will.', translation: 'Acar a auzit de la Mihai că vrea să se căsătorească.', correct: 'von', accept: ['von'] },
    { id: 'f', sentence: 'Annette weiß ____ dem Problem.', translation: 'Annette știe de problemă.', correct: 'von', accept: ['von'] },
    { id: 'g', sentence: 'Andreea träumt ____ ihrer Zukunft.', translation: 'Andreea visează la viitorul ei.', correct: 'von', accept: ['von'] },
    { id: 'h', sentence: 'Carolina bekommt einen Anruf ____ ihrer Kundin.', translation: 'Carolina primește un telefon de la clienta ei.', correct: 'von', accept: ['von'] },
    { id: 'i', sentence: 'Florian erzählt ____ seinem Patienten.', translation: 'Florian povestește despre pacientul lui.', correct: 'von', accept: ['von'] },
    { id: 'j', sentence: 'Mihai kommt ____ Markt. (der Markt · de la = von)', translation: 'Mihai vine de la piață.', correct: 'vom', accept: ['vom'] }
];

function buildEx3() {
    const c = document.getElementById('ex3-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>📨 Verbele cu VON + Dativ.</strong><br>träumen von · bekommen von · kommen von · erzählen von · hören von · wissen von.<br><em>💡 vom = von+dem (contracție pentru masc/neutru). von der NU se contractă.</em></div>';
    ex3Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex3-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex3-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx3() {
    let correct = 0; const total = ex3Data.length;
    ex3Data.forEach(it => { const inp = document.getElementById(`ex3-${it.id}`); const fb = document.getElementById(`ex3-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 4: zu + nach + Dativ (eveniment / căutare)
const ex4Data = [
    { id: 'a', sentence: 'Mihai gratuliert Andreea ____ Geburtstag. (der Geburtstag · pentru = zu)', translation: 'Mihai o felicită pe Andreea pentru ziua de naștere.', correct: 'zum', accept: ['zum'] },
    { id: 'b', sentence: 'Annette lädt alle ____ Party ein. (die Party · la = zu)', translation: 'Annette îi invită pe toți la petrecere.', correct: 'zur', accept: ['zur'] },
    { id: 'c', sentence: 'Florian gehört ____ unserer Familie. (face parte din)', translation: 'Florian face parte din familia noastră.', correct: 'zu', accept: ['zu'] },
    { id: 'd', sentence: 'Andreea fragt ____ dem Weg. (a întreba de drum)', translation: 'Andreea întreabă de drum.', correct: 'nach', accept: ['nach'] },
    { id: 'e', sentence: 'Mihai sucht ____ seinem Schlüssel.', translation: 'Mihai își caută cheia.', correct: 'nach', accept: ['nach'] },
    { id: 'f', sentence: 'Die Suppe schmeckt ____ Knoblauch. (gust de)', translation: 'Supa are gust de usturoi.', correct: 'nach', accept: ['nach'] },
    { id: 'g', sentence: 'Carolina gratuliert Florian ____ Hochzeit. (die Hochzeit · pentru = zu)', translation: 'Carolina îl felicită pe Florian pentru nuntă.', correct: 'zur', accept: ['zur'] },
    { id: 'h', sentence: 'Diese Bluse passt ____ deiner Hose.', translation: 'Bluza se potrivește cu pantalonii tăi.', correct: 'zu', accept: ['zu'] },
    { id: 'i', sentence: 'Das Zimmer riecht ____ Kaffee.', translation: 'Camera miroase a cafea.', correct: 'nach', accept: ['nach'] },
    { id: 'j', sentence: 'Acar lädt seine Freunde ____ Geburtstag ein. (der Geburtstag · la = zu)', translation: 'Acar își invită prietenii la ziua de naștere.', correct: 'zum', accept: ['zum'] }
];

function buildEx4() {
    const c = document.getElementById('ex4-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎯 Verbele cu ZU și NACH + Dativ.</strong><br>ZU: gratulieren zu · einladen zu · gehören zu · passen zu.<br>NACH: fragen nach · suchen nach · schmecken nach · riechen nach.<br><em>💡 zum/zur = forme contrase (zu+dem/zu+der).</em></div>';
    ex4Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex4-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex4-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx4() {
    let correct = 0; const total = ex4Data.length;
    ex4Data.forEach(it => { const inp = document.getElementById(`ex4-${it.id}`); const fb = document.getElementById(`ex4-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 5: 🚨 CONTRAST Akk-prepoziție (warten auf, denken an, sich freuen auf/über)
const ex5Data = [
    { id: 'a', sentence: 'Mihai wartet ____ Bus. (der Bus · warten AUF + Akk!)', translation: 'Mihai așteaptă autobuzul.', correct: 'auf den', accept: ['auf den'] },
    { id: 'b', sentence: 'Andreea denkt ____ ihre Familie. (die Familie · denken AN + Akk!)', translation: 'Andreea se gândește la familia ei.', correct: 'an ihre', accept: ['an ihre'] },
    { id: 'c', sentence: 'Carolina freut sich ____ Urlaub. (sich freuen auf + Akk · der Urlaub)', translation: 'Carolina abia așteaptă concediul.', correct: 'auf den', accept: ['auf den'] },
    { id: 'd', sentence: 'Florian freut sich ____ Geschenk. (sich freuen über + Akk · das Geschenk)', translation: 'Florian se bucură de cadou.', correct: 'über das', accept: ['über das', 'ueber das'] },
    { id: 'e', sentence: 'Acar erinnert sich ____ seine Kindheit. (sich erinnern an + Akk)', translation: 'Acar își amintește de copilăria lui.', correct: 'an seine', accept: ['an seine'] },
    { id: 'f', sentence: 'Annette interessiert sich ____ Geschichte. (sich interessieren für + Akk · die Geschichte)', translation: 'Annette se interesează de istorie.', correct: 'für die', accept: ['für die', 'fuer die'] },
    { id: 'g', sentence: 'Mihai wartet ____ Lieferung. (die Lieferung · warten AUF + Akk!)', translation: 'Mihai așteaptă livrarea.', correct: 'auf die', accept: ['auf die'] },
    { id: 'h', sentence: 'Andreea denkt ____ ihren Bruder. (der Bruder · denken AN + Akk!)', translation: 'Andreea se gândește la fratele ei.', correct: 'an ihren', accept: ['an ihren'] },
    { id: 'i', sentence: 'Florian hofft ____ gute Ergebnisse. (hoffen auf + Akk plural)', translation: 'Florian speră la rezultate bune.', correct: 'auf gute', accept: ['auf gute'] },
    { id: 'j', sentence: 'Carolina erinnert sich ____ den Sommer 2020. (sich erinnern an + Akk · der Sommer)', translation: 'Carolina își amintește de vara lui 2020.', correct: 'an den', accept: ['an den'] }
];

function buildEx5() {
    const c = document.getElementById('ex5-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🚨 CAPCANA: Verbe cu Wechselpräp + AKKUSATIV (NU Dativ!).</strong><br>warten AUF · denken AN · sich freuen AUF/ÜBER · sich erinnern AN · sich interessieren FÜR · hoffen AUF.<br><em>💡 Toate cer AKKUSATIV (NU Dativ ca celelalte verbe ale lecției). Memorezi verb+prep+caz.</em></div>';
    ex5Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex5-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex5-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx5() {
    let correct = 0; const total = ex5Data.length;
    ex5Data.forEach(it => { const inp = document.getElementById(`ex5-${it.id}`); const fb = document.getElementById(`ex5-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 6: Alege prepoziția potrivită pentru verb
const ex6Data = [
    { id: 'a', sentence: 'Andreea spricht ____ ihrer Mutter. (verb + prep MIT)', translation: 'Vorbește cu mama ei.', correct: 'mit', accept: ['mit'] },
    { id: 'b', sentence: 'Carolina träumt ____ einer Reise. (verb + prep VON)', translation: 'Visează la o călătorie.', correct: 'von', accept: ['von'] },
    { id: 'c', sentence: 'Mihai hilft ____ der Hausarbeit. (verb + prep BEI)', translation: 'Ajută la treburile casei.', correct: 'bei', accept: ['bei'] },
    { id: 'd', sentence: 'Annette gratuliert dir ____ deinem Erfolg. (verb + prep ZU)', translation: 'Te felicită pentru succesul tău.', correct: 'zu', accept: ['zu'] },
    { id: 'e', sentence: 'Florian fragt ____ dem Weg. (verb + prep NACH)', translation: 'Întreabă de drum.', correct: 'nach', accept: ['nach'] },
    { id: 'f', sentence: 'Acar wartet ____ den Bus. (verb + prep AUF — Akk!)', translation: 'Așteaptă autobuzul.', correct: 'auf', accept: ['auf'] },
    { id: 'g', sentence: 'Mihai denkt ____ seine Frau. (verb + prep AN — Akk!)', translation: 'Se gândește la soția lui.', correct: 'an', accept: ['an'] },
    { id: 'h', sentence: 'Carolina interessiert sich ____ Kunst. (verb + prep FÜR — Akk!)', translation: 'Se interesează de artă.', correct: 'für', accept: ['für', 'fuer'] },
    { id: 'i', sentence: 'Florian erzählt ____ seinem Patienten. (verb + prep VON)', translation: 'Povestește despre pacientul lui.', correct: 'von', accept: ['von'] },
    { id: 'j', sentence: 'Annette lädt uns ____ ihrem Geburtstag ein. (verb + prep ZU)', translation: 'Ne invită la ziua ei de naștere.', correct: 'zu', accept: ['zu'] }
];

function buildEx6() {
    const c = document.getElementById('ex6-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🔑 Verb + prepoziție potrivită — alege.</strong><br>Pattern fix: memorezi VERB + PREPOZIȚIE împreună.<br><em>💡 Atenție: AUF/AN/FÜR cer Akkusativ (NU Dativ).</em></div>';
    ex6Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex6-${it.id}" placeholder="prepoziția..."></div><div class="feedback" id="ex6-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx6() {
    let correct = 0; const total = ex6Data.length;
    ex6Data.forEach(it => { const inp = document.getElementById(`ex6-${it.id}`); const fb = document.getElementById(`ex6-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

// EX 7: Dialog 6 personaje — sinteză MASIVĂ Atelier complet
// 🚨 FĂRĂ PARANTEZE cu prepoziții — cursantul gândește singur ce prep lipsește!
// 🚨 Forme contrase: accept atât forma scurtă (beim/zum/zur/vom) cât și forma lungă (bei dem / zu dem / zu der / von dem)
const ex7Data = [
    { id: 'a', sentence: 'Mihai: Ich spreche ____ meinen Kunden.', translation: 'Vorbesc cu clienții mei.', correct: 'mit', accept: ['mit'] },
    { id: 'b', sentence: 'Mihai: Annette hilft mir ____ Service.', translation: 'Annette mă ajută la service.', correct: 'beim (sau bei dem)', accept: ['beim', 'bei dem'] },
    { id: 'c', sentence: 'Andreea: Ich träume ____ einer Reise nach Italien.', translation: 'Visez la o călătorie în Italia.', correct: 'von', accept: ['von'] },
    { id: 'd', sentence: 'Andreea: Aber jetzt denke ich ____ meine Prüfung.', translation: 'Dar acum mă gândesc la examenul meu.', correct: 'an', accept: ['an'] },
    { id: 'e', sentence: 'Florian: Ich warte ____ meinen Patienten.', translation: 'Aștept pacientul meu.', correct: 'auf', accept: ['auf'] },
    { id: 'f', sentence: 'Carolina: Ich treffe mich ____ meiner Freundin.', translation: 'Mă întâlnesc cu prietena mea.', correct: 'mit', accept: ['mit'] },
    { id: 'g', sentence: 'Acar: Ich arbeite ____ einer großen Firma.', translation: 'Lucrez la o firmă mare.', correct: 'bei', accept: ['bei'] },
    { id: 'h', sentence: 'Acar: Ich erinnere mich ____ meine Anfänge.', translation: 'Îmi amintesc de începuturile mele.', correct: 'an', accept: ['an'] },
    { id: 'i', sentence: 'Annette: Heute gratuliere ich Andreea ____ Abschluss.', translation: 'Azi o felicit pe Andreea pentru absolvire.', correct: 'zum (sau zu dem)', accept: ['zum', 'zu dem'] },
    { id: 'j', sentence: 'Annette: Und ich lade alle ____ Feier ein.', translation: 'Și îi invit pe toți la sărbătoare.', correct: 'zur (sau zu der)', accept: ['zur', 'zu der'] }
];

function buildEx7() {
    const c = document.getElementById('ex7-container'); if (!c) return;
    let h = '<div class="exercise-instruction"><strong>🎬 Sinteză masivă — 6 personaje, toate prepozițiile din lecție.</strong><br>Testează: mit/bei/von/zu + Dativ ȘI capcanele auf/an + Akk!<br><em>💡 Gândește singur ce prepoziție lipsește. La formele contrase (beim/zum/zur) ambele variante sunt valide: <strong>beim</strong> SAU <strong>bei dem</strong>, <strong>zum</strong> SAU <strong>zu dem</strong>, <strong>zur</strong> SAU <strong>zu der</strong>.</em></div>';
    ex7Data.forEach((it, i) => { h += `<div class="exercise-item"><span class="exercise-number">${i + 1}</span><div class="input-group"><label>${it.sentence}</label><small class="translation-hint">💬 ${it.translation}</small><input type="text" id="ex7-${it.id}" placeholder="completează..."></div><div class="feedback" id="ex7-f${it.id}"></div></div>`; });
    c.innerHTML = h;
}
function checkEx7() {
    let correct = 0; const total = ex7Data.length;
    ex7Data.forEach(it => { const inp = document.getElementById(`ex7-${it.id}`); const fb = document.getElementById(`ex7-f${it.id}`); const ok = answerMatches(it, inp.value); fb.className = ok ? 'feedback correct' : 'feedback incorrect'; fb.textContent = `Corect: ${it.correct}`; if (ok) correct++; });
    return { correct, total };
}

buildEx1(); buildEx2(); buildEx3(); buildEx4(); buildEx5(); buildEx6(); buildEx7();
