export class YouTubePlaylistCourse {
  constructor() {
    this.root = document.querySelector('[data-playlist-course]');
    if (!this.root) return;
    this.playlistId = this.root.dataset.playlistId;
    this.storageKey = `marco-playlist-${this.playlistId}-progress`;
  }

  init() {
    if (!this.root) return;
    this.player = this.root.querySelector('[data-playlist-player]');
    this.range = this.root.querySelector('[data-progress-range]');
    this.label = this.root.querySelector('[data-progress-label]');
    this.completeButton = this.root.querySelector('[data-mark-complete]');
    this.renderPlayer();
    this.range.value = this.loadProgress();
    this.updateProgress();
    this.range.addEventListener('input', () => this.updateProgress());
    this.range.addEventListener('change', () => this.saveProgress());
    this.completeButton.addEventListener('click', () => {
      this.range.value = 100;
      this.saveProgress();
      this.updateProgress();
    });
  }

  renderPlayer() {
    this.player.innerHTML = `<iframe class="h-full w-full" src="https://www.youtube-nocookie.com/embed/videoseries?list=${encodeURIComponent(this.playlistId)}" title="Player del corso YouTube" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  }

  loadProgress() {
    const value = Number(localStorage.getItem(this.storageKey));
    return Number.isFinite(value) ? Math.min(100, Math.max(0, value)) : 0;
  }

  saveProgress() {
    localStorage.setItem(this.storageKey, this.range.value);
  }

  updateProgress() {
    const value = Number(this.range.value);
    this.label.textContent = `${value}% completato`;
    this.range.style.background = `linear-gradient(90deg,#c6ff4a ${value}%,rgba(255,255,255,.12) ${value}%)`;
    this.completeButton.textContent = value === 100 ? 'Corso completato ✓' : 'Segna come completato';
    this.completeButton.setAttribute('aria-pressed', String(value === 100));
  }
}