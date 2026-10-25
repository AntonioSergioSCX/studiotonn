/* Mostra os elementos [data-reveal] quando entram na tela. */
const items = document.querySelectorAll<HTMLElement>('[data-reveal]');

if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
  );
  items.forEach((el) => io.observe(el));
} else {
  items.forEach((el) => el.classList.add('is-in'));
}

/* Carrosséis do celular: focáveis pelo teclado quando há rolagem lateral */
const syncScrollers = () =>
  document.querySelectorAll<HTMLElement>('.snap-mobile').forEach((el) => {
    if (el.scrollWidth > el.clientWidth + 2) el.tabIndex = 0;
    else el.removeAttribute('tabindex');
  });
syncScrollers();
window.addEventListener('resize', syncScrollers, { passive: true });

/* Brilho que segue o cursor em cartões com [data-spotlight] */
document.querySelectorAll<HTMLElement>('[data-spotlight]').forEach((el) => {
  el.addEventListener('pointermove', (e) => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
});
