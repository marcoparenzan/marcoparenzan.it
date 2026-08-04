export class PowerElectronicsCourse {
  constructor() {
    this.list = document.querySelector('#power-electronics-list');
    this.player = document.querySelector('#power-electronics-player');
    this.storageKey = 'marco-mit-6622-progress';
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = [
      ['f7oXhDatwtY','Introduction to Power Electronics','Panoramica dell’elettronica di potenza, applicazioni, obiettivi di efficienza e principi della conversione energetica.'],
      ['bJ1nqEC3i0A','Analysis Methods and Rectifiers','Metodi di analisi dei convertitori, forme d’onda periodiche e funzionamento dei raddrizzatori.'],
      ['Tpc39Bv3YJ8','Load Regulation','Regolazione rispetto al carico, modelli equivalenti e prestazioni delle sorgenti e dei convertitori.'],
      ['-r0hWGcNLSI','Power Factor','Potenza attiva e apparente, armoniche, fattore di potenza e impatto dei carichi non lineari.'],
      ['6Bzq25m68BE','Intro to DC/DC — Part 1','Introduzione ai convertitori switching DC/DC e analisi di base della topologia buck.'],
      ['UMTHJC22p7A','DC/DC — Part 2','Topologie boost e buck-boost, bilanci volt-secondo e relazioni di conversione.'],
      ['O91G3Likq3w','DC/DC — Part 3','Ripple, dimensionamento degli elementi reattivi e conduzione continua e discontinua.'],
      ['sB547f1ogWc','DC/DC — Part 4','Modelli medi, perdite non ideali, efficienza e confronto tra le topologie DC/DC.'],
      ['Z4iE3aaNeTM','Magnetics — Part 1','Principi dei componenti magnetici, legge di Faraday, flusso, riluttanza e circuiti magnetici.'],
      ['7F0ZThtJfo8','Magnetics — Part 2','Induttori, trasformatori, energia immagazzinata e impiego del traferro.'],
      ['O0NRIVUG2d0','Magnetics — Part 3','Perdite nel nucleo e nel rame, materiali magnetici e vincoli termici.'],
      ['cf7JLEqw8Os','Magnetics — Part 4','Progettazione e dimensionamento pratico di induttori e trasformatori ad alta frequenza.'],
      ['I2PD_f5a9fA','Isolated DC/DC Converters — Part 1','Isolamento galvanico e topologie flyback, forward e derivate.'],
      ['K5tUbZzcOEc','Isolated DC/DC Converters — Part 2','Convertitori push-pull, half-bridge e full-bridge, reset del flusso e utilizzo del trasformatore.'],
      ['nG47fQ-aiHw','Switching Losses and Snubbers','Meccanismi di perdita durante la commutazione e reti snubber per limitare stress e dissipazione.'],
      ['w6R6V1Mpz7s','Thermal Modeling and Heat Sinking','Modelli termici, resistenze e capacità termiche, giunzione e progettazione dei dissipatori.'],
      ['So_UGo4dSJs','Inverters — Part 1','Principi degli inverter, ponte e modulazione per generare tensioni alternate.'],
      ['H8U0a9bwxqc','Inverters — Part 2','PWM, contenuto armonico, modulazione sinusoidale e utilizzo del bus DC.'],
      ['uL8C9wQrk3g','Inverters — Part 3','Strategie avanzate di modulazione e analisi delle forme d’onda di uscita.'],
      ['EFONLmsmVFw','Switched-Mode Rectifiers','Raddrizzatori controllati ad alta frequenza e correzione attiva del fattore di potenza.'],
      ['Ih92AK1D-2M','Three-Phase Systems — Part 1','Sistemi trifase bilanciati, rappresentazioni e relazioni tra grandezze di fase e linea.'],
      ['AGj73UQN-K0','Three-Phase Systems — Part 2','Potenza trifase, trasformazioni e analisi di carichi e convertitori.'],
      ['nTq-OKy5kHs','Three-Phase Inverters','Topologie e modulazione degli inverter trifase, vettori di spazio e armoniche.'],
      ['ikaTTZEY5VE','Control — Part 1','Introduzione al controllo dei convertitori, linearizzazione e modelli small-signal.'],
      ['lRtTS1PNFik','Control — Part 2','Funzioni di trasferimento, compensazione e stabilità degli anelli di regolazione.'],
      ['V-mbUZhovOo','Control — Part 3','Progetto dei compensatori e risposta dinamica dei sistemi di conversione.'],
      ['WJNPGXivqew','Current-Mode Control','Controllo in corrente, vantaggi dinamici, slope compensation e stabilità subarmonica.'],
      ['HWnEifmgAdU','EMI Filters — Part 1','Origine delle interferenze elettromagnetiche e principi di attenuazione dei filtri.'],
      ['OVZPEUzXbqM','EMI Filters — Part 2','Progettazione dei filtri, impedenze, stabilità e interazione con il convertitore.'],
      ['Zh4eqhcZjcg','EMI Filters — Part 3: CM + DM','Disturbi di modo comune e differenziale e relative reti di filtraggio.'],
      ['CKncVaiv_08','Switched-Capacitor Converters — Part 1','Conversione a condensatori commutati, rapporti ideali e redistribuzione della carica.'],
      ['jcE-Ue83P7U','Switched-Capacitor Converters — Part 2','Perdite, resistenza equivalente, topologie e criteri di progetto dei charge pump.'],
      ['4VztgBcVH5Q','Soft Switching — Part 1','Principi ZVS e ZCS per ridurre le perdite e lo stress di commutazione.'],
      ['7FhXh4yXUao','Soft Switching — Part 2','Celle risonanti e tecniche pratiche per ottenere commutazioni morbide.'],
      ['BryipFEiIiE','Resonant Power Conversion — Part 1','Introduzione ai convertitori risonanti, risposta in frequenza e trasferimento di potenza.'],
      ['teW8gmpKQcI','Resonant Power Conversion — Part 2','Analisi e progetto di topologie risonanti serie e parallelo.'],
      ['TDZVCli3bEs','Resonant Converters: Matching Networks','Reti di adattamento per scalare tensione e corrente nei convertitori risonanti.'],
      ['TtItFQTNMA4','Gate Drive, Level Shift, Layout','Aspetti pratici: pilotaggio dei gate, level shifting e layout dei circuiti di potenza.']
    ];
  }

  init() { if (!this.list || !this.player) return; this.list.addEventListener('click', e => this.handleClick(e)); this.renderPlayer(); this.renderList(); this.renderProgress(); }
  loadProgress() { try { return new Set(JSON.parse(localStorage.getItem(this.storageKey)) || []); } catch { return new Set(); } }
  saveProgress() { localStorage.setItem(this.storageKey, JSON.stringify([...this.completed])); }
  resourceUrl(index) { return `https://ocw.mit.edu/courses/6-622-power-electronics-spring-2023/resources/mit6_622s23_lecture_${String(index + 1).padStart(2,'0')}_mp4/`; }

  handleClick(event) {
    const play=event.target.closest('[data-power-play]'), toggle=event.target.closest('[data-power-complete]');
    if (play) { this.current=Number(play.dataset.powerPlay); this.renderPlayer(); this.renderList(); this.player.scrollIntoView({behavior:'smooth',block:'center'}); }
    if (toggle) { const i=Number(toggle.dataset.powerComplete); this.completed.has(i)?this.completed.delete(i):this.completed.add(i); this.saveProgress(); this.renderList(); this.renderProgress(); }
  }

  renderPlayer() {
    const [id,title,summary]=this.lectures[this.current], number=this.current+1;
    this.player.innerHTML=`<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black"><iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${id}" title="Lecture ${number}: ${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-volt">In riproduzione · Lecture ${String(number).padStart(2,'0')}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest"><a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">YouTube ↗</a><a href="${this.resourceUrl(this.current)}" target="_blank" rel="noopener noreferrer" class="text-paper/45 hover:text-white">Pagina MIT ↗</a></div></div></div>`;
  }

  renderList() {
    this.list.innerHTML=this.lectures.map(([id,title,summary],i)=>{const done=this.completed.has(i),active=this.current===i;return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active?'bg-azure/[.04]':''}"><button data-power-play="${i}" class="font-mono text-lg ${active?'text-volt':'text-paper/30 hover:text-volt'}" aria-label="Riproduci lecture ${i+1}">${String(i+1).padStart(2,'0')}</button><button data-power-play="${i}" class="text-left"><h3 class="text-xl font-semibold ${done?'text-paper/45 line-through decoration-volt/60':''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><button data-power-complete="${i}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done?'border-volt bg-volt text-ink':'border-white/20 text-paper/45 hover:border-volt hover:text-volt'}" aria-pressed="${done}">${done?'Completata ✓':'Segna fatta'}</button></article>`}).join('');
  }

  renderProgress() { const count=this.completed.size; document.querySelector('#power-electronics-progress-label').textContent=`${count} di ${this.lectures.length} lecture completate`; document.querySelector('#power-electronics-progress').style.width=`${count/this.lectures.length*100}%`; }
}