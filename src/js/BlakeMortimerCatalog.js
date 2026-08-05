export class BlakeMortimerCatalog {
  constructor() {
    this.root = document.querySelector('[data-blake-mortimer]');
    if (!this.root) return;
    this.list = document.querySelector('#comic-list');
    this.count = document.querySelector('#comic-count');
    this.filter = 'all';
    this.volumes = this.catalog();
  }

  init() {
    if (!this.root) return;
    this.root.addEventListener('click', event => {
      const button = event.target.closest('[data-comic-filter]');
      if (!button) return;
      this.filter = button.dataset.comicFilter;
      this.renderFilters(); this.render();
    });
    this.render(); this.loadCovers();
  }

  catalog() {
    const slugs = ['il-segreto-dell-espadon-1','il-segreto-dell-espadon-2','il-segreto-dell-espadon-3','il-mistero-della-grande-piramide-1','il-mistero-della-grande-piramide-2','il-marchio-giallo','lenigma-di-atlantide','sos-meteore','la-trappola-diabolica','il-caso-del-collier','le-tre-formule-del-professor-sato-1','le-tre-formule-del-professor-sato-2','il-caso-francis-blake','la-macchinazione-voronov','lo-strano-appuntamento','i-sarcofagi-del-sesto-continente-1','i-sarcofagi-del-sesto-continente-2','il-santuario-di-gondwana','la-maledizione-dei-trenta-denari-1','la-maledizione-dei-trenta-denari-2','il-giuramento-dei-cinque-lord','londa-septimus','il-bastone-di-plutarco','il-testamento-di-william-s','la-valle-degli-immortali-1','la-valle-degli-immortali-2','lurlo-del-moloch','lultimo-espadon','otto-ore-a-berlino','larte-della-guerra','la-minaccia-atlantidea'];
    const rows = [
      [1950,'Il segreto dell’Espadon 1',51523,'jacobs','Edgar P. Jacobs'],[1951,'Il segreto dell’Espadon 2',12381,'jacobs','Edgar P. Jacobs'],[1953,'Il segreto dell’Espadon 3',12365,'jacobs','Edgar P. Jacobs'],[1954,'Il mistero della Grande Piramide 1',12380,'jacobs','Edgar P. Jacobs'],[1955,'Il mistero della Grande Piramide 2',12379,'jacobs','Edgar P. Jacobs'],[1956,'Il marchio giallo',11525,'jacobs','Edgar P. Jacobs'],[1957,'L’enigma di Atlantide',12377,'jacobs','Edgar P. Jacobs'],[1959,'S.O.S. Meteore',12376,'jacobs','Edgar P. Jacobs'],[1962,'La trappola diabolica',12375,'jacobs','Edgar P. Jacobs'],[1967,'Il caso del collier',12374,'jacobs','Edgar P. Jacobs'],[1977,'Le 3 formule del professor Sato 1',12373,'jacobs','Edgar P. Jacobs'],[1990,'Le 3 formule del professor Sato 2',12372,'jacobs','Jacobs · Bob de Moor'],[1996,'Il caso Francis Blake',11858,'continuatori','Van Hamme · Benoit'],[2000,'La macchinazione Voronov',12370,'continuatori','Sente · Juillard'],[2001,'Lo strano appuntamento',12369,'continuatori','Van Hamme · Benoit'],[2003,'I sarcofagi del sesto continente 1',12367,'continuatori','Sente · Juillard'],[2004,'I sarcofagi del sesto continente 2',12366,'continuatori','Sente · Juillard'],[2008,'Il santuario di Gondwana',13044,'continuatori','Sente · Juillard'],[2009,'La maledizione dei trenta denari 1',13056,'continuatori','Van Hamme · Sterne'],[2010,'La maledizione dei trenta denari 2',13046,'continuatori','Van Hamme · Aubin'],[2012,'Il giuramento dei cinque lord',13006,'continuatori','Sente · Juillard'],[2013,'L’onda Septimus',12936,'continuatori','Dufaux · Aubin'],[2014,'Il bastone di Plutarco',12893,'continuatori','Sente · Juillard'],[2016,'Il testamento di William S.',12471,'continuatori','Sente · Juillard'],[2018,'La valle degli immortali 1',11920,'continuatori','Sente · Berserik · Van Dongen'],[2019,'La valle degli immortali 2',11741,'continuatori','Sente · Berserik · Van Dongen'],[2020,'L’urlo del Moloch',16235,'continuatori','Dufaux · Aubin'],[2021,'L’ultimo Espadon',27589,'continuatori','Van Hamme · Berserik · Van Dongen'],[2022,'Otto ore a Berlino',39733,'continuatori','Bocquet · Fromental · Aubin'],[2023,'L’arte della guerra',48889,'continuatori','Fromental · Bocquet · Cailleaux'],[2025,'La minaccia atlantidea',69414,'continuatori','Sente · Van Dongen']
    ];
    return rows.map(([year,title,productId,era,authors], index) => ({number:index+1,year,title,productId,era,authors,slug:slugs[index]}));
  }

  productUrl(id) { return `https://www.editorialecosmo.it/product/product-${id}/`; }

  render() {
    const shown = this.filter === 'all' ? this.volumes : this.volumes.filter(v => v.era === this.filter);
    this.count.textContent = `${shown.length} ${shown.length === 1 ? 'volume' : 'volumi'} · ordine cronologico di pubblicazione`;
    this.list.innerHTML = shown.map(v => `<article class="group flex flex-col"><a href="${v.slug}.html" class="relative block aspect-[3/4] overflow-hidden border border-white/15 bg-white/[.04] transition group-hover:border-yellowmark" aria-label="Dettagli di ${v.title}"><div data-cover="${v.productId}" class="absolute inset-0 grid place-items-center"><span class="font-mono text-6xl font-bold text-white/10">${String(v.number).padStart(2,'0')}</span></div><img data-cover-image="${v.productId}" alt="Copertina di ${v.title}" class="absolute inset-0 hidden size-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="lazy"><span class="absolute left-3 top-3 bg-ink/90 px-2.5 py-1.5 font-mono text-[10px] font-bold tracking-widest text-yellowmark">VOL. ${String(v.number).padStart(2,'0')}</span></a><div class="flex flex-1 flex-col pt-5"><div class="flex justify-between font-mono text-[10px] uppercase tracking-widest"><span class="text-yellowmark">${v.year}</span><span class="text-paper/30">${v.era === 'jacobs' ? 'Jacobs' : 'Ripresa'}</span></div><h2 class="mt-3 text-xl font-semibold leading-tight"><a href="${v.slug}.html" class="hover:text-yellowmark">${v.title}</a></h2><p class="mt-3 text-sm text-paper/45">${v.authors}</p><div class="mt-5 flex flex-col gap-3 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-widest"><a href="${v.slug}.html" class="text-yellowmark hover:text-white">Storia e dettagli →</a><a href="${this.productUrl(v.productId)}" target="_blank" rel="noopener noreferrer" class="text-azure hover:text-white">Acquista · verifica disponibilità ↗</a></div></div></article>`).join('');
    this.applyCachedCovers();
  }

  renderFilters() { document.querySelectorAll('[data-comic-filter]').forEach(button => { const active = button.dataset.comicFilter === this.filter; button.className = `border px-4 py-2 font-mono text-[10px] uppercase tracking-widest ${active ? 'border-yellowmark bg-yellowmark font-bold text-ink' : 'border-white/20 text-paper/55 hover:border-yellowmark'}`; button.setAttribute('aria-pressed', String(active)); }); }

  async loadCovers() {
    await Promise.allSettled(this.volumes.map(async v => { try { const response = await fetch(`https://www.editorialecosmo.it/wp-json/wp/v2/product/${v.productId}?_embed`); if (!response.ok) return; const product = await response.json(); const media = product._embedded?.['wp:featuredmedia']?.[0]; v.image = media?.media_details?.sizes?.woocommerce_single?.source_url || media?.source_url; } catch {} }));
    this.applyCachedCovers();
  }

  applyCachedCovers() { this.volumes.filter(v => v.image).forEach(v => { const image = document.querySelector(`[data-cover-image="${v.productId}"]`); if (!image) return; image.src = v.image; image.classList.remove('hidden'); document.querySelector(`[data-cover="${v.productId}"]`)?.classList.add('hidden'); }); }
}