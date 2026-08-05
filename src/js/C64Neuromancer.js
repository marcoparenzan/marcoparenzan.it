export class C64Neuromancer {
  init() {
    const list = document.querySelector('[data-c64-game-list]');
    if (!list || list.querySelector('[data-neuromancer-card]')) return;
    const minecraft = [...list.querySelectorAll('a')].find(link => link.getAttribute('href') === 'minecraft.html');
    const card = `<a data-neuromancer-card href="neuromancer.html" class="group flex min-h-64 flex-col border border-white/15 p-6 transition hover:border-c64light"><div class="flex justify-between font-mono text-[10px] uppercase tracking-widest"><span class="text-c64light">1988</span><span class="text-paper/25">20</span></div><div class="my-7 grid flex-1 place-items-center overflow-hidden bg-c64blue/30"><img src="https://www.lemon64.com/uploads/c64/images/games/screens/neuromancer/neuromancer_02.png" alt="Neuromancer su Commodore 64" class="size-full object-cover [image-rendering:pixelated]" loading="lazy"></div><p class="font-mono text-[10px] uppercase tracking-widest text-lime">Classico C64</p><h3 class="mt-3 text-2xl font-semibold leading-tight">Neuromancer</h3><span class="mt-5 font-mono text-[10px] uppercase tracking-widest text-c64light">LOAD →</span></a>`;
    minecraft?.insertAdjacentHTML('afterend', card);
    const count = document.querySelector('[data-game-count]');
    if (count) count.textContent = '27 schede · originali, conversioni e homebrew';
  }
}