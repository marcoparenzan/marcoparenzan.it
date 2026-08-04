export class StanfordCme295Course {
  constructor() {
    this.list = document.querySelector('#stanford-list');
    this.player = document.querySelector('#stanford-player');
    this.storageKey = 'marco-stanford-cme295-progress';
    this.completed = this.loadProgress();
    this.current = 0;
    this.lectures = [
      ['Ub3GoFaUcds','Transformer','Dalle basi dell’NLP a tokenizzazione ed embedding; Word2vec, RNN e LSTM; meccanismo di attenzione e architettura Transformer.','fall25-cme295-lecture1.pdf','1:41:58'],
      ['yT84Y5zCnaA','Transformer-based Models & Tricks','Approssimazione dell’attenzione, MHA/MQA/GQA, positional embedding, RoPE, architetture Transformer e famiglia BERT.','fall25-cme295-lecture2.pdf','1:47:19'],
      ['Q5baLehv5So','Large Language Models','Definizione e architettura degli LLM, mixture of experts, contesto, temperatura, sampling, prompting, chain of thought e self-consistency.','fall25-cme295-lecture3.pdf','1:48:44'],
      ['VlA_jt_3Qc4','LLM Training','Pretraining, quantizzazione e ottimizzazione hardware; supervised fine-tuning e adattamento efficiente con LoRA.','fall25-cme295-lecture4.pdf','1:47:27'],
      ['PmW_TMQ3l0I','LLM Tuning','Preference tuning, panoramica RLHF, reward modeling, PPO e varianti, e direct preference optimization.','fall25-cme295-lecture5.pdf','1:47:42'],
      ['k5Fh-UgTuCo','LLM Reasoning','Reasoning model, reinforcement learning applicato al ragionamento, GRPO e leggi di scaling.','fall25-cme295-lecture6.pdf','1:47:10'],
      ['h-7S6HNq0Vg','Agentic LLMs','Retrieval-augmented generation, tecniche RAG avanzate, function calling, agenti e framework ReAct.','fall25-cme295-lecture7.pdf','1:49:23'],
      ['8fNP4N46RRo','LLM Evaluation','LLM-as-a-judge, pratiche consigliate, vantaggi, bias sistematici e principali insidie della valutazione automatica.','fall25-cme295-lecture8.pdf','1:49:25'],
      ['Q86qzJ1K1Ss','Current Trends','Riepilogo del percorso, argomenti emergenti nell’ecosistema LLM e considerazioni conclusive.','fall25-cme295-lecture9.pdf','1:51:31']
    ];
  }

  init(){if(!this.list||!this.player)return;this.list.addEventListener('click',e=>this.handleClick(e));this.renderPlayer();this.renderList();this.renderProgress()}
  loadProgress(){try{return new Set(JSON.parse(localStorage.getItem(this.storageKey))||[])}catch{return new Set()}}
  saveProgress(){localStorage.setItem(this.storageKey,JSON.stringify([...this.completed]))}
  slideUrl(file){return `https://cme295.stanford.edu/slides/${file}`}

  handleClick(event){const play=event.target.closest('[data-stanford-play]'),toggle=event.target.closest('[data-stanford-complete]');if(play){this.current=Number(play.dataset.stanfordPlay);this.renderPlayer();this.renderList();this.player.scrollIntoView({behavior:'smooth',block:'center'})}if(toggle){const i=Number(toggle.dataset.stanfordComplete);this.completed.has(i)?this.completed.delete(i):this.completed.add(i);this.saveProgress();this.renderList();this.renderProgress()}}

  renderPlayer(){const [id,title,summary,slides,duration]=this.lectures[this.current],number=this.current+1;this.player.innerHTML=`<div class="grid gap-8 lg:grid-cols-[1fr_.42fr] lg:items-center"><div class="aspect-video overflow-hidden bg-black"><iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/${id}" title="Lecture ${number}: ${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><div><p class="font-mono text-xs uppercase tracking-[.3em] text-sand">Lecture ${String(number).padStart(2,'0')} · ${duration}</p><h2 class="mt-4 text-3xl font-semibold leading-tight">${title}</h2><p class="mt-5 leading-relaxed text-paper/60">${summary}</p><div class="mt-7 flex flex-wrap gap-4 font-mono text-xs uppercase tracking-widest"><a href="https://youtu.be/${id}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">YouTube ↗</a><a href="${this.slideUrl(slides)}" target="_blank" rel="noopener noreferrer" class="text-sand hover:text-white">Slide PDF ↗</a></div></div></div>`}

  renderList(){this.list.innerHTML=this.lectures.map(([id,title,summary,slides,duration],i)=>{const done=this.completed.has(i),active=this.current===i;return `<article class="grid gap-5 border-b border-white/15 py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-center ${active?'bg-sand/[.04]':''}"><button data-stanford-play="${i}" class="font-mono text-lg ${active?'text-sand':'text-paper/30 hover:text-sand'}" aria-label="Riproduci lecture ${i+1}">${String(i+1).padStart(2,'0')}</button><div><button data-stanford-play="${i}" class="text-left"><h3 class="text-xl font-semibold ${done?'text-paper/45 line-through decoration-sand/60':''}">${title}</h3><p class="mt-2 max-w-3xl text-sm leading-relaxed text-paper/45">${summary}</p></button><div class="mt-3 flex gap-4 font-mono text-[10px] uppercase tracking-widest"><span class="text-paper/30">${duration}</span><a href="${this.slideUrl(slides)}" target="_blank" rel="noopener noreferrer" class="text-sand hover:text-white">Slide ↗</a></div></div><button data-stanford-complete="${i}" class="justify-self-start border px-3 py-2 font-mono text-[10px] uppercase tracking-widest sm:justify-self-end ${done?'border-sand bg-sand text-ink':'border-white/20 text-paper/45 hover:border-sand hover:text-sand'}" aria-pressed="${done}">${done?'Completata ✓':'Segna fatta'}</button></article>`}).join('')}
  renderProgress(){const count=this.completed.size;document.querySelector('#stanford-progress-label').textContent=`${count} di ${this.lectures.length} lecture completate`;document.querySelector('#stanford-progress').style.width=`${count/this.lectures.length*100}%`}
}