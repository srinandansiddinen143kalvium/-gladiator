// Smooth scrolling for navigation links (for browsers ignoring CSS smooth scroll)
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      // Scroll smoothly to section
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation when scrolling sections into view
const observerOptions = {
  threshold: 0.1
};

const fadeInOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-visible');
      observer.unobserve(entry.target); // Animate only once
    }
  });
};

const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);

document.querySelectorAll('section').forEach(section => {
  section.classList.add('fade-in'); // Initial state (hidden)
  observer.observe(section);
});
