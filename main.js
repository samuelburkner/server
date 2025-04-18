document.addEventListener('DOMContentLoaded', function() {
    // Efeito de scroll suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
  
    // Animação dos cards
    const cards = document.querySelectorAll('.card');
    
    const animateCards = () => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 150 * index);
        });
    };
  
    // Observador para animação
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCards();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
  
    const servicesSection = document.querySelector('.services');
    if (servicesSection) {
        observer.observe(servicesSection);
    }
  
    // Efeito hover nos cards
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
    });
  
    // Efeito no logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.05)';
        logo.style.transition = 'transform 0.3s';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });
  });
