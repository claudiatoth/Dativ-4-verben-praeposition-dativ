// ============================================
// VERB-KONJUGATION - Atelier Dativ — Lecția 4: Verben + Präposition + Dativ
// Claudia Toth · 4 verbe-cheie cu prepoziții specifice
// sprechen (recap tare mit/über/von) · helfen (recap tare +Dat direct +bei) ·
// gratulieren (NEW slab +Dat +zu) · einladen (NEW tare separabil +Akk +zu)
// Toate verificate PONS
// ============================================

const verbsData = [
    {
        inf: 'sprechen', ro: 'a vorbi · mit (cu cineva) / über+Akk (despre) / von (general)', typ: 'tare / neregulat (e → i)', aux: 'haben', part: 'gesprochen',
        praes: [['ich','spreche','vorbesc'],['du','sprichst','vorbești'],['er/sie/es','spricht','vorbește'],['wir','sprechen','vorbim'],['ihr','sprecht','vorbiți'],['sie/Sie','sprechen','vorbesc']],
        praet: [['ich','sprach','vorbeam'],['du','sprachst','vorbeai'],['er/sie/es','sprach','vorbea'],['wir','sprachen','vorbeam'],['ihr','spracht','vorbeați'],['sie/Sie','sprachen','vorbeau']],
        perf: [['ich','habe gesprochen','am vorbit'],['du','hast gesprochen','ai vorbit'],['er/sie/es','hat gesprochen','a vorbit'],['wir','haben gesprochen','am vorbit'],['ihr','habt gesprochen','ați vorbit'],['sie/Sie','haben gesprochen','au vorbit']],
        note: 'TARE: e → i la pers II/III (du sprichst, er spricht) · Präteritum sprach · Partizip gesprochen. 3 prepoziții asociate: sprechen MIT + Dat (cu cineva) · sprechen ÜBER + Akk (subiect specific) · sprechen VON + Dat (subiect general/vag). Verificat PONS.'
    },
    {
        inf: 'helfen', ro: '🚨 a ajuta · + DATIV DIRECT (persoană) · + bei + Dat (activitate)', typ: 'tare / neregulat (e → i)', aux: 'haben', part: 'geholfen',
        praes: [['ich','helfe','ajut'],['du','hilfst','ajuți'],['er/sie/es','hilft','ajută'],['wir','helfen','ajutăm'],['ihr','helft','ajutați'],['sie/Sie','helfen','ajută']],
        praet: [['ich','half','ajutam'],['du','halfst','ajutai'],['er/sie/es','half','ajuta'],['wir','halfen','ajutam'],['ihr','halft','ajutați'],['sie/Sie','halfen','ajutau']],
        perf: [['ich','habe geholfen','am ajutat'],['du','hast geholfen','ai ajutat'],['er/sie/es','hat geholfen','a ajutat'],['wir','haben geholfen','am ajutat'],['ihr','habt geholfen','ați ajutat'],['sie/Sie','haben geholfen','au ajutat']],
        note: '🚨 TARE e → i: du HILFST, er HILFT (recap Lecția 14 A1). Construcție DUBLĂ: helfen + DATIV DIRECT (persoană: „Ich helfe DIR") + bei + Dat (activitate: „beim Kochen"). Exemplu complet: „Mihai hilft SEINER MUTTER BEIM Kochen". NU spui „helfen FÜR" sau „helfen MIT"! Verificat PONS.'
    },
    {
        inf: 'gratulieren', ro: 'a felicita · + DATIV (persoană) + zu + Dat (eveniment)', typ: 'slab / regulat (-ieren)', aux: 'haben', part: 'gratuliert',
        praes: [['ich','gratuliere','felicit'],['du','gratulierst','feliciti'],['er/sie/es','gratuliert','felicită'],['wir','gratulieren','felicităm'],['ihr','gratuliert','felicitați'],['sie/Sie','gratulieren','felicită']],
        praet: [['ich','gratulierte','felicitam'],['du','gratuliertest','felicitai'],['er/sie/es','gratulierte','felicita'],['wir','gratulierten','felicitam'],['ihr','gratuliertet','felicitați'],['sie/Sie','gratulierten','felicitau']],
        perf: [['ich','habe gratuliert','am felicitat'],['du','hast gratuliert','ai felicitat'],['er/sie/es','hat gratuliert','a felicitat'],['wir','haben gratulieren','am felicitat'],['ihr','habt gratuliert','ați felicitat'],['sie/Sie','haben gratuliert','au felicitat']],
        note: 'REGULAT -ieren → Partizip FĂRĂ ge- (gratuliert, NU gegratuliert!). Construcție DUBLĂ: gratulieren + DATIV (persoană) + ZU + Dat (eveniment). Exemplu: „Ich gratuliere DIR ZUM Geburtstag" (te felicit pentru ziua de naștere). Forma contrasă: zu+dem=zum / zu+der=zur. Verificat PONS.'
    },
    {
        inf: 'einladen', ro: 'a invita · + AKK (persoană) + zu + Dat (eveniment)', typ: 'tare / neregulat + separabil (e → ä)', aux: 'haben', part: 'eingeladen',
        praes: [['ich','lade ein','invit'],['du','lädst ein','inviți'],['er/sie/es','lädt ein','invită'],['wir','laden ein','invităm'],['ihr','ladet ein','invitați'],['sie/Sie','laden ein','invită']],
        praet: [['ich','lud ein','invitam'],['du','ludst ein','invitai'],['er/sie/es','lud ein','invita'],['wir','luden ein','invitam'],['ihr','ludet ein','invitați'],['sie/Sie','luden ein','invitau']],
        perf: [['ich','habe eingeladen','am invitat'],['du','hast eingeladen','ai invitat'],['er/sie/es','hat eingeladen','a invitat'],['wir','haben eingeladen','am invitat'],['ihr','habt eingeladen','ați invitat'],['sie/Sie','haben eingeladen','au invitat']],
        note: '🚨 TARE + SEPARABIL: prefixul „ein" se desparte (ich lade EIN) și revine la Partizip (EIN-ge-laden — atenție: ge intră ÎNTRE ein și -laden!). Schimbare vocală: ich lade, du LÄDST (ä!), er LÄDT (ä!). Präteritum complet schimbat: LUD ein. Construcție DUBLĂ: einladen + AKKUSATIV (persoană) + ZU + Dat (eveniment). Exemplu: „Ich lade DICH ZUR Party EIN". 🚨 Atenție: persoana e ACUSATIV (NU Dat ca la gratulieren)! Verificat PONS.'
    }
];

function tenseTable(title, rows) {
    let r = '';
    rows.forEach(function (x) {
        r += '<tr><td><strong>' + x[0] + '</strong></td><td>' + x[1] + '</td><td><em style="color:#6b7280;">' + x[2] + '</em></td></tr>';
    });
    return '<div class="theory-box" style="margin:8px 0;"><h4>' + title + '</h4><table class="grammar-table"><tr><th>Pronume</th><th>Germană</th><th>Traducere RO</th></tr>' + r + '</table></div>';
}

function perfektCompact(v) {
    var ex = v.perf[2] || v.perf[0];
    var hint = '<small style="color:#6b7280;">Conjugi auxiliarul ca de obicei (ich habe, du hast, er hat...) + <strong>' + v.part + '</strong>.</small>';
    return '<div class="theory-box" style="margin:8px 0; background:#d1fae5;">' +
        '<h4>Perfekt (pe scurt)</h4>' +
        '<p style="margin:0;">Auxiliar <strong>' + v.aux + '</strong> + participiul <strong>' + v.part + '</strong><br>' +
        '<em>Exemplu:</em> ' + ex[0] + ' <strong>' + ex[1] + '</strong> · <em style="color:#6b7280;">' + ex[2] + '</em><br>' +
        hint + '</p></div>';
}

function buildVerbs() {
    const container = document.getElementById('verbs-container');
    if (!container) return;
    let html = '' +
        '<div class="exercise-instruction">' +
        '<strong>🔁 ' + verbsData.length + ' verbe — pattern verb + prepoziție Dativ.</strong> Toate verificate PONS.<br>' +
        'Click pe un verb ca să-i vezi conjugarea + capcanele de prepoziție.' +
        '</div>';

    html += '<div class="andreea-note" style="margin:12px 0;">' +
        '<img src="images/andreea.png" alt="Andreea" class="andreea-note-avatar">' +
        '<div class="andreea-note-content">' +
        '<div class="speaker">Andreea îți spune:</div>' +
        '<div class="text">„Cele 4 verbe-cheie ale lecției finale: <strong>sprechen</strong> (3 prepoziții diferite: mit/über/von) · <strong>helfen</strong> (Dat direct + bei activitate) · <strong>gratulieren</strong> (Dat persoană + zu eveniment) · <strong>einladen</strong> (🚨 Akk persoană + zu eveniment — separabil tare!). La A2 vei vedea sute de combinații verb+prep — pattern-ul rămâne: memorezi PACHETUL verb+prep+caz. 🦋🎓"</div>' +
        '</div></div>';

    verbsData.forEach(function (v, i) {
        const badge = v.typ.indexOf('tare') === 0 ? '#dc2626' : '#047857';
        html += '' +
            '<div class="sub-section">' +
            '<div class="sub-section-header" onclick="toggleVerb(' + i + ')">' +
            '<span>🔹 ' + v.inf + ' — <em>' + v.ro + '</em> · <strong style="color:' + badge + ';">' + v.typ + '</strong> · Perfekt cu <strong>' + v.aux + '</strong></span>' +
            '<span class="sub-arrow">▼</span>' +
            '</div>' +
            '<div class="sub-section-content" id="verb-' + i + '">' +
            tenseTable('Präsens (prezent)', v.praes) +
            tenseTable('Präteritum (imperfect)', v.praet) +
            perfektCompact(v) +
            (v.note ? '<div class="theory-box" style="background:#fef3c7;"><p style="margin:0;"><strong>⚠️ </strong>' + v.note + '</p></div>' : '') +
            '</div></div>';
    });

    container.innerHTML = html;
}

function toggleVerb(i) {
    const c = document.getElementById('verb-' + i);
    if (c) c.classList.toggle('active');
    const headers = document.querySelectorAll('#verbs-container .sub-section-header .sub-arrow');
    if (headers[i]) headers[i].classList.toggle('rotated');
}

buildVerbs();
