export class StarTrekGuide {
  constructor() {
    this.series = [
      ['1966–1969','The Original Series','Live action · 3 stagioni','Kirk, Spock e McCoy a bordo della USS Enterprise NCC-1701.'],
      ['1973–1974','The Animated Series','Animazione · 2 stagioni','Il seguito animato delle missioni dell’equipaggio originale.'],
      ['1987–1994','The Next Generation','Live action · 7 stagioni','Picard guida la Enterprise-D nel XXIV secolo.'],
      ['1993–1999','Deep Space Nine','Live action · 7 stagioni','Una stazione al confine, il wormhole e la guerra del Dominio.'],
      ['1995–2001','Voyager','Live action · 7 stagioni','Una nave dispersa nel Quadrante Delta cerca la via di casa.'],
      ['2001–2005','Enterprise','Live action · 4 stagioni','Le prime esplorazioni terrestri prima della Federazione.'],
      ['2017–2024','Discovery','Live action · 5 stagioni','Dalla guerra klingon a un futuro remoto della Federazione.'],
      ['2018–2020','Short Treks','Cortometraggi · 2 stagioni','Storie brevi collegate soprattutto a Discovery e Picard.'],
      ['2020–2023','Picard','Live action · 3 stagioni','Il ritorno di Jean-Luc Picard e dell’equipaggio di TNG.'],
      ['2020–2024','Lower Decks','Animazione · 5 stagioni','La Flotta Stellare vista dagli ufficiali dei ponti inferiori.'],
      ['2021–2024','Prodigy','Animazione · 2 stagioni','Giovani alieni scoprono la USS Protostar e gli ideali della Flotta.'],
      ['2022–in corso','Strange New Worlds','Live action','Pike, Spock e Number One sulla Enterprise prima di Kirk.'],
      ['2025','Section 31','Film streaming','Philippa Georgiou e la divisione clandestina della Federazione.'],
      ['2026–','Starfleet Academy','Live action','Una nuova generazione di cadetti nel XXXII secolo.']
    ];
    this.films = [
      ['1979','The Motion Picture','Equipaggio originale'],['1982','The Wrath of Khan','Equipaggio originale'],['1984','The Search for Spock','Equipaggio originale'],['1986','The Voyage Home','Equipaggio originale'],['1989','The Final Frontier','Equipaggio originale'],['1991','The Undiscovered Country','Equipaggio originale'],['1994','Generations','TOS / TNG'],['1996','First Contact','The Next Generation'],['1998','Insurrection','The Next Generation'],['2002','Nemesis','The Next Generation'],['2009','Star Trek','Kelvin timeline'],['2013','Into Darkness','Kelvin timeline'],['2016','Beyond','Kelvin timeline']
    ];
  }

  init() {
    const seriesHost = document.querySelector('[data-trek-series]');
    const filmsHost = document.querySelector('[data-trek-films]');
    if (seriesHost) seriesHost.innerHTML = this.series.map(([years,title,format,summary],i) => `<article class="grid gap-4 border-t border-white/15 py-6 sm:grid-cols-[7rem_1fr_.7fr]"><div><span class="font-mono text-xs text-starfleet">${String(i+1).padStart(2,'0')}</span><p class="mt-2 font-mono text-[10px] text-paper/40">${years}</p></div><div><h3 class="text-2xl font-semibold">${title}</h3><p class="mt-2 text-paper/50">${summary}</p></div><p class="font-mono text-[10px] uppercase tracking-widest text-goldfilm sm:text-right">${format}</p></article>`).join('');
    if (filmsHost) filmsHost.innerHTML = this.films.map(([year,title,cycle],i) => `<article class="flex min-h-48 flex-col border border-white/15 p-6 hover:border-starfleet"><div class="flex justify-between font-mono text-xs"><span class="text-starfleet">${String(i+1).padStart(2,'0')}</span><span class="text-paper/40">${year}</span></div><h3 class="mt-auto text-xl font-semibold">${title}</h3><p class="mt-3 font-mono text-[10px] uppercase tracking-widest text-goldfilm">${cycle}</p></article>`).join('');
  }
}
