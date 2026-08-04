export class QuantumCourse2016 {
  constructor() {
    this.list = document.querySelector('#quantum-2016-list');
    this.player = document.querySelector('#quantum-2016-player');
    this.storageKey = 'marco-mit-804-2016-progress';
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = [
      ['An overview of quantum mechanics','Linearità, numeri complessi, fotoni, perdita del determinismo e natura della sovrapposizione nell’interferometro Mach–Zehnder.'],
      ['Interaction-free measurements','Sovrapposizione, stati di spin, entanglement, interferometri e misure Elitzur–Vaidman senza interazione.'],
      ['Photoelectric effect, Compton scattering, and de Broglie wavelength','Effetto fotoelettrico, lunghezza d’onda di Compton, scattering di Compton e proposta ondulatoria di de Broglie.'],
      ['de Broglie matter waves and wave packets','Onde di materia, trasformazioni galileiane, velocità di gruppo, fase stazionaria e moto dei pacchetti d’onda.'],
      ['Momentum operator and Schrödinger equation','Operatori impulso ed energia, equazione di Schrödinger libera e generale, commutatori e interpretazione della funzione d’onda.'],
      ['Probability density and current','Normalizzazione, conservazione della probabilità, hermiticità dell’Hamiltoniana e corrente di probabilità in una e tre dimensioni.'],
      ['Wave packets and uncertainty','Rappresentazione di Fourier, larghezze e incertezze, deformazione ed evoluzione temporale di un pacchetto libero.'],
      ['Momentum space and expectation values','Trasformate di Fourier, delta di Dirac, identità di Parseval, spazio degli impulsi e valori di aspettazione.'],
      ['Observables, measurement, and uncertainty','Operatori hermitiani, autostati, postulato di misura, particella su un cerchio e definizione dell’incertezza.'],
      ['Uncertainty and stationary states','Relazione tra incertezza e autostati, stati stazionari, spettro, condizioni di continuità e particella su un cerchio.'],
      ['Particle on a circle and square wells','Autostati sul cerchio, buca infinita e finita, nodi, simmetrie e quantizzazione dell’energia.'],
      ['Properties of 1D energy eigenstates','Non degenerazione, parità, lunghezza d’onda locale, principio di corrispondenza e metodo shooting.'],
      ['Delta potential and harmonic oscillator I','Potenziale delta, stato legato, teorema dei nodi e impostazione differenziale dell’oscillatore armonico.'],
      ['Harmonic oscillator II','Relazioni di ricorrenza, quantizzazione dell’energia, soluzione algebrica e funzione d’onda dello stato fondamentale.'],
      ['Harmonic oscillator III and scattering states','Operatore numero, stati eccitati, operatori di creazione e distruzione e introduzione allo scattering su gradino.'],
      ['Step potential and time delay','Corrente sul gradino, coefficienti di riflessione e trasmissione, phase shift, pacchetti e regioni proibite.'],
      ['Ramsauer–Townsend effect','Buca finita, trasmissione risonante, fenomenologia Ramsauer–Townsend e scattering unidimensionale.'],
      ['Scattering in 1D and Levinson’s theorem','Ritardo della riflessione, phase shift in una buca e relazione tra scattering e numero di stati legati.'],
      ['Resonances and Breit–Wigner distribution','Ritardo temporale, risonanze, distribuzione Breit–Wigner e poli nel piano complesso del numero d’onda.'],
      ['Central potentials and angular momentum','Operatore di traslazione, potenziali centrali, algebra del momento angolare e quantizzazione.'],
      ['Legendre equation and radial equation','Funzioni associate di Legendre, armoniche sferiche, potenziale efficace e problema a due corpi dell’idrogeno.'],
      ['Hydrogen atom: equation and quantum numbers','Moto relativo e del centro di massa, scale atomiche, equazione radiale e quantizzazione dell’energia.'],
      ['Hydrogen spectrum and Rydberg atoms','Livelli e degenerazioni dell’idrogeno, atomi di Rydberg, teorema del viriale e interpretazione delle orbite.'],
      ['Hydrogen conclusion and emergent angular momentum','Degenerazioni dell’idrogeno, sistema quantistico minimo, Hamiltoniana a due stati e comparsa dello spin.']
    ];
  }

  init() {
    if (!this.list || !this.player) return;
    this.list.addEventListener('click', event => this.handleClick(event));
    this.renderPlayer(); this.renderList(); this.renderProgress();
  }

  loadProgress() { try { return new Set(JSON.parse(localStorage.getItem(this.storageKey)) || []); } catch { return new Set(); } }
  saveProgress() { localStorage.setItem(this.storageKey, JSON.stringify([...this.completed])); }
  videoUrl(index) { return `https://archive.org/download/MIT8.04S16/MIT8_04S16_lec${String(index + 1).padStart(2, '0')}_s1_300k.mp4`; }
  part(index) { return index < 9 ? 1 : index < 18 ? 2 : 3; }

  handleClick(event) {
    const play = event.target.closest('[data-play-2016]');
    const toggle = event.target.closest('[data-complete-2016]');
    if (play) { this.current = Number(play.dataset.play2016); this.renderPlayer(); this.renderList(); this.player.scrollIntoView({behavior:'smooth', block:'center'}); }
    if (toggle) { const index = Number(toggle.dataset.complete2016); this.completed.has(index) ? this.completed.delete(index) : this.completed.add(index); this.saveProgress(); this.renderList(); this.renderProgress(); }
  }

  renderPlayer() {
    const [title, summary] = this.lectures[this.current];
    const number = this.current + 1;
    const partUrl = `https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/pages/video-lectures/part-${this.part(this.current)}/`;
    this.player.innerHTML = `<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black"><video class="h-full w-full" controls preload="metadata" src="${this.videoUrl(this.current)}">Il browser non supporta il video HTML5.</video></div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">Lecture ${String(number).padStart(2,'0')} · Segmento 1</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><p class="mt-4 text-xs leading-relaxed text-paper/35">Questa lecture comprende più segmenti sul sito MIT.</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest"><a href="${partUrl}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">Tutti i segmenti MIT ↗</a><a href="${this.videoUrl(this.current)}" target="_blank" rel="noopener noreferrer" class="text-paper/45 hover:text-white">Video diretto ↗</a></div></div></div>`;
  }

  renderList() {
    this.list.innerHTML = this.lectures.map(([title, summary], index) => { const done=this.completed.has(index), active=this.current===index; return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active?'bg-azure/[.04]':''}"><button data-play-2016="${index}" class="font-mono text-lg ${active?'text-azure':'text-paper/30 hover:text-azure'}" aria-label="Riproduci lecture ${index+1}">${String(index+1).padStart(2,'0')}</button><button data-play-2016="${index}" class="text-left"><p class="font-mono text-[10px] uppercase tracking-widest text-paper/30">Parte ${this.part(index)}</p><h3 class="mt-2 text-xl font-semibold ${done?'text-paper/45 line-through decoration-lime/60':''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><button data-complete-2016="${index}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done?'border-lime bg-lime text-ink':'border-white/20 text-paper/45 hover:border-lime hover:text-lime'}" aria-pressed="${done}">${done?'Completata ✓':'Segna fatta'}</button></article>`; }).join('');
  }

  renderProgress() {
    const count=this.completed.size;
    document.querySelector('#quantum-2016-progress-label').textContent=`${count} di ${this.lectures.length} lecture completate`;
    document.querySelector('#quantum-2016-progress').style.width=`${count/this.lectures.length*100}%`;
  }
}