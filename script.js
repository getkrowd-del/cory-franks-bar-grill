// ===== ACTIVE NAV LINK HIGHLIGHT =====
    // Purpose: Keep the top navigation feeling polished as guests scroll through the page.
    const sections = document.querySelectorAll('section[id], header[id]');
    const navLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));

    function setActiveLink() {
      // Purpose: Highlight the nav item for the visible section.
      let current = 'hero';
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) current = section.id;
      });

      navLinks.forEach((link) => {
        const target = link.getAttribute('href').replace('#', '');
        link.classList.toggle('active-nav', target === current);
      });
    }

    window.addEventListener('scroll', setActiveLink, { passive: true });
    window.addEventListener('load', setActiveLink);