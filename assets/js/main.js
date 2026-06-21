// ========================================
// Main JavaScript - Steven Rantai Ponton
// ========================================

(function() {
    'use strict';

    // ========================================
    // Navigation
    // ========================================
    
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });

    // ========================================
    // Products
    // ========================================
    
    const productsGrid = document.getElementById('productsGrid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Render products
    function renderProducts(filter = 'all') {
        if (!productsGrid) return;
        
        const filteredProducts = filter === 'all' 
            ? productsData 
            : productsData.filter(product => product.category === filter);
        
        productsGrid.innerHTML = '';
        
        filteredProducts.forEach((product, index) => {
            const productCard = createProductCard(product);
            productsGrid.appendChild(productCard);
            
            // Stagger animation
            setTimeout(() => {
                productCard.classList.add('fade-in');
            }, index * 100);
        });
    }
    
    // Create product card
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.dataset.category = product.category;
        
        card.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='assets/images/placeholder.jpg'">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-content">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-specs">
                    ${Object.entries(product.specs).map(([label, value]) => `
                        <div class="spec-item">
                            <span class="spec-label">${label}</span>
                            <span class="spec-value">${value}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="product-footer">
                    <div>
                        <div class="product-price">${product.price}</div>
                        <div class="product-price-label">${product.priceLabel}</div>
                    </div>
                    <a href="#contact" class="product-cta">Pesan Sekarang</a>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Filter products
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter and render
            const filter = button.dataset.filter;
            renderProducts(filter);
        });
    });
    
    // Initial render
    renderProducts();

    // ========================================
    // Portfolio
    // ========================================
    
    const portfolioGrid = document.getElementById('portfolioGrid');
    
    // Render portfolio
    function renderPortfolio() {
        if (!portfolioGrid) return;
        
        portfolioGrid.innerHTML = '';
        
        portfolioData.forEach((item, index) => {
            const portfolioCard = createPortfolioCard(item);
            portfolioGrid.appendChild(portfolioCard);
            
            // Stagger animation
            setTimeout(() => {
                portfolioCard.classList.add('fade-in');
            }, index * 100);
        });
    }
    
    // Create portfolio card
    function createPortfolioCard(item) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        
        card.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}" onerror="this.src='assets/images/placeholder.jpg'">
            </div>
            <div class="portfolio-overlay">
                <div class="portfolio-category">${item.category}</div>
                <h3 class="portfolio-title">${item.title}</h3>
                <p class="portfolio-description">${item.description}</p>
                <div class="portfolio-meta">
                    <div class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke-width="2"/>
                            <circle cx="12" cy="10" r="3" stroke-width="2"/>
                        </svg>
                        <span>${item.location}</span>
                    </div>
                    <div class="meta-item">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
                            <line x1="16" y1="2" x2="16" y2="6" stroke-width="2"/>
                            <line x1="8" y1="2" x2="8" y2="6" stroke-width="2"/>
                            <line x1="3" y1="10" x2="21" y2="10" stroke-width="2"/>
                        </svg>
                        <span>${item.year}</span>
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // Initial render
    renderPortfolio();

    // ========================================
    // Contact Form
    // ========================================
    
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Create WhatsApp message
            const whatsappMessage = `
*Pesan dari Website*

*Nama:* ${formData.name}
*Email:* ${formData.email}
*WhatsApp:* ${formData.phone}
*Subjek:* ${formData.subject}

*Pesan:*
${formData.message}
            `.trim();
            
            // Encode message
            const encodedMessage = encodeURIComponent(whatsappMessage);
            
            // WhatsApp URL (ganti dengan nomor sebenarnya)
            const whatsappURL = `https://wa.me/6281234567890?text=${encodedMessage}`;
            
            // Open WhatsApp
            window.open(whatsappURL, '_blank');
            
            // Reset form
            contactForm.reset();
            
            // Show success message (optional)
            alert('Terima kasih! Anda akan diarahkan ke WhatsApp.');
        });
    }

    // ========================================
    // Back to Top Button
    // ========================================
    
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Intersection Observer for Animations
    // ========================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    document.querySelectorAll('.value-card, .about-content, .about-image').forEach(el => {
        observer.observe(el);
    });

    // ========================================
    // Lazy Loading Images
    // ========================================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Update Copyright Year
    // ========================================
    
    const currentYear = new Date().getFullYear();
    const copyrightElements = document.querySelectorAll('.footer-bottom p');
    copyrightElements.forEach(el => {
        if (el.textContent.includes('2026')) {
            el.textContent = el.textContent.replace('2026', currentYear);
        }
    });

    // ========================================
    // Console Info
    // ========================================
    
    console.log('%c Steven Rantai Ponton ', 'background: #FF6B35; color: white; font-size: 16px; font-weight: bold; padding: 10px;');
    console.log('%c Website by echoezbe ', 'background: #004E89; color: white; font-size: 12px; padding: 5px;');

})();
