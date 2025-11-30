// SKP Stachurski - Main JavaScript

// Cookie Notice Management
class CookieNotice {
    constructor() {
        this.cookieName = 'skp_cookie_consent';
        this.cookieExpiry = 365; // dni
        this.init();
    }

    init() {
        if (!this.hasConsent()) {
            this.showNotice();
        } else if (this.hasAnalyticsConsent()) {
            this.loadGoogleAnalytics();
        }
    }

    hasConsent() {
        return localStorage.getItem(this.cookieName) !== null;
    }

    hasAnalyticsConsent() {
        const consent = localStorage.getItem(this.cookieName);
        return consent === 'all' || consent === 'analytics';
    }

    showNotice() {
        const notice = document.getElementById('cookie-notice');
        if (notice) {
            notice.classList.add('show');
        }
    }

    hideNotice() {
        const notice = document.getElementById('cookie-notice');
        if (notice) {
            notice.classList.remove('show');
        }
    }

    acceptAll() {
        localStorage.setItem(this.cookieName, 'all');
        this.hideNotice();
        this.loadGoogleAnalytics();
    }

    acceptNecessary() {
        localStorage.setItem(this.cookieName, 'necessary');
        this.hideNotice();
    }

    loadGoogleAnalytics() {
        // Dodaj swój ID Google Analytics tutaj
        const GA_ID = 'G-XXXXXXXXXX'; // Zamień na swój prawdziwy ID

        // Google Analytics 4
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
                'anonymize_ip': true,
                'cookie_flags': 'SameSite=None;Secure'
            });
        `;
        document.head.appendChild(script2);
    }
}

// Image Slider
class ImageSlider {
    constructor(sliderId) {
        this.slider = document.getElementById(sliderId);
        if (!this.slider) return;

        this.slides = this.slider.querySelectorAll('.slide');
        this.dots = this.slider.querySelectorAll('.slider-dot');
        this.currentSlide = 0;
        this.autoplayInterval = null;
        this.autoplayDelay = 3000;

        this.init();
    }

    init() {
        if (this.slides.length === 0) return;

        this.showSlide(0);
        this.setupDots();
        this.startAutoplay();

        // Pauza przy hover
        this.slider.addEventListener('mouseenter', () => this.stopAutoplay());
        this.slider.addEventListener('mouseleave', () => this.startAutoplay());
    }

    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        this.dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        this.currentSlide = index;
    }

    nextSlide() {
        const next = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(next);
    }

    setupDots() {
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                this.showSlide(index);
                this.stopAutoplay();
                this.startAutoplay();
            });
        });
    }

    startAutoplay() {
        this.stopAutoplay();
        this.autoplayInterval = setInterval(() => this.nextSlide(), this.autoplayDelay);
    }

    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
            this.autoplayInterval = null;
        }
    }
}

// Mobile Menu
class MobileMenu {
    constructor() {
        this.toggle = document.querySelector('.mobile-menu-toggle');
        this.menu = document.querySelector('.nav-menu');

        if (this.toggle && this.menu) {
            this.init();
        }
    }

    init() {
        this.toggle.addEventListener('click', () => {
            this.menu.classList.toggle('active');
            const isOpen = this.menu.classList.contains('active');
            this.toggle.innerHTML = isOpen ? '✕' : '☰';
        });

        // Zamknij menu po kliknięciu w link
        const links = this.menu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    this.menu.classList.remove('active');
                    this.toggle.innerHTML = '☰';
                }
            });
        });
    }
}

// Gallery Lightbox
class GalleryLightbox {
    constructor() {
        this.galleryItems = document.querySelectorAll('.gallery-item');
        if (this.galleryItems.length > 0) {
            this.init();
        }
    }

    init() {
        this.galleryItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const img = item.querySelector('img');
                if (img) {
                    this.openLightbox(img.src, img.alt);
                }
            });
        });
    }

    openLightbox(src, alt) {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="lightbox-close">&times;</span>
                <img src="${src}" alt="${alt}">
            </div>
        `;

        document.body.appendChild(lightbox);
        document.body.style.overflow = 'hidden';

        // CSS dla lightbox
        const style = document.createElement('style');
        style.innerHTML = `
            .lightbox {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s;
            }
            .lightbox-content {
                position: relative;
                max-width: 90%;
                max-height: 90%;
            }
            .lightbox-content img {
                max-width: 100%;
                max-height: 90vh;
                object-fit: contain;
            }
            .lightbox-close {
                position: absolute;
                top: -40px;
                right: 0;
                color: white;
                font-size: 40px;
                cursor: pointer;
                z-index: 10001;
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        const close = lightbox.querySelector('.lightbox-close');
        close.addEventListener('click', () => this.closeLightbox(lightbox));
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                this.closeLightbox(lightbox);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeLightbox(lightbox);
            }
        });
    }

    closeLightbox(lightbox) {
        lightbox.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            lightbox.remove();
            document.body.style.overflow = '';
        }, 300);
    }
}

// Lazy Loading Images
class LazyLoader {
    constructor() {
        this.images = document.querySelectorAll('img[loading="lazy"]');
        this.init();
    }

    init() {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('loaded');
                        observer.unobserve(img);
                    }
                });
            });

            this.images.forEach(img => observer.observe(img));
        } else {
            // Fallback dla starszych przeglądarek
            this.images.forEach(img => img.classList.add('loaded'));
        }
    }
}

// Smooth Scroll
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// Inicjalizacja po załadowaniu DOM
document.addEventListener('DOMContentLoaded', () => {
    // Cookie Notice
    const cookieNotice = new CookieNotice();
    
    const acceptBtn = document.getElementById('cookie-accept');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', () => cookieNotice.acceptAll());
    }

    const necessaryBtn = document.getElementById('cookie-necessary');
    if (necessaryBtn) {
        necessaryBtn.addEventListener('click', () => cookieNotice.acceptNecessary());
    }

    // Slider
    new ImageSlider('main-slider');

    // Mobile Menu
    new MobileMenu();

    // Gallery
    new GalleryLightbox();

    // Lazy Loading
    new LazyLoader();

    // Smooth Scroll
    smoothScroll();

    // Aktywny link w menu
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a, .sidebar-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});

// Service Worker dla PWA (opcjonalnie)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Można dodać service worker w przyszłości
        // navigator.serviceWorker.register('/sw.js');
    });
}
