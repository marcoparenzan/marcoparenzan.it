export class MitLectureCourse {
  constructor() {
    this.root = document.querySelector('[data-mit-lecture-course]');
    if (!this.root) return;
    this.course = this.root.dataset.mitLectureCourse;
    this.player = this.root.querySelector('[data-mit-player]');
    this.list = this.root.querySelector('[data-mit-lecture-list]');
    this.progress = this.root.querySelector('[data-mit-progress]');
    this.progressLabel = this.root.querySelector('[data-mit-progress-label]');
    this.lectures = this.course === 'deep-learning' ? this.deepLearning() : this.linearAlgebra();
    this.source = this.course === 'deep-learning'
      ? 'https://ocw.mit.edu/courses/6-7960-deep-learning-fall-2024/video_galleries/lecture-videos/'
      : 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/video_galleries/video-lectures/';
    this.completed = this.load();
    this.current = 0;
  }

  init() {
    if (!this.root) return;
    this.list.addEventListener('click', event => this.handleClick(event));
    this.renderPlayer();
    this.renderList();
    this.renderProgress();
  }

  deepLearning() {
    return [
      ['01','6FkRvTtUc-o','Introduction to Deep Learning','Panoramica del deep learning, delle sue applicazioni e delle idee che rendono efficaci le reti neurali moderne.'],
      ['02','vidCX_dMCu0','How to Train a Neural Net','Funzioni obiettivo, backpropagation, ottimizzazione, inizializzazione e pratiche essenziali per addestrare una rete.'],
      ['03','ySaoWrv3T_Q','Approximation Theory','Capacità espressiva delle reti, teoremi di approssimazione e ruolo di profondità e larghezza.'],
      ['04','bxVkZ4M-hIE','Architectures: Grids','Convoluzioni, equivarianza e architetture progettate per immagini e dati organizzati su griglie.'],
      ['05','0niIwb37nF0','Architectures: Graphs','Graph neural network, message passing e apprendimento su strutture relazionali non regolari.'],
      ['06','EiO8BBa-xdc','Generalization Theory','Perché i modelli generalizzano: complessità, regolarizzazione e divario tra training e test.'],
      ['07','VcGPE4s_oNw','Scaling Rules for Optimization','Regole di scaling per learning rate, inizializzazione e dinamica dell’ottimizzazione in reti di grandi dimensioni.'],
      ['08','Q1HOKrNeh2M','Architectures: Transformers','Self-attention, positional information e struttura dei Transformer per sequenze e altri domini.'],
      ['09','DC2Hw9DiLCg',"Hacker's Guide to Deep Learning",'Tecniche pratiche di debugging, monitoraggio e progettazione di esperimenti di deep learning affidabili.'],
      ['10','IiHknRHA-Gk','Architectures: Memory','Modelli con memoria, ricorrenza e meccanismi per conservare e recuperare informazioni nel tempo.'],
      ['11','QxOzQRtd440','Representation Learning: Reconstruction-Based','Autoencoder e obiettivi di ricostruzione per apprendere rappresentazioni utili senza etichette.'],
      ['12','yUh1fEGGdl4','Representation Learning: Similarity-Based','Contrastive learning e obiettivi basati sulla similarità per organizzare lo spazio delle rappresentazioni.'],
      ['13','-eC0-5mXHQg','Representation Learning: Theory','Prospettive teoriche su invarianti, informazione e proprietà delle rappresentazioni apprese.'],
      ['14','hJlrAHqGOS8','Generative Models: Basics','Fondamenti della modellazione generativa, likelihood, variabili latenti e principali famiglie di modelli.'],
      ['15','8zzfcYIELdo','Generative Models: Representation Learning Meets Generative Modeling','Connessione tra rappresentazioni latenti e generazione, con autoencoder variazionali e modelli correlati.'],
      ['16','zaMcHuJwe1w','Generative Models: Conditional Models','Generazione condizionata, guidance e controllo dell’output attraverso informazioni contestuali.'],
      ['17','tjD9LIzIIek','Generalization: Out-of-Distribution (OOD)','Robustezza ai cambiamenti di distribuzione, rilevamento OOD e limiti della generalizzazione standard.'],
      ['18','tNfuZ9Imt3M','Transfer Learning: Models','Riutilizzo di modelli pre-addestrati, fine-tuning e adattamento efficiente a nuovi compiti.'],
      ['19','RUdQMHV-7KM','Transfer Learning: Data','Trasferimento attraverso dati, domain adaptation e scelta delle distribuzioni di pre-training.'],
      ['20','7hbf4klU3ks','Scaling Laws','Relazioni empiriche tra dati, parametri, calcolo e prestazioni dei modelli neurali.'],
      ['21','9GWd3SAWLbA','Language Models','Modellazione autoregressiva del linguaggio, training dei modelli e capacità emergenti.'],
      ['22',null,'Lecture 22 — video non disponibile','Il MIT non ha pubblicato la registrazione di questa lecture; l’unità resta tracciabile tramite i materiali del corso.'],
      ['23','zBvsoxC6tAo','Metrized Deep Learning','Una prospettiva geometrica e metrica per analizzare rappresentazioni e trasformazioni nelle reti profonde.'],
      ['24','mbgFTqKxR7A','Inference Methods for Deep Learning','Metodi di inferenza, ricerca e campionamento per utilizzare efficacemente i modelli addestrati.']
    ];
  }

  linearAlgebra() {
    return [
      ['01','J7DzL2_Na80','The Geometry of Linear Equations','Sistemi lineari interpretati geometricamente tramite rette, piani, righe e colonne di una matrice.'],
      ['02','QVKj3LADCnA','Elimination with Matrices','Eliminazione di Gauss espressa con matrici elementari e operazioni sulle righe.'],
      ['03','FX4C-JpTFgY','Multiplication and Inverse Matrices','Prodotto tra matrici, interpretazioni per righe e colonne e calcolo dell’inversa.'],
      ['04','MsIvs_6vC38','Factorization into A = LU','Fattorizzazione LU come registrazione efficiente dei passi dell’eliminazione.'],
      ['05','JibVXBElKL0','Transposes, Permutations, Spaces Rⁿ','Trasposta, matrici di permutazione e struttura degli spazi vettoriali reali.'],
      ['06','8o5Cmfpeo6g','Column Space and Nullspace','Spazio delle colonne e nucleo: due sottospazi fondamentali associati a una matrice.'],
      ['07','VqP2tREMvt0','Solving Ax = 0: Pivot Variables, Special Solutions','Variabili pivot e libere, forma a scala e costruzione delle soluzioni del sistema omogeneo.'],
      ['08','9Q1q7s1jTzU','Solving Ax = b: Row Reduced Form R','Soluzione completa di sistemi non omogenei e forma ridotta per righe.'],
      ['09','yjBerM5jWsc','Independence, Basis, and Dimension','Indipendenza lineare, basi e dimensione come linguaggio essenziale degli spazi vettoriali.'],
      ['10','nHlE7EgJFds','The Four Fundamental Subspaces','Spazi di colonne, righe e i due nullspace, con dimensioni determinate dal rango.'],
      ['11','2IdtqGM6KWU','Matrix Spaces; Rank 1; Small World Graphs','Spazi di matrici, matrici di rango uno e applicazioni introduttive ai grafi.'],
      ['12','6-wh6yvk6uc','Graphs, Networks, Incidence Matrices','Matrici di incidenza, reti e connessione tra algebra lineare e teoria dei grafi.'],
      ['13','l88D4r74gtM','Quiz 1 Review','Ripasso guidato di eliminazione, sottospazi, basi, dimensione e rango.'],
      ['14','YzZUIYRCE38','Orthogonal Vectors and Subspaces','Ortogonalità tra vettori e sottospazi e relazione tra i quattro sottospazi fondamentali.'],
      ['15','Y_Ac6KiQ1t0','Projections onto Subspaces','Proiezione ortogonale su rette e sottospazi e costruzione della matrice di proiezione.'],
      ['16','osh80YCg_GM','Projection Matrices and Least Squares','Minimi quadrati per sistemi incompatibili, equazioni normali e fitting dei dati.'],
      ['17','0MtwqhIwdrI','Orthogonal Matrices and Gram-Schmidt','Basi ortonormali, matrici Q e processo di ortogonalizzazione di Gram–Schmidt.'],
      ['18','srxexLishgY','Properties of Determinants','Proprietà fondamentali del determinante e loro conseguenze per eliminazione e invertibilità.'],
      ['19','23LLB9mNJvc','Determinant Formulas and Cofactors','Formula per permutazioni, espansione per cofattori e calcolo dei determinanti.'],
      ['20','QNpj-gOXW9M',"Cramer's Rule, Inverse Matrix, and Volume",'Regola di Cramer, formula dell’inversa e significato geometrico del determinante come volume.'],
      ['21','cdZnhQjJu4I','Eigenvalues and Eigenvectors','Autovalori e autovettori, equazione caratteristica e significato dinamico.'],
      ['22','13r9QY6cmjc','Diagonalization and Powers of A','Diagonalizzazione e uso degli autovettori per calcolare potenze elevate di una matrice.'],
      ['23','IZqwi0wJovM','Differential Equations and exp(At)','Sistemi di equazioni differenziali lineari, esponenziale di matrice e modi propri.'],
      ['24','lGGDIGizcQ0','Markov Matrices; Fourier Series','Matrici di Markov, stati stazionari e collegamento con serie e basi di Fourier.'],
      ['24b','QuZL5IKpO_U','Quiz 2 Review','Ripasso di ortogonalità, proiezioni, determinanti, autovalori e diagonalizzazione.'],
      ['25','UCc9q_cAhho','Symmetric Matrices and Positive Definiteness','Teorema spettrale, matrici simmetriche e criteri di definitezza positiva.'],
      ['26','M0Sa8fLOajA','Complex Matrices; Fast Fourier Transform','Matrici hermitiane, numeri complessi e struttura algebrica della FFT.'],
      ['27','vF7eyJ2g3kU','Positive Definite Matrices and Minima','Forme quadratiche, test di positività e relazione con minimi di funzioni multivariate.'],
      ['28','TSdXJw83kyA','Similar Matrices and Jordan Form','Matrici simili, molteplicità degli autovalori e introduzione alla forma canonica di Jordan.'],
      ['29','TX_vooSnhm8','Singular Value Decomposition','SVD come fattorizzazione universale e strumento per rango, approssimazione e analisi dei dati.'],
      ['30','Ts3o2I8_Mxc','Linear Transformations and Their Matrices','Trasformazioni lineari, scelta delle basi e rappresentazione tramite matrici.'],
      ['31','0h43aV4aH7I','Change of Basis; Image Compression','Cambio di coordinate e compressione di immagini tramite approssimazioni a basso rango.'],
      ['32','HgC1l_6ySkc','Quiz 3 Review','Ripasso di matrici positive, SVD, trasformazioni lineari e cambi di base.'],
      ['33','Go2aLo7ZOlU','Left and Right Inverses; Pseudoinverse','Inverse sinistre e destre per matrici rettangolari e pseudoinversa di Moore–Penrose.'],
      ['34','RWvi4Vx4CDc','Final Course Review','Sintesi complessiva delle idee e delle connessioni principali del corso.']
    ];
  }

  load() { try { return new Set(JSON.parse(localStorage.getItem(`marco-mit-${this.course}-progress`)) || []); } catch { return new Set(); } }
  save() { localStorage.setItem(`marco-mit-${this.course}-progress`, JSON.stringify([...this.completed])); }
  escape(value) { const span = document.createElement('span'); span.textContent = value; return span.innerHTML; }

  handleClick(event) {
    const play = event.target.closest('[data-mit-play]');
    const toggle = event.target.closest('[data-mit-complete]');
    if (play) {
      this.current = Number(play.dataset.mitPlay);
      this.renderPlayer(); this.renderList();
      this.player.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (toggle) {
      const index = Number(toggle.dataset.mitComplete);
      this.completed.has(index) ? this.completed.delete(index) : this.completed.add(index);
      this.save(); this.renderList(); this.renderProgress();
    }
  }

  renderPlayer() {
    const [number,id,title,summary] = this.lectures[this.current];
    const media = id
      ? `<div class="aspect-video overflow-hidden bg-black"><iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${id}" title="Lecture ${this.escape(number)}: ${this.escape(title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`
      : `<div class="grid aspect-video place-items-center border border-dashed border-white/20 bg-black/40 p-8 text-center"><div><p class="text-4xl text-paper/25">▶</p><p class="mt-4 font-mono text-xs uppercase tracking-widest text-paper/45">Video non pubblicato dal MIT</p></div></div>`;
    this.player.innerHTML = `<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center">${media}<div><p class="font-mono text-xs uppercase tracking-[.3em] text-lime">Lecture ${this.escape(number)}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${this.escape(title)}</h2><p class="mt-5 leading-relaxed text-paper/60">${this.escape(summary)}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">${id ? `<a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">YouTube ↗</a>` : ''}<a href="${this.source}" target="_blank" rel="noopener noreferrer" class="text-lime hover:text-white">Materiali MIT ↗</a></div></div></div>`;
  }

  renderList() {
    this.list.innerHTML = this.lectures.map(([number,id,title,summary],index) => {
      const done = this.completed.has(index), active = this.current === index;
      return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active ? 'bg-white/[.03]' : ''}"><button data-mit-play="${index}" class="font-mono text-lg ${active ? 'text-lime' : 'text-paper/30 hover:text-lime'}" aria-label="Apri lecture ${this.escape(number)}">${this.escape(number)}</button><button data-mit-play="${index}" class="text-left"><h3 class="text-xl font-semibold ${done ? 'text-paper/45 line-through decoration-lime/60' : ''}">${this.escape(title)} ${id ? '' : '<span class="ml-2 font-mono text-[10px] uppercase tracking-widest text-amber-300">senza video</span>'}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${this.escape(summary)}</p></button><button data-mit-complete="${index}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done ? 'border-lime bg-lime text-ink' : 'border-white/20 text-paper/45 hover:border-lime hover:text-lime'}" aria-pressed="${done}">${done ? 'Completata ✓' : 'Segna fatta'}</button></article>`;
    }).join('');
  }

  renderProgress() {
    const count = this.completed.size;
    this.progressLabel.textContent = `${count} di ${this.lectures.length} lecture completate`;
    this.progress.style.width = `${count / this.lectures.length * 100}%`;
  }
}