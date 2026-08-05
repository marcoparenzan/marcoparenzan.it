export class ShirowUniverse {
  constructor() {
    this.shirowList = document.querySelector('[data-shirow-list]');
    this.gitsList = document.querySelector('[data-gits-list]');
  }

  init() {
    if (this.shirowList) this.renderShirow();
    if (this.gitsList) this.renderGits();
  }

  shirowWorks() {
    return [
      ['1983','Black Magic','black-magic','Fantascienza / fantasy','L’esordio autoprodotto: miti, magia, robot e tecnologia convivono in una raccolta che contiene già molti temi futuri.'],
      ['1985–86','Appleseed','appleseed','Cyberpunk / politica','Deunan e Briareos raggiungono Olympus, utopia amministrata da bioroidi, e ne scoprono conflitti e fragilità.'],
      ['1986','Dominion','dominion','Police comedy / mecha','Leona Ozaki e il suo carro armato Bonaparte affrontano i criminali Puma Sisters in una città soffocata dall’inquinamento.'],
      ['1986','Black Magic M-66','black-magic-m66','Manga breve','Shirow adatta e amplia l’episodio della ginoide militare M-66, alla base dell’omonimo OVA da lui co-diretto.'],
      ['1989–90','Ghost in the Shell','ghost-in-the-shell-manga','Cyberpunk / investigazione','La Sezione 9 e Motoko Kusanagi indagano crimini informatici in una società dove mente e rete sono inseparabili.'],
      ['1991','Dominion: Conflict One','dominion-conflict-one','Police comedy / mecha','Una nuova crisi mette la Tank Police contro terroristi e tensioni politiche, sviluppando il mondo di Dominion.'],
      ['1991–96','Orion','orion','Science fantasy','Magia taoista, cosmologia e supertecnologia si scontrano in un universo barocco e volutamente vertiginoso.'],
      ['1991–97','Ghost in the Shell 1.5','ghost-in-the-shell-1-5','Cyberpunk / casi della Sezione 9','Quattro indagini successive al primo manga, focalizzate sul lavoro corale della Sezione 9 e su Togusa.'],
      ['1997–2001','Ghost in the Shell 2','ghost-in-the-shell-2','Cyberpunk / postumano','Motoko opera attraverso corpi e identità distribuite in rete, in una storia più astratta su IA ed evoluzione.']
    ];
  }

  gitsWorks() {
    return [
      {group:'Manga di Masamune Shirow',note:'La continuità originale, più ironica, tecnica e politicamente densa.',items:[
        ['1989–90','Ghost in the Shell','ghost-in-the-shell-manga','Manga','Il Burattinaio porta Motoko a interrogarsi sulla natura della vita digitale.'],
        ['1991–97','Human-Error Processor','ghost-in-the-shell-1-5','Manga 1.5','Casi autonomi della Sezione 9 dopo l’assenza del Maggiore.'],
        ['1997–2001','Man-Machine Interface','ghost-in-the-shell-2','Manga 2','Motoko Aramaki agisce come intelligenza postumana distribuita.']
      ]},
      {group:'Continuità cinematografica di Mamoru Oshii',note:'Tono contemplativo e filosofico, con una propria evoluzione di Motoko.',items:[
        ['1995','Ghost in the Shell','ghost-in-the-shell-1995','Film anime','L’indagine sul Puppet Master ridefinisce identità e confini del Maggiore.'],
        ['2004','Ghost in the Shell 2: Innocence','ghost-in-the-shell-2-innocence','Film anime','Batou indaga omicidi commessi da ginoidi mentre Motoko permane nella rete.'],
        ['2008','Ghost in the Shell 2.0','ghost-in-the-shell-2-0','Film / revisione','Rimasterizzazione del film del 1995 con nuove scene digitali e audio.']
      ]},
      {group:'Stand Alone Complex',note:'Universo televisivo autonomo creato da Kenji Kamiyama: procedural, politica e casi complessi.',items:[
        ['2002–03','Stand Alone Complex','stand-alone-complex','Serie TV','Il caso dell’Uomo che Ride intreccia terrorismo, industria medica e manipolazione.'],
        ['2004–05','S.A.C. 2nd GIG','stand-alone-complex-2nd-gig','Serie TV','I rifugiati e gli Undici Individuali spingono il Giappone verso una crisi politica.'],
        ['2006','Solid State Society','solid-state-society','Film TV','Una Sezione 9 senza Motoko affronta il misterioso Burattinaio e una rete di anziani.'],
        ['2020–22','SAC_2045','sac-2045','ONA · 2 stagioni','La guerra sostenibile e i postumani trasformano il conflitto globale e la Sezione 9.'],
        ['2021–23','SAC_2045 Sustainable War / The Last Human','sac-2045-film','Film compilation','Rielaborazioni cinematografiche delle due stagioni di SAC_2045.']
      ]},
      {group:'Arise',note:'Prequel/reboot che ricostruisce la formazione della squadra in una quarta continuità.',items:[
        ['2013–14','Arise — Borders 1–4','ghost-in-the-shell-arise','OVA','Motoko lascia la 501ª Unità e incontra i futuri membri della Sezione 9.'],
        ['2015','Arise: Alternative Architecture','arise-alternative-architecture','Serie TV','Rimontaggio televisivo con due episodi aggiuntivi: Pyrophoric Cult.'],
        ['2015','The New Movie','ghost-in-the-shell-new-movie','Film anime','L’assassinio del primo ministro completa la formazione della Sezione 9.']
      ]},
      {group:'Altre reinterpretazioni',note:'Adattamenti e nuove letture esterne alle continuità principali.',items:[
        ['2017','Ghost in the Shell','ghost-in-the-shell-2017','Film live action','Motoko, qui Mira Killian, ricostruisce il proprio passato in una sintesi dei film e di SAC.'],
        ['2026','The Ghost in the Shell','ghost-in-the-shell-2026','Serie anime','Nuovo adattamento televisivo prodotto da Science Saru, ispirato al manga originale.']
      ]}
    ];
  }

  renderShirow() {
    this.shirowList.innerHTML = this.shirowWorks().map(([year,title,slug,type,summary],i) => `<a href="shirow-${slug}.html" class="group flex min-h-72 flex-col border border-white/15 p-6 transition hover:border-cyan"><div class="flex justify-between font-mono text-[10px] uppercase tracking-widest"><span class="text-cyan">${year}</span><span class="text-paper/30">0${i+1}</span></div><div class="my-8 grid flex-1 place-items-center bg-gradient-to-br from-cyan/10 to-violet/10 font-mono text-5xl font-bold text-cyan/25">${title.substring(0,2).toUpperCase()}</div><p class="font-mono text-[10px] uppercase tracking-widest text-lime">${type}</p><h3 class="mt-3 text-2xl font-semibold">${title}</h3><p class="mt-3 text-sm leading-relaxed text-paper/45">${summary}</p><span class="mt-6 font-mono text-[10px] uppercase tracking-widest text-cyan">Scheda →</span></a>`).join('');
  }

  renderGits() {
    this.gitsList.innerHTML = this.gitsWorks().map(section => `<section><div class="grid gap-4 border-b border-cyan/20 pb-5 lg:grid-cols-[.38fr_1fr]"><h2 class="text-2xl font-semibold">${section.group}</h2><p class="text-paper/45">${section.note}</p></div><div class="grid gap-px bg-white/10 md:grid-cols-2 lg:grid-cols-3">${section.items.map(([year,title,slug,type,summary]) => `<a href="gits-${slug}.html" class="flex min-h-64 flex-col bg-ink p-6 transition hover:bg-cyan/[.04]"><div class="flex justify-between font-mono text-[10px] uppercase tracking-widest"><span class="text-cyan">${year}</span><span class="text-paper/30">${type}</span></div><h3 class="mt-10 text-2xl font-semibold">${title}</h3><p class="mt-4 flex-1 text-sm leading-relaxed text-paper/45">${summary}</p><span class="mt-6 font-mono text-[10px] uppercase tracking-widest text-cyan">Approfondisci →</span></a>`).join('')}</div></section>`).join('');
  }
}