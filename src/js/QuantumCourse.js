export class QuantumCourse {
  constructor() {
    this.list = document.querySelector('#quantum-lecture-list');
    this.player = document.querySelector('#quantum-player');
    this.storageKey = 'marco-mit-804-progress';
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = [
      ['lZ3bPUKo5zc','Introduction to Superposition','Introduce la sovrapposizione attraverso esperimenti chiave e mostra perché le probabilità quantistiche richiedono ampiezze complesse.'],
      ['TkJ_WgruM2g','Experimental Facts of Life','Raccoglie le evidenze sperimentali fondamentali: interferenza, dualismo onda-particella e comportamento probabilistico della misura.'],
      ['Ei8CFin00PY','The Wave Function','Definisce funzione d’onda, densità di probabilità, normalizzazione e significato fisico dell’ampiezza quantistica.'],
      ['NN2txluv1PY','Expectations, Momentum, and Uncertainty','Sviluppa valori di aspettazione, operatore impulso e relazione d’indeterminazione tra posizione e quantità di moto.'],
      ['lMFgfqRZYoc','Operators and the Schrödinger Equation','Introduce osservabili come operatori e costruisce l’equazione di Schrödinger che governa la dinamica quantistica.'],
      ['TWpyhsPAK14','Time Evolution and the Schrödinger Equation','Analizza l’evoluzione temporale degli stati, la conservazione della probabilità e gli stati stazionari.'],
      ['Uk5DUtHY7LM','More on Energy Eigenstates','Approfondisce autostati energetici, spettro dell’Hamiltoniana e sviluppo di uno stato in una base di energia.'],
      ['qu-jyrwW6hw','Quantum Harmonic Oscillator','Risolve l’oscillatore armonico quantistico e ne studia livelli discreti, funzioni d’onda ed energia di punto zero.'],
      ['jJX_1zT73U0','Operator Methods for the Harmonic Oscillator','Deriva lo spettro dell’oscillatore con operatori di creazione e distruzione, evitando la soluzione differenziale diretta.'],
      ['VSqpYPgxcps','Clicker Bonanza and Dirac Notation','Consolida i concetti con domande interattive e introduce la notazione bra-ket di Dirac per stati e operatori.'],
      ['iZKAtzK5WXM','Dispersion of the Gaussian and the Finite Well','Studia la dispersione di un pacchetto gaussiano e gli stati legati in una buca di potenziale finita.'],
      ['lHhw_SExF1M','The Dirac Well and Scattering off the Finite Step','Affronta la buca delta di Dirac e la riflessione e trasmissione di onde su un gradino di potenziale.'],
      ['SsCeVABM4Mo','More on Scattering','Approfondisce coefficienti di scattering, correnti di probabilità e comportamento attraverso barriere di potenziale.'],
      ['cFPnLqEms5k','Resonance and the S-Matrix','Introduce risonanze, matrice S e descrizione sistematica delle ampiezze di riflessione e trasmissione.'],
      ['H5m39G-FAwE','Eigenstates of Angular Momentum — Part 1','Avvia la teoria del momento angolare quantistico, le relazioni di commutazione e i relativi autostati.'],
      ['R4LyPVfGWtI','Eigenstates of Angular Momentum — Part 2','Completa la costruzione degli autostati e collega numeri quantici, armoniche sferiche e operatori ladder.'],
      ['mLe8YCnUed4','More on Central Potentials','Applica il momento angolare ai potenziali centrali e separa la dinamica radiale da quella angolare.'],
      ['G5_u6k9LR3E','“Hydrogen” and its Discontents','Risolve il problema coulombiano dell’idrogeno e discute spettro, degenerazioni e limiti del modello.'],
      ['9lX2FENOe4o','Identical Particles','Introduce indistinguibilità, simmetria degli stati, bosoni, fermioni e principio di esclusione di Pauli.'],
      ['gK_D6RkbMy8','Periodic Lattices — Part 1','Esamina particelle in potenziali periodici e introduce il teorema di Bloch e la formazione delle bande.'],
      ['SZlnoxak4xM','Periodic Lattices — Part 2','Approfondisce struttura a bande, zone di Brillouin e conseguenze dei reticoli cristallini sugli elettroni.'],
      ['Oq4OHT4hhJc','Metals, Insulators, and Semiconductors','Usa la teoria delle bande per distinguere metalli, isolanti e semiconduttori e interpretarne le proprietà.'],
      ['Rc1vFAUnRUM','More on Spin','Sviluppa spin 1/2, matrici di Pauli, misura lungo assi diversi e dinamica degli stati di spin.'],
      ['awpnsGl08bc','Entanglement: QComputing, EPR, and Bell’s Theorem','Conclude con entanglement, qubit, paradosso EPR e teorema di Bell, evidenziando la non classicità delle correlazioni.']
    ];
  }

  init() {
    if (!this.list || !this.player) return;
    this.list.addEventListener('click', event => this.handleClick(event));
    this.renderPlayer();
    this.renderList();
    this.renderProgress();
  }

  loadProgress() {
    try { return new Set(JSON.parse(localStorage.getItem(this.storageKey)) || []); }
    catch { return new Set(); }
  }

  saveProgress() {
    localStorage.setItem(this.storageKey, JSON.stringify([...this.completed]));
  }

  handleClick(event) {
    const play = event.target.closest('[data-play]');
    const toggle = event.target.closest('[data-complete]');
    if (play) {
      this.current = Number(play.dataset.play);
      this.renderPlayer();
      this.renderList();
      document.querySelector('#quantum-player')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (toggle) {
      const index = Number(toggle.dataset.complete);
      this.completed.has(index) ? this.completed.delete(index) : this.completed.add(index);
      this.saveProgress();
      this.renderList();
      this.renderProgress();
    }
  }

  renderPlayer() {
    const [videoId, title, summary] = this.lectures[this.current];
    const number = this.current + 1;
    this.player.innerHTML = `<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black"><iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${videoId}" title="Lecture ${number}: ${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">In riproduzione · Lecture ${String(number).padStart(2, '0')}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest"><a class="text-azure hover:text-white" href="https://youtu.be/${videoId}" target="_blank" rel="noopener noreferrer">YouTube ↗</a><a class="text-paper/45 hover:text-white" href="https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/resources/lecture-${number}/" target="_blank" rel="noopener noreferrer">Pagina MIT ↗</a></div></div></div>`;
  }

  renderList() {
    this.list.innerHTML = this.lectures.map(([videoId, title, summary], index) => {
      const done = this.completed.has(index);
      const active = this.current === index;
      return `<article class="grid gap-5 border-b border-white/15 py-6 transition sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active ? 'bg-azure/[.04]' : ''}"><button data-play="${index}" class="font-mono text-lg ${active ? 'text-azure' : 'text-paper/30 hover:text-azure'}" aria-label="Riproduci lecture ${index + 1}">${String(index + 1).padStart(2, '0')}</button><button data-play="${index}" class="text-left"><h3 class="text-xl font-semibold ${done ? 'text-paper/45 line-through decoration-lime/60' : ''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><button data-complete="${index}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done ? 'border-lime bg-lime text-ink' : 'border-white/20 text-paper/45 hover:border-lime hover:text-lime'}" aria-pressed="${done}">${done ? 'Completata ✓' : 'Segna fatta'}</button></article>`;
    }).join('');
  }

  renderProgress() {
    const count = this.completed.size;
    document.querySelector('#quantum-progress-label').textContent = `${count} di ${this.lectures.length} lecture completate`;
    document.querySelector('#quantum-progress').style.width = `${count / this.lectures.length * 100}%`;
  }
}