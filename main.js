// Luxury Navigation Bar Implementation
class LuxuryNavigation {
    constructor() {
        this.init();
    }

    init() {
        this.createNavigation();
        this.bindEvents();
        this.handleScroll();
    }

    createNavigation() {
        const nav = document.createElement('nav');
        nav.className = 'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out px-6 lg:px-12 xl:px-16 py-4';
        nav.id = 'luxury-nav';
        
        nav.innerHTML = `
            <div class="flex items-center justify-between max-w-7xl mx-auto">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="index.html">
                        <img src="images/logo.svg" alt="Rizza Classic" class="h-10 lg:h-12 transition-all duration-500 hover:scale-105">
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-12 font-sans">
                    <a href="#chi-siamo" class="nav-link relative text-white text-base">
                        <span data-translate="nav-chi-siamo">Chi Siamo</span>
                        <span class="nav-underline"></span>
                    </a>
                    <a href="#servizi" class="nav-link relative text-white text-base">
                        <span data-translate="nav-servizi">Servizi</span>
                        <span class="nav-underline"></span>
                    </a>
                    <a href="#restauri" class="nav-link relative text-white text-base">
                        <span data-translate="nav-restauri">Restauri</span>
                        <span class="nav-underline"></span>
                    </a>
                    <a href="contact.html" class="nav-link relative text-white text-base">
                        <span data-translate="nav-contatti">Contatti</span>
                        <span class="nav-underline"></span>
                    </a>
                    
                    <!-- Language Switcher -->
                    <div class="flex items-center">
                        <button class="flex items-center gap-2 text-white hover:text-gray-300 transition-colors duration-200">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m5 8 6 6"/>
                                <path d="m4 14 6-6 2-3"/>
                                <path d="M2 5h12"/>
                                <path d="M7 2h1"/>
                                <path d="m22 22-5-10-5 10"/>
                                <path d="M14 18h6"/>
                            </svg>
                            <span class="text-base font-medium">EN</span>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu Button -->
                <button class="lg:hidden mobile-menu-btn p-2 rounded-lg transition-all duration-300 hover:bg-white/10" id="mobile-menu-btn">
                    <div class="hamburger-lines">
                        <span class="line line-1 block w-6 h-0.5 bg-white transition-all duration-300"></span>
                        <span class="line line-2 block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300"></span>
                        <span class="line line-3 block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300"></span>
                    </div>
                </button>
            </div>

            <!-- Mobile Menu Overlay -->
            <div class="mobile-menu fixed inset-0 bg-black opacity-0 invisible transition-all duration-300 ease-out lg:hidden" id="mobile-menu">
                <!-- Close Button -->
                <button class="mobile-close-btn absolute top-6 right-6 p-2 transition-all duration-200 z-20" id="mobile-close-btn">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Logo -->
                <div class="absolute top-6 left-6">
                    <a href="index.html">
                        <img src="images/logo.svg" alt="Rizza Classic" class="h-12">
                    </a>
                </div>
                
                <div class="flex flex-col justify-between h-full pt-24 pb-8 px-6">
                    <!-- Navigation Links -->
                    <div class="mobile-menu-content transform translate-y-4 opacity-0 transition-all duration-300 delay-75">
                        <div class="space-y-8 pt-8">
                            <a href="#chi-siamo" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-chi-siamo">Chi Siamo</span>
                            </a>
                            <a href="#servizi" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-servizi">Servizi</span>
                            </a>
                            <a href="#restauri" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-restauri">Restauri</span>
                            </a>
                            <a href="#vendita" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-vendita">Vendita</span>
                            </a>
                            <a href="contact.html" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-contatti">Contatti</span>
                            </a>
                        </div>
                    </div>

                    <!-- Footer Section -->
                    <div class="mt-auto space-y-6">
                        <!-- Address -->
                        <div>
                            <p class="text-gray-400 text-sm mb-2" data-translate="mobile-address">Indirizzo</p>
                            <p class="text-white text-base">Via Prenestina, 912 00155 Roma (RM)</p>
                        </div>
                        
                        <!-- Separator Line -->
                        <div class="border-t border-gray-800"></div>
                        
                        <!-- Footer Links -->
                        <div class="flex justify-between items-center">
                            <!-- Social Media Icons replacing Rizza Classic and Terms -->
                            <div class="flex items-center gap-4">
                                <a href="#" class="text-gray-500 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <a href="#" class="text-gray-500 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                    </svg>
                                </a>
                            </div>
                            <!-- Language Switcher replacing Privacy Policy -->
                            <button class="flex items-center gap-2 text-gray-500 hover:text-white transition-colors">
                                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m5 8 6 6"/>
                                    <path d="m4 14 6-6 2-3"/>
                                    <path d="M2 5h12"/>
                                    <path d="M7 2h1"/>
                                    <path d="m22 22-5-10-5 10"/>
                                    <path d="M14 18h6"/>
                                </svg>
                                <span class="text-sm">EN</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertBefore(nav, document.body.firstChild);
        this.addCustomStyles();
    }

    addCustomStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .nav-link .nav-underline {
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 1px;
                background: white;
                transition: width 0.3s ease;
            }
            
            .nav-link:hover .nav-underline {
                width: 100%;
            }

            .mobile-menu.active {
                opacity: 1;
                visibility: visible;
            }

            .mobile-menu.active .mobile-menu-content {
                transform: translateY(0);
                opacity: 1;
            }

            .mobile-menu-btn.active .line-1 {
                transform: rotate(45deg) translate(6px, 6px);
            }

            .mobile-menu-btn.active .line-2 {
                opacity: 0;
            }

            .mobile-menu-btn.active .line-3 {
                transform: rotate(-45deg) translate(6px, -6px);
            }

            .nav-scrolled {
                background: linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.7) 70%, transparent 100%);
            }

            .nav-link:focus,
            .mobile-menu-btn:focus,
            .mobile-close-btn:focus,
            .mobile-nav-link:focus {
                outline: none;
                box-shadow: none;
            }
        `;
        document.head.appendChild(style);
    }

    bindEvents() {
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileCloseBtn = document.getElementById('mobile-close-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

        const closeMobileMenu = () => {
            mobileMenuBtn.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.classList.remove('overflow-hidden');
        };

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('overflow-hidden');
        });

        mobileCloseBtn.addEventListener('click', closeMobileMenu);

        mobileNavLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });

        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu) {
                closeMobileMenu();
            }
        });
    }

    handleScroll() {
        const nav = document.getElementById('luxury-nav');
        
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            
            if (scrollY > 100) {
                nav.classList.add('nav-scrolled');
            } else {
                nav.classList.remove('nav-scrolled');
            }
        });
    }
}

// Services Carousel Implementation
class ServicesCarousel {
    constructor() {
        this.track = document.getElementById('services-track');
        this.prevBtn = document.getElementById('services-prev');
        this.nextBtn = document.getElementById('services-next');
        this.dots = document.querySelectorAll('.services-dot');
        this.currentSlide = 0;
        this.totalCards = 4; // We have 4 service cards
        this.init();
    }

    getTotalSlides() {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        if (isMobile) {
            return 4; // Show 1 card at a time on mobile
        } else if (isTablet) {
            return 2; // Show 2 cards at a time on tablet
        } else {
            return 2; // Desktop: first shows 3 cards, second shows 1 card
        }
    }

    getCardsPerSlide() {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        if (isMobile) {
            return 1; // 1 card per slide on mobile
        } else if (isTablet) {
            return 2; // 2 cards per slide on tablet
        } else {
            return 3; // 3 cards visible initially on desktop
        }
    }

    init() {
        this.bindEvents();
        this.addTouchSupport();
        this.updateCarousel();
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());
        
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });
    }

    addTouchSupport() {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            e.preventDefault();
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            e.preventDefault();
        });

        this.track.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const diffX = startX - currentX;
            if (Math.abs(diffX) > 50) { // Minimum swipe distance
                if (diffX > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
    }

    updateCarousel() {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        const totalSlides = this.getTotalSlides();
        
        // Ensure current slide is within bounds
        if (this.currentSlide >= totalSlides) {
            this.currentSlide = 0;
        }
        
        let translateX = 0;
        
        if (isMobile) {
            // On mobile, show 1 card at a time, slide by 100% per card
            translateX = -this.currentSlide * 100;
        } else if (isTablet) {
            // On tablet, show 2 cards at a time, slide by 100% (2 cards)
            translateX = -this.currentSlide * 100;
        } else {
            // On desktop, first slide shows 3 cards, second slide shows the 4th card
            if (this.currentSlide === 1) {
                translateX = -33.333; // Move by 1/3 to show the 4th card
            }
        }
        
        this.track.style.transform = `translateX(${translateX}%)`;
        
        // Update dots - only show 2 dots for desktop/tablet, 4 for mobile
        this.updateDots();
    }

    updateDots() {
        const isMobile = window.innerWidth < 768;
        const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
        
        this.dots.forEach((dot, index) => {
            if (isMobile) {
                // On mobile, show ALL 4 dots (one for each card)
                dot.style.display = 'block';
                if (index === this.currentSlide) {
                    dot.classList.remove('bg-gray-600');
                    dot.classList.add('bg-white');
                } else {
                    dot.classList.remove('bg-white');
                    dot.classList.add('bg-gray-600');
                }
            } else {
                // On tablet/desktop, only show 2 dots
                if (index < 2) {
                    dot.style.display = 'block';
                    if (index === this.currentSlide) {
                        dot.classList.remove('bg-gray-600');
                        dot.classList.add('bg-white');
                    } else {
                        dot.classList.remove('bg-white');
                        dot.classList.add('bg-gray-600');
                    }
                } else {
                    dot.style.display = 'none';
                }
            }
        });
    }

    nextSlide() {
        const totalSlides = this.getTotalSlides();
        this.currentSlide = (this.currentSlide + 1) % totalSlides;
        this.updateCarousel();
    }

    prevSlide() {
        const totalSlides = this.getTotalSlides();
        this.currentSlide = (this.currentSlide - 1 + totalSlides) % totalSlides;
        this.updateCarousel();
    }

    goToSlide(index) {
        const totalSlides = this.getTotalSlides();
        if (index < totalSlides) {
            this.currentSlide = index;
            this.updateCarousel();
        }
    }
}

// Infinite Scroll Implementation
class InfiniteScroll {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;
        
        // Only run on mobile devices
        if (window.innerWidth >= 1024) return;
        
        this.translateX = 0;
        this.speed = 0.5; // Speed for mobile
        this.init();
    }
    
    init() {
        // Clone content multiple times for seamless infinite scroll
        const originalContent = this.container.innerHTML;
        this.container.innerHTML = originalContent + originalContent + originalContent + originalContent;
        
        // Wait a bit for elements to render, then calculate width
        setTimeout(() => {
            const allItems = this.container.children;
            const itemsPerSet = allItems.length / 4; // We have 4 copies
            let totalWidth = 0;
            
            // Calculate width of one complete set
            for (let i = 0; i < itemsPerSet; i++) {
                totalWidth += allItems[i].offsetWidth + 48; // width + gap
            }
            
            this.setWidth = totalWidth;
            this.animate();
        }, 100);
    }
    
    animate() {
        if (!this.setWidth) return;
        
        this.translateX -= this.speed;
        
        // When we've moved one complete set, reset position seamlessly
        if (Math.abs(this.translateX) >= this.setWidth) {
            this.translateX = this.translateX + this.setWidth;
        }
        
        this.container.style.transform = `translateX(${this.translateX}px)`;
        
        requestAnimationFrame(() => this.animate());
    }
}

// Language Switcher Implementation
class LanguageSwitcher {
    constructor() {
        this.currentLang = localStorage.getItem('language') || 'it';
        this.translations = {
            it: {
                // Navigation
                'nav-chi-siamo': 'Chi Siamo',
                'nav-servizi': 'Servizi',
                'nav-restauri': 'Restauri',
                'nav-contatti': 'Contatti',
                'nav-vendita': 'Vendita',
                
                // Hero Section
                'hero-subtitle': 'Servizio Autorizzato Ferrari',
                'hero-title': 'Dove le auto classiche trovano la loro seconda vita.',
                'hero-description': 'In RizzaClassic, ci specializziamo nel far rivivere la bellezza senza tempo delle auto d\'epoca.',
                'hero-contact-btn': 'Contattaci',
                
                // Statistics
                'stats-experience': 'Anni di Esperienza',
                'stats-restorations': 'Restauri Completati',
                'stats-satisfaction': 'Soddisfazione Clienti',
                'stats-specialties': 'Specialità',
                
                // About Us
                'about-title': 'Chi Siamo',
                'about-subtitle': 'Esperti nel restauro di auto d\'epoca',
                'about-text': 'Con oltre 30 anni di esperienza, Rizza Classic è il punto di riferimento per il restauro di auto d\'epoca. La nostra passione per l\'automobilismo classico ci spinge a preservare la storia e l\'eleganza di ogni veicolo che entra nel nostro laboratorio.',
                
                // Services
                'services-title': 'I Nostri Servizi',
                'services-subtitle': 'Soluzioni complete per il restauro',
                'service-1-title': 'Carrozzeria',
                'service-1-desc': 'Restauro completo della carrozzeria con tecniche tradizionali e moderne',
                'service-2-title': 'Officina Meccanica',
                'service-2-desc': 'Manutenzione e riparazione di motori e componenti meccanici classici',
                'service-3-title': 'Tapezzeria',
                'service-3-desc': 'Restauro di interni in pelle e tessuto con materiali originali',
                'service-4-title': 'Consulenza',
                'service-4-desc': 'Valutazione e consulenza per l\'acquisto di auto d\'epoca',
                
                // Our Work
                'work-title': 'I Nostri Restauri',
                'work-subtitle': 'Eccellenza in ogni dettaglio',
                'work-1-title': 'Ferrari 250 GT',
                'work-1-year': '1962',
                'work-2-title': 'Porsche 356',
                'work-2-year': '1965',
                'work-3-title': 'Jaguar E-Type',
                'work-3-year': '1961',
                'work-4-title': 'Mercedes 300SL',
                'work-4-year': '1955',
                'work-5-title': 'Alfa Romeo Spider',
                'work-5-year': '1967',
                'work-6-title': 'Aston Martin DB5',
                'work-6-year': '1964',
                
                // Contact Form
                'contact-title': 'Richiedi un Restauro',
                'contact-subtitle': 'Raccontaci del tuo progetto di restauro e ti ricontatteremo con una proposta su misura.',
                'form-fullname': 'Nome completo',
                'form-fullname-placeholder': 'Il tuo nome completo',
                'form-email': 'Indirizzo email',
                'form-email-placeholder': 'Il tuo indirizzo email',
                'form-message': 'Messaggio',
                'form-message-placeholder': 'Scrivi qualcosa',
                'form-terms': 'Accetto i Termini e Condizioni Generali e la Privacy Policy di RizzaClassic',
                'form-submit': 'Invia messaggio',
                
                // Footer
                'footer-contacts': 'Contatti',
                'footer-email': 'Email',
                'footer-phone': 'Numero di telefono',
                'footer-address': 'Indirizzo',
                'footer-rizza-classic': 'Rizza Classic',
                'footer-about': 'Chi siamo',
                'footer-services': 'Servizi',
                'footer-extra-services': 'Servizi extra',
                'footer-our-work': 'Il nostro lavoro',
                'footer-portfolio': 'Portfolio',
                'footer-contacts-link': 'Contatti',
                'footer-services-list': 'Servizi',
                'footer-carrozzeria': 'Carrozzeria',
                'footer-officina': 'Officina Meccanica',
                'footer-tapezzeria': 'Tapezzeria',
                'footer-terms': 'Termini e Condizioni',
                'footer-privacy': 'Privacy Policy',
                'footer-address-text': 'Indirizzo',
                
                // Contact Page
                'contact-page-title': 'Contatti',
                'contact-page-subtitle': 'Siamo a un passo dal tuo futuro. In Rizza Classic, ogni messaggio è l\'inizio di una nuova opportunità. Contattaci — trasformiamo le tue ambizioni in successo.',
                'contact-phone-label': 'Numero di telefono',
                'contact-opening-hours': 'Orari di apertura',
                'contact-monday-friday': 'Lunedì-Venerdì',
                'contact-sunday': 'Domenica',
                
                // Mobile Menu
                'mobile-address': 'Indirizzo',
                
                // Thanks Page
                'thanks-title': 'Messaggio Inviato',
                'thanks-message': 'Grazie per averci contattato. Il tuo messaggio è stato inviato con successo. Ti risponderemo il prima possibile.',
                'thanks-button': 'Torna alla Homepage'
            },
            en: {
                // Navigation
                'nav-chi-siamo': 'About Us',
                'nav-servizi': 'Services',
                'nav-restauri': 'Restorations',
                'nav-contatti': 'Contacts',
                'nav-vendita': 'Sales',
                
                // Hero Section
                'hero-subtitle': 'Authorized Ferrari Service',
                'hero-title': 'Where classic cars find their second life.',
                'hero-description': 'At RizzaClassic, we specialize in reviving the timeless beauty of vintage cars.',
                'hero-contact-btn': 'Contact Us',
                
                // Statistics
                'stats-experience': 'Years of Experience',
                'stats-restorations': 'Completed Restorations',
                'stats-satisfaction': 'Client Satisfaction',
                'stats-specialties': 'Specialties',
                
                // About Us
                'about-title': 'About Us',
                'about-subtitle': 'Experts in classic car restoration',
                'about-text': 'With over 30 years of experience, Rizza Classic is the reference point for classic car restoration. Our passion for classic motoring drives us to preserve the history and elegance of every vehicle that enters our workshop.',
                
                // Services
                'services-title': 'Our Services',
                'services-subtitle': 'Complete restoration solutions',
                'service-1-title': 'Bodywork',
                'service-1-desc': 'Complete bodywork restoration with traditional and modern techniques',
                'service-2-title': 'Mechanical Workshop',
                'service-2-desc': 'Maintenance and repair of classic engines and mechanical components',
                'service-3-title': 'Upholstery',
                'service-3-desc': 'Restoration of leather and fabric interiors with original materials',
                'service-4-title': 'Consulting',
                'service-4-desc': 'Evaluation and consulting for classic car purchases',
                
                // Our Work
                'work-title': 'Our Restorations',
                'work-subtitle': 'Excellence in every detail',
                'work-1-title': 'Ferrari 250 GT',
                'work-1-year': '1962',
                'work-2-title': 'Porsche 356',
                'work-2-year': '1965',
                'work-3-title': 'Jaguar E-Type',
                'work-3-year': '1961',
                'work-4-title': 'Mercedes 300SL',
                'work-4-year': '1955',
                'work-5-title': 'Alfa Romeo Spider',
                'work-5-year': '1967',
                'work-6-title': 'Aston Martin DB5',
                'work-6-year': '1964',
                
                // Contact Form
                'contact-title': 'Request a Restoration',
                'contact-subtitle': 'Tell us about your restoration project and we\'ll get back to you with a tailored proposal.',
                'form-fullname': 'Full name',
                'form-fullname-placeholder': 'Your full name',
                'form-email': 'Email address',
                'form-email-placeholder': 'Your email address',
                'form-message': 'Message',
                'form-message-placeholder': 'Write something',
                'form-terms': 'I hereby accept RizzaClassic General Terms and Privacy Policy',
                'form-submit': 'Send message',
                
                // Footer
                'footer-contacts': 'Contacts',
                'footer-email': 'Email',
                'footer-phone': 'Phone number',
                'footer-address': 'Address',
                'footer-rizza-classic': 'Rizza Classic',
                'footer-about': 'About us',
                'footer-services': 'Services',
                'footer-extra-services': 'Extra services',
                'footer-our-work': 'Our work',
                'footer-portfolio': 'Portfolio',
                'footer-contacts-link': 'Contacts',
                'footer-services-list': 'Services',
                'footer-carrozzeria': 'Bodywork',
                'footer-officina': 'Mechanical Workshop',
                'footer-tapezzeria': 'Upholstery',
                'footer-terms': 'Terms and Conditions',
                'footer-privacy': 'Privacy Policy',
                'footer-address-text': 'Address',
                
                // Contact Page
                'contact-page-title': 'Contact',
                'contact-page-subtitle': 'We\'re one step closer to your future. At Rizza Classic, every message is the beginning of a new opportunity. Reach out — let\'s turn your ambitions into success.',
                'contact-phone-label': 'Phone number',
                'contact-opening-hours': 'Opening hours',
                'contact-monday-friday': 'Monday-Friday',
                'contact-sunday': 'Sunday',
                
                // Mobile Menu
                'mobile-address': 'Address',
                
                // Thanks Page
                'thanks-title': 'Message Sent',
                'thanks-message': 'Thank you for contacting us. Your message has been sent successfully. We will respond as soon as possible.',
                'thanks-button': 'Back to Homepage'
            }
        };
        this.init();
    }

    init() {
        this.bindLanguageButtons();
        this.translatePage();
    }

    bindLanguageButtons() {
        // Find all language switcher buttons
        const langButtons = document.querySelectorAll('button[class*="flex items-center gap-2"]');
        langButtons.forEach(button => {
            if (button.querySelector('span') && (button.querySelector('span').textContent === 'EN' || button.querySelector('span').textContent === 'IT')) {
                button.addEventListener('click', () => this.toggleLanguage());
            }
        });
    }

    toggleLanguage() {
        this.currentLang = this.currentLang === 'it' ? 'en' : 'it';
        localStorage.setItem('language', this.currentLang);
        this.translatePage();
        this.updateLanguageButtons();
    }

    updateLanguageButtons() {
        const langButtons = document.querySelectorAll('button[class*="flex items-center gap-2"] span');
        langButtons.forEach(span => {
            if (span.textContent === 'EN' || span.textContent === 'IT') {
                span.textContent = this.currentLang === 'it' ? 'EN' : 'IT';
            }
        });
    }

    translatePage() {
        const translations = this.translations[this.currentLang];
        
        // Translate elements with data-translate attributes
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    if (element.type === 'submit' || element.tagName === 'BUTTON') {
                        element.value = translations[key];
                    } else {
                        element.placeholder = translations[key];
                    }
                } else {
                    element.textContent = translations[key];
                }
            }
        });
        
        this.updateLanguageButtons();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LuxuryNavigation();
    const servicesCarousel = new ServicesCarousel();
    
    // Initialize infinite scroll
    const infiniteScroll = new InfiniteScroll('infinite-scroll');
    
    // Initialize language switcher
    new LanguageSwitcher();
    
    // Update carousel on resize
    window.addEventListener('resize', () => {
        servicesCarousel.currentSlide = 0; // Reset to first slide
        servicesCarousel.updateCarousel();
    });
});