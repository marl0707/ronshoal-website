(() => {
  'use strict';
  const root = document.documentElement;
  if (new URLSearchParams(location.search).has('flat')) root.classList.add('flat');
  const header = document.querySelector('.header');
  const menu = document.querySelector('.menu-button');
  const closeMenu = () => {
    header.classList.remove('nav-open');
    menu.setAttribute('aria-expanded', 'false');
  };
  menu.addEventListener('click', () => {
    const opened = header.classList.toggle('nav-open');
    menu.setAttribute('aria-expanded', String(opened));
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  document.querySelectorAll('.navigation a').forEach(anchor => anchor.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  window.matchMedia('(min-width:701px)').addEventListener('change', event => {
    if (event.matches) closeMenu();
  });
  function setLanguage(lang) {
    lang = lang === 'en' ? 'en' : 'ja';
    root.lang = lang;
    document.querySelectorAll('[data-ja][data-en]').forEach(node => {
      node.textContent = node.dataset[lang];
    });
    document.querySelectorAll('[data-alt-ja][data-alt-en]').forEach(node => {
      node.alt = lang === 'en' ? node.dataset.altEn : node.dataset.altJa;
    });
    document.querySelectorAll('[data-src-ja][data-src-en]').forEach(node => {
      const source = lang === 'en' ? node.dataset.srcEn : node.dataset.srcJa;
      if (node.getAttribute('src') !== source) node.setAttribute('src', source);
    });
    document.querySelectorAll('[data-href-ja][data-href-en]').forEach(node => {
      node.setAttribute('href', lang === 'en' ? node.dataset.hrefEn : node.dataset.hrefJa);
    });
    document.querySelectorAll('[data-label-ja][data-label-en]').forEach(node => {
      node.setAttribute('aria-label', lang === 'en' ? node.dataset.labelEn : node.dataset.labelJa);
    });
    document.querySelectorAll('[data-lang]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
    });
    document.title = lang === 'en' ? document.body.dataset.titleEn : document.body.dataset.titleJa;
    try { localStorage.setItem('opickle-language', lang); } catch (_) { /* Storage is optional. */ }
  }
  document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));
  let saved = 'ja';
  try { saved = localStorage.getItem('opickle-language') || 'ja'; } catch (_) { /* Japanese is the default. */ }
  const requested = new URLSearchParams(location.search).get('lang');
  setLanguage(requested || saved);

  const photoButtons = [...document.querySelectorAll('[data-event-photo]')];
  const viewer = document.getElementById('event-lightbox');
  if (viewer && photoButtons.length) {
    const image = document.getElementById('event-viewer-image');
    const label = document.getElementById('event-viewer-label');
    const attribution = document.getElementById('event-viewer-credit');
    const previous = document.getElementById('event-viewer-previous');
    const next = document.getElementById('event-viewer-next');
    let position = 0;
    let opener;
    function showPhoto(index) {
      position = Math.max(0, Math.min(index, photoButtons.length - 1));
      const source = photoButtons[position];
      const group = source.dataset.eventPhoto === 'group';
      image.src = source.dataset.fullSrc;
      image.alt = source.querySelector('img').alt;
      label.textContent = `${String(position + 1).padStart(2, '0')} / ${photoButtons.length}`;
      attribution.textContent = group ? 'O.pickle × Pickle Jam' : 'Photographs by AKO';
      previous.disabled = position === 0;
      next.disabled = position === photoButtons.length - 1;
    }
    photoButtons.forEach((button, index) => button.addEventListener('click', () => {
      opener = button;
      showPhoto(index);
      viewer.showModal();
      document.body.classList.add('event-zoomed');
    }));
    document.getElementById('event-viewer-close').addEventListener('click', () => viewer.close());
    previous.addEventListener('click', () => showPhoto(position - 1));
    next.addEventListener('click', () => showPhoto(position + 1));
    viewer.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        showPhoto(position + (event.key === 'ArrowLeft' ? -1 : 1));
      }
    });
    viewer.addEventListener('click', event => {
      if (event.target === viewer) viewer.close();
    });
    viewer.addEventListener('close', () => {
      document.body.classList.remove('event-zoomed');
      image.removeAttribute('src');
      opener?.focus({preventScroll: true});
    });
  }
})();
