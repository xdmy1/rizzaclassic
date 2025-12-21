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
                        <img src="images/LOGO.png" alt="Rizza Classic" class="h-10 lg:h-12 transition-all duration-500 hover:scale-105">
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-12 font-sans">
                    <a href="about.html" class="nav-link relative text-white text-base">
                        <span data-translate="nav-chi-siamo">Chi Siamo</span>
                        <span class="nav-underline"></span>
                    </a>
                    <a href="services.html" class="nav-link relative text-white text-base">
                        <span data-translate="nav-servizi">Servizi</span>
                        <span class="nav-underline"></span>
                    </a>
                    <a href="restorations.html" class="nav-link relative text-white text-base">
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
                        <img src="images/LOGO.png" alt="Rizza Classic" class="h-12">
                    </a>
                </div>
                
                <div class="flex flex-col justify-between h-full pt-24 pb-8 px-6">
                    <!-- Navigation Links -->
                    <div class="mobile-menu-content transform translate-y-4 opacity-0 transition-all duration-300 delay-75">
                        <div class="space-y-8 pt-8">
                            <a href="about.html" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-chi-siamo">Chi Siamo</span>
                            </a>
                            <a href="services.html" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-servizi">Servizi</span>
                            </a>
                            <a href="restorations.html" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                <span data-translate="nav-restauri">Restauri</span>
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
                                <!-- Instagram -->
                                <a href="https://www.instagram.com/rizza_classic/" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>
                                <!-- Facebook -->
                                <a href="https://www.facebook.com/share/15z21qGSs6/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" class="text-gray-400 hover:text-white transition-colors">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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
        let startY = 0;
        let currentX = 0;
        let isDragging = false;
        let hasMoved = false;

        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isDragging = true;
            hasMoved = false;
        });

        this.track.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            // Calculate horizontal and vertical distances
            const deltaX = Math.abs(currentX - startX);
            const deltaY = Math.abs(currentY - startY);
            
            // Only consider this a swipe if horizontal movement is greater than vertical
            // and the movement is significant enough
            if (deltaX > deltaY && deltaX > 10) {
                hasMoved = true;
                e.preventDefault(); // Only prevent default if we're actually swiping
            }
        });

        this.track.addEventListener('touchend', (e) => {
            if (!isDragging) return;
            isDragging = false;
            
            // Only trigger slide change if there was actual horizontal movement
            if (hasMoved) {
                const diffX = startX - currentX;
                if (Math.abs(diffX) > 50) { // Minimum swipe distance
                    if (diffX > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
                e.preventDefault(); // Prevent any click events after a swipe
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
                
                // Hero Section
                'hero-subtitle': 'Servizio di Qualità a Roma',
                'hero-title': 'Dove le auto classiche trovano la loro seconda vita.',
                'hero-description': 'In RizzaClassic, ci specializziamo nel far rivivere la bellezza senza tempo delle auto d\'epoca.',
                'hero-contact-btn': 'Contattaci',
                
                // Statistics
                'stats-title': '30+ Anni di Esperienza nel Restauro Auto d\'Epoca',
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
                'thanks-button': 'Torna alla Homepage',
                
                // Service Detail Page
                'specialized-service': 'Servizio Specializzato',
                'request-quote': 'Richiedi Preventivo',
                'view-portfolio': 'Visualizza Portfolio',
                'years-experience': 'Anni di Esperienza nel Settore',
                'projects-completed': 'Progetti di Restauro Completati',
                'satisfied-clients': 'Clienti Soddisfatti',
                'response-time': 'Tempo di Risposta Medio',
                
                // About Page
                'about-since': 'Dal 1969',
                'about-hero-title': 'Esperienza, qualità e passione',
                'about-hero-subtitle': 'Un laboratorio dedicato al restauro e alla conservazione di automobili d\'epoca, realizzando progetti finiti ai veri standard dei collezionisti.',
                'team-andrea-title': 'Project Manager e capo del team Rizza classic',
                'team-mirko-title': 'Capo della pianificazione e del reparto verniciatura',
                'team-alberto-title': 'Fondatore di Carrozzeria Rizza',
                'team-daniele-title': 'Tech, digital Land Rover e Owner Service Manager',
                'philosophy-title': 'La nostra filosofia',
                'philosophy-subtitle': 'I principi che guidano ogni progetto di restauro',
                'philosophy-authenticity-title': 'Autenticità prima di tutto',
                'philosophy-authenticity-desc': 'Rispettiamo l\'intento del design originale, utilizzando materiali d\'epoca quando disponibili per preservare il carattere originale e l\'integrità vintage del veicolo.',
                'philosophy-expertise-title': 'Competenza interna',
                'philosophy-expertise-desc': 'Dalla meccanica alla verniciatura, dalla meccanica agli interni: tutto il lavoro è svolto dal nostro team di specialisti sotto un unico tetto per il controllo completo della qualità.',
                'philosophy-limited-title': 'Progetti limitati',
                'philosophy-limited-desc': 'Accettiamo solo un numero selezionato di restauri ogni anno, assicurando che ogni auto riceva il tempo e l\'attenzione che merita.',
                'heritage-title': 'La nostra eredità',
                'heritage-p1': 'Fondata da Alberto Rizza, Carrozzeria Rizza ha ereditato competenze automobilistiche tramandate attraverso le generazioni. Quello che iniziò come una piccola carrozzeria a conduzione familiare a Roma è diventato un centro rinomato per il restauro di auto d\'epoca.',
                'heritage-p2': 'Fin da piccolo, Alberto correva nell\'officina di suo padre Ettore dopo la scuola, assorbendo le tecniche tradizionali che sarebbero diventate la base per il successo di oggi. Questi metodi, tramandati attraverso tre generazioni della famiglia Rizza.',
                'heritage-p3': 'Non ci limitiamo a restaurare auto: scopriamo le loro storie, preserviamo la loro eredità e assicuriamo che il loro lascito perduri per le generazioni future.',
                'recognition-title': 'Riconoscimento ed esperienza',
                
                // Project Cards
                'view-project': 'Visualizza',
                'view-all-projects': 'Visualizza Tutti',
                
                // Service Detail Page
                'what-we-offer': 'Cosa Offriamo',
                'our-process': 'Il Nostro Processo',
                'recent-projects-title': 'Progetti Recenti',
                'recent-projects-desc': 'Realizzazioni recenti che dimostrano la nostra competenza automobilistica.',
                
                // Restorations Page
                'restorations-title': 'Restauri',
                'restorations-subtitle': 'Un laboratorio dedicato al restauro e alla conservazione di automobili d\'epoca, realizzando progetti finiti ai veri standard dei collezionisti.',
                'view-project': 'Visualizza',
                
                // Project Page
                'restoration-project': 'Progetto di Restauro',
                'project-year-label': 'Anno',
                'project-body-style-label': 'Carrozzeria', 
                'project-engine-label': 'Motore',
                'project-production-label': 'Produzione',
                'cta-start-project': 'Inizia un Progetto',
                'cta-view-projects': 'Visualizza Altri Progetti',
                
                // Services Page
                'services-page-title': 'Servizi Restauro Auto d\'Epoca | Rizza Classic',
                'services-page-description': 'Servizi specializzati di restauro auto d\'epoca: carrozzeria, meccanica, tapezzeria, consulenza. Esperti nel restauro Ferrari, Alfa Romeo, auto storiche a Roma.',
                'services-page-keywords': 'servizi restauro auto d\'epoca, carrozzeria auto storiche, officina meccanica classica, tapezzeria auto d\'epoca, consulenza restauro, impianti elettrici auto storiche',
                'services-og-title': 'Servizi Restauro Auto d\'Epoca | Rizza Classic',
                'services-og-description': 'Servizi completi di restauro auto d\'epoca: carrozzeria, meccanica, tapezzeria e consulenza specializzata. 30+ anni di esperienza a Roma.',
                'services-twitter-title': 'Servizi Restauro Auto d\'Epoca | Rizza Classic',
                'services-twitter-description': 'Servizi specializzati di restauro auto storiche. Carrozzeria, meccanica, tapezzeria. 30+ anni di esperienza a Roma.',
                'services-hero-title': 'Nostri Servizi',
                'services-hero-subtitle': 'Esperienza e professionalità al servizio della tua passione.',
                'service-carrozzeria-title': 'Carrozzeria',
                'service-meccanica-title': 'Officina Meccanica',
                'service-tapezzeria-title': 'Tapezzeria',
                'service-carrozzeria-alt-title': 'Carrozzeria',
                'service-consulenza-title': 'Consulenza Acquisto Vetture',
                'service-elettrici-title': 'Impianti Elettrici',
                'service-supportogare-title': 'Supporto Gare',
                'expertise-title': 'Our expertise',
                'expertise-restoration-title': 'Restauro Completo',
                'expertise-restoration-desc': 'Riportiamo veicoli d\'epoca rari degli anni \'40-\'70 al loro splendore originale. Con meticolosa attenzione all\'autenticità e ai dettagli d\'epoca.',
                'expertise-maintenance-title': 'Manutenzione di Precisione',
                'expertise-maintenance-desc': 'Manutenzione regolare ed esperta per le vostre auto classiche utilizzando strumenti e soluzioni che mantengono motori e componenti perfettamente funzionanti.',
                'expertise-customization-title': 'Personalizzazione Su Misura',
                'expertise-customization-desc': 'Modifiche attente e costruzioni personalizzate che rispettano l\'eredità dell\'auto incorporando moderne comodità di buon gusto.',
                'testimonials-title': 'Cosa dicono i nostri clienti',
                'testimonial-1-text': 'Spazi tra pannelli perfetti, corrispondenza perfetta del colore e aggiornamenti fotografici settimanali durante il restauro. L\'attenzione all\'originalità è stata eccezionale.',
                'testimonial-1-name': 'Andreas Müller',
                'testimonial-1-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'testimonial-2-text': 'Spazi tra pannelli perfetti, corrispondenza perfetta del colore e aggiornamenti fotografici settimanali durante il restauro. L\'attenzione all\'originalità è stata eccezionale.',
                'testimonial-2-name': 'Andreas Müller',
                'testimonial-2-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'testimonial-3-text': 'Spazi tra pannelli perfetti, corrispondenza perfetta del colore e aggiornamenti fotografici settimanali durante il restauro. L\'attenzione all\'originalità è stata eccezionale.',
                'testimonial-3-name': 'Andreas Müller',
                'testimonial-3-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'cta-title': 'Pronto a restaurare la tua Classica?',
                'cta-subtitle': 'Lascia che riportiamo la tua automobile classica alla vita con la stessa dedizione e maestria.',
                'cta-view-services': 'Visualizza altri servizi',
                
                // Service Detail Page
                'service-detail-cta-title': 'Inizia il Tuo Viaggio di Restauro',
                'service-detail-cta-subtitle': 'Lascia che riportiamo la tua automobile classica alla vita con la stessa dedizione e maestria.'
            },
            en: {
                // Navigation
                'nav-chi-siamo': 'About Us',
                'nav-servizi': 'Services',
                'nav-restauri': 'Restorations',
                'nav-contatti': 'Contacts',
                
                // Hero Section
                'hero-subtitle': 'Quality Service in Rome',
                'hero-title': 'Where classic cars find their second life.',
                'hero-description': 'At RizzaClassic, we specialize in reviving the timeless beauty of vintage cars.',
                'hero-contact-btn': 'Contact Us',
                
                // Statistics
                'stats-title': '30+ Years of Experience in Classic Car Restoration',
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
                'thanks-button': 'Back to Homepage',
                
                // Service Detail Page
                'specialized-service': 'Specialized Service',
                'request-quote': 'Request Quote',
                'view-portfolio': 'View Portfolio',
                'years-experience': 'Years of Industry Experience',
                'projects-completed': 'Restoration Projects Completed',
                'satisfied-clients': 'Satisfied Clients',
                'response-time': 'Average Response Time',
                
                // About Page
                'about-since': 'Since 1969',
                'about-hero-title': 'Experience, quality and passion',
                'about-hero-subtitle': 'A workshop dedicated to the restoration and preservation of classic automobiles, delivering projects finished to true collector standards.',
                'team-andrea-title': 'Project Manager and head of the Rizza classic team',
                'team-mirko-title': 'Head of the planning and painting department',
                'team-alberto-title': 'Founder of Carrozzeria Rizza',
                'team-daniele-title': 'Tech, digital Land Rover and Owner Service Manager',
                'philosophy-title': 'Our philosophy',
                'philosophy-subtitle': 'The principles that guide every restoration project',
                'philosophy-authenticity-title': 'Authenticity First',
                'philosophy-authenticity-desc': 'We respect the original design intent, using period-correct materials whenever available to preserve the vehicle\'s original character and vintage integrity.',
                'philosophy-expertise-title': 'In-house Expertise',
                'philosophy-expertise-desc': 'From mechanics to paint, mechanics to interiors—all work is performed by our team of specialists under one roof for full quality control.',
                'philosophy-limited-title': 'Limited Projects',
                'philosophy-limited-desc': 'We accept only a select number of restorations each year, ensuring every car receives the time and attention it deserves.',
                'heritage-title': 'Our Heritage',
                'heritage-p1': 'Founded by Alberto Rizza, Carrozzeria Rizza has inherited automotive expertise passed down through generations. What began as a small family-run body shop in Rome has grown into a renowned center for classic car restoration.',
                'heritage-p2': 'From a young age, Alberto would run to his father Ettore\'s workshop after school, absorbing the traditional techniques that would become the foundation for today\'s success. These methods, passed down through three generations of the Rizza family.',
                'heritage-p3': 'We don\'t just restore cars—we uncover their stories, preserve their heritage, and ensure their legacy endures for future generations.',
                'recognition-title': 'Recognition and expertise',
                
                // Project Cards
                'view-project': 'View',
                'view-all-projects': 'View All',
                
                // Service Detail Page
                'what-we-offer': 'What we Offer',
                'our-process': 'Our process',
                'recent-projects-title': 'Recent Projects',
                'recent-projects-desc': 'Recent accomplishments showcasing our automotive expertise.',
                
                // Restorations Page
                'restorations-title': 'Restorations',
                'restorations-subtitle': 'A workshop dedicated to the restoration and preservation of classic automobiles, delivering projects finished to true collector standards.',
                'view-project': 'View',
                
                // Project Page
                'restoration-project': 'Restoration Project',
                'project-year-label': 'Year',
                'project-body-style-label': 'Body Style',
                'project-engine-label': 'Engine',
                'project-production-label': 'Production',
                'cta-start-project': 'Start a Project',
                'cta-view-projects': 'View More Projects',
                
                // Services Page
                'services-page-title': 'Classic Car Restoration Services | Rizza Classic',
                'services-page-description': 'Specialized classic car restoration services: bodywork, mechanics, upholstery, consulting. Experts in Ferrari, Alfa Romeo, vintage cars in Rome.',
                'services-page-keywords': 'classic car restoration services, vintage car bodywork, classic mechanical workshop, vintage car upholstery, restoration consulting, vintage car electrical systems',
                'services-og-title': 'Classic Car Restoration Services | Rizza Classic',
                'services-og-description': 'Complete classic car restoration services: bodywork, mechanics, upholstery and specialized consulting. 30+ years of experience in Rome.',
                'services-twitter-title': 'Classic Car Restoration Services | Rizza Classic',
                'services-twitter-description': 'Specialized vintage car restoration services. Bodywork, mechanics, upholstery. 30+ years of experience in Rome.',
                'services-hero-title': 'Our Services',
                'services-hero-subtitle': 'Experience and professionalism at the service of your passion.',
                'service-carrozzeria-title': 'Bodywork',
                'service-meccanica-title': 'Mechanical Workshop',
                'service-tapezzeria-title': 'Upholstery',
                'service-carrozzeria-alt-title': 'Bodywork',
                'service-consulenza-title': 'Vehicle Purchase Consulting',
                'service-elettrici-title': 'Electrical Systems',
                'service-supportogare-title': 'Race Support',
                'expertise-title': 'Our expertise',
                'expertise-restoration-title': 'Complete Restoration',
                'expertise-restoration-desc': 'We bring classic and rare hand vintage vehicles from the 40s to 70s, bringing them back to their original glory. With meticulous attention to authenticity and period-correct details.',
                'expertise-maintenance-title': 'Precision Maintenance',
                'expertise-maintenance-desc': 'Regular maintenance and expert care for your classic cars using tools and solutions that keep their engines and components working flawlessly and safely every vintage value.',
                'expertise-customization-title': 'Bespoke Customization',
                'expertise-customization-desc': 'Careful modifications and custom builds that respect the car\'s heritage while incorporating tasteful modern conveniences. Every project reflects the vehicle\'s character.',
                'testimonials-title': 'What our clients say',
                'testimonial-1-text': 'Flawless panel gaps, perfect color match, and weekly photo updates during the restoration. The attention to originality was exceptional.',
                'testimonial-1-name': 'Andreas Müller',
                'testimonial-1-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'testimonial-2-text': 'Flawless panel gaps, perfect color match, and weekly photo updates during the restoration. The attention to originality was exceptional.',
                'testimonial-2-name': 'Andreas Müller',
                'testimonial-2-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'testimonial-3-text': 'Flawless panel gaps, perfect color match, and weekly photo updates during the restoration. The attention to originality was exceptional.',
                'testimonial-3-name': 'Andreas Müller',
                'testimonial-3-car': 'Alfa Romeo Giulia Sprint GT - 230ch',
                'cta-title': 'Ready to restore your Classic?',
                'cta-subtitle': 'Let us bring your classic automobile back to life with the same dedication and craftsmanship.',
                'cta-view-services': 'View more services',
                
                // Service Detail Page
                'service-detail-cta-title': 'Begin Your Restoration Journey',
                'service-detail-cta-subtitle': 'Let us bring your classic automobile back to life with the same dedication and craftsmanship.'
            }
        };
        this.init();
    }

    init() {
        this.bindLanguageButtons();
        // Apply stored language preference immediately on page load
        this.translatePage();
        this.updateLanguageButtons();
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
    // Always initialize navigation and language switcher
    new LuxuryNavigation();
    new LanguageSwitcher();
    
    // Initialize services carousel only if it exists (on index page)
    const servicesTrack = document.getElementById('services-track');
    if (servicesTrack) {
        const servicesCarousel = new ServicesCarousel();
        
        // Update carousel on resize
        window.addEventListener('resize', () => {
            servicesCarousel.currentSlide = 0; // Reset to first slide
            servicesCarousel.updateCarousel();
        });
    }
    
    // Initialize infinite scroll only if the element exists (on index page)
    const infiniteScrollElement = document.getElementById('infinite-scroll');
    if (infiniteScrollElement) {
        new InfiniteScroll('infinite-scroll');
    }
    
    // Initialize infinite scroll for about page
    const infiniteScrollAboutElement = document.getElementById('infinite-scroll-about');
    if (infiniteScrollAboutElement) {
        new InfiniteScroll('infinite-scroll-about');
    }
});