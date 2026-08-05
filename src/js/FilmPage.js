export class FilmPage {
  constructor() {
    this.films = {
      'war-games': {
        title: 'WarGames', year: '1983', director: 'John Badham', genre: 'Tech thriller',
        tagline: 'La guerra termonucleare globale può sembrare un gioco soltanto finché il computer non decide di giocare davvero.',
        story: 'David Lightman, adolescente appassionato di informatica, entra per errore in WOPR, il sistema che simula le strategie nucleari statunitensi. Convinto di aver trovato un videogioco, avvia uno scenario che il computer interpreta come una minaccia reale.',
        why: 'È uno dei film che hanno definito l’immaginario dell’hacking domestico: modem, wardialing, social engineering e sistemi critici diventano elementi narrativi comprensibili al grande pubblico.',
        themes: ['Automazione e responsabilità', 'Sistemi critici', 'Hacking e curiosità', 'Simulazione e realtà', 'Deterrenza nucleare', 'Limiti della decisione algoritmica'],
        quote: 'L’unica mossa vincente è non giocare.', source: 'https://www.imdb.com/title/tt0086567/'
      },
      'blade-runner': {
        title: 'Blade Runner', year: '1982', director: 'Ridley Scott', genre: 'Neo-noir cyberpunk',
        tagline: 'Che cosa rende umana una vita quando memoria, empatia e identità possono essere progettate?',
        story: 'Nella Los Angeles del 2019, Rick Deckard deve ritirare quattro replicanti fuggiti dalle colonie extramondo. L’indagine lo conduce verso Roy Batty, Rachael e una domanda che il film lascia deliberatamente aperta: dove passa il confine tra persona e macchina?',
        why: 'Architettura, pioggia, pubblicità, multiculturalismo e tecnologia analogica costruiscono un futuro vissuto. Le diverse versioni del film modificano voce narrante, finale e interpretazione dell’identità di Deckard.',
        themes: ['Identità e memoria', 'Vita artificiale', 'Empatia', 'Mortalità', 'Corporazioni', 'Reale e costruito'],
        quote: 'Tutti quei momenti andranno perduti nel tempo, come lacrime nella pioggia.', source: 'https://www.imdb.com/title/tt0083658/'
      },
      'apollo-13': {
        title: 'Apollo 13', year: '1995', director: 'Ron Howard', genre: 'Dramma storico / spazio',
        tagline: 'Trasformare un fallimento di missione in un successo di ingegneria, collaborazione e ritorno a casa.',
        story: 'La missione lunare Apollo 13 viene interrotta dall’esplosione di un serbatoio di ossigeno. Jim Lovell, Fred Haise e Jack Swigert devono sopravvivere in una navicella danneggiata mentre il controllo missione ricostruisce procedure e sistemi con risorse minime.',
        why: 'Il film mostra troubleshooting, simulazione, comunicazione e decisione sotto pressione. Il problema non è trovare una soluzione elegante, ma una soluzione verificabile con ciò che gli astronauti hanno realmente a bordo.',
        themes: ['Ingegneria sotto vincoli', 'Teamwork', 'Failure management', 'Procedure e simulazione', 'Leadership', 'Esplorazione spaziale'],
        quote: 'Houston, abbiamo un problema.', source: 'https://www.imdb.com/title/tt0112384/'
      }
    };
  }

  init() {
    const host = document.querySelector('[data-film]');
    if (!host) return;
    const film = this.films[host.dataset.film];
    if (!film) return;
    host.innerHTML = `<section class="cinema-grid border-b border-white/10"><div class="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><a href="../index.html" class="font-mono text-xs uppercase tracking-widest text-paper/45 hover:text-redfilm">← Film</a><p class="mt-12 font-mono text-xs uppercase tracking-[.3em] text-redfilm">${film.year} / ${film.genre}</p><h1 class="mt-5 max-w-5xl text-6xl font-semibold leading-[.9] tracking-[-.055em] sm:text-8xl">${film.title}<span class="text-goldfilm">.</span></h1><p class="mt-8 max-w-3xl text-xl italic leading-relaxed text-paper/65">${film.tagline}</p></div></section><section class="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_.45fr] lg:px-8"><article><p class="font-mono text-xs uppercase tracking-[.3em] text-goldfilm">La storia</p><p class="mt-5 text-lg leading-relaxed text-paper/65">${film.story}</p><p class="mt-10 font-mono text-xs uppercase tracking-[.3em] text-redfilm">Perché resta</p><p class="mt-5 text-lg leading-relaxed text-paper/60">${film.why}</p></article><aside class="border border-white/15 p-7"><p class="font-mono text-xs uppercase tracking-widest text-paper/35">Temi</p><ul class="mt-6 space-y-4">${film.themes.map((theme, i) => `<li class="flex gap-4 border-t border-white/10 pt-4"><span class="font-mono text-xs text-redfilm">${String(i + 1).padStart(2, '0')}</span>${theme}</li>`).join('')}</ul></aside></section><section class="border-y border-white/10 bg-white/[.025]"><div class="mx-auto max-w-7xl px-5 py-14 lg:px-8"><blockquote class="max-w-4xl font-serif text-3xl italic leading-relaxed text-paper/75">«${film.quote}»</blockquote><p class="mt-5 font-mono text-xs uppercase tracking-widest text-paper/35">Regia / ${film.director}</p></div></section><section class="mx-auto max-w-7xl px-5 py-16 lg:px-8"><a href="${film.source}" target="_blank" rel="noopener noreferrer" class="font-mono text-xs uppercase tracking-widest text-goldfilm">Scheda e crediti ↗</a></section>`;
  }
}
