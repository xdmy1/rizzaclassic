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
                    <img src="images/logo.svg" alt="Rizza Classic" class="h-10 lg:h-12 transition-all duration-500 hover:scale-105">
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden lg:flex items-center space-x-12 font-sans">
                    <a href="#chi-siamo" class="nav-link relative text-white text-base">
                        Chi Siamo
                        <span class="nav-underline"></span>
                    </a>
                    <a href="#servizi" class="nav-link relative text-white text-base">
                        Servizi
                        <span class="nav-underline"></span>
                    </a>
                    <a href="#restauri" class="nav-link relative text-white text-base">
                        Restauri
                        <span class="nav-underline"></span>
                    </a>
                    <a href="#contatti" class="nav-link relative text-white text-base">
                        Contatti
                        <span class="nav-underline"></span>
                    </a>
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
                    <img src="images/logo.svg" alt="Rizza Classic" class="h-12">
                </div>
                
                <div class="flex flex-col justify-between h-full pt-24 pb-8 px-6">
                    <!-- Navigation Links -->
                    <div class="mobile-menu-content transform translate-y-4 opacity-0 transition-all duration-300 delay-75">
                        <div class="space-y-8 pt-8">
                            <a href="#chi-siamo" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                Chi Siamo
                            </a>
                            <a href="#servizi" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                Servizi
                            </a>
                            <a href="#restauri" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                Restauri
                            </a>
                            <a href="#vendita" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                Vendita
                            </a>
                            <a href="#contatti" class="mobile-nav-link block text-white text-4xl font-light transition-colors duration-200 hover:text-amber-300">
                                Contatti
                            </a>
                        </div>
                    </div>

                    <!-- Footer Section -->
                    <div class="mt-auto space-y-6">
                        <!-- Address -->
                        <div>
                            <p class="text-gray-400 text-sm mb-2">Address</p>
                            <p class="text-white text-base">Via Prenestina, 912 00155 Roma (RM)</p>
                        </div>
                        
                        <!-- Separator Line -->
                        <div class="border-t border-gray-800"></div>
                        
                        <!-- Footer Links -->
                        <div class="flex justify-between items-center">
                            <p class="text-gray-500 text-sm">© Rizza Classic</p>
                            <div class="flex space-x-4 text-sm text-gray-500">
                                <a href="#terms" class="hover:text-white transition-colors">Terms and Conditions</a>
                                <a href="#privacy" class="hover:text-white transition-colors">Privacy Policy</a>
                            </div>
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
        
        this.translateX = 0;
        this.speed = window.innerWidth < 1024 ? 1 : 0.3; // Fast on mobile, slow on desktop
        this.init();
    }
    
    init() {
        // Clone content for seamless loop
        const originalContent = this.container.innerHTML;
        this.container.innerHTML = originalContent + originalContent;
        
        // Calculate the width of one set of items
        this.itemWidth = this.container.scrollWidth / 2;
        
        this.animate();
    }
    
    animate() {
        this.translateX -= this.speed;
        
        // When the first set is completely scrolled out, reset to 0
        // The user won't see this because the second set looks identical
        if (Math.abs(this.translateX) >= this.itemWidth) {
            this.translateX = 0;
        }
        
        this.container.style.transform = `translateX(${this.translateX}px)`;
        
        requestAnimationFrame(() => this.animate());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new LuxuryNavigation();
    const servicesCarousel = new ServicesCarousel();
    
    // Initialize infinite scroll
    const infiniteScroll = new InfiniteScroll('infinite-scroll');
    
    // Update carousel on resize
    window.addEventListener('resize', () => {
        servicesCarousel.currentSlide = 0; // Reset to first slide
        servicesCarousel.updateCarousel();
    });
});