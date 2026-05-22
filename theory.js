// ============================================
// TEORIE - Atelier de Aprofundare Dativ — Lecția 4 (ULTIMA):
// Verben + Präposition + Dativ + recap masiv atelier
// Claudia Toth · Annettes Deutschkurs
// REGULĂ: NU ghilimele interne care rup template literal!
// ============================================

const theoryHTML = `
    <!-- 0: Intro + recap atelier + ce e verb+prepoziție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>🎓 1. ULTIMA LECȚIE — Verben + Präposition + Dativ</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none"><source src="audio/01-intro-final.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="andreea-note" style="margin-bottom: 14px;">
                <img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">
                <div class="andreea-note-content">
                    <div class="speaker">Andreea îți spune (înainte să începem):</div>
                    <div class="text" style="font-style: normal;">„Nu ai tastatură germană? <strong>Niciun stres!</strong> La toate exercițiile poți scrie:
                        <ul style="margin: 6px 0 4px 18px; padding: 0;">
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ss</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ß</code></li>
                            <li><code style="background:#fff;padding:1px 5px;border-radius:3px;">ae/oe/ue</code> în loc de <code style="background:#fff;padding:1px 5px;border-radius:3px;">ä/ö/ü</code></li>
                        </ul>
                        Sistemul acceptă <strong>ambele forme</strong> automat. Diacriticele RO le accept și cu, și fără."</div>
                </div>
            </div>

            <div class="theory-box" style="background: #ecfdf5;">
                <h4>🎉 ULTIMA lecție din Atelierul de Aprofundare Dativ!</h4>
                <p>Felicitări — ai ajuns la ultima lecție din pachetul de 4 lecții. Tema azi: <strong>verbele care vin LEGATE de o prepoziție specifică</strong> — în germană, multe verbe nu funcționează singure, ci în <strong>tandem cu o prepoziție fixă</strong>. La A2 vei vedea sute de combinații; aici învățăm pattern-ul principal.</p>
                <p style="margin-top: 8px;">Plus: <strong>recap MASIV</strong> al întregului atelier — 16 prepoziții Dativ + 12 Stolpersteine + acum pattern-ul verb+prepoziție. La final ai tot puzzle-ul Dativ-ului.</p>
            </div>

            <div class="theory-box">
                <h4>🔑 Ce înseamnă „verb + prepoziție fixă"?</h4>
                <p>Multe verbe germane „cer" o prepoziție specifică — nu poți alege oricum. Combinația devine UNĂ — o memorezi împreună:</p>
                <table class="grammar-table">
                    <tr><th>Verb german</th><th>Prepoziție</th><th>Caz</th><th>Sens</th><th>Traducere RO</th></tr>
                    <tr><td>sprechen</td><td><strong>mit</strong></td><td>Dat</td><td>cu cineva</td><td><em style="color:#6b7280;">a vorbi cu</em></td></tr>
                    <tr><td>helfen</td><td><strong>bei</strong></td><td>Dat</td><td>la o activitate</td><td><em style="color:#6b7280;">a ajuta la</em></td></tr>
                    <tr><td>warten</td><td><strong>auf</strong></td><td>Akk!</td><td>pe cineva/ceva</td><td><em style="color:#6b7280;">a aștepta</em></td></tr>
                    <tr><td>denken</td><td><strong>an</strong></td><td>Akk!</td><td>la cineva/ceva</td><td><em style="color:#6b7280;">a se gândi la</em></td></tr>
                </table>
                <p style="margin-top: 8px;">⚠️ <strong>Atenție</strong>: 4 prepoziții Dativ fixe (mit/zu/bei/von/aus/nach/seit) cer mereu Dativ. DAR Wechselpräpositionen (in/an/auf/etc.) cu verbe pot cere fie Dat fie Akk — depinde de verb! warten <strong>auf</strong> = Akk (NU Dat), denken <strong>an</strong> = Akk. La A2 lista crește, dar pattern-ul rămâne: memorezi VERB + PREPOZIȚIE împreună.</p>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📚 Recap rapid Atelier (cele 3 lecții precedente)</h4>
                <ul style="margin-left: 18px;">
                    <li>📍 <strong>Lecția 1</strong>: cele 9 Wechselpräp (in/an/auf/vor/hinter/über/unter/neben/zwischen) + Wo/Wohin + 5 perechi verbe poziție/mișcare + DOUBLET hängen</li>
                    <li>🟢 <strong>Lecția 2</strong>: cele 7 fixe Dativ (mit/zu/bei/von/aus/nach/seit) + trio complet Wo/Wohin/Woher + forme contrase (zum/zur/beim/vom)</li>
                    <li>🪨 <strong>Lecția 3</strong>: cele 12 Stolpersteine (capcanele clasice — Hause, țări cu/fără articol, materiale, temporale, persoane, meserie/companie)</li>
                </ul>
            </div>
        </div>
    </div>

    <!-- 1: MIT + Dat (parteneri, instrumente, mijloace) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>🤝 2. Verbele cu MIT + Dativ (parteneri, instrumente)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none"><source src="audio/02-verbe-mit.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Verbele tip „cu cineva / cu ceva"</h4>
                <p>Toate următoarele verbe folosesc <strong>mit + Dativ</strong> obligatoriu. Memorezi verbul ÎMPREUNĂ cu prepoziția:</p>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>sprechen mit</strong></td><td>a vorbi cu cineva</td><td>Andreea spricht <strong>mit ihrer</strong> Mutter.</td><td><em style="color:#6b7280;">Andreea vorbește cu mama ei.</em></td></tr>
                    <tr><td><strong>spielen mit</strong></td><td>a se juca cu cineva (partener)</td><td>Mihai spielt <strong>mit seinem</strong> Hund.</td><td><em style="color:#6b7280;">Mihai se joacă cu câinele lui.</em></td></tr>
                    <tr><td><strong>fahren mit</strong></td><td>a merge cu (mijloc transport)</td><td>Florian fährt <strong>mit dem</strong> Bus.</td><td><em style="color:#6b7280;">Florian merge cu autobuzul.</em></td></tr>
                    <tr><td><strong>arbeiten mit</strong></td><td>a lucra cu cineva</td><td>Acar arbeitet <strong>mit seinen</strong> Kollegen.</td><td><em style="color:#6b7280;">Acar lucrează cu colegii lui.</em></td></tr>
                    <tr><td><strong>sich treffen mit</strong></td><td>a se întâlni cu cineva (reflexiv!)</td><td>Carolina trifft sich <strong>mit ihrem</strong> Freund.</td><td><em style="color:#6b7280;">Carolina se întâlnește cu prietenul ei.</em></td></tr>
                    <tr><td><strong>tanzen mit</strong></td><td>a dansa cu cineva</td><td>Annette tanzt <strong>mit dem</strong> Direktor.</td><td><em style="color:#6b7280;">Annette dansează cu directorul.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Capcana: sprechen MIT (cu cineva) vs sprechen ÜBER (despre ceva)</h4>
                <p>Verbul <strong>sprechen</strong> are 3 prepoziții diferite — atenție la sens:</p>
                <ul style="margin-left: 18px;">
                    <li><strong>sprechen MIT</strong> + Dat = cu cineva (partener de conversație): <em>Ich spreche MIT meiner Mutter.</em></li>
                    <li><strong>sprechen ÜBER</strong> + Akk = despre ceva concret/punctual: <em>Wir sprechen ÜBER das Wetter.</em></li>
                    <li><strong>sprechen VON</strong> + Dat = despre ceva în general/vag: <em>Sie spricht VON ihren Plänen.</em></li>
                </ul>
                <p style="margin-top: 8px;">📌 Diferența über/von: über = subiect specific · von = subiect general. La A2 vei vedea că über e mai des folosit.</p>
            </div>
        </div>
    </div>

    <!-- 2: BEI + Dat (loc, activitate) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🏢 3. Verbele cu BEI + Dativ (loc, activitate)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none"><source src="audio/03-verbe-bei.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Verbele de tip „a fi / a ajuta la"</h4>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>helfen bei</strong></td><td>a ajuta la (activitate)</td><td>Mihai hilft <strong>bei der</strong> Hausarbeit.</td><td><em style="color:#6b7280;">Mihai ajută la treburile casei.</em></td></tr>
                    <tr><td><strong>arbeiten bei</strong></td><td>a lucra la (companie)</td><td>Acar arbeitet <strong>bei</strong> Audi.</td><td><em style="color:#6b7280;">Acar lucrează la Audi.</em></td></tr>
                    <tr><td><strong>wohnen bei</strong></td><td>a locui la (cineva)</td><td>Andreea wohnt <strong>bei ihrer</strong> Tante.</td><td><em style="color:#6b7280;">Andreea locuiește la mătușa ei.</em></td></tr>
                    <tr><td><strong>sein bei</strong></td><td>a fi la (loc/persoană)</td><td>Florian ist <strong>beim</strong> Arzt.</td><td><em style="color:#6b7280;">Florian e la doctor.</em></td></tr>
                    <tr><td><strong>bleiben bei</strong></td><td>a rămâne cu/la</td><td>Carolina bleibt <strong>bei ihrer</strong> Entscheidung.</td><td><em style="color:#6b7280;">Carolina rămâne la decizia ei.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>📌 helfen — atenție: dublă construcție!</h4>
                <p><strong>helfen</strong> e un verb cu DATIV DIRECT (recap Lecția 14 A1 + Lecția 3 Atelier):</p>
                <ul style="margin-left: 18px;">
                    <li><strong>helfen + Dat (persoană)</strong> — Ich helfe DIR (te ajut · DIR = Dat).</li>
                    <li><strong>helfen + Dat + bei + Dat (activitate)</strong> — Ich helfe MEINER Mutter BEIM Kochen.</li>
                </ul>
                <p style="margin-top: 8px;">📌 Persoana ajutată e mereu Dativ direct. Activitatea la care ajuți cere bei + Dat.</p>
            </div>
        </div>
    </div>

    <!-- 3: VON + Dat (origine, sursă) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>📨 4. Verbele cu VON + Dativ (sursă, vis)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none"><source src="audio/04-verbe-von.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Verbele de tip „de la / despre / a primi"</h4>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>träumen von</strong></td><td>a visa la / despre</td><td>Andreea träumt <strong>von einer</strong> Reise.</td><td><em style="color:#6b7280;">Andreea visează la o călătorie.</em></td></tr>
                    <tr><td><strong>bekommen von</strong></td><td>a primi de la</td><td>Mihai bekommt ein Geschenk <strong>von</strong> Annette.</td><td><em style="color:#6b7280;">Mihai primește un cadou de la Annette.</em></td></tr>
                    <tr><td><strong>kommen von</strong></td><td>a veni de la (loc/persoană)</td><td>Florian kommt <strong>von der</strong> Arbeit.</td><td><em style="color:#6b7280;">Florian vine de la lucru.</em></td></tr>
                    <tr><td><strong>hören von</strong></td><td>a auzi de la / despre</td><td>Acar hat <strong>von</strong> Mihai gehört, dass...</td><td><em style="color:#6b7280;">Acar a auzit de la Mihai că...</em></td></tr>
                    <tr><td><strong>erzählen von</strong></td><td>a povesti despre (general)</td><td>Carolina erzählt <strong>von ihrer</strong> Reise.</td><td><em style="color:#6b7280;">Carolina povestește despre călătoria ei.</em></td></tr>
                    <tr><td><strong>wissen von</strong></td><td>a ști de / despre</td><td>Annette weiß <strong>von dem</strong> Problem.</td><td><em style="color:#6b7280;">Annette știe de problemă.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 erzählen VON vs ÜBER — capcană fină</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>erzählen von</strong> + Dat = povestire generală: <em>Erzähl VON deinem Urlaub!</em> (povestește despre concediu)</li>
                    <li><strong>erzählen über</strong> + Akk = subiect specific: <em>Erzähl mir ÜBER das letzte Mal!</em> (despre ultima dată specifică)</li>
                </ul>
                <p style="margin-top: 8px;">📌 La A1-A2 sunt aproape interschimbabile. „von" e mai frecvent în vorbire colocvială.</p>
            </div>
        </div>
    </div>

    <!-- 4: ZU + NACH + Dat (destinație, scop) -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎯 5. Verbele cu ZU și NACH + Dativ (destinație, scop)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none"><source src="audio/05-verbe-zu-nach.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box">
                <h4>Verbele cu ZU + Dativ (eveniment, scop)</h4>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>gratulieren zu</strong></td><td>a felicita pentru (eveniment)</td><td>Mihai gratuliert Andreea <strong>zum</strong> Geburtstag.</td><td><em style="color:#6b7280;">Mihai o felicită pe Andreea pentru ziua de naștere.</em></td></tr>
                    <tr><td><strong>einladen zu</strong></td><td>a invita la (eveniment)</td><td>Annette lädt alle <strong>zur</strong> Party ein.</td><td><em style="color:#6b7280;">Annette îi invită pe toți la petrecere.</em></td></tr>
                    <tr><td><strong>gehören zu</strong></td><td>a face parte din (NU posesie!)</td><td>Florian gehört <strong>zu unserer</strong> Familie.</td><td><em style="color:#6b7280;">Florian face parte din familia noastră.</em></td></tr>
                    <tr><td><strong>passen zu</strong></td><td>a se potrivi cu / la</td><td>Diese Bluse passt <strong>zu deiner</strong> Hose.</td><td><em style="color:#6b7280;">Bluza asta se potrivește cu pantalonii tăi.</em></td></tr>
                </table>
            </div>

            <div class="theory-box">
                <h4>Verbele cu NACH + Dativ (căutare, cerere)</h4>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Sens</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>fragen nach</strong></td><td>a întreba după / despre</td><td>Andreea fragt <strong>nach dem</strong> Weg.</td><td><em style="color:#6b7280;">Andreea întreabă de drum.</em></td></tr>
                    <tr><td><strong>suchen nach</strong></td><td>a căuta (atent)</td><td>Mihai sucht <strong>nach seinem</strong> Schlüssel.</td><td><em style="color:#6b7280;">Mihai își caută cheia.</em></td></tr>
                    <tr><td><strong>schmecken nach</strong></td><td>a avea gust de</td><td>Die Suppe schmeckt <strong>nach</strong> Knoblauch.</td><td><em style="color:#6b7280;">Supa are gust de usturoi.</em></td></tr>
                    <tr><td><strong>riechen nach</strong></td><td>a mirosi a</td><td>Das Zimmer riecht <strong>nach</strong> Kaffee.</td><td><em style="color:#6b7280;">Camera miroase a cafea.</em></td></tr>
                </table>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 gehören — 2 sensuri diferite!</h4>
                <ul style="margin-left: 18px;">
                    <li><strong>gehören + Dat direct</strong> = a aparține (posesie): <em>Das Buch gehört MIR</em> (cartea îmi aparține)</li>
                    <li><strong>gehören ZU + Dat</strong> = a face parte din (grup): <em>Er gehört ZU unserer Familie</em> (face parte din familia noastră)</li>
                </ul>
                <p style="margin-top: 8px;">📌 Same verb, 2 construcții — atenție la sensul exact.</p>
            </div>
        </div>
    </div>

    <!-- 5: CONTRAST verbe Akk-prepoziție + sinteză + dialog + recap MASIV -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>🎬 6. Contrast Akk-prepoziție + sinteză + RECAP MASIV atelier</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none"><source src="audio/06-contrast-sinteza-final.mp3" type="audio/mpeg"></audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă subsecțiunea</span>
            </div>

            <div class="theory-box" style="background: #fef3c7;">
                <h4>🚨 Contrast: verbele care cer Akkusativ (NU Dativ)!</h4>
                <p>Există verbe care vin cu prepoziție Wechselpräp + <strong>Akkusativ</strong> — capcana clasică. Le includem aici pentru contrast clar:</p>
                <table class="grammar-table">
                    <tr><th>Verb + Präp</th><th>Caz</th><th>Exemplu</th><th>Traducere RO</th></tr>
                    <tr><td><strong>warten auf</strong></td><td>Akk!</td><td>Mihai wartet <strong>auf den</strong> Bus.</td><td><em style="color:#6b7280;">Mihai așteaptă autobuzul. (NU „auf dem"!)</em></td></tr>
                    <tr><td><strong>denken an</strong></td><td>Akk!</td><td>Andreea denkt <strong>an ihre</strong> Familie.</td><td><em style="color:#6b7280;">Andreea se gândește la familia ei.</em></td></tr>
                    <tr><td><strong>sich freuen auf</strong></td><td>Akk!</td><td>Carolina freut sich <strong>auf den</strong> Urlaub.</td><td><em style="color:#6b7280;">Carolina abia așteaptă concediul.</em></td></tr>
                    <tr><td><strong>sich freuen über</strong></td><td>Akk!</td><td>Florian freut sich <strong>über das</strong> Geschenk.</td><td><em style="color:#6b7280;">Florian se bucură de cadou.</em></td></tr>
                    <tr><td><strong>sich erinnern an</strong></td><td>Akk!</td><td>Acar erinnert sich <strong>an seine</strong> Kindheit.</td><td><em style="color:#6b7280;">Acar își amintește de copilăria lui.</em></td></tr>
                    <tr><td><strong>sich interessieren für</strong></td><td>Akk!</td><td>Annette interessiert sich <strong>für die</strong> Geschichte.</td><td><em style="color:#6b7280;">Annette se interesează de istorie.</em></td></tr>
                </table>
                <p style="margin-top: 8px;">📌 Toate aceste verbe sunt foarte des folosite. Memorezi <strong>verb + prepoziție + caz</strong> ca un pachet.</p>
            </div>

            <div class="theory-box">
                <h4>🦋 Cele 6 personaje, fiecare cu un verb + prepoziție specifică</h4>
            </div>

            <div class="dialog-box">
                <div class="dialog-line">
                    <img src="images/mihai.png" alt="Mihai" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Mihai (sprechen mit + helfen bei)</div>
                        <div class="dialog-text">Ich <strong>spreche mit meinen</strong> Kunden, und Annette <strong>hilft mir beim</strong> Service.
                            <span class="translation">Vorbesc cu clienții mei, iar Annette mă ajută la service. (mit + Dat · bei + Dat)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/andreea.png" alt="Andreea" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Andreea (träumen von + denken an)</div>
                        <div class="dialog-text">Ich <strong>träume von einer</strong> Reise nach Italien. Aber gerade <strong>denke ich an</strong> meine Prüfung.
                            <span class="translation">Visez la o călătorie în Italia. Dar acum mă gândesc la examenul meu. (von + Dat · an + Akk! capcană!)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/florian.png" alt="Florian" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Florian (warten auf + sich freuen über)</div>
                        <div class="dialog-text">Ich <strong>warte auf</strong> meinen Patient. Und ich <strong>freue mich über</strong> jeden Erfolg.
                            <span class="translation">Aștept pacientul meu. Și mă bucur de fiecare succes. (auf + Akk! · über + Akk!)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/carolina.png" alt="Carolina" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Carolina (sich treffen mit + erzählen von)</div>
                        <div class="dialog-text">Ich <strong>treffe mich mit meiner</strong> Freundin und <strong>erzähle von meinem</strong> neuen Atelier.
                            <span class="translation">Mă întâlnesc cu prietena mea și povestesc despre noul meu atelier. (mit + Dat · von + Dat)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/acar.png" alt="Acar" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Acar (arbeiten bei + sich erinnern an)</div>
                        <div class="dialog-text">Ich <strong>arbeite bei</strong> einer großen Firma. Ich <strong>erinnere mich an</strong> meine Anfänge auf șantier.
                            <span class="translation">Lucrez la o firmă mare. Îmi amintesc de începuturile mele pe șantier. (bei + Dat · an + Akk!)</span>
                        </div>
                    </div>
                </div>
                <div class="dialog-line">
                    <img src="images/annette.png" alt="Annette" class="dialog-avatar">
                    <div class="dialog-bubble">
                        <div class="dialog-speaker">Annette (gratulieren zu + einladen zu)</div>
                        <div class="dialog-text">Heute <strong>gratuliere ich</strong> Andreea <strong>zum</strong> Abschluss und <strong>lade alle zur</strong> Feier <strong>ein</strong>.
                            <span class="translation">Azi o felicit pe Andreea pentru absolvire și îi invit pe toți la sărbătoare. (zu + Dat · zu + Dat)</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="theory-box" style="background: #d1fae5;">
                <h4>🏆 RECAP MASIV — tot Atelierul de Aprofundare Dativ în 4 reguli</h4>
                <ol style="margin-left: 18px;">
                    <li>📍 <strong>Wo? = Dat</strong> (poziție) · <strong>Wohin? = Akk</strong> (mișcare spre) · <strong>Woher? = Dat</strong> (mișcare dinspre · cu aus/von)</li>
                    <li>🟢 <strong>16 prepoziții Dativ</strong>: 9 Wechselpräp în Wo? (in/an/auf/vor/hinter/über/unter/neben/zwischen) + 7 fixe (mit/zu/bei/von/aus/nach/seit)</li>
                    <li>🪨 <strong>12 Stolpersteine</strong>: nach/zu Hause · bei vs zu cu persoane · beim + activitate · țări cu/fără articol · materiale · seit/vor temporale · mit/für/gegen · Sein/arbeiten bei/als pentru meserie+companie</li>
                    <li>🤝 <strong>Verb + prepoziție fixă</strong>: memorezi verbul ÎMPREUNĂ cu prepoziția (sprechen mit · helfen bei · träumen von · gratulieren zu · warten AUF (Akk!) · denken AN (Akk!))</li>
                </ol>
                <p style="margin-top: 12px; text-align: center; font-weight: bold; color: #065f46;">🎉 BRAVO! Ai terminat ATELIERUL COMPLET de Aprofundare Dativ — 4 lecții, 16 prepoziții, 12 capcane, 20+ verbe-pattern. Dativul german n-are secrete pentru tine. 🛠️🦋🏆</p>
            </div>
        </div>
    </div>
`;

document.getElementById('theory-container').innerHTML = theoryHTML;

function toggleSubSection(index) {
    const content = document.getElementById('sub-section-' + index);
    const arrow = document.querySelectorAll('.sub-arrow')[index];
    if (content) content.classList.toggle('active');
    if (arrow) arrow.classList.toggle('rotated');
}
