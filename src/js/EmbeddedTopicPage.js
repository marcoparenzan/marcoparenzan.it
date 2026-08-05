export class EmbeddedTopicPage {
  constructor() {
    this.topics = {
      opta: ['OPTA', 'Piattaforma industriale', 'Micro PLC Arduino progettato per automazione, connettività e applicazioni Industrial IoT.', ['Controllo industriale', 'IEC 61131-3', 'Arduino ecosystem', 'Ethernet e field connectivity'], 'Prototipi industriali, controllo di macchina, gateway e telemetria edge.'],
      arduino: ['Arduino e Arduino Q', 'Ecosistema embedded', 'Schede, strumenti e software Arduino per passare rapidamente dall’idea a un dispositivo connesso.', ['Microcontrollori e board', 'Arduino IDE e CLI', 'Librerie e shield', 'Prototipazione rapida'], 'Sensori, attuatori, gateway leggeri, formazione e proof of concept IoT.'],
      esp32: ['ESP32', 'Microcontroller family', 'Famiglia di SoC Espressif con Wi-Fi e Bluetooth integrati, adatta a dispositivi connessi efficienti e accessibili.', ['Wi-Fi e Bluetooth', 'FreeRTOS', 'Deep sleep', 'ESP-IDF e Arduino core'], 'Telemetria wireless, controllo locale, dispositivi a batteria e smart home.'],
      raspberrypi: ['Raspberry Pi', 'Single-board computer', 'Computer Linux compatti per edge computing, gateway, prototipi e sistemi IoT con capacità applicative complete.', ['Linux', 'GPIO e HAT', 'Container e servizi', 'Edge gateway'], 'Gateway multiprotocollo, elaborazione locale, computer vision e orchestrazione.'],
      rp2: ['RP2040 / RP2350', 'Microcontroller family', 'I microcontrollori Raspberry Pi per sistemi embedded deterministici, economici e programmabili a basso livello.', ['Dual-core MCU', 'PIO', 'C/C++ e MicroPython', 'Real-time embedded'], 'Acquisizione dati, controllo preciso, periferiche personalizzate e nodi sensore.'],
      nanoframework: ['.NET nanoFramework', 'Embedded runtime', 'Una piattaforma open source per eseguire codice C# gestito su microcontrollori con risorse limitate.', ['C# su MCU', '.NET tooling', 'Device bindings', 'Debug e deployment'], 'Firmware IoT in C#, riuso delle competenze .NET e prototipazione con hardware supportato.'],
      shelly: ['Shelly', 'Famiglia di prodotti', 'Dispositivi connessi per automazione domestica e professionale, controllo carichi e misurazione energetica.', ['Relè e dimmer', 'Energy metering', 'Wi-Fi e Bluetooth', 'API e integrazioni locali'], 'Automazione, monitoraggio energetico e integrazione con piattaforme smart building.'],
      tuya: ['Tuya', 'Ecosistema di prodotti', 'Piattaforma ed ecosistema globale per dispositivi smart realizzati da numerosi produttori e categorie.', ['Smart Life ecosystem', 'Cloud e app', 'Moduli connessi', 'Ampio catalogo OEM'], 'Valutazione di dispositivi consumer, interoperabilità e integrazioni smart home.'],
      tapo: ['Tapo', 'Famiglia di prodotti', 'Linea consumer di TP-Link dedicata a prese, sensori, illuminazione, telecamere e automazione domestica.', ['Prese e luci smart', 'Sensori e hub', 'Telecamere', 'App e automazioni'], 'Smart home, sicurezza, controllo dei consumi e scenari domestici.'],
      tplink: ['TP-Link', 'Famiglia di prodotti', 'Networking e dispositivi connessi per reti domestiche, professionali e infrastrutture IoT.', ['Router e access point', 'Switch', 'Mesh networking', 'Connettività edge'], 'Infrastruttura di rete per sensori, gateway, dispositivi e servizi locali.'],
      tenda: ['Tenda', 'Famiglia di prodotti', 'Soluzioni di networking consumer e small business per connettività Wi-Fi, mesh e accesso alla rete.', ['Wi-Fi', 'Mesh', 'Router e switch', 'Small office networking'], 'Copertura di rete e connettività di base per installazioni IoT distribuite.']
    };
  }

  init() {
    const host = document.querySelector('[data-embedded-topic]');
    if (!host) return;
    const key = host.dataset.embeddedTopic;
    const topic = this.topics[key];
    if (!topic) return;
    const [title, type, lead, concepts, use] = topic;
    const section = host.dataset.section;
    const back = section === 'products' ? '../index.html#products' : '../index.html#platforms';
    host.innerHTML = `<section class="board-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="${back}" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-amber">← Embedded Electronics</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-amber">${type}</p><h1 class="mt-5 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.055em] sm:text-8xl">${title}<span class="text-copper">.</span></h1><p class="mt-8 max-w-3xl text-xl leading-relaxed text-paper/65">${lead}</p></div></section><section class="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1fr_.48fr] lg:px-8"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-copper">Perché nell’IoT</p><h2 class="mt-4 text-3xl font-semibold">Dal circuito al sistema.</h2><p class="mt-6 text-lg leading-relaxed text-paper/60">${use}</p><div class="mt-12 border border-dashed border-white/20 p-6"><p class="font-mono text-xs uppercase tracking-widest text-amber">Laboratorio in evoluzione</p><p class="mt-3 text-paper/50">Spazio predisposto per board provate, firmware, schemi, benchmark, integrazioni e repository.</p></div></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Punti di esplorazione</p><ol class="mt-6 space-y-4">${concepts.map((item, index) => `<li class="flex gap-4 border-t border-white/10 pt-4"><span class="font-mono text-xs text-amber">${String(index + 1).padStart(2, '0')}</span><span>${item}</span></li>`).join('')}</ol></aside></section>`;
  }
}
