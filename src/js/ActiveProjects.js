export class ActiveProjects {
  constructor() {
    this.root = document.querySelector('[data-active-projects]');
    if (!this.root) return;
    this.list = this.root.querySelector('[data-project-list]');
    this.status = this.root.querySelector('[data-project-status]');
    this.projects = this.catalog();
  }

  init() {
    if (!this.root) return;
    this.render();
    this.refreshFromGitHub();
  }

  catalog() {
    return [
      { repo:'marcoparenzan.it', name:'marcoparenzan.it', area:'Personal web', language:'HTML', description:'Il codice sorgente di questo sito personale: blog, identità, corsi, fumetti, videogiochi e progetti.', accent:'lime' },
      { repo:'orbitavintage', name:'Orbita Vintage', area:'Culture / Web', language:'JavaScript', description:'Trasmissioni dal futuro passato: B-movie, invasioni, esplorazioni spaziali e futuri impossibili raccolti da YouTube.', accent:'violet', website:'https://www.orbitavintage.it' },
      { repo:'RalfAI', name:'RalfAI', area:'AI / Developer tools', language:'C#', description:'Un agente autonomo da riga di comando per sviluppare applicazioni e svolgere attività di coding.', accent:'azure' },
      { repo:'PySharp', name:'PySharp', area:'Runtime / .NET', language:'C#', description:'Interprete Python 3.x scritto da zero in C# e .NET 10, incorporabile come libreria senza runtime CPython nativo.', accent:'lime', website:'https://www.pysharp.it/' },
      { repo:'TheIoTThing', name:'TheIoTThing', area:'IoT / Orchestration', language:'C#', description:'Orchestratore di servizi a plugin con host Blazor, API HTTP e flussi dataflow visuali configurabili in YAML.', accent:'azure' },
      { repo:'TheMESThing', name:'TheMESThing', area:'Industry / MES', language:'C#', description:'Piattaforma MES su .NET 10 con Azure IoT Hub, produzione, monitoraggio macchine, OEE/KPI e integrazione Microsoft 365.', accent:'violet' },
      { repo:'communityactivity', name:'Community Activity', area:'Community / Knowledge', language:'Content', description:'Presentazioni, esempi e materiali degli eventi 1nn0va organizzati a Pordenone, con slide e demo degli speaker.', accent:'lime' },
      { repo:'BlobBridge', name:'BlobBridge', area:'Data / CLI', language:'C#', description:'CLI per esportare dati SQL Server e PostgreSQL verso Azure Storage, Data Lake, Event Hubs, Service Bus e RabbitMQ.', accent:'azure' }
    ].map(project => ({ ...project, url:`https://github.com/marcoparenzan/${project.repo}` }));
  }

  escape(value) {
    const node = document.createElement('span');
    node.textContent = value ?? '';
    return node.innerHTML;
  }

  color(accent, type='text') {
    const colors = { lime:'lime', azure:'azure', violet:'violet' };
    return `${type}-${colors[accent] || 'lime'}`;
  }

  render() {
    this.list.innerHTML = this.projects.map((project, index) => {
      const updated = project.updatedAt ? new Intl.DateTimeFormat('it-IT', {day:'2-digit',month:'short',year:'numeric'}).format(new Date(project.updatedAt)) : 'Dati locali';
      const description = project.apiDescription || project.description;
      return `<article class="group flex min-h-[24rem] flex-col border border-white/15 p-7 transition hover:border-${project.accent}"><div class="flex items-start justify-between gap-4"><div><p class="font-mono text-[10px] uppercase tracking-[.25em] text-${project.accent}">${this.escape(project.area)}</p><h3 class="mt-3 text-3xl font-semibold tracking-tight">${this.escape(project.name)}</h3></div><span class="font-mono text-xs text-paper/20">${String(index + 1).padStart(2,'0')}</span></div><p class="mt-6 flex-1 text-lg leading-relaxed text-paper/55">${this.escape(description)}</p><div class="mt-8 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest"><span class="border border-white/15 px-3 py-2">${this.escape(project.language || 'N/D')}</span>${project.license ? `<span class="border border-white/15 px-3 py-2">${this.escape(project.license)}</span>` : ''}<span class="border border-white/15 px-3 py-2 text-paper/45">Agg. ${updated}</span></div><div class="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5 font-mono text-[10px] uppercase tracking-widest"><a href="${project.url}" target="_blank" rel="noopener noreferrer" class="text-${project.accent} hover:text-white">Repository GitHub ↗</a>${project.website ? `<a href="${project.website}" target="_blank" rel="noopener noreferrer" class="text-paper/45 hover:text-white">Sito ↗</a>` : ''}</div></article>`;
    }).join('');
  }

  async refreshFromGitHub() {
    const results = await Promise.allSettled(this.projects.map(async project => {
      const response = await fetch(`https://api.github.com/repos/marcoparenzan/${project.repo}`, { headers:{ Accept:'application/vnd.github+json' } });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      project.apiDescription = data.description;
      project.language = data.language || project.language;
      project.updatedAt = data.pushed_at || data.updated_at;
      project.license = data.license?.spdx_id;
      project.website = data.homepage || project.website;
      project.url = data.html_url;
      return project;
    }));
    const loaded = results.filter(result => result.status === 'fulfilled').length;
    this.render();
    this.status.textContent = loaded === this.projects.length ? 'Dati GitHub aggiornati in tempo reale' : `Dati GitHub: ${loaded}/${this.projects.length} repository aggiornati`;
  }
}