const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menuButton?.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(nav.classList.contains('open')));
  menuButton.textContent = nav.classList.contains('open') ? '✕' : '☰';
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.textContent = '☰';
  menuButton.setAttribute('aria-expanded', 'false');
}));
