const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links a');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scroll for in-page links
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    const targetId = link.getAttribute('href');
    if (targetId?.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open');
    }
  });
});

// Active link highlighting
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      if (!id) return;
      const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
      if (entry.isIntersecting) {
        links.forEach((l) => l.classList.remove('active'));
        activeLink?.classList.add('active');
      }
    });
  },
  { rootMargin: '-30% 0px -50% 0px', threshold: 0.25 }
);

document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));

// Close nav on outside click (mobile)
document.addEventListener('click', (e) => {
  if (!navLinks || !navToggle) return;
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

