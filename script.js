
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn?.addEventListener('click', () => {
  const open = mobileMenu.style.display === 'block';
  mobileMenu.style.display = open ? 'none' : 'block';
  menuBtn.setAttribute('aria-expanded', String(!open));
});
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (mobileMenu){ mobileMenu.style.display = 'none'; menuBtn?.setAttribute('aria-expanded','false'); }
  });
});

// Strategist page interactions
const priceRange = document.getElementById('priceRange');
const priceVal = document.getElementById('priceVal');
if (priceRange && priceVal) {
  const setTxt = () => priceVal.textContent = `$${priceRange.value}/hr`;
  priceRange.addEventListener('input', setTxt);
  setTxt();
}

// Expert page toggle
const availToggle = document.getElementById('availToggle');
const availStatus = document.getElementById('availStatus');
if (availToggle && availStatus) {
  availToggle.addEventListener('change', () => {
    availStatus.textContent = availToggle.checked ? 'Available for calls' : 'Unavailable';
    availStatus.className = availToggle.checked ? 'badge' : 'meta';
  });
}

// Fake Accept/Decline handlers
document.querySelectorAll('[data-action]').forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.getAttribute('data-action');
    const card = btn.closest('.item-card');
    if (!card) return;
    if (action === 'accept') card.querySelector('.meta').textContent = 'Accepted';
    if (action === 'decline') card.querySelector('.meta').textContent = 'Declined';
    if (action === 'propose') card.querySelector('.meta').textContent = 'Proposed new time';
  });
});
