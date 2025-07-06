// VGWebStudio Portfolio - JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVEGACIÓN MÓVIL
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // ============================================
    // SMOOTH SCROLLING PARA NAVEGACIÓN
    // ============================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });

    // ============================================
    // FILTROS DEL PORTFOLIO
    // ============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                // Añadir efecto de fade out
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                        // Fade in
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        const itemCategory = item.getAttribute('data-category');
                        if (itemCategory === filterValue) {
                            item.style.display = 'block';
                            // Fade in
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.display = 'none';
                        }
                    }
                }, 300);
            });
        });
    });

    // ============================================
    // FORMULARIO DE CONTACTO
    // ============================================
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validación básica
            if (!name || !email || !subject || !message) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Por favor, ingresa un email válido', 'error');
                return;
            }

            // Simular envío del formulario
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            // Simular delay de envío
            setTimeout(() => {
                showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Resetear labels del formulario
                const labels = contactForm.querySelectorAll('label');
                labels.forEach(label => {
                    label.style.top = 'var(--spacing-4)';
                    label.style.color = 'var(--gray)';
                    label.style.fontSize = 'var(--font-size-base)';
                });
            }, 2000);
        });
    }

    // ============================================
    // ANIMACIONES ON SCROLL
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos para animaciones
    const animatedElements = document.querySelectorAll('.portfolio-item, .feature, .contact-method');
    animatedElements.forEach(el => {
        observer.observe(el);
    });



    // ============================================
    // SISTEMA DE NOTIFICACIONES
    // ============================================
    function showNotification(message, type = 'info') {
        // Remover notificación existente
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Crear nueva notificación
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Estilos para la notificación
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
            font-family: var(--font-family);
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        `;

        document.body.appendChild(notification);

        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto-remove después de 5 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }, 5000);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        });
    }

    // ============================================
    // UTILIDADES
    // ============================================
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // ============================================
    // EFECTOS DE HOVER PARA PORTFOLIO
    // ============================================
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ============================================
    // TYPING EFFECT PARA EL HERO
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        
        // Solo aplicar el efecto en dispositivos de escritorio
        if (window.innerWidth > 768) {
            heroTitle.style.opacity = '0';
            heroTitle.innerHTML = '';
            
            setTimeout(() => {
                heroTitle.style.opacity = '1';
                typeTextAnimated(heroTitle, originalText, 80);
            }, 500);
        }
    }

    function typeTextAnimated(element, text, speed) {
        let i = 0;
        const cursor = '<span class="typing-cursor">|</span>';
        
        // Agregar cursor parpadente
        const cursorStyle = document.createElement('style');
        cursorStyle.textContent = `
            .typing-cursor {
                animation: blink 1s infinite;
                color: #ffd700;
                font-weight: bold;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(cursorStyle);
        
        const timer = setInterval(() => {
            if (text.charAt(i) === '<') {
                // Skip HTML tags
                const tagEnd = text.indexOf('>', i);
                if (tagEnd !== -1) {
                    element.innerHTML = element.innerHTML.replace(cursor, '') + text.substring(i, tagEnd + 1) + cursor;
                    i = tagEnd + 1;
                } else {
                    i++;
                }
            } else {
                element.innerHTML = element.innerHTML.replace(cursor, '') + text.charAt(i) + cursor;
                i++;
            }

            if (i >= text.length) {
                clearInterval(timer);
                // Remover cursor después de 2 segundos
                setTimeout(() => {
                    element.innerHTML = element.innerHTML.replace(cursor, '');
                }, 2000);
            }
        }, speed);
    }

    // ============================================
    // PARALLAX EFFECT SUAVE
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroCard = document.querySelector('.hero-card');
        
        if (heroCard && window.innerWidth > 768) {
            const speed = scrolled * 0.5;
            heroCard.style.transform = `translateY(${speed}px)`;
        }
    });

    // ============================================
    // LAZY LOADING PARA IMÁGENES (Preparado para futuro)
    // ============================================
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ============================================
    // PERFORMANCE OPTIMIZATIONS
    // ============================================
    
    // Throttle function para eventos de scroll
    function throttle(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Aplicar throttle a eventos de scroll costosos
    const throttledScrollHandler = throttle(() => {
        // Cualquier lógica de scroll costosa va aquí
    }, 16); // ~60fps

    window.addEventListener('scroll', throttledScrollHandler);

    // ============================================
    // INICIALIZACIÓN FINAL
    // ============================================
    console.log('🚀 VGWebStudio Portfolio cargado correctamente');
    
    // Mostrar notificación de bienvenida (opcional)
    setTimeout(() => {
        // Comentado para no ser molesto, pero se puede activar
        // showNotification('¡Bienvenido a VGWebStudio! 👋', 'info');
    }, 2000);

    // Precargar recursos críticos
    const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
    ];

    criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = resource;
        document.head.appendChild(link);
    });

});

// ============================================
// FUNCIONES GLOBALES PARA DESARROLLADORES
// ============================================

// Función para agregar nuevos proyectos dinámicamente
window.addPortfolioItem = function(itemData) {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const newItem = document.createElement('div');
    newItem.className = 'portfolio-item';
    newItem.setAttribute('data-category', itemData.category);
    
    newItem.innerHTML = `
        <div class="portfolio-image">
            <div class="placeholder-image">
                <i class="fas fa-${itemData.icon || 'image'}"></i>
                <p>${itemData.title}</p>
            </div>
            <div class="portfolio-overlay">
                <div class="portfolio-info">
                    <h4>${itemData.title}</h4>
                    <p>${itemData.description}</p>
                    <div class="portfolio-links">
                        <a href="${itemData.liveUrl || '#'}" class="portfolio-link">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${itemData.detailsUrl || '#'}" class="portfolio-link">
                            <i class="fas fa-eye"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    portfolioGrid.appendChild(newItem);
    console.log('✅ Nuevo proyecto agregado:', itemData.title);
};

// Función para actualizar información del estudio
window.updateStudioInfo = function(newInfo) {
    if (newInfo.name) {
        document.querySelector('.nav-logo h2').textContent = newInfo.name;
    }
    if (newInfo.description) {
        document.querySelector('.hero-description').textContent = newInfo.description;
    }
    console.log('✅ Información del estudio actualizada');
}; 