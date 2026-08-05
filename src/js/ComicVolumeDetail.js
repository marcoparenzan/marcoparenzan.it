export class ComicVolumeDetail {
  constructor() {
    this.root = document.querySelector('[data-comic-volume]');
    if (!this.root) return;
    this.number = Number(this.root.dataset.comicVolume);
    this.volumes = this.catalog();
    this.volume = this.volumes.find(item => item.number === this.number);
  }

  init() {
    if (!this.root || !this.volume) return;
    this.render();
    this.loadEditorialData();
  }

  catalog() {
    const rows = [
      [1,1950,'Il segreto dell’Espadon 1','il-segreto-dell-espadon-1',51523,'Edgar P. Jacobs','Nel dopoguerra immaginato da Jacobs, l’Impero Giallo travolge il mondo. Blake organizza la resistenza mentre Mortimer lavora in segreto all’Espadon, un’arma rivoluzionaria capace di cambiare il conflitto.'],
      [2,1951,'Il segreto dell’Espadon 2','il-segreto-dell-espadon-2',12381,'Edgar P. Jacobs','La base segreta della resistenza è minacciata e la corsa per completare l’Espadon diventa disperata. Olrik cerca di scoprire il progetto mentre Blake e Mortimer difendono l’ultima speranza degli Alleati.'],
      [3,1953,'Il segreto dell’Espadon 3','il-segreto-dell-espadon-3',12365,'Edgar P. Jacobs','L’Espadon entra finalmente in azione. Lo scontro con l’Impero Giallo raggiunge il culmine e l’invenzione di Mortimer deve dimostrare di poter restituire libertà a un mondo occupato.'],
      [4,1954,'Il mistero della Grande Piramide 1','il-mistero-della-grande-piramide-1',12380,'Edgar P. Jacobs','Al Cairo Mortimer segue le tracce della camera segreta di Horus e del tesoro di Akhenaton. Un papiro, il traffico di antichità e il ritorno di Olrik trasformano la ricerca archeologica in un’indagine pericolosa.'],
      [5,1955,'Il mistero della Grande Piramide 2','il-mistero-della-grande-piramide-2',12379,'Edgar P. Jacobs','Blake raggiunge l’Egitto e l’indagine conduce i due amici nel cuore della Grande Piramide. Passaggi nascosti, tradimenti e antichi segreti convergono verso la camera inviolata.'],
      [6,1956,'Il marchio giallo','il-marchio-giallo',11525,'Edgar P. Jacobs','Londra è terrorizzata da un criminale che firma imprese impossibili con una M gialla. Blake indaga, mentre Mortimer scopre che dietro il Marchio si cela un esperimento di controllo mentale legato al dottor Septimus.'],
      [7,1957,'L’enigma di Atlantide','lenigma-di-atlantide',12377,'Edgar P. Jacobs','Una spedizione speleologica nelle Azzorre conduce Blake e Mortimer in una civiltà sotterranea: Atlantide è sopravvissuta. Il fragile equilibrio del regno viene minacciato dall’ambizione di Olrik.'],
      [8,1959,'S.O.S. Meteore','sos-meteore',12376,'Edgar P. Jacobs','L’Europa occidentale è colpita da fenomeni meteorologici innaturali. Mortimer scopre una tecnologia capace di manipolare il clima, mentre Blake segue una rete di spionaggio che prepara un’invasione.'],
      [9,1962,'La trappola diabolica','la-trappola-diabolica',12375,'Edgar P. Jacobs','Mortimer eredita dal professor Miloch una macchina del tempo, ma il viaggio è una trappola. Proiettato tra preistoria, Medioevo e un futuro totalitario, deve trovare la strada per tornare al presente.'],
      [10,1967,'Il caso del collier','il-caso-del-collier',12374,'Edgar P. Jacobs','La collana della regina Maria Antonietta ricompare a Parigi e viene subito rubata. Blake e Mortimer inseguono Olrik attraverso catacombe, passaggi segreti e sotterranei della capitale francese.'],
      [11,1977,'Le 3 formule del professor Sato 1','le-tre-formule-del-professor-sato-1',12373,'Edgar P. Jacobs','In Giappone il professor Sato crea androidi indistinguibili dagli esseri umani. Temendo che la sua scoperta venga rubata, chiama Mortimer, ma Olrik ha già infiltrato il laboratorio.'],
      [12,1990,'Le 3 formule del professor Sato 2','le-tre-formule-del-professor-sato-2',12372,'Jacobs · Bob de Moor','Mortimer è prigioniero nel laboratorio di Sato e un suo doppio artificiale viene usato dagli avversari. Blake deve distinguere uomini e androidi prima che le formule cadano nelle mani sbagliate.'],
      [13,1996,'Il caso Francis Blake','il-caso-francis-blake',11858,'Van Hamme · Benoit','Francis Blake sembra aver tradito il Regno Unito ed è accusato di essere una talpa. Mortimer rifiuta di crederlo colpevole e cerca la verità in una rete di controspionaggio e doppi giochi.'],
      [14,2000,'La macchinazione Voronov','la-macchinazione-voronov',12370,'Sente · Juillard','Nel pieno della Guerra fredda, un batterio proveniente dallo spazio diventa l’arma del dottor Voronov. Da Baikonur a Londra, Blake e Mortimer tentano di fermare un complotto biologico sovietico.'],
      [15,2001,'Lo strano appuntamento','lo-strano-appuntamento',12369,'Van Hamme · Benoit','Negli Stati Uniti degli anni Cinquanta, cadaveri in uniforme britannica e misteriosi oggetti anacronistici conducono Blake e Mortimer verso un’invasione che attraversa il tempo.'],
      [16,2003,'I sarcofagi del sesto continente 1','i-sarcofagi-del-sesto-continente-1',12367,'Sente · Juillard','Alla vigilia dell’Expo di Bruxelles, Mortimer affronta il ricordo del suo passato in India. Un antico rivale prepara dall’Antartide un’arma basata su onde psichiche e sentimenti umani.'],
      [17,2004,'I sarcofagi del sesto continente 2','i-sarcofagi-del-sesto-continente-2',12366,'Sente · Juillard','Blake e Mortimer raggiungono la base antartica dove sono custoditi i sarcofagi. Per salvare l’Expo e migliaia di persone devono neutralizzare l’arma e confrontarsi con le ferite del passato.'],
      [18,2008,'Il santuario di Gondwana','il-santuario-di-gondwana',13044,'Sente · Juillard','Dopo l’Antartide, Mortimer parte per l’Africa sulle tracce di una civiltà precedente all’umanità. Nel santuario di Gondwana, identità, memoria e amicizia vengono messe in dubbio.'],
      [19,2009,'La maledizione dei trenta denari 1','la-maledizione-dei-trenta-denari-1',13056,'Van Hamme · Sterne','Un archeologo scopre in Grecia una reliquia collegata ai denari di Giuda. Ex nazisti e agenti senza scrupoli cercano il tesoro, mentre Blake e Mortimer vengono coinvolti in una corsa dal potere oscuro.'],
      [20,2010,'La maledizione dei trenta denari 2','la-maledizione-dei-trenta-denari-2',13046,'Van Hamme · Aubin','La ricerca prosegue tra rovine e monasteri greci. Blake e Mortimer devono impedire che Olrik e i suoi alleati riuniscano i denari e sfruttino la terribile leggenda che li circonda.'],
      [21,2012,'Il giuramento dei cinque lord','il-giuramento-dei-cinque-lord',13006,'Sente · Juillard','Una serie di furti e omicidi scuote l’Ashmolean Museum di Oxford. L’indagine di Blake e Mortimer riapre un segreto della giovinezza di Blake e il giuramento stretto da cinque aristocratici.'],
      [22,2013,'L’onda Septimus','londa-septimus',12936,'Dufaux · Aubin','Dopo la morte del dottor Septimus, la sua tecnologia continua a ossessionare Londra. Mortimer studia la Mega Onda, mentre una presenza legata al Marchio Giallo tenta di rinascere.'],
      [23,2014,'Il bastone di Plutarco','il-bastone-di-plutarco',12893,'Sente · Juillard','Nel 1944 Blake combatte una minaccia segreta nel Canale della Manica e incontra Mortimer. La missione del Bastone di Plutarco prepara gli eventi che porteranno alla guerra dell’Espadon.'],
      [24,2016,'Il testamento di William S.','il-testamento-di-william-s',12471,'Sente · Juillard','Un enigma attribuito a Shakespeare conduce Mortimer tra Venezia, Stratford e l’aristocrazia inglese. Blake indaga su una serie di delitti connessi a un documento capace di riscrivere la storia letteraria.'],
      [25,2018,'La valle degli immortali 1','la-valle-degli-immortali-1',11920,'Sente · Berserik · Van Dongen','Dopo la caduta dell’Impero Giallo, la Cina è contesa da fazioni rivali. Blake e Mortimer cercano un antico manoscritto che può condurre alla mitica Valle degli Immortali.'],
      [26,2019,'La valle degli immortali 2','la-valle-degli-immortali-2',11741,'Sente · Berserik · Van Dongen','La ricerca entra nella valle nascosta, dove leggenda e scienza si incontrano. Olrik e i signori della guerra sono vicini al segreto e i due eroi devono impedirne l’uso politico.'],
      [27,2020,'L’urlo del Moloch','lurlo-del-moloch',16235,'Dufaux · Aubin','La creatura aliena emersa dagli esperimenti di Septimus è contesa dai servizi segreti. Londra diventa il campo di una lotta per controllare Moloch e la sua energia distruttiva.'],
      [28,2021,'L’ultimo Espadon','lultimo-espadon',27589,'Van Hamme · Berserik · Van Dongen','Blake affida a Mortimer una missione nella base di Makran: cambiare i codici dell’Espadon prima del trasferimento in Inghilterra. Un complotto trasforma l’operazione in una corsa contro il tempo.'],
      [29,2022,'Otto ore a Berlino','otto-ore-a-berlino',39733,'Bocquet · Fromental · Aubin','Nel 1963, mentre Kennedy visita Berlino, un complotto minaccia l’equilibrio mondiale. Blake e Mortimer hanno soltanto otto ore per ricostruire un piano che coinvolge scienza e servizi segreti.'],
      [30,2023,'L’arte della guerra','larte-della-guerra',48889,'Fromental · Bocquet · Cailleaux','A New York, una conferenza di Mortimer e un misterioso oggetto cinese attirano criminali e agenti. Blake raggiunge l’amico in un’avventura tra musei, diplomazia e arte orientale.'],
      [31,2025,'La minaccia atlantidea','la-minaccia-atlantidea',69414,'Sente · Van Dongen','Il retaggio di Atlantide torna a minacciare la superficie. Blake e Mortimer affrontano una nuova crisi in cui tecnologia avanzata, rivalità antiche e il destino degli Atlantidei si intrecciano.']
    ];
    return rows.map(([number,year,title,slug,productId,authors,summary]) => ({number,year,title,slug,productId,authors,summary}));
  }

  render() {
    const v = this.volume, prev = this.volumes[this.number - 2], next = this.volumes[this.number];
    document.title = `${v.title} — Blake & Mortimer — Marco Parenzan`;
    this.root.innerHTML = `<section class="border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-12 lg:px-8"><a href="blake-mortimer.html" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-yellowmark">← Tutti i volumi</a></div></section><article><section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[.42fr_1fr] lg:px-8"><div><div class="relative aspect-[3/4] overflow-hidden border border-white/15 bg-white/[.04]"><div data-detail-placeholder class="absolute inset-0 grid place-items-center font-mono text-8xl font-bold text-white/10">${String(v.number).padStart(2,'0')}</div><img data-detail-cover alt="Copertina di ${v.title}" class="absolute inset-0 hidden size-full object-cover"></div></div><div class="self-center"><p class="font-mono text-xs uppercase tracking-[.3em] text-yellowmark">Blake & Mortimer · Volume ${String(v.number).padStart(2,'0')} · ${v.year}</p><h1 class="mt-5 text-5xl font-semibold leading-[.95] tracking-[-.045em] sm:text-7xl">${v.title}</h1><p class="mt-6 font-mono text-xs uppercase tracking-widest text-azure">${v.authors}</p><div class="mt-10 border-t border-white/15 pt-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-yellowmark">La storia</p><p class="mt-5 max-w-3xl text-xl leading-relaxed text-paper/65">${v.summary}</p><div data-editorial-summary class="mt-6 hidden max-w-3xl border-l-2 border-azure pl-5 text-base leading-relaxed text-paper/50"></div></div><a href="https://www.editorialecosmo.it/product/product-${v.productId}/" target="_blank" rel="noopener noreferrer" class="mt-9 inline-block bg-yellowmark px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-ink hover:bg-white">Alessandro Editore · verifica disponibilità ↗</a></div></section><section data-preview-section class="hidden border-y border-white/10 bg-white/[.025]"><div class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-azure">Anteprima editoriale</p><figure class="mt-7"><img data-preview-image alt="Anteprima editoriale di ${v.title}" class="max-h-[42rem] max-w-full border border-white/15 object-contain"><figcaption class="mt-3 text-xs text-paper/35">Immagine pubblicata nella scheda ufficiale di Alessandro Editore / Editoriale Cosmo.</figcaption></figure></div></section><section data-no-preview class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto max-w-7xl px-5 py-12 lg:px-8"><p class="font-mono text-xs uppercase tracking-[.3em] text-paper/35">Anteprima</p><p class="mt-3 max-w-2xl text-paper/50">Non è disponibile una striscia editoriale pubblica per questo volume. Consulta la scheda ufficiale per eventuali immagini aggiuntive, senza ripubblicare tavole da fonti non autorizzate.</p></div></section><nav class="mx-auto grid max-w-7xl gap-px bg-white/10 px-5 py-16 sm:grid-cols-2 lg:px-8" aria-label="Volumi adiacenti">${prev ? `<a href="${prev.slug}.html" class="bg-ink p-6 hover:bg-white/[.03]"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">← Volume ${String(prev.number).padStart(2,'0')}</span><strong class="mt-3 block text-xl">${prev.title}</strong></a>` : '<div class="bg-ink"></div>'}${next ? `<a href="${next.slug}.html" class="bg-ink p-6 text-right hover:bg-white/[.03]"><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">Volume ${String(next.number).padStart(2,'0')} →</span><strong class="mt-3 block text-xl">${next.title}</strong></a>` : '<div class="bg-ink"></div>'}</nav></article>`;
  }

  textFromHtml(html) {
    const node = document.createElement('div'); node.innerHTML = html;
    return (node.textContent || '').replace(/\s+/g, ' ').replace(/- ISBN:.*$/i, '').trim();
  }

  async loadEditorialData() {
    const v = this.volume;
    try {
      const [productResponse, mediaResponse] = await Promise.all([
        fetch(`https://www.editorialecosmo.it/wp-json/wp/v2/product/${v.productId}?_embed`),
        fetch(`https://www.editorialecosmo.it/wp-json/wp/v2/media?parent=${v.productId}&per_page=100`)
      ]);
      if (productResponse.ok) {
        const product = await productResponse.json();
        const media = product._embedded?.['wp:featuredmedia']?.[0];
        const cover = media?.media_details?.sizes?.large?.source_url || media?.source_url;
        if (cover) { const image = this.root.querySelector('[data-detail-cover]'); image.src = cover; image.classList.remove('hidden'); this.root.querySelector('[data-detail-placeholder]')?.classList.add('hidden'); }
        const editorial = this.textFromHtml(product.content?.rendered || '');
        if (editorial && editorial.toLowerCase() !== v.summary.toLowerCase()) { const box = this.root.querySelector('[data-editorial-summary]'); box.textContent = `Dalla scheda editoriale: ${editorial}`; box.classList.remove('hidden'); }
      }
      if (mediaResponse.ok) {
        const media = await mediaResponse.json();
        const preview = media.find(item => item.media_details?.width > item.media_details?.height * 1.15);
        if (preview) { this.root.querySelector('[data-preview-image]').src = preview.source_url; this.root.querySelector('[data-preview-section]').classList.remove('hidden'); this.root.querySelector('[data-no-preview]').classList.add('hidden'); }
      }
    } catch { /* La pagina conserva tutti i contenuti locali. */ }
  }
}