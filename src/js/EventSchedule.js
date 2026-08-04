export class EventSchedule {
  constructor(selector) {
    this.root = document.querySelector(selector);
    this.events = [
      { day: '23', month: 'GEN', title: '.NET Saturday 2027', topic: 'Le novità di .NET 11', status: 'Data confermata' },
      { day: '26', month: 'FEB', title: 'Azure Friday 2027', topic: 'Infrastructure Azure e Microsoft 365', status: 'Data confermata' },
      { day: '—', month: 'MAG', title: 'Global Azure 2027', topic: 'Azure per sviluppatori e Data Platform', status: 'Data in definizione' },
      { day: '25', month: 'SET', title: '1nn0vAI 2027', topic: "Lo stato dell'arte dell'intelligenza artificiale", status: 'Data confermata' }
    ];
  }

  init() {
    if (!this.root) return;
    this.root.innerHTML = this.events.map((event, index) => `<article class="group grid gap-5 border-b border-white/15 py-7 transition hover:bg-white/[.025] sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:px-5"><div class="flex items-baseline gap-2"><span class="font-mono text-4xl font-bold text-${index % 2 ? 'azure' : 'lime'}">${event.day}</span><span class="font-mono text-xs tracking-widest text-paper/45">${event.month}</span></div><div><h3 class="text-2xl font-semibold">${event.title}</h3><p class="mt-1 text-paper/50">${event.topic}</p></div><span class="font-mono text-[10px] uppercase tracking-widest text-paper/35">${event.status}</span></article>`).join('');
  }
}