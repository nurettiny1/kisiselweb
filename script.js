// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
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
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-opacity-95', 'backdrop-blur-sm');
    } else {
        navbar.classList.remove('bg-opacity-95', 'backdrop-blur-sm');
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

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const subject = this.querySelectorAll('input[type="text"]')[1].value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Lütfen tüm alanları doldurun.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Lütfen geçerli bir e-posta adresi girin.');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.');
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

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

// Add CSS for fade-in animation and enhanced effects
const style = document.createElement('style');
style.textContent = `
    .animate-fade-in {
        animation: fadeIn 0.8s ease-in-out;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .nav-link {
        position: relative;
        transition: all 0.3s ease;
    }
    
    .nav-link::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -5px;
        left: 0;
        background-color: #1e40af;
        transition: width 0.3s ease;
    }
    
    .nav-link:hover::after {
        width: 100%;
    }
    
    .nav-link.text-primary::after {
        width: 100%;
    }
    
    /* Enhanced button effects */
    .btn-primary {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        transform: translateY(0);
    }
    
    .btn-primary::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
    }
    
    .btn-primary:hover::before {
        left: 100%;
    }
    
    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .btn-primary:active {
        transform: translateY(0);
    }
    
    .btn-secondary {
        position: relative;
        overflow: hidden;
        transition: all 0.3s ease;
        transform: translateY(0);
    }
    
    .btn-secondary::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        background-color: rgba(255,255,255,0.1);
        transition: width 0.3s ease;
    }
    
    .btn-secondary:hover::before {
        width: 100%;
    }
    
    .btn-secondary:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }
    
    .btn-secondary:active {
        transform: translateY(0);
    }
    
    /* Portfolio card effects */
    .portfolio-card {
        transition: all 0.3s ease;
        transform: translateY(0);
    }
    
    .portfolio-card:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    /* Skill bar animation */
    .skill-bar {
        position: relative;
        overflow: hidden;
    }
    
    .skill-bar::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: shimmer 2s infinite;
    }
    
    @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 100%; }
    }
    
    /* Floating animation for hero elements */
    .floating {
        animation: floating 3s ease-in-out infinite;
    }
    
    @keyframes floating {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
    }
    
    /* Pulse effect for icons */
    .pulse-icon {
        animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
    
    /* System Status Indicator */
    .status-indicator {
        position: relative;
        animation: statusPulse 1.5s ease-in-out infinite;
    }
    
    @keyframes statusPulse {
        0% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
        }
        50% { 
            transform: scale(1.1);
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
        }
        100% { 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
        }
    }
    
    .status-dot {
        animation: dotPulse 1s ease-in-out infinite;
    }
    
    @keyframes dotPulse {
        0%, 100% { 
            opacity: 1;
            transform: scale(1);
        }
        50% { 
            opacity: 0.3;
            transform: scale(0.8);
        }
    }
    
    /* Rotating Server Icon */
    .rotating-server {
        animation: rotate 3s linear infinite;
    }
    
    @keyframes rotate {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Smooth scroll behavior */
    html {
        scroll-behavior: smooth;
    }
    
    /* Enhanced mobile menu animation */
    .mobile-menu-enter {
        animation: slideDown 0.3s ease-out;
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Loading animation */
    .loading {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    }
    
    /* Gradient text effect */
    .gradient-text {
        background: linear-gradient(45deg, #1e40af, #3b82f6, #06b6d4);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    /* Enhanced hover effects for technology cards */
    .tech-card {
        transition: all 0.3s ease;
        transform: translateY(0) scale(1);
    }
    
    .tech-card:hover {
        transform: translateY(-5px) scale(1.05);
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
    }
    
    /* Form input focus effects */
    .form-input:focus {
        transform: scale(1.02);
        box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
    }
    
    /* Staggered animation for portfolio items */
    .portfolio-item {
        opacity: 0;
        transform: translateY(30px);
        animation: slideUpFade 0.6s ease-out forwards;
    }
    
    .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
    .portfolio-item:nth-child(2) { animation-delay: 0.2s; }
    .portfolio-item:nth-child(3) { animation-delay: 0.3s; }
    .portfolio-item:nth-child(4) { animation-delay: 0.4s; }
    .portfolio-item:nth-child(5) { animation-delay: 0.5s; }
    .portfolio-item:nth-child(6) { animation-delay: 0.6s; }
    
    @keyframes slideUpFade {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Data Flow Lines Background */
    .data-flow-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0.6;
        z-index: 1;
    }
    
    .data-line {
        position: absolute;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.8), transparent);
        height: 3px;
        animation: dataFlow 8s linear infinite;
        border-radius: 2px;
    }
    
    .line-1 {
        top: 20%;
        left: -100%;
        width: 300px;
        animation-delay: 0s;
    }
    
    .line-2 {
        top: 35%;
        right: -100%;
        width: 250px;
        animation-delay: 2s;
        animation-direction: reverse;
    }
    
    .line-3 {
        top: 50%;
        left: -100%;
        width: 400px;
        animation-delay: 4s;
    }
    
    .line-4 {
        top: 65%;
        right: -100%;
        width: 200px;
        animation-delay: 1s;
        animation-direction: reverse;
    }
    
    .line-5 {
        top: 80%;
        left: -100%;
        width: 350px;
        animation-delay: 3s;
    }
    
    .line-6 {
        top: 15%;
        right: -100%;
        width: 180px;
        animation-delay: 5s;
        animation-direction: reverse;
    }
    
    @keyframes dataFlow {
        0% {
            transform: translateX(0);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateX(100vw);
            opacity: 0;
        }
    }
    
    .data-node {
        position: absolute;
        width: 8px;
        height: 8px;
        background: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        animation: nodePulse 3s ease-in-out infinite;
    }
    
    .node-1 {
        top: 20%;
        left: 15%;
        animation-delay: 0s;
    }
    
    .node-2 {
        top: 35%;
        right: 20%;
        animation-delay: 1s;
    }
    
    .node-3 {
        top: 50%;
        left: 25%;
        animation-delay: 2s;
    }
    
    .node-4 {
        top: 65%;
        right: 15%;
        animation-delay: 0.5s;
    }
    
    .node-5 {
        top: 80%;
        left: 30%;
        animation-delay: 1.5s;
    }
    
    .node-6 {
        top: 15%;
        right: 35%;
        animation-delay: 2.5s;
    }
    
    @keyframes nodePulse {
        0%, 100% {
            transform: scale(1);
            opacity: 0.6;
        }
        50% {
            transform: scale(1.5);
            opacity: 1;
        }
    }
    
    /* Dark mode adjustments */
    .dark-mode .data-line {
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    }
    
    .dark-mode .data-node {
        background: rgba(255, 255, 255, 0.4);
    }
`;
document.head.appendChild(style);

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
const aboutSection = document.querySelector('#about');
const aboutObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) {
    aboutObserver.observe(aboutSection);
}

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
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 30);
        }, 200);
    }
});

// Loading Screen kaldırıldı

// Scroll Progress Bar
window.addEventListener('scroll', function() {
    const scrollProgress = document.getElementById('scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Dark Mode Toggle
let isDarkMode = false;

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    
    // Update icons
    const moonIcon = document.querySelector('#dark-mode-toggle i');
    const mobileMoonIcon = document.querySelector('#dark-mode-toggle-mobile i');
    
    if (isDarkMode) {
        moonIcon.className = 'fas fa-sun text-xl';
        mobileMoonIcon.className = 'fas fa-sun mr-2';
        document.querySelector('#dark-mode-toggle-mobile').innerHTML = '<i class="fas fa-sun mr-2"></i>Aydınlık Mod';
    } else {
        moonIcon.className = 'fas fa-moon text-xl';
        mobileMoonIcon.className = 'fas fa-moon mr-2';
        document.querySelector('#dark-mode-toggle-mobile').innerHTML = '<i class="fas fa-moon mr-2"></i>Karanlık Mod';
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
        moonIcon.className = 'fas fa-sun text-xl';
        mobileMoonIcon.className = 'fas fa-sun mr-2';
        document.querySelector('#dark-mode-toggle-mobile').innerHTML = '<i class="fas fa-sun mr-2"></i>Aydınlık Mod';
    }
    
    // Add event listeners
    document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);
    document.getElementById('dark-mode-toggle-mobile').addEventListener('click', toggleDarkMode);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading animation
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    body {
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
    }
    
    body.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(loadingStyle);
