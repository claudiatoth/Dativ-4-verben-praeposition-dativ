// ============================================
// FLASHCARDS - Atelier Dativ — Lecția 4: Verben + Präposition + Dativ
// Claudia Toth · 48 carduri · ZERO ghilimele interne, CAPS pentru emfază!
// ============================================

const flashcardsData = [
    // === 6 mit + Dat ===
    { de: "sprechen mit + Dat", ro: "🤝 a vorbi cu cineva · Andreea spricht mit ihrer Mutter", audio: "audio/letters/sprechen-mit.wav" },
    { de: "fahren mit + Dat", ro: "🤝 a merge cu (mijloc transport) · fahren mit dem Bus", audio: "audio/letters/fahren-mit.wav" },
    { de: "spielen mit + Dat", ro: "🤝 a se juca cu (partener) · spielen mit dem Hund", audio: "audio/letters/spielen-mit.wav" },
    { de: "arbeiten mit + Dat", ro: "🤝 a lucra cu cineva · arbeiten mit Kollegen", audio: "audio/letters/arbeiten-mit.wav" },
    { de: "sich treffen mit + Dat", ro: "🤝 a se întâlni cu (reflexiv!) · sich treffen mit Freunden", audio: "audio/letters/treffen-mit.wav" },
    { de: "tanzen mit + Dat", ro: "🤝 a dansa cu cineva · tanzen mit dem Direktor", audio: "audio/letters/tanzen-mit.wav" },

    // === 6 bei + Dat ===
    { de: "helfen bei + Dat", ro: "🏢 a ajuta la (activitate) · helfen bei der Hausarbeit", audio: "audio/letters/helfen-bei.wav" },
    { de: "arbeiten bei + Dat", ro: "🏢 a lucra la (firmă) · arbeiten bei Audi", audio: "audio/letters/arbeiten-bei.wav" },
    { de: "wohnen bei + Dat", ro: "🏢 a locui la cineva · wohnen bei der Tante", audio: "audio/letters/wohnen-bei.wav" },
    { de: "sein bei + Dat", ro: "🏢 a fi la · sein beim Arzt", audio: "audio/letters/sein-bei.wav" },
    { de: "bleiben bei + Dat", ro: "🏢 a rămâne la (decizie) · bleiben bei der Entscheidung", audio: "audio/letters/bleiben-bei.wav" },
    { de: "helfen + Dat direct", ro: "🏢 a ajuta pe cineva · Ich helfe DIR (Dativ direct, fără prep)", audio: "audio/letters/helfen-dat.wav" },

    // === 6 von + Dat ===
    { de: "träumen von + Dat", ro: "📨 a visa la · träumen von einer Reise", audio: "audio/letters/traeumen-von.wav" },
    { de: "bekommen von + Dat", ro: "📨 a primi de la · bekommen von Annette", audio: "audio/letters/bekommen-von.wav" },
    { de: "kommen von + Dat", ro: "📨 a veni de la · kommen von der Arbeit", audio: "audio/letters/kommen-von.wav" },
    { de: "hören von + Dat", ro: "📨 a auzi de la · hören von Mihai", audio: "audio/letters/hoeren-von.wav" },
    { de: "erzählen von + Dat", ro: "📨 a povesti despre · erzählen von der Reise", audio: "audio/letters/erzaehlen-von.wav" },
    { de: "wissen von + Dat", ro: "📨 a ști de · wissen von dem Problem", audio: "audio/letters/wissen-von.wav" },

    // === 6 zu/nach + Dat ===
    { de: "gratulieren zu + Dat", ro: "🎯 a felicita pentru · gratulieren zum Geburtstag", audio: "audio/letters/gratulieren-zu.wav" },
    { de: "einladen zu + Dat", ro: "🎯 a invita la · einladen zur Party", audio: "audio/letters/einladen-zu.wav" },
    { de: "gehören zu + Dat", ro: "🎯 a face parte din · gehören zur Familie", audio: "audio/letters/gehoeren-zu.wav" },
    { de: "fragen nach + Dat", ro: "🎯 a întreba de · fragen nach dem Weg", audio: "audio/letters/fragen-nach.wav" },
    { de: "suchen nach + Dat", ro: "🎯 a căuta · suchen nach dem Schlüssel", audio: "audio/letters/suchen-nach.wav" },
    { de: "schmecken nach + Dat", ro: "🎯 a avea gust de · schmecken nach Knoblauch", audio: "audio/letters/schmecken-nach.wav" },

    // === 6 verbe Akk-prepoziție (CONTRAST!)
    { de: "warten AUF + Akk!", ro: "🚨 a aștepta (Wechselpräp cu Akk!) · warten auf den Bus", audio: "audio/letters/warten-auf.wav" },
    { de: "denken AN + Akk!", ro: "🚨 a se gândi la · denken an die Familie (Akk!)", audio: "audio/letters/denken-an.wav" },
    { de: "sich freuen AUF + Akk!", ro: "🚨 a aștepta cu bucurie (viitor) · sich freuen auf den Urlaub", audio: "audio/letters/freuen-auf.wav" },
    { de: "sich freuen ÜBER + Akk!", ro: "🚨 a se bucura de (prezent/trecut) · sich freuen über das Geschenk", audio: "audio/letters/freuen-ueber.wav" },
    { de: "sich erinnern AN + Akk!", ro: "🚨 a-și aminti de · sich erinnern an die Kindheit", audio: "audio/letters/erinnern-an.wav" },
    { de: "sich interessieren FÜR + Akk!", ro: "🚨 a se interesa de · sich interessieren für die Geschichte", audio: "audio/letters/interessieren-fuer.wav" },

    // === 6 verbe Dativ direct (fără prepoziție)
    { de: "gehören + Dat direct", ro: "🔑 a aparține · Das gehört MIR (mir = Dat)", audio: "audio/letters/gehoeren-direct.wav" },
    { de: "gefallen + Dat direct", ro: "🔑 a plăcea · Das gefällt MIR (mir = Dat)", audio: "audio/letters/gefallen-direct.wav" },
    { de: "danken + Dat direct", ro: "🔑 a mulțumi · Ich danke DIR", audio: "audio/letters/danken-direct.wav" },
    { de: "passen + Dat direct", ro: "🔑 a se potrivi cu (haine) · Das passt DIR", audio: "audio/letters/passen-direct.wav" },
    { de: "schmecken + Dat direct", ro: "🔑 a-i plăcea gustul · Es schmeckt MIR (îmi place)", audio: "audio/letters/schmecken-direct.wav" },
    { de: "antworten + Dat direct", ro: "🔑 a răspunde · Ich antworte DIR", audio: "audio/letters/antworten-direct.wav" },

    // === 12 propoziții emblemă cu 6 personaje (ultima lecție = mai bogată)
    { de: "Mihai spricht mit seinen Kunden.", ro: "Mihai vorbește cu clienții lui. (sprechen mit + Dat)", audio: "audio/letters/mihai-spricht.wav" },
    { de: "Andreea träumt von einer Reise.", ro: "Andreea visează la o călătorie. (träumen von + Dat)", audio: "audio/letters/andreea-traeumt.wav" },
    { de: "Florian wartet auf den Patienten.", ro: "Florian așteaptă pacientul. (warten AUF + Akk!)", audio: "audio/letters/florian-wartet.wav" },
    { de: "Carolina trifft sich mit ihrem Freund.", ro: "Carolina se întâlnește cu prietenul ei. (sich treffen mit + Dat)", audio: "audio/letters/carolina-trifft.wav" },
    { de: "Acar arbeitet bei einer großen Firma.", ro: "Acar lucrează la o firmă mare. (arbeiten bei + Dat)", audio: "audio/letters/acar-arbeitet.wav" },
    { de: "Annette lädt alle zur Party ein.", ro: "Annette îi invită pe toți la petrecere. (einladen zu + Dat)", audio: "audio/letters/annette-laedt.wav" },
    { de: "Mihai hilft Annette beim Kochen.", ro: "Mihai o ajută pe Annette la gătit. (helfen + Dat + bei + Dat)", audio: "audio/letters/mihai-hilft.wav" },
    { de: "Andreea denkt an ihre Familie.", ro: "Andreea se gândește la familia ei. (denken AN + Akk!)", audio: "audio/letters/andreea-denkt.wav" },
    { de: "Florian freut sich über das Geschenk.", ro: "Florian se bucură de cadou. (sich freuen über + Akk!)", audio: "audio/letters/florian-freut.wav" },
    { de: "Carolina erzählt von ihrem Atelier.", ro: "Carolina povestește despre atelierul ei. (erzählen von + Dat)", audio: "audio/letters/carolina-erzaehlt.wav" },
    { de: "Acar erinnert sich an seine Anfänge.", ro: "Acar își amintește de începuturile lui. (sich erinnern an + Akk!)", audio: "audio/letters/acar-erinnert.wav" },
    { de: "Annette gratuliert Andreea zum Abschluss.", ro: "Annette o felicită pe Andreea pentru absolvire. (gratulieren + Dat + zu + Dat)", audio: "audio/letters/annette-gratuliert.wav" }
];

let currentCardIndex = 0;
let currentAudio = null;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 ${flashcardsData.length} carduri</strong> grupate pe teme (6 mit · 6 bei · 6 von · 6 zu/nach · 6 Akk-prep CONTRAST · 6 Dat direct · 12 propoziții emblemă cu 6 personaje).<br>
            Click pe card pentru traducere. Click pe 🔊 pentru pronunția germană.
        </div>
        <div class="flashcard-counter" id="flashcard-counter">Card 1 / ${flashcardsData.length}</div>
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    if (!card || !de || !ro || !counter) return;
    const c = flashcardsData[currentCardIndex];
    de.textContent = c.de;
    ro.textContent = c.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) { currentCardIndex++; updateFlashcard(); }
}

function prevCard() {
    if (currentCardIndex > 0) { currentCardIndex--; updateFlashcard(); }
}

function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    if (!card.audio) return;
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(card.audio);
    currentAudio.play().catch(err => { console.log('Audio nu poate fi redat:', err); });
}

buildFlashcards();
