export class C64Games {
  constructor() {
    this.list = document.querySelector('[data-c64-game-list]');
    this.detail = document.querySelector('[data-c64-game]');
    this.games = this.catalog();
  }

  init() {
    if (this.list) this.renderList();
    if (this.detail) this.renderDetail();
  }

  catalog() {
    const g=(slug,title,year,publisher,genre,summary,status='Classico C64',source='')=>({slug,title,year,publisher,genre,summary,status,source:source||`https://www.lemon64.com/games/list.php?list_title=${encodeURIComponent(title)}`});
    return [
      g('impossible-mission','Impossible Mission','1984','Epyx','Platform / puzzle','L’agente 4125 esplora l’ascensore-labirinto del professor Elvin Atombender, cerca frammenti di password e corre contro un limite di sei ore.','Classico C64','https://www.lemon64.com/game/impossible-mission'),
      g('impossible-mission-2','Impossible Mission II','1988','Epyx','Platform / puzzle','Atombender ritorna con una nuova fortezza, nove torri e robot più complessi. La formula originale diventa più grande e severa.','Classico C64','https://www.lemon64.com/game/impossible-mission-2'),
      g('impossible-mission-3','Impossible Mission 3','2026','Psytronik Software','Platform / puzzle','Il seguito moderno ufficiale per C64 riprende corsa, capriole, ascensori e ricerca dei codici con nuove stanze, robot e presentazione contemporanea.','Nuova uscita C64','https://www.lemon64.com/game/impossible-mission-3'),
      g('thrust','Thrust','1986','Firebird','Arcade / fisica','Una piccola astronave deve recuperare pod energetici da caverne ostili controllando inerzia, gravità, carburante e un delicato raggio traente.'),
      g('zak-mckracken','Zak McKracken and the Alien Mindbenders','1988','Lucasfilm Games','Avventura grafica','Un giornalista scandalistico scopre un piano alieno per ridurre l’intelligenza umana. Viaggi globali, humor e interfaccia SCUMM definiscono l’avventura.'),
      g('maniac-mansion','Maniac Mansion','1987','Lucasfilm Games','Avventura grafica','Dave e due amici entrano nella villa degli Edison per salvare Sandy. Personaggi selezionabili, finali multipli e SCUMM cambiano il genere.'),
      g('le-mans','Le Mans','1982','Commodore','Racing','Uno dei primi giochi di guida per C64: visuale dall’alto, giorno e notte, traffico e una corsa di resistenza ispirata alla 24 Ore.'),
      g('bump-n-jump',"Bump 'n' Jump",'1983','Data East / Creative Software','Arcade / guida','Conversione dell’arcade Burnin’ Rubber: speronare i rivali e saltare ostacoli e corsi d’acqua mantenendo la strada.'),
      g('c64-emulator','C64 Emulator','Attuale','VICE / Cloanto e altri','Emulazione','Una scheda dedicata agli strumenti per eseguire, preservare e studiare software Commodore 64 su hardware moderno.','Software / emulazione','https://vice-emu.sourceforge.io/'),
      g('captured','Captured','1986','American Action','Platform multi-screen','Un platform a schermate multiple in cui esplorazione e pericoli richiedono precisione e memoria dei percorsi.','Classico C64','https://www.lemon64.com/game/captured'),
      g('defender','Defender','1983','Atarisoft','Shoot ’em up','Conversione del capolavoro Williams: difendere gli umanoidi su un pianeta a scorrimento orizzontale da ondate aliene sempre più aggressive.'),
      g('elite','Elite','1985','Firebird','Simulazione spaziale','Commercio, combattimento ed esplorazione in una galassia generata proceduralmente. Il modello aperto di Braben e Bell diventa una pietra miliare.'),
      g('f-zero','F-Zero','Homebrew','Community C64','Racing futuristico','Interpretazione o progetto ispirato al racing futuristico Nintendo su C64; la scheda distingue gli omaggi homebrew dal titolo SNES originale.','Homebrew / demake'),
      g('galaga','Galaga','Homebrew / conversioni','Community C64','Fixed shooter','Il celebre sparatutto Namco in versioni e reinterpretazioni per C64: formazioni aliene, cattura della nave e rischio del doppio caccia.','Arcade / homebrew'),
      g('hero','H.E.R.O.','1984','Activision','Action platform','Roderick Hero esplora miniere con jetpack, dinamite e raggio laser per salvare i minatori prima che la lampada si esaurisca.'),
      g('lazy-jones','Lazy Jones','1984','Terminal Software','Arcade / minigame','Un portiere d’albergo evita il lavoro entrando nelle camere e giocando una raccolta di minigiochi, incluso il celebre Star Dust.'),
      g('lode-runner','Lode Runner','1983','Broderbund','Puzzle platform','Raccogliere tutto l’oro scavando temporaneamente il pavimento e manipolando le guardie: 150 livelli e un editor storico.'),
      g('mario-bros','Mario Bros.','1987','Ocean','Platform arcade','Mario e Luigi liberano le tubature colpendo dal basso tartarughe e altre creature, nella conversione del classico arcade Nintendo.'),
      g('minecraft','Minecraft','Homebrew / demake','Community C64','Sandbox','Progetti e demake sperimentali portano sul C64 l’idea di un mondo a blocchi da esplorare e costruire, entro i limiti degli 8 bit.','Homebrew / demake'),
      g('outrun','Out Run','1987','U.S. Gold / Sega','Racing arcade','Ferrari, bivi e corsa contro il tempo nella conversione C64 dell’arcade Sega, ricordata anche per la cassetta musicale inclusa.'),
      g('pac-man','Pac-Man','1983','Atarisoft','Maze arcade','Mangiare tutti i puntini evitando Blinky, Pinky, Inky e Clyde: la formula labirintica Namco nella versione C64.'),
      g('pong','Pong','Homebrew / cloni','Vari','Sport arcade','La forma minima del videogioco competitivo: due racchette e una palla, riprodotta in numerosi cloni e listati per Commodore 64.','Classico / cloni'),
      g('rally-x','Rally-X','1984','Atarisoft / Namco','Maze driving','Guidare nel labirinto, raccogliere bandiere e sfuggire alle auto rosse usando cortine fumogene e il radar.'),
      g('snake','Snake','Vari','Public domain / homebrew','Arcade','Il serpente cresce a ogni oggetto raccolto: una meccanica universale presente sul C64 in innumerevoli versioni BASIC e machine language.','Public domain / homebrew'),
      g('sokoban','Sokoban','Vari','Conversioni / public domain','Puzzle','Spingere casse sulle destinazioni senza bloccarle agli angoli: il rompicapo giapponese in diverse implementazioni C64.','Puzzle / conversioni'),
      g('tetris','Tetris','1988','Mirrorsoft','Puzzle','Tetramini, linee e pressione crescente. La versione C64 è celebre per l’atmosferica colonna sonora di Wally Beben.')
    ];
  }

  renderList() {
    document.querySelector('[data-game-count]').textContent=`${this.games.length} schede · originali, conversioni e homebrew`;
    this.list.innerHTML=this.games.map((game,index)=>`<a href="${game.slug}.html" class="group flex min-h-64 flex-col border border-white/15 p-6 transition hover:border-c64light"><div class="flex justify-between font-mono text-[10px] uppercase tracking-widest"><span class="text-c64light">${game.year}</span><span class="text-paper/25">${String(index+1).padStart(2,'0')}</span></div><div class="my-7 grid flex-1 place-items-center bg-c64blue/30 font-mono text-5xl font-bold text-c64light/30">${game.title.substring(0,2).toUpperCase()}</div><p class="font-mono text-[10px] uppercase tracking-widest text-lime">${game.status}</p><h3 class="mt-3 text-2xl font-semibold leading-tight">${game.title}</h3><span class="mt-5 font-mono text-[10px] uppercase tracking-widest text-c64light">LOAD →</span></a>`).join('');
  }

  renderDetail() {
    const slug=this.detail.dataset.c64Game, game=this.games.find(item=>item.slug===slug); if(!game)return;
    const index=this.games.indexOf(game),prev=this.games[index-1],next=this.games[index+1];
    document.title=`${game.title} — Commodore 64 Games`;
    this.detail.innerHTML=`<section class="border-b border-c64light/25 bg-c64blue"><div class="mx-auto max-w-6xl px-5 py-16 lg:px-8"><a href="commodore-64.html" class="font-mono text-xs uppercase tracking-widest text-white/50 hover:text-white">← C64 Games</a><div class="mt-14 grid gap-12 lg:grid-cols-[.38fr_1fr]"><div class="grid aspect-[4/3] place-items-center border-8 border-c64light bg-c64blue font-mono text-7xl font-bold text-c64light/40">${game.title.substring(0,2).toUpperCase()}</div><div class="self-center"><p class="font-mono text-xs uppercase tracking-[.3em] text-c64light">${game.year} · ${game.genre}</p><h1 class="mt-5 text-5xl font-semibold leading-[.92] tracking-[-.05em] sm:text-7xl">${game.title}</h1><p class="mt-5 font-mono text-xs uppercase tracking-widest text-white/50">${game.publisher} · ${game.status}</p><p class="mt-9 max-w-3xl text-xl leading-relaxed text-white/75">${game.summary}</p></div></div></div></section><section class="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:grid-cols-3 lg:px-8"><div><p class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Piattaforma</p><p class="mt-3">Commodore 64</p></div><div><p class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Genere</p><p class="mt-3">${game.genre}</p></div><div><p class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Database</p><a class="mt-3 block text-c64light hover:text-white" href="${game.source}" target="_blank" rel="noopener noreferrer">Verifica / approfondisci ↗</a></div></section><nav class="mx-auto grid max-w-6xl gap-px bg-white/10 px-5 py-12 sm:grid-cols-2 lg:px-8">${prev?`<a href="${prev.slug}.html" class="bg-ink p-5 hover:bg-white/[.03]"><span class="font-mono text-[10px] text-paper/35">← PRECEDENTE</span><strong class="mt-2 block">${prev.title}</strong></a>`:'<div></div>'}${next?`<a href="${next.slug}.html" class="bg-ink p-5 text-right hover:bg-white/[.03]"><span class="font-mono text-[10px] text-paper/35">SUCCESSIVO →</span><strong class="mt-2 block">${next.title}</strong></a>`:'<div></div>'}</nav>`;
  }
}