export class NuclearEngineeringCourse {
  constructor() {
    this.list = document.querySelector('#nuclear-list');
    this.player = document.querySelector('#nuclear-player');
    this.storageKey = 'marco-mit-2201-progress';
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = [
      ['Radiation History to the Present — Discovery of the Neutron','Ripercorre gli esperimenti storici sulle radiazioni e il percorso che portò alla scoperta del neutrone.'],
      ['Radiation Utilizing Technology','Panoramica delle tecnologie che impiegano radiazioni in energia, industria, ricerca e medicina.'],
      ['Nuclear Mass, Stability, Reactions, and Cross Sections','Massa e stabilità nucleare, notazione delle reazioni e introduzione al concetto di sezione d’urto.'],
      ['Binding Energy and the Liquid Drop Model','Energia di legame, modello semi-empirico a goccia liquida e parabole di massa.'],
      ['Mass Parabolas, Stability, and Half-Life','Approfondisce parabole di massa, stabilità degli isotopi e significato dell’emivita.'],
      ['The Q-Equation','Deriva l’equazione Q per descrivere energetica e cinematica delle reazioni nucleari generali.'],
      ['Q-Equation: Examples','Applica conservazione di energia e quantità di moto a esempi di reazioni nucleari.'],
      ['Radioactive Decay — Modes, Energetics, and Trends','Modi di decadimento, bilanci energetici e tendenze nella tavola dei nuclidi.'],
      ['Radioactive Decay Continued','Prosegue lo studio matematico e fisico dei processi di decadimento radioattivo.'],
      ['Radioactive Decay Continued','Approfondisce probabilità, costanti di decadimento e comportamento temporale degli isotopi.'],
      ['Radioactivity and Series Decays','Attività radioattiva e catene di decadimento con nuclidi genitori e figli.'],
      ['Activity, Half-Life, and Series Decay: Examples','Esempi numerici su attività, emivita, equilibrio e decadimenti in serie.'],
      ['Practical Radiation Counting Experiments','Geometria solida, tassi di conteggio, incertezza, spettrometria gamma e analisi per attivazione.'],
      ['Photon Interactions with Matter I','Effetto fotoelettrico, Compton e produzione di coppie, con identificazione degli spettri gamma.'],
      ['Photon Interactions with Matter II and Shielding','Dettagli delle interazioni fotone-materia, attenuazione e calcoli di schermatura.'],
      ['Nuclear Reactor Construction and Operation','Componenti, costruzione, controllo e funzionamento di base dei reattori nucleari.'],
      ['Ion–Nuclear Interactions I','Scattering, derivazione dello stopping power e calcolo della portata degli ioni nella materia.'],
      ['Ion–Nuclear Interactions II','Bremsstrahlung, spettri X e sezioni d’urto nelle interazioni di particelle cariche.'],
      ['Uses of Photon and Ion Interactions','Tecniche di caratterizzazione dei materiali basate su fotoni, ioni e segnali nucleari.'],
      ['How Nuclear Energy Works','Fissione, reazione a catena e principi con cui un impianto trasforma energia nucleare in elettricità.'],
      ['Neutron Transport','Costruisce l’equazione di trasporto neutronico da bilanci, flusso, corrente e sezioni d’urto.'],
      ['From Neutron Transport to Diffusion','Semplifica il trasporto fino all’equazione di diffusione neutronica mediante ipotesi e teorema della divergenza.'],
      ['Neutron Diffusion and Criticality','Risolve la diffusione e collega geometria, materiali e condizione critica del reattore.'],
      ['Transients, Feedback, and Time-Dependent Neutronics','Dinamica del reattore, coefficienti di feedback, cinetica puntuale e ruolo dei neutroni ritardati.'],
      ['Review of Nuclear Interactions','Ricapitola interazioni nucleari, perdita di energia, schermatura e strumenti di soluzione dei problemi.'],
      ['Chernobyl — How It Happened','Analisi tecnica dell’incidente RBMK: feedback positivo, xenon, errori operativi e rapido aumento di potenza.'],
      ['Nuclear Materials and Radiation Damage','Spostamenti atomici, difetti, evoluzione microstrutturale e cambiamenti delle proprietà dei materiali irradiati.'],
      ['Chernobyl Trip Report','Osservazioni sul sito, misure e contesto tecnico raccontati da un ex studente dopo una visita a Chernobyl.'],
      ['Nuclear Materials Science Continued','Approfondisce il comportamento e il degrado dei materiali esposti a radiazione.'],
      ['Radiation Dose and Dosimetry','Dose assorbita, danno biologico, unità di misura, fondo naturale e applicazioni terapeutiche.'],
      ['Frontiers in Nuclear Medicine','Imaging, terapia, radioisotopi e fonti naturali e artificiali di radiazione ionizzante.'],
      ['Chemical and Biological Effects of Radiation','Meccanismi chimici e cellulari del danno da radiazione e valutazione critica delle affermazioni sul rischio.'],
      ['Long-Term Biological Effects and Risk','Effetti tardivi, statistica epidemiologica, modelli dose-risposta e quantificazione del rischio.'],
      ['Radiation Hormesis','Esamina ipotesi, evidenze e controversie sugli effetti delle basse dosi di radiazione.'],
      ['Food Irradiation and Safety','Principi dell’irraggiamento alimentare, controllo microbiologico, dosi e valutazione della sicurezza.']
    ];
    this.videoIds = ['7LyvAVjQUR8','NXrGOd7gdMw','Gd0QPYVYnQg','SgM2wxELF4U','mJ54DfN95Zo','kZAFntUFx8I','nAtTW8ZW33s','YLp8RziRbpg',null,'es6f90JcJ2k','z_xyx-z6arc','jJSwWRaU9rA','ORbfdLUl0ik','kjX4HCtlJBY','qAVtgc3I6ig','qHPp458m1cs','kJu5qVfSphw','rsDEuRpOHqs','b2VMwG1MTHg','RW2DPHAoXiQ','3yqpirzxudw','KhT9m9kFzv8','RCSCg40NgD4','i3CzkU4Ft9U',null,'Ijst4g5KFN0','CjZjVUWMEz0',null,null,'Hz7ouec7dKo',null,null,null,null,null];
  }

  init() { if (!this.list || !this.player) return; this.list.addEventListener('click', e=>this.handleClick(e)); this.renderPlayer(); this.renderList(); this.renderProgress(); }
  loadProgress(){try{return new Set(JSON.parse(localStorage.getItem(this.storageKey))||[])}catch{return new Set()}}
  saveProgress(){localStorage.setItem(this.storageKey,JSON.stringify([...this.completed]))}
  videoUrl(index){return `https://archive.org/download/MIT22.01F16/MIT22_01F16_Lec${String(index+1).padStart(2,'0')}_300k.mp4`}
  galleryUrl(){return 'https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/video_galleries/lecture-videos/'}

  handleClick(event){const play=event.target.closest('[data-nuclear-play]'),toggle=event.target.closest('[data-nuclear-complete]');if(play){this.current=Number(play.dataset.nuclearPlay);this.renderPlayer();this.renderList();this.player.scrollIntoView({behavior:'smooth',block:'center'})}if(toggle){const i=Number(toggle.dataset.nuclearComplete);this.completed.has(i)?this.completed.delete(i):this.completed.add(i);this.saveProgress();this.renderList();this.renderProgress()}}

  renderPlayer(){const [title,summary]=this.lectures[this.current],number=this.current+1,id=this.videoIds[this.current];if(number===9){this.player.innerHTML=`<div class="grid min-h-72 place-items-center border border-dashed border-atom/40 p-8 text-center"><div><p class="font-mono text-xs uppercase tracking-[.3em] text-atom">Lecture 09 · Video non disponibile</p><h2 class="mt-4 text-3xl font-semibold">${title}</h2><p class="mx-auto mt-5 max-w-2xl text-paper/55">MIT non ha pubblicato la registrazione di questa lezione. Il tema rimane nel percorso e può essere segnato come completato dopo lo studio dei materiali.</p><a href="${this.galleryUrl()}" target="_blank" rel="noopener noreferrer" class="mt-7 inline-block font-mono text-xs uppercase tracking-widest text-atom">Materiali MIT ↗</a></div></div>`;return}const player=id?`<iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${id}" title="Lecture ${number}: ${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`:`<video class="h-full w-full" controls preload="metadata" src="${this.videoUrl(this.current)}">Il browser non supporta il video.</video>`;this.player.innerHTML=`<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black">${player}</div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-atom">In riproduzione · Lecture ${String(number).padStart(2,'0')}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest">${id?`<a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">YouTube ↗</a>`:''}<a href="${this.galleryUrl()}" target="_blank" rel="noopener noreferrer" class="text-paper/45 hover:text-white">Pagina MIT ↗</a></div></div></div>`}

  renderList(){this.list.innerHTML=this.lectures.map(([title,summary],i)=>{const done=this.completed.has(i),active=this.current===i,missing=i===8;return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active?'bg-atom/[.04]':''}"><button data-nuclear-play="${i}" class="font-mono text-lg ${active?'text-atom':'text-paper/30 hover:text-atom'}" aria-label="Apri lecture ${i+1}">${String(i+1).padStart(2,'0')}</button><button data-nuclear-play="${i}" class="text-left">${missing?'<p class="font-mono text-[10px] uppercase tracking-widest text-orange-300">Video non disponibile</p>':''}<h3 class="${missing?'mt-2 ':''}text-xl font-semibold ${done?'text-paper/45 line-through decoration-atom/60':''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><button data-nuclear-complete="${i}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done?'border-atom bg-atom text-ink':'border-white/20 text-paper/45 hover:border-atom hover:text-atom'}" aria-pressed="${done}">${done?'Completata ✓':'Segna fatta'}</button></article>`}).join('')}
  renderProgress(){const count=this.completed.size;document.querySelector('#nuclear-progress-label').textContent=`${count} di ${this.lectures.length} lecture completate`;document.querySelector('#nuclear-progress').style.width=`${count/this.lectures.length*100}%`}
}