
// Historias Vivas — JS mínimo
// Placeholder para futuras integraciones (votos, suscripción, etc.)
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.querySelector('#year');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();

  // Smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href && href.length > 1) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });
});
