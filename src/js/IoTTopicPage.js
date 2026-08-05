export class IoTTopicPage {
  constructor() {
    this.topics = [
      {
        slug: 'azure-iot-hub', number: '01', eyebrow: 'Cloud ingestion', title: 'Azure IoT Hub', accent: 'azure',
        lead: 'Un punto di comunicazione gestito, sicuro e bidirezionale tra una flotta di dispositivi IoT e il cloud Azure.',
        summary: 'IoT Hub astrae la complessità della connettività su larga scala: identifica ogni dispositivo, riceve telemetria, invia comandi e permette di osservare lo stato desiderato e quello riportato.',
        concepts: ['Identità per dispositivo e autenticazione', 'Telemetria device-to-cloud', 'Comandi e messaggi cloud-to-device', 'Device twin e proprietà sincronizzate', 'Routing verso servizi downstream', 'Provisioning e gestione della flotta'],
        architecture: 'Dispositivo → protocollo MQTT/AMQP/HTTPS → Azure IoT Hub → routing → elaborazione, storage e analytics.',
        relation: 'È la porta cloud del percorso IoT: può inoltrare eventi a Event Grid e alimentare pipeline analitiche in Microsoft Fabric.',
        official: 'https://learn.microsoft.com/azure/iot-hub/'
      },
      {
        slug: 'azure-event-grid', number: '02', eyebrow: 'Event routing', title: 'Azure Event Grid', accent: 'lime',
        lead: 'Un servizio di distribuzione degli eventi per costruire applicazioni reattive, disaccoppiate e scalabili.',
        summary: 'Event Grid collega produttori e consumatori attraverso publish/subscribe. Gli eventi descrivono che qualcosa è accaduto e vengono filtrati e consegnati ai subscriber interessati.',
        concepts: ['Architettura publish/subscribe', 'Topic, namespace e subscription', 'Filtri per tipo e contenuto', 'Push e pull delivery', 'Retry e dead lettering', 'CloudEvents e integrazione Azure'],
        architecture: 'Publisher → topic o namespace → filtri della subscription → webhook, Function, coda o altro subscriber.',
        relation: 'Distribuisce eventi di ciclo di vita e dominio provenienti dall’ecosistema IoT senza vincolare il produttore alla logica dei consumatori.',
        official: 'https://learn.microsoft.com/azure/event-grid/'
      },
      {
        slug: 'azure-iot-operations', number: '03', eyebrow: 'Industrial edge', title: 'Azure IoT Operations', accent: 'azure',
        lead: 'Un insieme di servizi Kubernetes-native e abilitati da Azure Arc per acquisire, elaborare e governare dati industriali all’edge.',
        summary: 'Azure IoT Operations porta funzionalità di connettività, elaborazione e gestione nel sito produttivo, mantenendo un piano di controllo Azure e la possibilità di operare vicino alle macchine.',
        concepts: ['Distribuzione Kubernetes e Azure Arc', 'MQTT broker all’edge', 'Connettori per asset industriali', 'Data flow e trasformazioni', 'Gestione centralizzata dei siti', 'Integrazione cloud ed edge'],
        architecture: 'Asset e PLC → OPC UA/connectors → broker e data flow edge → servizi locali oppure destinazioni cloud.',
        relation: 'Fa da ponte operativo tra OPC UA, modelli degli asset e piattaforme cloud come Microsoft Fabric.',
        official: 'https://learn.microsoft.com/azure/iot-operations/'
      },
      {
        slug: 'opc-ua', number: '04', eyebrow: 'Interoperability', title: 'OPC UA', accent: 'lime',
        lead: 'Uno standard aperto per lo scambio sicuro e semanticamente ricco di informazioni nell’automazione industriale.',
        summary: 'OPC UA non trasferisce soltanto valori: rappresenta oggetti, tipi, metodi, eventi e relazioni in un address space navigabile e indipendente dal produttore.',
        concepts: ['Address space e nodi', 'Information model e type system', 'Client/server', 'Publish/subscribe', 'Security, certificati e trust', 'Companion specification'],
        architecture: 'Macchina o sistema di controllo → server OPC UA → client/gateway edge → normalizzazione, contestualizzazione e cloud.',
        relation: 'È la lingua comune dell’OT; le ontologie e i modelli dati possono preservarne il significato oltre il confine dello stabilimento.',
        official: 'https://opcfoundation.org/about/opc-technologies/opc-ua/'
      },
      {
        slug: 'ontologia', number: '05', eyebrow: 'Semantics', title: 'Ontologia', accent: 'azure',
        lead: 'Una rappresentazione formale dei concetti di un dominio, delle loro proprietà e delle relazioni che li collegano.',
        summary: 'Nel mondo IoT, un’ontologia permette a sistemi diversi di interpretare allo stesso modo asset, misure, luoghi, processi e vincoli. I dati diventano comprensibili e interrogabili nel loro contesto.',
        concepts: ['Classi, istanze e proprietà', 'Relazioni e gerarchie', 'Vocabolario condiviso', 'Identificatori e metadati', 'Knowledge graph', 'Inferenza e interoperabilità semantica'],
        architecture: 'Dato grezzo → mapping al modello → entità e relazioni → knowledge graph o semantic layer → query e applicazioni.',
        relation: 'Collega i modelli informativi OPC UA alle esperienze analitiche e operative costruite con Fabric IQ e Microsoft Fabric.',
        official: 'https://www.w3.org/standards/semanticweb/ontology'
      },
      {
        slug: 'fabric-iq', number: '06', eyebrow: 'Operational intelligence', title: 'Fabric IQ', accent: 'lime',
        lead: 'Un approccio in Microsoft Fabric per organizzare dati operativi contestualizzati e renderli utilizzabili da persone, analytics e agenti.',
        summary: 'Fabric IQ mette al centro un modello condiviso del business e delle operazioni. L’obiettivo è passare da tabelle e flussi isolati a entità, relazioni, eventi e azioni comprensibili nel loro contesto.',
        concepts: ['Modello semantico operativo', 'Entità e relazioni di dominio', 'Dati real-time contestualizzati', 'Regole, eventi e azioni', 'Esperienze per utenti e agenti', 'Governance e significato condiviso'],
        architecture: 'Fonti operative → Microsoft Fabric → contestualizzazione nel modello operativo → insight, alert, applicazioni e agenti.',
        relation: 'È il punto d’incontro tra ontologia, real-time intelligence e decisione operativa all’interno dell’ecosistema Fabric.',
        official: 'https://learn.microsoft.com/fabric/'
      },
      {
        slug: 'microsoft-fabric', number: '07', eyebrow: 'Unified data platform', title: 'Microsoft Fabric', accent: 'azure',
        lead: 'Una piattaforma SaaS unificata che riunisce ingestion, data engineering, real-time intelligence, data science, data warehouse e business intelligence.',
        summary: 'Microsoft Fabric offre esperienze integrate sopra OneLake, riducendo la frammentazione tra strumenti e copie dei dati. Consente di costruire un percorso continuo dal dato IoT alla decisione.',
        concepts: ['OneLake', 'Data Factory', 'Data Engineering', 'Real-Time Intelligence', 'Data Science e Data Warehouse', 'Power BI e governance'],
        architecture: 'Edge e cloud sources → ingestion/streaming → OneLake e motori analitici → modelli semantici → dashboard, alert e AI.',
        relation: 'Riceve e valorizza i dati prodotti dall’architettura IoT; Fabric IQ aggiunge contesto operativo e una rappresentazione condivisa del dominio.',
        official: 'https://learn.microsoft.com/fabric/'
      }
    ];
  }

  init() {
    const host = document.querySelector('[data-iot-topic]');
    if (!host) return;
    const slug = host.dataset.iotTopic;
    const index = this.topics.findIndex((topic) => topic.slug === slug);
    if (index < 0) return;
    const topic = this.topics[index];
    const previous = this.topics[(index - 1 + this.topics.length) % this.topics.length];
    const next = this.topics[(index + 1) % this.topics.length];
    const color = topic.accent === 'lime' ? 'lime' : 'azure';
    host.innerHTML = `<section class="iot-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="index.html" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-${color}">← Tutti i temi IoT</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-${color}">${topic.number} / ${topic.eyebrow}</p><h1 class="mt-5 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.055em] sm:text-8xl">${topic.title}<span class="text-${color}">.</span></h1><p class="mt-8 max-w-3xl text-xl leading-relaxed text-paper/65">${topic.lead}</p></div></section>
    <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div class="grid gap-12 lg:grid-cols-[1fr_.45fr]"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-${color}">In breve</p><h2 class="mt-4 text-3xl font-semibold">Il ruolo nella piattaforma.</h2><p class="mt-6 text-lg leading-relaxed text-paper/60">${topic.summary}</p><div class="mt-12"><p class="font-mono text-xs uppercase tracking-[.3em] text-${color}">Architettura essenziale</p><p class="mt-5 border-l-2 border-${color} pl-6 font-mono text-sm leading-7 text-paper/70">${topic.architecture}</p></div></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Concetti chiave</p><ol class="mt-6 space-y-4">${topic.concepts.map((item, i) => `<li class="flex gap-4 border-t border-white/10 pt-4"><span class="font-mono text-xs text-${color}">${String(i + 1).padStart(2, '0')}</span><span>${item}</span></li>`).join('')}</ol></aside></div></section>
    <section class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[.3fr_1fr] lg:px-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-${color}">Connessioni</p><p class="text-xl leading-relaxed text-paper/65">${topic.relation}</p></div></section>
    <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div class="grid gap-4 sm:grid-cols-2"><a href="${previous.slug}.html" class="border border-white/15 p-6 hover:border-${color}"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">← Tema precedente</span><strong class="mt-3 block text-xl">${previous.title}</strong></a><a href="${next.slug}.html" class="border border-white/15 p-6 text-right hover:border-${color}"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Tema successivo →</span><strong class="mt-3 block text-xl">${next.title}</strong></a></div><div class="mt-5 flex flex-col justify-between gap-5 border border-dashed border-white/20 p-6 sm:flex-row sm:items-center"><div><p class="font-mono text-xs uppercase tracking-widest text-${color}">Risorse</p><p class="mt-2 text-paper/50">Spazio pronto per articoli, diagrammi, demo e repository.</p></div><a href="${topic.official}" target="_blank" rel="noopener noreferrer" class="font-mono text-xs uppercase tracking-widest text-${color}">Documentazione ufficiale ↗</a></div></section>`;
  }
}
