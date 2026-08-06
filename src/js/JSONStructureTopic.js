export class JSONStructureTopic {
  init() {
    this.addIndexCard();
    this.renderTopic();
  }

  addIndexCard() {
    const ontologyCard = document.querySelector('a[href="ontologia.html"]');
    const grid = ontologyCard?.parentElement;
    if (!grid || grid.querySelector('a[href="json-structure.html"]')) return;

    const card = document.createElement('a');
    card.href = 'json-structure.html';
    card.className = 'border border-white/15 p-6 hover:border-lime sm:col-span-2';
    card.innerHTML = '<span class="font-mono text-xs text-lime">DATA DEFINITION LANGUAGE</span><h3 class="mt-10 text-2xl font-semibold">JSON Structure</h3><p class="mt-3 text-paper/50">Tipi rigorosi, modularità e annotazioni semantiche per dati interoperabili.</p>';
    grid.append(card);
  }

  renderTopic() {
    const host = document.querySelector('[data-json-structure-topic]');
    if (!host) return;

    const concepts = [
      'Tipizzazione rigorosa e deterministica',
      'Mapping verso linguaggi e database',
      'Definizioni modulari e riutilizzabili',
      'Tipi numerici, temporali, set e mappe',
      'Unità scientifiche, simboli e valute',
      'Relazioni e annotazioni semantiche',
      'SDK multipiattaforma e code generation'
    ];

    host.innerHTML = `<section class="iot-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="index.html#architecture" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-lime">← Mappa IoT</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-lime">15 / Modelli dati</p><h1 class="mt-5 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.055em] sm:text-8xl">JSON Structure<span class="text-azure">.</span></h1><p class="mt-8 max-w-3xl text-xl leading-relaxed text-paper/65">Un linguaggio di definizione delle strutture dati che punta su tipizzazione rigorosa, modularità e determinismo, mantenendo una corrispondenza naturale con JSON.</p></div></section>
    <section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_.48fr] lg:px-8"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-azure">Perché nell’IoT</p><h2 class="mt-4 text-3xl font-semibold">Dare una forma precisa ai dati.</h2><p class="mt-6 text-lg leading-relaxed text-paper/60">JSON Structure descrive tipi e strutture in modo traducibile verso linguaggi di programmazione e costrutti di database. A differenza di un approccio concentrato soltanto sulla validazione dei documenti, nasce come linguaggio forte di definizione dei dati e può comunque esprimere regole di validazione.</p><p class="mt-5 text-lg leading-relaxed text-paper/60">In una piattaforma IoT può formalizzare payload di telemetria, comandi, configurazioni e modelli condivisi. Le estensioni per unità UCUM, nomi alternativi, relazioni e annotazioni semantiche sono particolarmente interessanti quando una misura deve conservare significato oltre il singolo sistema.</p><div class="mt-12"><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">Flusso essenziale</p><p class="mt-5 border-l-2 border-lime pl-6 font-mono text-sm leading-7 text-paper/70">Modello di dominio → schema JSON Structure → validazione e code generation → payload IoT coerenti → storage, analytics e applicazioni.</p></div></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Concetti chiave</p><ol class="mt-6 space-y-4">${concepts.map((item, index) => `<li class="flex gap-4 border-t border-white/10 pt-4"><span class="font-mono text-xs text-lime">${String(index + 1).padStart(2, '0')}</span><span>${item}</span></li>`).join('')}</ol></aside></section>
    <section class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto grid max-w-7xl gap-8 px-5 py-14 lg:grid-cols-[.3fr_1fr] lg:px-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-azure">Connessioni</p><p class="text-xl leading-relaxed text-paper/65">Completa l’ontologia con una definizione implementabile dei dati; può rendere espliciti unità e significato delle time series e stabilizzare i contratti scambiati via MQTT, Unified Namespace e servizi cloud.</p></div></section>
    <section class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><div class="grid gap-4 sm:grid-cols-2"><a href="ontologia.html" class="border border-white/15 p-6 hover:border-lime"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">← Tema collegato</span><strong class="mt-3 block text-xl">Ontologia</strong></a><a href="fabric-iq.html" class="border border-white/15 p-6 text-right hover:border-lime"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Tema collegato →</span><strong class="mt-3 block text-xl">Fabric IQ</strong></a></div><div class="mt-5 grid gap-4 sm:grid-cols-2"><a href="https://json-structure.org/" target="_blank" rel="noopener noreferrer" class="border border-dashed border-white/20 p-6 font-mono text-xs uppercase tracking-widest text-azure">Sito e primer ufficiale ↗</a><a href="https://github.com/json-structure" target="_blank" rel="noopener noreferrer" class="border border-dashed border-white/20 p-6 font-mono text-xs uppercase tracking-widest text-azure">Progetto su GitHub ↗</a></div></section>`;
  }
}
