export class BlogFeed {
  constructor(selector) {
    this.container = document.querySelector(selector);
    // Aggiungere qui i link ai singoli post LinkedIn quando saranno disponibili.
    this.posts = [];
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  render() {
    if (this.posts.length) {
      this.container.innerHTML = this.posts.map((post) => this.postTemplate(post)).join('');
      return;
    }

    this.container.innerHTML = `
      <article class="md:col-span-2 lg:col-span-3 grid gap-8 border border-white/15 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p class="font-mono text-xs uppercase tracking-[.25em] text-lime">Feed LinkedIn</p>
          <h3 class="mt-4 text-3xl font-semibold">I post sono pubblicati su LinkedIn.</h3>
          <p class="mt-4 max-w-2xl leading-relaxed text-paper/55">Apri la mia attività recente per leggere articoli, appunti tecnici e aggiornamenti. Questa pagina è pronta ad accogliere una selezione dei singoli post non appena saranno aggiunti i relativi link.</p>
        </div>
        <a href="https://www.linkedin.com/in/marcoparenzan/recent-activity/all/" target="_blank" rel="noopener noreferrer" class="justify-self-start border border-lime px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-lime transition hover:bg-lime hover:text-ink">Apri il feed ↗</a>
      </article>`;
  }

  postTemplate(post) {
    return `<article class="flex min-h-72 flex-col border border-white/15 p-7 transition hover:border-azure">
      <div class="flex justify-between font-mono text-[10px] uppercase tracking-widest text-paper/40"><span>${post.topic}</span><time>${post.date}</time></div>
      <h3 class="mt-10 text-2xl font-semibold">${post.title}</h3>
      <p class="mt-3 flex-1 leading-relaxed text-paper/55">${post.excerpt}</p>
      <a href="${post.url}" target="_blank" rel="noopener noreferrer" class="mt-8 font-mono text-xs uppercase tracking-widest text-azure">Leggi su LinkedIn ↗</a>
    </article>`;
  }
}