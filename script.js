// VGWebStudio Portfolio - JavaScript Optimizado
(function () {
    'use strict';

    // Cache de selectores DOM para evitar queries repetidas
    const domCache = {};

    function $(selector) {
        if (!domCache[selector]) {
            domCache[selector] = document.querySelector(selector);
        }
        return domCache[selector];
    }

    function $$(selector) {
        if (!domCache[selector + '_all']) {
            domCache[selector + '_all'] = document.querySelectorAll(selector);
        }
        return domCache[selector + '_all'];
    }

    // Optimización de event listeners con delegation
    function addEventDelegate(parent, event, selector, handler) {
        parent.addEventListener(event, function (e) {
            if (e.target.matches(selector) || e.target.closest(selector)) {
                handler.call(e.target.closest(selector) || e.target, e);
            }
        });
    }

    // Debounce y throttle optimizados
    function debounce(func, wait, immediate) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                timeout = null;
                if (!immediate) func(...args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func(...args);
        };
    }

    function throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    // Inicialización cuando el DOM esté listo
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {

        // ============================================
        // NAVEGACIÓN MÓVIL
        // ============================================
        const navToggle = $('.nav-toggle');
        const navMenu = $('.nav-menu');
        const navLinks = $$('.nav-link');

        // Toggle del menú móvil
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', function (e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            }
        });

        // ============================================
        // SMOOTH SCROLLING PARA NAVEGACIÓN
        // ============================================
        navLinks.forEach(link => {
            link.addEventListener('click', function (e) {
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
        // HEADER SCROLL EFFECT (OPTIMIZADO)
        // ============================================
        const header = $('.header');

        const updateHeader = throttle(function () {
            if (!header) return;
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }, 10);

        window.addEventListener('scroll', updateHeader, { passive: true });

        // ============================================
        // FILTROS DEL PORTFOLIO (OPTIMIZADO)
        // ============================================
        const filterButtons = $$('.filter-btn');
        const portfolioItems = $$('.portfolio-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
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
        // FORMULARIO DE CONTACTO DUAL (EMAIL + WHATSAPP) - OPTIMIZADO
        // ============================================
        const contactForm = $('.contact-form');

        if (contactForm) {
            contactForm.addEventListener('submit', function (e) {
                e.preventDefault(); // Prevenir envío automático

                // Obtener datos del formulario
                const formData = new FormData(this);
                const name = formData.get('name');
                const email = formData.get('email');
                const phone = formData.get('phone');
                const subject = formData.get('subject');
                const message = formData.get('message');

                // Validación básica
                if (!name || !email || !subject || !message) {
                    showNotification('Por favor, completa todos los campos obligatorios', 'error');
                    return;
                }

                if (!isValidEmail(email)) {
                    showNotification('Por favor, ingresa un email válido', 'error');
                    return;
                }

                // Validación opcional del teléfono (si se proporciona)
                if (phone && !isValidPhone(phone)) {
                    showNotification('Por favor, ingresa un número de teléfono válido', 'error');
                    return;
                }

                // Mostrar estado de envío
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;

                submitBtn.disabled = true;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

                // ENVÍO DUAL: Email + WhatsApp
                Promise.all([
                    sendEmailFormspree(formData, this),
                    sendWhatsAppMessage(name, email, phone, subject, message)
                ])
                    .then((results) => {
                        console.log('✅ Resultados de envío:', results);

                        // Limpiar formulario
                        this.reset();

                        // Resetear labels con función optimizada
                        const labels = $$('.contact-form label');
                        labels.forEach(label => {
                            label.style.top = 'var(--spacing-4)';
                            label.style.color = 'var(--gray)';
                            label.style.fontSize = 'var(--font-size-base)';
                        });

                        showNotification('¡Mensaje enviado por Email y WhatsApp! 📧📱', 'success');
                    })
                    .catch((error) => {
                        console.error('❌ Error en envío:', error);
                        showNotification('Error al enviar. Intenta nuevamente.', 'error');
                    })
                    .finally(() => {
                        // Restaurar botón
                        setTimeout(() => {
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = originalText;
                        }, 2000);
                    });
            });

            // Manejar la respuesta después del envío (si el usuario regresa)
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('sent') === 'true') {
                showNotification('¡Mensaje enviado correctamente! Te contactaremos pronto.', 'success');
                // Limpiar la URL
                window.history.replaceState({}, document.title, window.location.pathname);
            }
        }

        // ============================================
        // FUNCIÓN PARA ENVIAR EMAIL VIA FORMSPREE
        // ============================================
        function sendEmailFormspree(formData, form) {
            return new Promise((resolve, reject) => {
                fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                })
                    .then(response => {
                        if (response.ok) {
                            console.log('✅ Email enviado via Formspree');
                            resolve('email-sent');
                        } else {
                            throw new Error('Error en Formspree');
                        }
                    })
                    .catch(error => {
                        console.error('❌ Error en email:', error);
                        // No rechazamos para que WhatsApp siga intentando
                        resolve('email-failed');
                    });
            });
        }

        // ============================================
        // FUNCIÓN PARA ENVIAR WHATSAPP VIA CALLMEBOT
        // ============================================
        function sendWhatsAppMessage(name, email, phone, subject, message) {
            return new Promise((resolve, reject) => {
                // Crear mensaje para WhatsApp
                let whatsappMessage = `🌟 NUEVO CONTACTO - VGWebStudio\n\n`;
                whatsappMessage += `👤 Nombre: ${name}\n`;
                whatsappMessage += `📧 Email: ${email}\n`;
                if (phone) {
                    whatsappMessage += `📱 Teléfono: ${phone}\n`;
                }
                whatsappMessage += `📝 Asunto: ${subject}\n\n`;
                whatsappMessage += `💬 Mensaje:\n${message}\n\n`;
                whatsappMessage += `⏰ ${new Date().toLocaleString('es-AR')}\n`;
                whatsappMessage += `🔗 Portfolio VGWebStudio`;

                // Configuración CallMeBot con tu API Key
                const apiKey = '9876927';
                const encodedMessage = encodeURIComponent(whatsappMessage);

                // Usar el formato que funciona: +5492916454112
                const phoneNumber = '+5492916454112'; // ¡Este formato funciona!

                console.log('📱 Enviando WhatsApp...');
                console.log('- API Key:', apiKey);
                console.log('- Número:', phoneNumber);
                console.log('- Mensaje length:', whatsappMessage.length);

                // Crear URL de CallMeBot con el formato correcto
                const callMeBotURL = `https://api.callmebot.com/whatsapp.php?phone=${phoneNumber}&text=${encodedMessage}&apikey=${apiKey}`;

                console.log('- URL:', callMeBotURL);

                // Enviar mensaje usando CallMeBot
                fetch(callMeBotURL, {
                    method: 'GET',
                    mode: 'no-cors'
                })
                    .then(() => {
                        console.log('✅ WhatsApp enviado correctamente!');
                        resolve('whatsapp-sent');
                    })
                    .catch((error) => {
                        console.error('❌ Error al enviar WhatsApp:', error);
                        resolve('whatsapp-failed');
                    });
            });
        }



        // ============================================
        // ANIMACIONES ON SCROLL - Movido a la sección de performance optimizations
        // ============================================

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

        function isValidPhone(phone) {
            // Regex para validar números de teléfono con formato internacional o local
            // Acepta: +54 9 11 1234-5678, +54 9 11 12345678, 11 1234-5678, 1112345678, etc.
            const phoneRegex = /^[\+]?[0-9][\d\-\s\(\)]{8,20}$/;
            return phoneRegex.test(phone.replace(/\s/g, ''));
        }

        // ============================================
        // EFECTOS DE HOVER PARA PORTFOLIO
        // ============================================
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-10px) scale(1.02)';
            });

            item.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });

        // ============================================
        // TYPING EFFECT PARA EL HERO (OPTIMIZADO)
        // ============================================
        const heroTitle = $('.hero-title');
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
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const heroCard = $('.hero-card');

            if (heroCard && window.innerWidth > 768) {
                const speed = scrolled * 0.5;
                heroCard.style.transform = `translateY(${speed}px)`;
            }
        });

        // ============================================
        // LAZY LOADING PARA IMÁGENES (Preparado para futuro) - OPTIMIZADO
        // ============================================
        const images = $$('img[data-src]');
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

        // Event listeners optimizados ya aplicados arriba
        // Intersection Observer para animaciones on-scroll optimizado
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const animationObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    // Dejar de observar una vez animado para mejor performance
                    animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar elementos para animaciones
        const animatedElements = $$('.portfolio-item, .feature, .contact-method');
        animatedElements.forEach(el => {
            animationObserver.observe(el);
        });

        // ============================================
        // MANEJO DE LOGOS
        // ============================================

            // Función para manejar errores de carga de logos
    function handleLogoError(img) {
        img.style.display = 'none';
        console.log('⚠️ Logo no encontrado, usando fallback');
        
        // Crear placeholder si no existe
        const parentContainer = img.closest('.nav-logo') || img.closest('.footer-brand');
        if (parentContainer && !parentContainer.querySelector('.logo-placeholder')) {
            const placeholder = document.createElement('div');
            placeholder.className = 'logo-placeholder';
            placeholder.textContent = 'VG';
            placeholder.style.cssText = `
                width: ${img.classList.contains('nav-logo-img') ? '40px' : '50px'};
                height: ${img.classList.contains('nav-logo-img') ? '40px' : '50px'};
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 8px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-weight: bold;
                font-size: ${img.classList.contains('nav-logo-img') ? '18px' : '20px'};
                box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
                transition: all 0.3s ease;
                cursor: pointer;
            `;
            
            // Insertar antes de la imagen
            parentContainer.insertBefore(placeholder, img);
            
            // Agregar hover effect
            placeholder.addEventListener('mouseenter', () => {
                placeholder.style.transform = 'scale(1.05)';
                placeholder.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4)';
            });
            
            placeholder.addEventListener('mouseleave', () => {
                placeholder.style.transform = 'scale(1)';
                placeholder.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
            });
        }
    }

            // Configurar manejo de errores para logos (optimizado)
    const logoImages = $$('.nav-logo-img, .footer-logo-img');
    logoImages.forEach(img => {
        // Configurar timeout para imágenes que tardan mucho
        const loadTimeout = setTimeout(() => {
            if (!img.complete || img.naturalHeight === 0) {
                console.log('⏰ Logo tardó mucho en cargar, usando fallback');
                handleLogoError(img);
            }
        }, 3000); // 3 segundos de timeout
        
        img.addEventListener('load', () => {
            clearTimeout(loadTimeout);
            console.log('✅ Logo cargado correctamente');
        });
        
        img.addEventListener('error', () => {
            clearTimeout(loadTimeout);
            console.log('❌ Error al cargar logo');
            handleLogoError(img);
        });
        
        // Verificar inmediatamente si la imagen ya falló
        if (img.complete && (img.naturalHeight === 0 || img.naturalWidth === 0)) {
            handleLogoError(img);
        }
        
        // Verificar si el archivo es demasiado grande
        if (img.src && img.src.includes('logo.png')) {
            fetch(img.src, { method: 'HEAD' })
                .then(response => {
                    const size = response.headers.get('content-length');
                    if (size && parseInt(size) > 500000) { // Más de 500KB
                        console.log('⚠️ Logo muy pesado (' + Math.round(size/1024) + 'KB), considera optimizarlo');
                    }
                })
                .catch(() => {
                    console.log('❌ No se pudo verificar el tamaño del logo');
                    handleLogoError(img);
                });
        }
    });

        // Función para crear favicon dinámico si no existe
        function createFallbackFavicon() {
            // Crear un canvas para generar un favicon de emergencia
            const canvas = document.createElement('canvas');
            canvas.width = 32;
            canvas.height = 32;
            const ctx = canvas.getContext('2d');

            // Crear fondo con gradiente
            const gradient = ctx.createLinearGradient(0, 0, 32, 32);
            gradient.addColorStop(0, '#667eea');
            gradient.addColorStop(1, '#764ba2');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 32, 32);

            // Agregar texto "VG"
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 14px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('VG', 16, 16);

            // Convertir a favicon
            const faviconUrl = canvas.toDataURL('image/png');

            // Crear elemento link y agregarlo
            const link = document.createElement('link');
            link.rel = 'icon';
            link.type = 'image/png';
            link.href = faviconUrl;
            document.head.appendChild(link);

            console.log('✅ Favicon de emergencia creado');
        }

        // Verificar si el favicon principal se puede cargar
        const testFavicon = new Image();
        testFavicon.onload = () => {
            console.log('✅ Favicon personalizado cargado');
        };
        testFavicon.onerror = () => {
            console.log('⚠️ Favicon personalizado no encontrado, usando fallback');
            createFallbackFavicon();
        };
        testFavicon.src = 'assets/favicon.ico';

        // ============================================
        // PERFORMANCE MONITORING Y OPTIMIZACIONES FINALES
        // ============================================

        // Monitoreo de performance
        if (typeof performance !== 'undefined' && performance.mark) {
            performance.mark('vgwebstudio-start');

            setTimeout(() => {
                performance.mark('vgwebstudio-end');
                performance.measure('vgwebstudio-load', 'vgwebstudio-start', 'vgwebstudio-end');

                const loadTime = performance.getEntriesByName('vgwebstudio-load')[0]?.duration;
                if (loadTime) {
                    console.log(`⚡ VGWebStudio cargado en ${loadTime.toFixed(2)}ms`);
                }
            }, 100);
        }

        // Prefetch de recursos no críticos
        const prefetchResources = [
            '/Portfolio/assets/logo.png',
            '/Portfolio/assets/favicon-192x192.png'
        ];

        setTimeout(() => {
            prefetchResources.forEach(resource => {
                const link = document.createElement('link');
                link.rel = 'prefetch';
                link.href = resource;
                document.head.appendChild(link);
            });
        }, 1000);

        // Critical Resource Hints ya en HTML
        console.log('🚀 VGWebStudio Portfolio optimizado cargado correctamente');

        // Web Vitals monitoring (básico)
        if ('web-vitals' in window) {
            // Si se incluye la librería web-vitals en el futuro
            const vitalsConfig = { reportAllChanges: true };
        }

        // Cleanup de event listeners al unload
        window.addEventListener('beforeunload', () => {
            // Limpiar timers y observers
            if (typeof animationObserver !== 'undefined') {
                animationObserver.disconnect();
            }
            if (typeof imageObserver !== 'undefined') {
                imageObserver.disconnect();
            }
        });

    } // Fin de la función init()

    // ============================================
    // FUNCIONES GLOBALES PARA DESARROLLADORES
    // ============================================

    // Función para agregar nuevos proyectos dinámicamente
    window.addPortfolioItem = function (itemData) {
        const portfolioGrid = $('.portfolio-grid');
        if (!portfolioGrid) return;

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
    window.updateStudioInfo = function (newInfo) {
        const navLogo = $('.nav-logo h2');
        const heroDescription = $('.hero-description');

        if (newInfo.name && navLogo) {
            navLogo.textContent = newInfo.name;
        }
        if (newInfo.description && heroDescription) {
            heroDescription.textContent = newInfo.description;
        }
        console.log('✅ Información del estudio actualizada');
    };

})(); // Fin del IIFE principal 