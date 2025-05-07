// Get the current year for the footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// FAQ functionality
function toggleFaq(element) {
  const faqItem = element.parentElement;
  
  // Close all other FAQ items
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(item => {
    if (item !== faqItem && item.classList.contains('active')) {
      item.classList.remove('active');
      const answer = item.querySelector('.faq-answer');
      answer.style.height = '0';
    }
  });
  
  // Toggle the clicked FAQ item
  const isActive = faqItem.classList.contains('active');
  faqItem.classList.toggle('active');
  
  const answer = faqItem.querySelector('.faq-answer');
  if (isActive) {
    answer.style.height = '0';
  } else {
    const answerHeight = answer.scrollHeight;
    answer.style.height = answerHeight + 'px';
  }
}

// Close all FAQ items on page load
document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const answer = item.querySelector('.faq-answer');
    answer.style.height = '0';
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Account for fixed header
        behavior: 'smooth'
      });
    }
  });
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.feature-card, .compatibility-card, .info-feature');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight - 100) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initial setup for animation
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.feature-card, .compatibility-card, .info-feature');
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run once on page load
  animateOnScroll();
  
  // Then on scroll
  window.addEventListener('scroll', animateOnScroll);
});