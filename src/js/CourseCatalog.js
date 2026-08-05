export class CourseCatalog {
  constructor() {
    this.courses = [
      ['quantum-physics.html', 'MIT 8.04 · 2013', 'Quantum Physics I', '24 lecture complete su fondamenti, onde, spin ed entanglement.'],
      ['quantum-physics-2016.html', 'MIT 8.04 · 2016', 'Quantum Physics I', '24 lecture segmentate con Barton Zwiebach.'],
      ['power-electronics.html', 'MIT 6.622 · 2023', 'Power Electronics', '38 lecture su conversione, magnetici, inverter e controllo.'],
      ['nuclear-engineering.html', 'MIT 22.01 · 2016', 'Nuclear Engineering', '35 lecture su fisica nucleare e radiazioni ionizzanti.'],
      ['stanford-cme295.html', 'Stanford CME 295 · 2025', 'Transformers & LLM', '9 lecture con video e slide su modelli linguistici e agenti.'],
      ['yale-fundamentals-physics.html', 'Yale PHYS 200', 'Fundamentals of Physics I', 'Meccanica, relatività e termodinamica.'],
      ['yale-fundamentals-physics-ii.html', 'Yale PHYS 201', 'Fundamentals of Physics II', 'Elettromagnetismo, ottica e meccanica quantistica.'],
      ['mit-deep-learning.html', 'MIT 6.7960 · 2024', 'Deep Learning', '24 lecture su architetture, modelli generativi e scaling.'],
      ['mit-linear-algebra.html', 'MIT 18.06 · 2010', 'Linear Algebra', '35 video del corso di Gilbert Strang.']
    ];
  }

  init() {
    const catalog = document.querySelector('#course-catalog');
    if (catalog) {
      catalog.innerHTML = this.courses.map(([url, code, title, summary], index) => `<a href="${url}" class="group flex min-h-72 flex-col border border-white/15 p-7 transition hover:border-lime"><div class="flex items-start justify-between"><span class="font-mono text-xs uppercase tracking-widest text-azure">${code}</span><span class="font-mono text-xs text-paper/25">${String(index + 1).padStart(2, '0')}</span></div><h2 class="mt-16 text-3xl font-semibold">${title}</h2><p class="mt-4 flex-1 leading-relaxed text-paper/55">${summary}</p><span class="mt-7 font-mono text-xs uppercase tracking-widest text-lime">Apri il corso →</span></a>`).join('');
    }

    const inCourses = location.pathname.toLowerCase().includes('/courses/');
    if (!inCourses) {
      document.querySelectorAll('a[href^="quantum-physics"], a[href^="Courses/"]').forEach((link) => {
        const file = link.getAttribute('href').split('/').pop();
        link.href = `Courses/${file}`;
      });
    }
  }
}
