export class IndustrialIoTTopicPage {
  constructor() {
    this.topics = [
      {
        slug: 'unified-namespace', title: 'Unified Namespace', number: '08', area: 'Architettura dati',
        lead: 'Un livello condiviso e in tempo reale nel quale i sistemi industriali pubblicano informazioni contestualizzate e consumabili senza integrazioni punto-punto.',
        summary: 'Lo Unified Namespace, spesso abbreviato UNS, è un pattern architetturale: non un singolo prodotto. Organizza eventi e stato operativo in una struttura coerente, generalmente distribuita tramite un’infrastruttura publish/subscribe.',
        concepts: ['Single source of truth operativa', 'Event-driven architecture', 'Topic namespace gerarchico', 'Dati contestualizzati', 'Disaccoppiamento tra producer e consumer', 'Governance di nomi e payload'],
        flow: 'PLC, sensori e applicazioni → edge gateway → broker MQTT / UNS → MES, analytics, cloud e applicazioni.',
        relation: 'MQTT è un trasporto frequente per uno UNS; ISA-95 può ispirare la gerarchia, mentre ontologie e modelli di dominio aggiungono significato.',
        source: 'https://www.hivemq.com/blog/understanding-the-unified-namespace/'
      },
      {
        slug: 'mqtt', title: 'MQTT', number: '09', area: 'Messaging',
        lead: 'Un protocollo publish/subscribe leggero, progettato per distribuire messaggi in modo efficiente tra client attraverso un broker.',
        summary: 'MQTT separa chi produce un messaggio da chi lo consuma. Topic, livelli QoS, retained message, sessioni e Last Will permettono di adattare la comunicazione a reti e dispositivi con caratteristiche differenti.',
        concepts: ['Broker e client', 'Topic e wildcard', 'QoS 0, 1 e 2', 'Retained message', 'Session expiry e Last Will', 'Sicurezza TLS e autenticazione'],
        flow: 'Publisher → broker MQTT → subscription e filtri topic → uno o più consumer.',
        relation: 'Può sostenere uno Unified Namespace, trasportare dati dall’edge di Azure IoT Operations e distribuire eventi industriali in tempo reale.',
        source: 'https://mqtt.org/'
      },
      {
        slug: 'time-series', title: 'Time Series', number: '10', area: 'Dati temporali',
        lead: 'Misure ed eventi ordinati nel tempo, nei quali timestamp, frequenza, qualità e contesto sono parte essenziale del significato.',
        summary: 'I dati IoT sono spesso serie temporali: temperatura, pressione, vibrazione, stato o produzione. Modello, storage e query devono considerare campionamento, ritardi, dati mancanti, aggregazioni e conservazione.',
        concepts: ['Event time e ingestion time', 'Sampling e resampling', 'Window e aggregazioni', 'Missing data e data quality', 'Retention e downsampling', 'Trend, stagionalità e correlazione'],
        flow: 'Segnale → timestamp e qualità → ingestion → time-series storage → aggregazione, visualizzazione e modelli.',
        relation: 'Le time series alimentano KPI ISO 22400 e anomaly detection; Microsoft Fabric può acquisirle e analizzarle con Real-Time Intelligence.',
        source: 'https://learn.microsoft.com/fabric/real-time-intelligence/time-series-model-builder/overview'
      },
      {
        slug: 'anomaly-detection', title: 'Anomaly Detection', number: '11', area: 'Analytics',
        lead: 'Tecniche per individuare comportamenti inattesi rispetto alla normalità di un processo, di un asset o di una serie temporale.',
        summary: 'Un’anomalia non coincide automaticamente con un guasto. Soglie, metodi statistici e machine learning devono essere interpretati nel contesto operativo, gestendo stagionalità, drift e costi di falsi positivi e falsi negativi.',
        concepts: ['Soglie statiche e dinamiche', 'Point, contextual e collective anomaly', 'Baseline e stagionalità', 'Multivariate detection', 'Concept drift', 'Precision, recall e feedback operativo'],
        flow: 'Time series contestualizzate → feature e baseline → detector → score → alert, diagnosi e azione.',
        relation: 'Dipende dalla qualità delle time series e dal contesto di asset, processo e KPI; lo UNS può distribuire risultati e stato rilevato.',
        source: 'https://learn.microsoft.com/fabric/real-time-intelligence/event-streams/transform-and-stream-real-time-events-to-activate'
      },
      {
        slug: 'isa-95', title: 'ISA-95', number: '12', area: 'Standard industriale',
        lead: 'Un modello di riferimento per integrare sistemi enterprise e sistemi di controllo della produzione, chiarendo livelli, responsabilità e scambi informativi.',
        summary: 'ISA-95 descrive modelli e terminologia tra business planning, manufacturing operations e controllo. È utile per ragionare sui confini tra ERP, MES/MOM, SCADA e automazione senza trasformare i livelli in una topologia rigida.',
        concepts: ['Enterprise–control system integration', 'Modello gerarchico dei livelli', 'Personnel, equipment, material e process segment', 'Production capability e schedule', 'Performance e actual', 'Confini ERP, MOM/MES e controllo'],
        flow: 'Business planning e logistics ↔ manufacturing operations management ↔ controllo, supervisione e processo fisico.',
        relation: 'Può strutturare il contesto di uno UNS e fornisce concetti operativi collegati ai KPI definiti dalla serie ISO 22400.',
        source: 'https://www.isa.org/standards-and-publications/isa-standards/isa-95-standard'
      },
      {
        slug: 'iso-22400', title: 'ISO 22400', number: '13', area: 'KPI manifatturieri',
        lead: 'Una serie di standard per definire e utilizzare indicatori chiave di prestazione nelle operazioni manifatturiere.',
        summary: 'ISO 22400 propone un vocabolario e formule coerenti per i KPI di manufacturing operations management. L’obiettivo è rendere indicatori, elementi di calcolo e contesto comprensibili e confrontabili.',
        concepts: ['KPI per manufacturing operations', 'Content model del KPI', 'Elementi, unità e formule', 'Disponibilità, qualità e performance', 'Contesto e periodo di analisi', 'Relazione con i modelli ISA-95'],
        flow: 'Eventi e misure di produzione → elementi KPI contestualizzati → calcolo → analisi e decisione operativa.',
        relation: 'Trasforma time series ed eventi in indicatori operativi; ISA-95 aiuta a collocarli nella struttura produttiva e organizzativa.',
        source: 'https://www.iso.org/standard/54497.html'
      },
      {
        slug: 'siemens-s7', title: 'Siemens S7', number: '14', area: 'Automazione e PLC',
        lead: 'Una famiglia di controllori SIMATIC ampiamente utilizzata nell’automazione industriale e spesso al centro dell’acquisizione dati OT.',
        summary: 'Integrare un PLC S7 richiede di distinguere famiglia hardware, ambiente TIA Portal, organizzazione dei data block, protocolli disponibili e requisiti di sicurezza. L’accesso ai dati deve rispettare il controllo deterministico del processo.',
        concepts: ['SIMATIC S7-1200 e S7-1500', 'TIA Portal', 'Data block, tag e tipi', 'PROFINET e comunicazione S7', 'OPC UA secondo CPU e configurazione', 'Segmentazione e sicurezza OT'],
        flow: 'Sensori e attuatori ↔ PLC S7 → OPC UA, gateway o connettore edge → UNS, historian e cloud.',
        relation: 'È una sorgente OT concreta: OPC UA o gateway possono contestualizzarne i dati e pubblicarli via MQTT verso lo Unified Namespace.',
        source: 'https://www.siemens.com/global/en/products/automation/systems/industrial/plc.html'
      }
    ];
  }

  init() {
    const host = document.querySelector('[data-industrial-iot-topic]');
    if (!host) return;
    const index = this.topics.findIndex(({ slug }) => slug === host.dataset.industrialIotTopic);
    if (index < 0) return;
    const topic = this.topics[index];
    const previous = this.topics[(index - 1 + this.topics.length) % this.topics.length];
    const next = this.topics[(index + 1) % this.topics.length];
    host.innerHTML = `<section class="iot-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="index.html#industrial" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-lime">← Mappa IoT</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-lime">${topic.number} / ${topic.area}</p><h1 class="mt-5 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.055em] sm:text-8xl">${topic.title}<span class="text-azure">.</span></h1><p class="mt-8 max-w-3xl text-xl leading-relaxed text-paper/65">${topic.lead}</p></div></section><section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_.48fr] lg:px-8"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-azure">In breve</p><h2 class="mt-4 text-3xl font-semibold">Il ruolo nell’Industrial IoT.</h2><p class="mt-6 text-lg leading-relaxed text-paper/60">${topic.summary}</p><div class="mt-12"><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">Flusso essenziale</p><p class="mt-5 border-l-2 border-lime pl-6 font-mono text-sm leading-7 text-paper/70">${topic.flow}</p></div></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Concetti chiave</p><ol class="mt-6 space-y-4">${topic.concepts.map((item, i) => `<li class="flex gap-4 border-t border-white/10 pt-4"><span class="font-mono text-xs text-lime">${String(i + 1).padStart(2, '0')}</span><span>${item}</span></li>`).join('')}</ol></aside></section><section class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[.3fr_1fr] lg:px-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-azure">Connessioni</p><p class="text-xl leading-relaxed text-paper/65">${topic.relation}</p></div></section><section class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div class="grid gap-4 sm:grid-cols-2"><a href="${previous.slug}.html" class="border border-white/15 p-6 hover:border-lime"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">← Precedente</span><strong class="mt-3 block text-xl">${previous.title}</strong></a><a href="${next.slug}.html" class="border border-white/15 p-6 text-right hover:border-lime"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Successivo →</span><strong class="mt-3 block text-xl">${next.title}</strong></a></div><a href="${topic.source}" target="_blank" rel="noopener noreferrer" class="mt-5 block border border-dashed border-white/20 p-6 font-mono text-xs uppercase tracking-widest text-azure">Fonte e documentazione ↗</a></section>`;
  }
}
