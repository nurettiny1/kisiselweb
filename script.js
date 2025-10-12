// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-opacity-95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
        }
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-primary', 'font-semibold');
        link.classList.add('text-gray-700');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.remove('text-gray-700');
            link.classList.add('text-primary', 'font-semibold');
        }
    });
});

// Form kaldırıldı - artık gerekli değil

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('section, .group, .bg-white');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// CSS animasyonları artık HTML dosyasında tanımlı

// Portfolio item hover effects
document.addEventListener('DOMContentLoaded', function() {
    const portfolioItems = document.querySelectorAll('#portfolio .group');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Skill bars animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('#about .bg-primary');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-in-out';
            bar.style.width = width;
        }, 500);
    });
}

// Trigger skill bar animation when about section is visible
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        const aboutObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateSkillBars();
                    aboutObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        aboutObserver.observe(aboutSection);
    }
});

// Typing effect for hero section
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        if (originalText) {
            setTimeout(() => {
                typeWriter(heroTitle, originalText, 30);
            }, 200);
        }
    }
});

// Loading Screen kaldırıldı

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    if (scrollProgress) {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }
});

// Dark Mode Toggle
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update icons
    const moonIcon = document.querySelector('#dark-mode-toggle i');
    const mobileMoonIcon = document.querySelector('#dark-mode-toggle-mobile i');
    const mobileToggle = document.querySelector('#dark-mode-toggle-mobile');
    
    if (isDarkMode) {
        if (moonIcon) moonIcon.className = 'fas fa-sun text-xl';
        if (mobileMoonIcon) mobileMoonIcon.className = 'fas fa-sun mr-2';
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-sun mr-2"></i>Aydınlık Mod';
    } else {
        if (moonIcon) moonIcon.className = 'fas fa-moon text-xl';
        if (mobileMoonIcon) mobileMoonIcon.className = 'fas fa-moon mr-2';
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-moon mr-2"></i>Karanlık Mod';
    }
    
    // Save preference
    localStorage.setItem('darkMode', isDarkMode);
}

// Initialize dark mode from localStorage
document.addEventListener('DOMContentLoaded', function() {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        isDarkMode = true;
        document.body.classList.add('dark-mode');
        const moonIcon = document.querySelector('#dark-mode-toggle i');
        const mobileMoonIcon = document.querySelector('#dark-mode-toggle-mobile i');
        const mobileToggle = document.querySelector('#dark-mode-toggle-mobile');
        
        if (moonIcon) moonIcon.className = 'fas fa-sun text-xl';
        if (mobileMoonIcon) mobileMoonIcon.className = 'fas fa-sun mr-2';
        if (mobileToggle) mobileToggle.innerHTML = '<i class="fas fa-sun mr-2"></i>Aydınlık Mod';
    }
    
    // Add event listeners
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// E-posta kopyalama fonksiyonu
function copyEmail() {
    const email = 'yavuz_nurettin@icloud.com';
    
    // Modern tarayıcılar için Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(email).then(function() {
            showCopyNotification('E-posta adresi kopyalandı!');
        }).catch(function() {
            fallbackCopyTextToClipboard(email);
        });
    } else {
        // Fallback için eski yöntem
        fallbackCopyTextToClipboard(email);
    }
}

// Fallback kopyalama fonksiyonu
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Ekran dışında konumlandır
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyNotification('E-posta adresi kopyalandı!');
        } else {
            showCopyNotification('Kopyalama başarısız!', 'error');
        }
    } catch (err) {
        showCopyNotification('Kopyalama başarısız!', 'error');
    }
    
    document.body.removeChild(textArea);
}

// Kopyalama bildirimi gösterme
function showCopyNotification(message, type = 'success') {
    // Mevcut bildirimi kaldır
    const existingNotification = document.querySelector('.copy-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `copy-notification fixed top-4 right-4 z-50 px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 3 saniye sonra kaldır
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}
