export class CourseLibrary {
  constructor() {
    this.list = document.querySelector('#course-list');
    this.empty = document.querySelector('#course-empty');
    this.count = document.querySelector('#course-count');
    this.dialog = document.querySelector('#course-dialog');
    this.form = document.querySelector('#course-form');
    this.storageKey = 'marco-learning-queue';
    this.courses = this.load();
  }

  init() {
    if (!this.list) return;
    document.querySelector('#open-course-form')?.addEventListener('click', () => this.dialog.showModal());
    ['#close-course-form', '#cancel-course-form'].forEach(selector => document.querySelector(selector)?.addEventListener('click', () => this.dialog.close()));
    this.dialog?.addEventListener('click', event => { if (event.target === this.dialog) this.dialog.close(); });
    this.form?.addEventListener('submit', event => this.add(event));
    this.list.addEventListener('click', event => this.handleAction(event));
    this.render();
  }

  load() {
    try { return JSON.parse(localStorage.getItem(this.storageKey)) || []; }
    catch { return []; }
  }

  save() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.courses));
  }

  add(event) {
    event.preventDefault();
    if (!this.form.reportValidity()) return;
    const data = new FormData(this.form);
    this.courses.unshift({
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      title: data.get('title').trim(),
      url: data.get('url').trim(),
      topic: data.get('topic').trim() || 'Da esplorare',
      note: data.get('note').trim(),
      done: false
    });
    this.save();
    this.render();
    this.form.reset();
    this.dialog.close();
  }

  handleAction(event) {
    const button = event.target.closest('button[data-action]');
    if (!button) return;
    const course = this.courses.find(item => item.id === button.dataset.id);
    if (button.dataset.action === 'toggle' && course) course.done = !course.done;
    if (button.dataset.action === 'delete') this.courses = this.courses.filter(item => item.id !== button.dataset.id);
    this.save();
    this.render();
  }

  escape(value) {
    const node = document.createElement('div');
    node.textContent = value;
    return node.innerHTML;
  }

  safeUrl(value) {
    try { const url = new URL(value); return ['http:', 'https:'].includes(url.protocol) ? url.href : '#'; }
    catch { return '#'; }
  }

  render() {
    this.empty.classList.toggle('hidden', this.courses.length > 0);
    this.count.textContent = `${this.courses.length} ${this.courses.length === 1 ? 'percorso' : 'percorsi'} · ${this.courses.filter(item => item.done).length} completati`;
    this.list.innerHTML = this.courses.map(course => `<article class="flex min-h-72 flex-col border ${course.done ? 'border-lime/30 bg-lime/[.03]' : 'border-white/15'} p-6"><div class="flex items-center justify-between"><span class="font-mono text-[10px] uppercase tracking-widest ${course.done ? 'text-lime' : 'text-azure'}">${course.done ? 'Completato' : this.escape(course.topic)}</span><button data-action="delete" data-id="${course.id}" class="text-paper/30 hover:text-red-400" aria-label="Elimina ${this.escape(course.title)}">×</button></div><h3 class="mt-8 text-2xl font-semibold ${course.done ? 'line-through decoration-lime/50' : ''}">${this.escape(course.title)}</h3><p class="mt-3 flex-1 text-sm leading-relaxed text-paper/50">${this.escape(course.note || 'Nessuna nota aggiunta.')}</p><div class="mt-7 flex items-center justify-between border-t border-white/10 pt-5"><a href="${this.safeUrl(course.url)}" target="_blank" rel="noopener" class="font-mono text-xs uppercase tracking-widest text-lime hover:text-white">Apri YouTube ↗</a><button data-action="toggle" data-id="${course.id}" class="font-mono text-[10px] uppercase tracking-widest text-paper/40 hover:text-paper">${course.done ? 'Riapri' : 'Segna fatto'} ✓</button></div></article>`).join('');
  }
}