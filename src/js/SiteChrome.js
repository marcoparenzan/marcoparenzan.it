export class SiteChrome {
  constructor() {
    this.page = location.pathname.split('/').pop() || 'index.html';
  }

  init() {
    this.renderHeader();
    this.renderFooter();
    this.bindMenu();
  }

  renderHeader() {
    const header = document.querySelector('[data-site-header]');
    if (!header) return;
    const links = [
      ['index.html', 'Home'],
      ['eventi.html', 'Eventi'],
      ['corsi.html', 'Corsi']
    ];
    const nav = links.map(([href, label]) => `<a href="${href}" class="border-b py-1 font-mono text-xs uppercase tracking-widest transition ${this.page === href ? 'border-lime text-lime' : 'border-transparent text-paper/60 hover:text-paper'}">${label}</a>`).join('');
    header.innerHTML = `<nav class="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Navigazione principale"><a href="index.html" class="flex items-center gap-3 font-semibold tracking-tight"><span class="grid size-8 place-items-center bg-lime font-mono text-xs font-bold text-ink">MP</span><span>Marco Parenzan</span></a><div class="hidden items-center gap-7 sm:flex">${nav}</div><button data-menu-button class="grid size-10 place-items-center border border-white/15 sm:hidden" aria-label="Apri menu" aria-expanded="false"><span class="text-xl">≡</span></button></nav><div data-mobile-menu class="hidden border-t border-white/10 px-5 py-5 sm:hidden"><div class="flex flex-col gap-4">${nav}</div></div>`;
  }

  renderFooter() {
    const footer = document.querySelector('[data-site-footer]');
    if (!footer) return;
    const year = new Date().getFullYear();
    footer.className = 'border-t border-white/10';
    footer.innerHTML = `<div class="mx-auto max-w-7xl px-5 py-12 lg:px-8"><div class="flex flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><p class="text-2xl font-semibold">Restiamo connessi.</p><div class="mt-5 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs uppercase tracking-widest"><a class="hover:text-lime" href="https://www.linkedin.com/in/marcoparenzan/" target="_blank" rel="noopener">LinkedIn ↗</a><a class="hover:text-lime" href="https://github.com/marcoparenzan" target="_blank" rel="noopener">GitHub ↗</a><a class="hover:text-lime" href="https://www.facebook.com/parenzan.marco" target="_blank" rel="noopener">Facebook ↗</a><a class="hover:text-lime" href="https://www.instagram.com/marcoparenzan/" target="_blank" rel="noopener">Instagram ↗</a></div></div><p class="font-mono text-[10px] uppercase tracking-widest text-paper/35">© ${year} Marco Parenzan · Built with curiosity</p></div></div>`;
  }

  bindMenu() {
    const button = document.querySelector('[data-menu-button]');
    const menu = document.querySelector('[data-mobile-menu]');
    button?.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      button.querySelector('span').textContent = open ? '≡' : '×';
      menu.classList.toggle('hidden', open);
    });
  }
}