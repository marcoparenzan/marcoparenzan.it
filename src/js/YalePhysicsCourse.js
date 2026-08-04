export class YalePhysicsCourse {
  constructor() {
    this.root = document.querySelector('[data-yale-course]');
    if (!this.root) return;
    this.course = this.root.dataset.yaleCourse;
    this.playlistId = this.root.dataset.playlistId;
    this.list = document.querySelector('#yale-lecture-list');
    this.player = document.querySelector('#yale-player');
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = this.course === 'phys-200' ? this.physicsOne() : this.physicsTwo();
  }

  init() {
    if (!this.root) return;
    this.list.addEventListener('click', event => this.handleClick(event));
    this.renderPlayer();
    this.renderList();
    this.renderProgress();
  }

  physicsOne() {
    return [
      [1,'KOKnWaLiL8w','Course Introduction and Newtonian Mechanics','Introduzione al corso, cinematica e dinamica newtoniana; velocità, accelerazione e moto uniformemente accelerato.'],
      [2,'Hy7ou5R_vjE','Vectors in Multiple Dimensions','Vettori in due dimensioni, componenti, cambi di base, velocità vettoriale, moto circolare e traiettorie dei proiettili.'],
      [3,'Ns6GB4Dph9U',"Newton's Laws of Motion",'Le tre leggi di Newton, sistemi inerziali, definizione operativa di massa e forza e applicazioni della seconda legge.'],
      [4,'9vLSx1Iv06U',"Newton's Laws (cont.) and Inclined Planes",'Attrito statico e dinamico, piani inclinati, carrucole e applicazioni delle leggi di Newton al moto circolare.'],
      [5,'NlDReZhKEro','Work-Energy Theorem and Conservation of Energy','Lavoro, energia cinetica e potenziale, potenza, forze conservative e principio di conservazione dell’energia.'],
      [6,'R74EhX8O0Nw','Conservation of Energy in Higher Dimensions','Estensione del lavoro e dell’energia a più dimensioni, prodotto scalare e riconoscimento delle forze conservative.'],
      [8,'abF2zesdlVk','Multiple-Body Systems and Conservation of Momentum','Centro di massa, dinamica di sistemi a più corpi, quantità di moto, razzi e urti elastici e anelastici.'],
      [9,'mx2P1_M-7UA','Rotations I: Dynamics of Rigid Bodies','Cinematica rotazionale, velocità e accelerazione angolare, momento d’inerzia, energia, momento angolare e coppia.'],
      [10,'UzrZxpup3rc','Rotations II: Parallel Axis Theorem','Teorema degli assi paralleli, energia di traslazione e rotazione, rotolamento senza slittamento e conservazione del momento angolare.'],
      [11,'NDdBTyVBTgY','Torque','Equilibrio statico, coppie, leve, aste, scale e introduzione alla dinamica tridimensionale e al giroscopio.'],
      [12,'pHfFSQ6pLGU','Introduction to Relativity','Relatività galileiana, etere, postulati di Einstein, contrazione delle lunghezze, dilatazione del tempo e trasformazioni di Lorentz.'],
      [13,'202fU9qIVK4','Lorentz Transformation','Trasformazioni di Lorentz, relatività della simultaneità, dilatazione temporale, paradosso dei gemelli e contrazione delle lunghezze.'],
      [14,'URC7QU1XCRw','Introduction to the Four-Vector','Spazio-tempo, intervallo invariante, quadrivettori di posizione, velocità e quantità di moto e relazione massa-energia.'],
      [15,'fYSiTa3xyZc','Four-Vector in Relativity','Quadrivettore energia-impulso, massa invariante, fotoni, collisioni relativistiche e leggi di conservazione.'],
      [16,'KzrdZD4EPXY','Taylor Series and Mathematical Concepts','Serie di Taylor, esponenziali complessi, formula di Eulero, numeri complessi e preparazione al moto armonico.'],
      [17,'Zz-9UVpYcJI','Simple Harmonic Motion','Oscillatori armonici, sovrapposizione, smorzamento, forzamento esterno, frequenza, fase e risonanza.'],
      [18,'v_iNt0FPpwU','Harmonic Motion and Introduction to Waves','Oscillazioni libere e forzate, risonanza, onde longitudinali e trasversali ed equazione delle onde.'],
      [20,'lfXDJKKPGfY','Fluid Dynamics, Statics and Bernoulli Equation','Pressione nei fluidi, pressa idraulica, principio di Archimede, continuità ed equazione di Bernoulli.'],
      [21,'mb8LqNlHeLY','Thermodynamics','Temperatura, equilibrio termico, scala Kelvin, calore specifico, cambiamenti di fase e trasferimento di calore.'],
      [22,'YxGHbnwqd14','Boltzmann Constant and First Law','Interpretazione microscopica della temperatura, costante di Boltzmann, gas ideali, energia interna e primo principio.'],
      [23,'DeNBWsZHXTE','Second Law and Carnot Engine','Processi adiabatici, secondo principio, macchina di Carnot, rendimento massimo e nascita del concetto di entropia.'],
      [24,'ouSLRgkPzbI','Second Law and Entropy','Calcolo dell’entropia, irreversibilità, formulazione statistica di Boltzmann e direzione dei processi spontanei.']
    ];
  }

  physicsTwo() {
    const titles = [
      'Electrostatics','Electric Fields',"Gauss's Law I", "Gauss's Law: Conductors and Insulators",'Electric Potential and Conservation of Energy','Capacitors','Resistance','Circuits and Magnetism I','Magnetism II',"Ampere's Law","Lenz's and Faraday's Laws",'LCR Circuits — DC Voltage','LCR Circuits — AC Voltage',"Maxwell's Equations and Electromagnetic Waves I", "Maxwell's Equations and Electromagnetic Waves II",'Ray or Geometrical Optics I','Ray or Geometrical Optics II','Wave Theory of Light','Quantum Mechanics I: Experiments and Wave-Particle Duality','Quantum Mechanics II','Quantum Mechanics III','Quantum Mechanics IV: Measurement and Energy States','Quantum Mechanics V: Particle in a Box','Quantum Mechanics VI: Time-Dependent Schrödinger Equation','Quantum Mechanics VII: Postulates and Special Topics'
    ];
    const summaries = [
      'Carica elettrica, legge di Coulomb, sovrapposizione e impostazione dei problemi fondamentali di elettrostatica.',
      'Definizione e rappresentazione del campo elettrico, linee di campo e calcolo dei campi prodotti da distribuzioni di carica.',
      'Flusso del campo elettrico e introduzione alla legge di Gauss come strumento basato sulla simmetria.',
      'Applicazioni della legge di Gauss a conduttori, isolanti e distribuzioni di carica con elevata simmetria.',
      'Potenziale elettrico, lavoro, energia potenziale e conservazione dell’energia nei sistemi di cariche.',
      'Capacità, condensatori, dielettrici, energia immagazzinata e combinazioni in serie e parallelo.',
      'Corrente, resistività, legge di Ohm, potenza dissipata e descrizione microscopica della conduzione.',
      'Circuiti in corrente continua e introduzione alle forze magnetiche su cariche e correnti.',
      'Moto di cariche in campi magnetici, forza di Lorentz e campi generati da correnti elettriche.',
      'Legge di Ampère e calcolo dei campi magnetici in configurazioni simmetriche.',
      'Induzione elettromagnetica, flusso magnetico, legge di Faraday e verso della corrente secondo Lenz.',
      'Dinamica dei circuiti con resistenza, induttanza e capacità alimentati in corrente continua.',
      'Circuiti LCR in corrente alternata, impedenza, fase, risonanza e risposta in frequenza.',
      'Sintesi delle equazioni di Maxwell e origine delle onde elettromagnetiche.',
      'Propagazione, energia e proprietà delle onde elettromagnetiche a partire dalle equazioni di Maxwell.',
      'Ottica geometrica, riflessione, rifrazione, principio di Fermat e formazione delle immagini.',
      'Lenti, specchi e sistemi ottici: costruzione e analisi quantitativa delle immagini.',
      'Interferenza, diffrazione, polarizzazione e descrizione ondulatoria della luce.',
      'Esperimenti fondativi della fisica quantistica, fotoni, effetto fotoelettrico e dualismo onda-particella.',
      'Funzione d’onda, probabilità, principio di indeterminazione e struttura matematica iniziale della teoria.',
      'Operatori, osservabili, autostati, valori attesi e interpretazione probabilistica della meccanica quantistica.',
      'Teoria della misura e stati a energia definita nell’equazione di Schrödinger indipendente dal tempo.',
      'Particella in una scatola, quantizzazione dell’energia, autofunzioni e condizioni al contorno.',
      'Evoluzione temporale della funzione d’onda tramite l’equazione di Schrödinger dipendente dal tempo.',
      'Riepilogo dei postulati quantistici e applicazioni conclusive a sistemi e fenomeni selezionati.'
    ];
    return titles.map((title, index) => [index + 1, null, title, summaries[index]]);
  }

  loadProgress() { try { return new Set(JSON.parse(localStorage.getItem(`marco-yale-${this.course}-progress`)) || []); } catch { return new Set(); } }
  saveProgress() { localStorage.setItem(`marco-yale-${this.course}-progress`, JSON.stringify([...this.completed])); }

  handleClick(event) {
    const play = event.target.closest('[data-yale-play]');
    const toggle = event.target.closest('[data-yale-complete]');
    if (play) {
      this.current = Number(play.dataset.yalePlay);
      this.renderPlayer(); this.renderList();
      this.player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (toggle) {
      const index = Number(toggle.dataset.yaleComplete);
      this.completed.has(index) ? this.completed.delete(index) : this.completed.add(index);
      this.saveProgress(); this.renderList(); this.renderProgress();
    }
  }

  videoUrl(lecture, index) {
    return lecture[1]
      ? `https://www.youtube-nocookie.com/embed/${lecture[1]}`
      : `https://www.youtube-nocookie.com/embed/videoseries?list=${this.playlistId}&index=${index}`;
  }

  renderPlayer() {
    const lecture = this.lectures[this.current];
    const [number, id, title, summary] = lecture;
    const source = `https://oyc.yale.edu/physics/${this.course}/lecture-${number}`;
    this.player.innerHTML = `<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black"><iframe class="h-full w-full" src="${this.videoUrl(lecture,this.current)}" title="Lecture ${number}: ${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">Lecture ${String(number).padStart(2,'0')}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">${id ? `<a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">YouTube ↗</a>` : ''}<a href="${source}" target="_blank" rel="noopener noreferrer" class="text-lime hover:text-white">Yale · transcript ↗</a></div></div></div>`;
  }

  renderList() {
    this.list.innerHTML = this.lectures.map(([number,id,title,summary],index) => {
      const done = this.completed.has(index), active = this.current === index;
      return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active?'bg-white/[.03]':''}"><button data-yale-play="${index}" class="font-mono text-lg ${active?'text-lime':'text-paper/30 hover:text-lime'}" aria-label="Riproduci lecture ${number}">${String(number).padStart(2,'0')}</button><button data-yale-play="${index}" class="text-left"><h3 class="text-xl font-semibold ${done?'text-paper/45 line-through decoration-lime/60':''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><button data-yale-complete="${index}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done?'border-lime bg-lime text-ink':'border-white/20 text-paper/45 hover:border-lime hover:text-lime'}" aria-pressed="${done}">${done?'Completata ✓':'Segna fatta'}</button></article>`;
    }).join('');
  }

  renderProgress() {
    const count = this.completed.size;
    document.querySelector('#yale-progress-label').textContent = `${count} di ${this.lectures.length} lecture completate`;
    document.querySelector('#yale-progress').style.width = `${count / this.lectures.length * 100}%`;
  }
}