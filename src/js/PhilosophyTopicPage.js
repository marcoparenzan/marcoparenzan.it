export class PhilosophyTopicPage {
  constructor() {
    this.topics = [
      {
        slug: 'aristotele', folder: 'Foundations', title: 'Aristotele', label: 'Fondamenti', number: '01',
        thesis: 'Pensare il software significa anche classificare, distinguere proprietà e comprendere in che modo una cosa permane mentre cambia.',
        summary: 'Categorie, sostanza, forma, materia, atto e potenza offrono un vocabolario utile per interrogare i modelli software. Non sono pattern da applicare meccanicamente, ma strumenti per rendere esplicite le domande che precedono il codice.',
        questions: ['Che cosa rende un oggetto proprio quell’oggetto?', 'Quali proprietà sono essenziali e quali accidentali?', 'Come rappresentare identità, mutamento e possibilità?', 'Una classificazione descrive il mondo o il nostro punto di vista?'],
        bridge: 'Dalle categorie aristoteliche si passa al problema dell’ente: prima di scegliere classi e tabelle occorre chiedersi che cosa stiamo affermando esista nel modello.'
      },
      {
        slug: 'ente', folder: 'Foundations', title: 'L’ente', label: 'Ontologia', number: '02',
        thesis: 'Ogni modello software prende posizione su ciò che esiste nel dominio, anche quando questa decisione rimane implicita.',
        summary: 'Un cliente, un ordine, un pagamento e una promessa non esistono nello stesso modo. Modellare l’ente significa distinguere identità, eventi, valori, relazioni, ruoli e processi senza ridurli prematuramente a strutture dati.',
        questions: ['Quali entità riconosce il dominio?', 'Che cosa possiede identità nel tempo?', 'Che cosa è un valore e che cosa è una relazione?', 'Quali enti sono scoperti e quali costruiti dal sistema?'],
        bridge: 'Riconoscere gli enti conduce al domain: lo spazio di significati, regole e pratiche nel quale le parole del software acquistano senso.'
      },
      {
        slug: 'metafore', folder: 'Foundations', title: 'Le metafore', label: 'Comprensione', number: '03',
        thesis: 'Le metafore non decorano il software: selezionano ciò che vediamo, suggeriscono operazioni e nascondono alternative.',
        summary: 'Parliamo di code, pipeline, alberi, bus, cloud e orchestrazione. Ogni metafora trasferisce una struttura nota verso un problema nuovo. È potente quando illumina il modello, pericolosa quando viene scambiata per il dominio stesso.',
        questions: ['Quale struttura trasferisce la metafora?', 'Quali comportamenti rende naturali?', 'Che cosa nasconde o distorce?', 'Quando una metafora deve essere abbandonata?'],
        bridge: 'Le metafore alimentano il linguaggio condiviso del team, ma devono essere verificate continuamente contro il domain reale.'
      },
      {
        slug: 'domain', folder: 'Software', title: 'Il domain', label: 'Conoscenza', number: '04',
        thesis: 'Il domain non è un insieme di tabelle: è il campo di attività, conoscenze, regole, tensioni e parole nel quale il software interviene.',
        summary: 'Comprendere il dominio richiede dialogo con chi lo vive, osservazione dei processi e attenzione alle eccezioni. Il modello è una teoria operativa e selettiva del domain, costruita per uno scopo e soggetta a revisione.',
        questions: ['Quale problema stiamo davvero cercando di risolvere?', 'Chi possiede la conoscenza rilevante?', 'Dove cambiano significato le stesse parole?', 'Quali regole esprimono il cuore del sistema?'],
        bridge: 'Il domain chiede un linguaggio adeguato: nomi, tipi e costrutti determinano quanto chiaramente il modello può essere espresso.'
      },
      {
        slug: 'espressivita-linguaggi', folder: 'Software', title: 'L’espressività dei linguaggi', label: 'Rappresentazione', number: '05',
        thesis: 'Un linguaggio di programmazione non serve soltanto a impartire istruzioni: delimita ciò che è facile nominare, combinare e verificare.',
        summary: 'Tipi, funzioni, oggetti, pattern matching, effetti e vincoli influenzano il modo in cui pensiamo una soluzione. L’espressività non coincide con la quantità di feature: riguarda la distanza tra intenzione del dominio e forma del programma.',
        questions: ['Quanto codice separa l’intenzione dalla sua espressione?', 'Quali invarianti può rendere espliciti il type system?', 'Quali concetti restano convenzioni informali?', 'La sintassi sostiene o oscura il linguaggio del dominio?'],
        bridge: 'Object Orientation è una delle risposte storiche al problema: modellare sistemi come comunità di oggetti dotati di responsabilità.'
      },
      {
        slug: 'object-orientation', folder: 'Software', title: 'Object Orientation', label: 'Paradigma', number: '06',
        thesis: 'L’orientamento agli oggetti è prima di tutto un modo di distribuire conoscenza, comportamento e responsabilità, non una sintassi di classi.',
        summary: 'Messaggi, incapsulamento, identità e polimorfismo permettono di descrivere collaborazioni. Un modello a oggetti perde forza quando gli oggetti diventano contenitori passivi e tutta la conoscenza migra nei servizi procedurali.',
        questions: ['Chi possiede la responsabilità di una decisione?', 'Quale informazione deve restare nascosta?', 'Gli oggetti collaborano o sono soltanto record?', 'Il polimorfismo esprime una variazione reale del dominio?'],
        bridge: 'Domain-Driven Design raccoglie questa sensibilità e la inserisce in una disciplina più ampia di scoperta, linguaggio e confini del modello.'
      },
      {
        slug: 'domain-driven-design', folder: 'Software', title: 'Domain-Driven Design', label: 'Pratica', number: '07',
        thesis: 'DDD tratta lo sviluppo come un processo continuo di apprendimento nel quale linguaggio, modello e implementazione evolvono insieme.',
        summary: 'Ubiquitous Language, bounded context, aggregate, entity, value object ed evento di dominio sono strumenti al servizio di una strategia: concentrare l’investimento modellistico dove la complessità del business produce differenza.',
        questions: ['Qual è il core domain?', 'Dove servono confini linguistici e di modello?', 'Quali invarianti protegge un aggregate?', 'Il codice restituisce fedelmente le conversazioni del team?'],
        bridge: 'Il percorso torna così all’ontologia: ogni bounded context dichiara quali enti riconosce e quale significato attribuisce loro.'
      }
    ];
  }

  init() {
    const host = document.querySelector('[data-philosophy-topic]');
    if (!host) return;
    const topic = this.topics.find(({ slug }) => slug === host.dataset.philosophyTopic);
    if (!topic) return;
    const index = this.topics.indexOf(topic);
    const previous = this.topics[(index - 1 + this.topics.length) % this.topics.length];
    const next = this.topics[(index + 1) % this.topics.length];
    const pathTo = (target) => target.folder === topic.folder ? `${target.slug}.html` : `../${target.folder}/${target.slug}.html`;
    host.innerHTML = `<section class="thought-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="../index.html" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-gold">← Filosofia e Software</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-gold">${topic.number} / ${topic.label}</p><h1 class="mt-5 max-w-5xl font-serif text-6xl leading-[.9] tracking-[-.045em] sm:text-8xl">${topic.title}<span class="text-redink">.</span></h1><p class="mt-9 max-w-3xl text-xl italic leading-relaxed text-paper/65">«${topic.thesis}»</p></div></section>
    <section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_.5fr] lg:px-8"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-redink">Dal pensiero al codice</p><h2 class="mt-4 text-3xl font-semibold">Una lente per lo sviluppo.</h2><p class="mt-6 text-lg leading-relaxed text-paper/60">${topic.summary}</p><div class="mt-12 border-l-2 border-gold pl-6"><p class="font-mono text-xs uppercase tracking-widest text-gold">Connessione</p><p class="mt-4 leading-relaxed text-paper/60">${topic.bridge}</p></div></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Domande di lavoro</p><ol class="mt-6 space-y-5">${topic.questions.map((question, i) => `<li class="border-t border-white/10 pt-4"><span class="mr-3 font-mono text-xs text-gold">${String(i + 1).padStart(2, '0')}</span>${question}</li>`).join('')}</ol></aside></section>
    <section class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto max-w-7xl px-5 py-14 lg:px-8"><p class="font-mono text-xs uppercase tracking-widest text-redink">Taccuino aperto</p><p class="mt-4 max-w-3xl text-paper/50">Spazio predisposto per note, riferimenti, esempi di codice e collegamenti tra testi filosofici e pratiche di modellazione.</p></div></section><nav class="mx-auto grid max-w-7xl gap-4 px-5 py-16 sm:grid-cols-2 lg:px-8"><a href="${pathTo(previous)}" class="border border-white/15 p-6 hover:border-gold"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">← Precedente</span><strong class="mt-3 block font-serif text-2xl">${previous.title}</strong></a><a href="${pathTo(next)}" class="border border-white/15 p-6 text-right hover:border-gold"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Successivo →</span><strong class="mt-3 block font-serif text-2xl">${next.title}</strong></a></nav>`;
  }
}
