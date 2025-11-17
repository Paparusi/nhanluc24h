// =====================
// Navigation Menu Toggle
// =====================
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// =====================
// Remove Menu on Link Click (Mobile)
// =====================
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// =====================
// Active Link on Scroll
// =====================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

        if (link) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                link.classList.add('active-link');
            } else {
                link.classList.remove('active-link');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// =====================
// Change Header Background on Scroll
// =====================
function scrollHeader() {
    const header = document.getElementById('header');
    if (window.scrollY >= 50) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// =====================
// Scroll to Top Button
// =====================
const scrollTop = document.getElementById('scroll-top');

function showScrollTop() {
    if (window.scrollY >= 400) {
        scrollTop.classList.add('show-scroll');
    } else {
        scrollTop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', showScrollTop);

// Smooth scroll to top
if (scrollTop) {
    scrollTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =====================
// Smooth Scroll for Anchor Links
// =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// =====================
// Contact Form Handling
// =====================
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const formInputs = contactForm.querySelectorAll('.form__input');
        
        // Validate form
        let isValid = true;
        formInputs.forEach(input => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            showMessage('Vui lòng điền đầy đủ thông tin bắt buộc!', 'error');
            return;
        }
        
        // Simulate form submission (in production, replace with actual API call)
        showMessage('Đang gửi yêu cầu...', 'info');
        
        setTimeout(() => {
            showMessage('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.', 'success');
            contactForm.reset();
        }, 1500);
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form__message ${type}`;
        
        // Auto hide message after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.textContent = '';
                formMessage.className = 'form__message';
            }, 5000);
        }
    }
}

// =====================
// Scroll Reveal Animation
// =====================
function revealOnScroll() {
    const reveals = document.querySelectorAll('.service__card, .benefit__card, .process__step');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize reveal elements with hidden state
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.service__card, .benefit__card, .process__step');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// =====================
// Counter Animation for Stats
// =====================
function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // 60fps
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current) + (element.dataset.suffix || '');
    }, 16);
}

// Trigger counter animation when stats section is visible
let statsAnimated = false;
function animateStats() {
    if (statsAnimated) return;
    
    const statsSection = document.querySelector('.home__stats');
    if (!statsSection) return;
    
    const rect = statsSection.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    
    if (isVisible) {
        statsAnimated = true;
        const statNumbers = document.querySelectorAll('.stat__number');
        
        statNumbers.forEach(stat => {
            const text = stat.textContent;
            const hasPlus = text.includes('+');
            const hasPercent = text.includes('%');
            const number = parseInt(text.replace(/[^0-9]/g, ''));
            
            stat.dataset.suffix = hasPlus ? '+' : (hasPercent ? '%' : '');
            animateCounter(stat, number, 2000);
        });
    }
}

window.addEventListener('scroll', animateStats);
animateStats(); // Initial check

// =====================
// Preloader (Optional)
// =====================
window.addEventListener('load', () => {
    // Hide preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.style.opacity = '0';
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }
});

// =====================
// Form Input Focus Effects
// =====================
const formInputs = document.querySelectorAll('.form__input');

formInputs.forEach(input => {
    // Add focus class to parent on focus
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    // Remove focus class on blur if empty
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // Keep focus class if input has value
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});

// =====================
// Mobile Menu Close on Outside Click
// =====================
document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('show-menu')) {
        const isClickInsideMenu = navMenu.contains(e.target);
        const isToggleButton = e.target === navToggle || navToggle.contains(e.target);
        
        if (!isClickInsideMenu && !isToggleButton) {
            navMenu.classList.remove('show-menu');
        }
    }
});

// =====================
// Lazy Loading for Images (if images are added later)
// =====================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// =====================
// Keyboard Navigation Accessibility
// =====================
document.addEventListener('keydown', (e) => {
    // Close mobile menu with Escape key
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// =====================
// Service Card Interactive Tilt Effect (Optional Enhancement)
// =====================
const serviceCards = document.querySelectorAll('.service__card, .benefit__card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.1s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transition = 'transform 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// =====================
// Console Welcome Message
// =====================
console.log('%c Chào mừng đến với HRVN! ', 'background: #2563eb; color: white; font-size: 16px; padding: 10px;');
console.log('%c Công ty TNHH TMDV HRVN - Giải pháp nhân lực chuyên nghiệp ', 'color: #2563eb; font-size: 12px;');
