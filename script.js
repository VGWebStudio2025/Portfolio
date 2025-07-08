// VGWebStudio Portfolio - JavaScript Básico
document.addEventListener('DOMContentLoaded', function () {

    // ============================================
    // NAVEGACIÓN MÓVIL
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function (e) {
        if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
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
    // HEADER SCROLL EFFECT
    // ============================================
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // ============================================
    // FILTROS DEL PORTFOLIO
    // ============================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            // Filtrar elementos
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    console.log('🚀 VGWebStudio Portfolio cargado correctamente');

    // ============================================
    // SISTEMA DE INTERNACIONALIZACIÓN (i18n)
    // ============================================

    // Objeto con todas las traducciones
    const translations = {
        es: {
            // Navegación
            'nav.home': 'Inicio',
            'nav.about': 'Nosotros',
            'nav.team': 'Equipo',
            'nav.projects': 'Proyectos',
            'nav.contact': 'Contacto',

            // Hero Section
            'hero.title.part1': 'Creamos experiencias digitales',
            'hero.title.highlight': 'excepcionales',
            'hero.description': 'Somos VGWebStudio, un estudio de diseño y desarrollo web que transforma ideas en sitios web profesionales, modernos y funcionales.',
            'hero.buttons.projects': 'Ver Proyectos',
            'hero.buttons.contact': 'Contactar',

            // Sobre Nosotros
            'about.title': 'Sobre Nosotros',
            'about.subtitle': 'Conoce quiénes somos y qué nos motiva',
            'about.heading': 'VGWebStudio nace de la pasión por el diseño y la tecnología',
            'about.text1': 'Somos un estudio emergente especializado en el diseño y desarrollo de sitios web que combinan estética moderna con funcionalidad excepcional. Nuestro enfoque se centra en entender las necesidades únicas de cada cliente para crear soluciones digitales que realmente marquen la diferencia.',
            'about.text2': 'Aunque somos nuevos en el mercado, nuestro equipo cuenta con la experiencia y creatividad necesarias para llevar tu presencia digital al siguiente nivel. Creemos que cada proyecto es una oportunidad de innovar y superar expectativas.',

            // Características
            'features.design.title': 'Diseño Creativo',
            'features.design.desc': 'Diseños únicos y modernos que reflejan la identidad de tu marca',
            'features.dev.title': 'Desarrollo Técnico',
            'features.dev.desc': 'Código limpio, optimizado y siguiendo las mejores prácticas',
            'features.responsive.title': 'Responsive Design',
            'features.responsive.desc': 'Sitios web que se adaptan perfectamente a cualquier dispositivo',
            'features.optimization.title': 'Optimización',
            'features.optimization.desc': 'Velocidad de carga rápida y optimización para motores de búsqueda',

            // Portfolio
            'portfolio.title': 'Nuestros Proyectos',
            'portfolio.subtitle': 'Algunos de los trabajos que hemos realizado',
            'portfolio.filter.all': 'Todos',
            'portfolio.filter.web': 'Sitios Web',
            'portfolio.filter.ecommerce': 'E-commerce',
            'portfolio.filter.landing': 'Landing Pages',
            'portfolio.project1.title': 'Sitio Web Corporativo',
            'portfolio.project1.desc': 'Desarrollo completo para empresa de servicios',
            'portfolio.project1.placeholder': 'Proyecto Web Corporativo',
            'portfolio.project2.title': 'E-commerce Moderno',
            'portfolio.project2.desc': 'Tienda online con sistema de pagos integrado',
            'portfolio.project2.placeholder': 'Tienda Online',
            'portfolio.project3.title': 'Landing Page Productiva',
            'portfolio.project3.desc': 'Página de aterrizaje optimizada para conversiones',
            'portfolio.project3.placeholder': 'Landing Page',
            'portfolio.project4.title': 'Portfolio Profesional',
            'portfolio.project4.desc': 'Sitio web personal para profesional creativo',
            'portfolio.project4.placeholder': 'Portfolio Personal',

            // Contacto
            'contact.title': '¿Listo para tu próximo proyecto?',
            'contact.subtitle': 'Contáctanos y hagamos realidad tu visión digital',
            'contact.heading': 'Hablemos de tu proyecto',
            'contact.text': 'Estamos aquí para escuchar tus ideas y convertirlas en una presencia digital excepcional. No importa si tienes un concepto claro o solo una idea inicial, trabajaremos contigo para desarrollar la solución perfecta.',
            'contact.email.label': 'Email',
            'contact.phone.label': 'Teléfono',
            'contact.form.name': 'Nombre completo',
            'contact.form.email': 'Correo electrónico',
            'contact.form.phone': 'Teléfono / WhatsApp (opcional)',
            'contact.form.subject': 'Asunto',
            'contact.form.message': 'Mensaje',
            'contact.form.submit': 'Enviar Mensaje',

            // Footer
            'footer.tagline': 'Creando experiencias digitales excepcionales desde 2025',
            'footer.services.title': 'Servicios',
            'footer.services.web': 'Diseño Web',
            'footer.services.dev': 'Desarrollo Frontend',
            'footer.services.ecommerce': 'E-commerce',
            'footer.services.seo': 'Optimización SEO',
            'footer.contact.title': 'Contacto',
            'footer.copyright': '© 2025 VGWebStudio. Todos los derechos reservados.',

            // Validación de formulario
            'validation.required': 'Por favor, completa este campo',
            'validation.email': 'Por favor, ingresa un email válido',
            'validation.minLength': 'Este campo debe tener al menos {min} caracteres',
            'validation.maxLength': 'Este campo no puede tener más de {max} caracteres',

            // Página de agradecimiento
            'thanks.title': '¡Mensaje Enviado con Éxito!',
            'thanks.message': 'Gracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo muy pronto.',
            'thanks.whatsapp': 'Tu mensaje ha sido enviado directamente a nuestro WhatsApp',
            'thanks.response': 'Tiempo de respuesta: menos de 24 horas',
            'thanks.back': 'Volver al Inicio',
            'thanks.projects': 'Ver Proyectos',
            'thanks.contact.title': '¿Necesitas contactarnos directamente?',

            // Sección del Equipo
            'team.title': 'Conoce a Nuestro Equipo',
            'team.subtitle': 'Los creadores detrás de VGWebStudio',
            'team.founder1.name': 'Valentin Otero',
            'team.founder1.role': 'Co-fundador & Desarrollador Frontend',
            'team.founder1.description': 'Apasionado por crear experiencias web únicas y funcionales. Especialista en tecnologías frontend modernas con experiencia en el desarrollo de soluciones digitales innovadoras.',
            'team.founder2.name': 'Gonzalo Rivero',
            'team.founder2.role': 'Co-fundador & Diseñador UX/UI',
            'team.founder2.description': 'Experto en diseño de experiencias digitales intuitivas y atractivas. Con un enfoque centrado en el usuario, transforma ideas complejas en interfaces simples y elegantes que conectan con las emociones de los usuarios.',
            'team.cv.download': 'Descargar CV'
        },
        en: {
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.team': 'Team',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',

            // Hero Section
            'hero.title.part1': 'We create',
            'hero.title.highlight': 'exceptional digital experiences',
            'hero.description': 'We are VGWebStudio, a design and web development studio that transforms ideas into professional, modern and functional websites.',
            'hero.buttons.projects': 'View Projects',
            'hero.buttons.contact': 'Contact',

            // About Us
            'about.title': 'About Us',
            'about.subtitle': 'Get to know who we are and what motivates us',
            'about.heading': 'VGWebStudio is born from the passion for design and technology',
            'about.text1': 'We are an emerging studio specialized in the design and development of websites that combine modern aesthetics with exceptional functionality. Our approach focuses on understanding the unique needs of each client to create digital solutions that really make a difference.',
            'about.text2': 'Although we are new to the market, our team has the experience and creativity necessary to take your digital presence to the next level. We believe that each project is an opportunity to innovate and exceed expectations.',

            // Features
            'features.design.title': 'Creative Design',
            'features.design.desc': 'Unique and modern designs that reflect your brand identity',
            'features.dev.title': 'Technical Development',
            'features.dev.desc': 'Clean, optimized code following best practices',
            'features.responsive.title': 'Responsive Design',
            'features.responsive.desc': 'Websites that adapt perfectly to any device',
            'features.optimization.title': 'Optimization',
            'features.optimization.desc': 'Fast loading speed and search engine optimization',

            // Portfolio
            'portfolio.title': 'Our Projects',
            'portfolio.subtitle': 'Some of the work we have done',
            'portfolio.filter.all': 'All',
            'portfolio.filter.web': 'Websites',
            'portfolio.filter.ecommerce': 'E-commerce',
            'portfolio.filter.landing': 'Landing Pages',
            'portfolio.project1.title': 'Corporate Website',
            'portfolio.project1.desc': 'Complete development for service company',
            'portfolio.project1.placeholder': 'Corporate Web Project',
            'portfolio.project2.title': 'Modern E-commerce',
            'portfolio.project2.desc': 'Online store with integrated payment system',
            'portfolio.project2.placeholder': 'Online Store',
            'portfolio.project3.title': 'Productive Landing Page',
            'portfolio.project3.desc': 'Landing page optimized for conversions',
            'portfolio.project3.placeholder': 'Landing Page',
            'portfolio.project4.title': 'Professional Portfolio',
            'portfolio.project4.desc': 'Personal website for creative professional',
            'portfolio.project4.placeholder': 'Personal Portfolio',

            // Contact
            'contact.title': 'Ready for your next project?',
            'contact.subtitle': 'Contact us and let\'s make your digital vision come true',
            'contact.heading': 'Let\'s talk about your project',
            'contact.text': 'We are here to listen to your ideas and turn them into an exceptional digital presence. It doesn\'t matter if you have a clear concept or just an initial idea, we will work with you to develop the perfect solution.',
            'contact.email.label': 'Email',
            'contact.phone.label': 'Phone',
            'contact.form.name': 'Full name',
            'contact.form.email': 'Email address',
            'contact.form.phone': 'Phone / WhatsApp (optional)',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Message',
            'contact.form.submit': 'Send Message',

            // Footer
            'footer.tagline': 'Creating exceptional digital experiences since 2025',
            'footer.services.title': 'Services',
            'footer.services.web': 'Web Design',
            'footer.services.dev': 'Frontend Development',
            'footer.services.ecommerce': 'E-commerce',
            'footer.services.seo': 'SEO Optimization',
            'footer.contact.title': 'Contact',
            'footer.copyright': '© 2025 VGWebStudio. All rights reserved.',

            // Form validation
            'validation.required': 'Please fill out this field',
            'validation.email': 'Please enter a valid email',
            'validation.minLength': 'This field must be at least {min} characters long',
            'validation.maxLength': 'This field cannot be more than {max} characters long',

            // Thank you page
            'thanks.title': 'Message Sent Successfully!',
            'thanks.message': 'Thank you for contacting us. We have received your message and will get back to you very soon.',
            'thanks.whatsapp': 'Your message has been sent directly to our WhatsApp',
            'thanks.response': 'Response time: less than 24 hours',
            'thanks.back': 'Back to Home',
            'thanks.projects': 'View Projects',
            'thanks.contact.title': 'Need to contact us directly?',

            // Team Section
            'team.title': 'Meet Our Team',
            'team.subtitle': 'The creators behind VGWebStudio',
            'team.founder1.name': 'Valentin Otero',
            'team.founder1.role': 'Co-founder & Frontend Developer',
            'team.founder1.description': 'Passionate about creating unique and functional web experiences. Specialist in modern frontend technologies with experience in developing innovative digital solutions.',
            'team.founder2.name': 'Gonzalo Rivero',
            'team.founder2.role': 'Co-founder & UX/UI Designer',
            'team.founder2.description': 'Expert in designing intuitive and attractive digital experiences. With a user-centered approach, transforms complex ideas into simple and elegant interfaces that connect with user emotions.',
            'team.cv.download': 'Download CV'
        }
    };

    // Variable para el idioma actual
    let currentLanguage = localStorage.getItem('language') || 'es';

    // Referencias a elementos del DOM (con verificación de existencia)
    const langToggle = document.getElementById('langToggle');
    const flagIcon = langToggle ? langToggle.querySelector('.flag-icon') : null;
    const langText = langToggle ? langToggle.querySelector('.lang-text') : null;



    // Función para cambiar textos
    function updateTexts(language) {
        const elements = document.querySelectorAll('[data-i18n]');

        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = translations[language][key];

            if (translation) {
                // Manejar elementos especiales como el título del hero
                if (element.tagName === 'SPAN' && element.parentElement.classList.contains('hero-title')) {
                    element.textContent = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });

        // Actualizar el placeholder del formulario
        const phoneInput = document.getElementById('userPhone');
        if (phoneInput && language === 'en') {
            phoneInput.placeholder = '+54 9 291 645 4112';
        }

        // Actualizar el atributo lang del HTML
        document.documentElement.lang = language;
    }

    // Función para actualizar el botón de idioma
    function updateLanguageButton(language) {
        if (!langToggle || !flagIcon || !langText) return;
        
        const emojiFlag = flagIcon.querySelector('.emoji-flag');
        const textFlag = flagIcon.querySelector('.text-flag');
        
        if (language === 'es') {
            if (emojiFlag) emojiFlag.textContent = '🇪🇸';
            if (textFlag) textFlag.textContent = 'ES';
            langText.textContent = 'ES';
            langToggle.title = 'Cambiar a inglés';
        } else {
            if (emojiFlag) emojiFlag.textContent = '🇺🇸';
            if (textFlag) textFlag.textContent = 'EN';
            langText.textContent = 'EN';
            langToggle.title = 'Switch to Spanish';
        }
    }

    // Función para cambiar idioma
    function switchLanguage() {
        if (!langToggle) return;
        
        // Añadir animación al botón
        langToggle.classList.add('lang-switching');

        setTimeout(() => {
            // Cambiar idioma
            currentLanguage = currentLanguage === 'es' ? 'en' : 'es';

            // Actualizar textos y botón
            updateTexts(currentLanguage);
            updateLanguageButton(currentLanguage);

            // Reiniciar el efecto de escritura del título con el nuevo idioma
            if (typeof startTypewriterEffect === 'function') {
                startTypewriterEffect(currentLanguage);
            }

            // Guardar en localStorage
            localStorage.setItem('language', currentLanguage);

            console.log(`🌐 Idioma cambiado a: ${currentLanguage.toUpperCase()}`);
        }, 200);

        // Quitar animación después de que termine
        setTimeout(() => {
            if (langToggle) {
                langToggle.classList.remove('lang-switching');
            }
        }, 400);
    }

    // Event listener para el botón de idioma
    if (langToggle) {
        langToggle.addEventListener('click', switchLanguage);
    }

    // Inicializar idioma al cargar la página
    function initializeLanguage() {
        updateTexts(currentLanguage);
        updateLanguageButton(currentLanguage);

        console.log(`🌐 Idioma inicializado: ${currentLanguage.toUpperCase()}`);
    }

    // Ejecutar inicialización
    initializeLanguage();

    // Función para detectar cambios en el sistema de idioma del navegador
    function detectBrowserLanguage() {
        const browserLang = navigator.language || navigator.languages[0];
        const isSpanish = browserLang.startsWith('es');

        // Solo cambiar si no hay preferencia guardada
        if (!localStorage.getItem('language')) {
            currentLanguage = isSpanish ? 'es' : 'en';
            localStorage.setItem('language', currentLanguage);
            initializeLanguage();
        }
    }

    // Detectar idioma del navegador solo en la primera visita
    detectBrowserLanguage();

    // ============================================
    // ANIMACIONES CONTROLADAS POR SCROLL (INTERSECTION OBSERVER)
    // ============================================
    
    // Configurar Intersection Observer para animaciones
    const observerOptions = {
        threshold: 0.15, // Activar cuando el 15% del elemento sea visible
        rootMargin: '0px 0px -30px 0px' // Activar 30px antes de que sea completamente visible
    };

    const animateObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Agregar clase de animación al elemento
                entry.target.classList.add('animate-in');
                
                // Dejar de observar este elemento para evitar re-animaciones
                animateObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Función para verificar si un elemento ya es visible
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Observar elementos que deben animarse al entrar al viewport
    const animatedElements = document.querySelectorAll('.portfolio-item, .feature, .contact-method, .team-member, .hero-title, .hero-description, .hero-buttons, .section-header');
    
    animatedElements.forEach(element => {
        // Solo procesar animaciones si el usuario las permite
        if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
            // Elementos del hero: animar inmediatamente con delay
            if (element.classList.contains('hero-title') || 
                element.classList.contains('hero-description') || 
                element.classList.contains('hero-buttons')) {
                // Animar elementos del hero inmediatamente al cargar la página
                setTimeout(() => {
                    element.classList.add('animate-in');
                }, 100); // Pequeño delay para que se procese el CSS
            }
            // Si el elemento ya está visible, animarlo inmediatamente
            else if (isElementInViewport(element)) {
                element.classList.add('animate-in');
            } else {
                // Si no está visible, observarlo para cuando entre al viewport
                animateObserver.observe(element);
            }
        } else {
            // Si las animaciones están deshabilitadas, mostrar elementos inmediatamente
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });

    console.log(`✨ Intersection Observer configurado para ${animatedElements.length} elementos`);

    // ============================================
    // EFECTO DE ESCRITURA AUTOMÁTICA (TYPEWRITER)
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    let typingTimeout; // Variable para controlar el timeout del efecto de escritura

    // Crear cursor parpadeante (solo una vez)
    const cursor = '<span class="typing-cursor">|</span>';

    // Agregar estilos para el cursor (solo una vez)
    if (heroTitle && !document.querySelector('.typewriter-styles')) {
        const cursorStyle = document.createElement('style');
        cursorStyle.className = 'typewriter-styles';
        cursorStyle.textContent = `
            .typing-cursor {
                animation: blink 1s infinite;
                color: #ffd700;
                font-weight: bold;
                margin-left: 2px;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
        `;
        document.head.appendChild(cursorStyle);
    }

    // Función para construir el HTML del título basado en el idioma actual
    function buildHeroTitleHTML(language) {
        const part1 = translations[language]['hero.title.part1'];
        const highlight = translations[language]['hero.title.highlight'];
        
        return `<span data-i18n="hero.title.part1">${part1}</span> <span class="highlight" data-i18n="hero.title.highlight">${highlight}</span>`;
    }

    // Función para escribir el texto
    function typeWriter(element, html, speed = 80) {
        // Limpiar cualquier timeout anterior
        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        let i = 0;
        let isTag = false;
        let currentText = '';

        function type() {
            if (i < html.length) {
                const char = html.charAt(i);

                // Manejar etiquetas HTML
                if (char === '<') {
                    isTag = true;
                } else if (char === '>') {
                    isTag = false;
                    currentText += char;
                    i++;
                    type();
                    return;
                }

                currentText += char;

                // Solo hacer pausa en caracteres visibles, no en etiquetas HTML
                if (!isTag && char !== '>') {
                    element.innerHTML = currentText + cursor;
                    typingTimeout = setTimeout(type, speed + Math.random() * 50); // Velocidad variable más realista
                } else {
                    typingTimeout = setTimeout(type, 10); // Procesar etiquetas rápidamente
                }

                i++;
            } else {
                // Texto completado, mantener cursor por 2 segundos y luego quitarlo
                typingTimeout = setTimeout(() => {
                    element.innerHTML = currentText;
                }, 2000);
            }
        }

        // Esperar un poco antes de empezar a escribir
        typingTimeout = setTimeout(type, 800);
    }

    // Función para iniciar el efecto de escritura con el idioma actual
    function startTypewriterEffect(language = 'es') {
        if (heroTitle) {
            // Limpiar el título
            heroTitle.innerHTML = '';
            heroTitle.style.opacity = '1';

            // Construir el HTML del título para el idioma actual
            const titleHTML = buildHeroTitleHTML(language);

            // Iniciar el efecto de escritura
            typeWriter(heroTitle, titleHTML, 60);
        }
    }

    // Inicializar el efecto al cargar la página
    if (heroTitle) {
        startTypewriterEffect(currentLanguage);
    }

    // ============================================
    // VALIDACIÓN PERSONALIZADA DEL FORMULARIO
    // ============================================

    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        // Función para obtener mensaje de validación en el idioma actual
        function getValidationMessage(key, params = {}) {
            let message = translations[currentLanguage][key] || translations['es'][key];

            // Reemplazar parámetros en el mensaje
            Object.keys(params).forEach(param => {
                message = message.replace(`{${param}}`, params[param]);
            });

            return message;
        }

        // Función para mostrar error de validación
        function showValidationError(input, message) {
            // Remover errores previos
            clearValidationError(input);

            // Crear elemento de error
            const errorElement = document.createElement('div');
            errorElement.className = 'validation-error';
            errorElement.textContent = message;

            // Añadir clase de error al input
            input.classList.add('error');

            // Insertar el mensaje después del input
            input.parentNode.insertBefore(errorElement, input.nextSibling);
        }

        // Función para limpiar errores de validación
        function clearValidationError(input) {
            input.classList.remove('error');
            const errorElement = input.parentNode.querySelector('.validation-error');
            if (errorElement) {
                errorElement.remove();
            }
        }

        // Función para validar email
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        // Función para validar un campo individual
        function validateField(input) {
            const value = input.value.trim();
            const isRequired = input.hasAttribute('required');

            // Limpiar errores previos
            clearValidationError(input);

            // Validar campo requerido
            if (isRequired && !value) {
                showValidationError(input, getValidationMessage('validation.required'));
                return false;
            }

            // Validar email
            if (input.type === 'email' && value && !isValidEmail(value)) {
                showValidationError(input, getValidationMessage('validation.email'));
                return false;
            }

            // Validar longitud mínima
            const minLength = input.getAttribute('minlength');
            if (minLength && value && value.length < parseInt(minLength)) {
                showValidationError(input, getValidationMessage('validation.minLength', { min: minLength }));
                return false;
            }

            // Validar longitud máxima
            const maxLength = input.getAttribute('maxlength');
            if (maxLength && value && value.length > parseInt(maxLength)) {
                showValidationError(input, getValidationMessage('validation.maxLength', { max: maxLength }));
                return false;
            }

            return true;
        }

        // Función para validar todo el formulario
        function validateForm() {
            const inputs = contactForm.querySelectorAll('input[required], textarea[required], input[type="email"]');
            let isValid = true;

            inputs.forEach(input => {
                if (!validateField(input)) {
                    isValid = false;
                }
            });

            return isValid;
        }

        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Validar al perder el foco
            input.addEventListener('blur', () => {
                if (input.value.trim()) {
                    validateField(input);
                }
            });

            // Limpiar errores al escribir
            input.addEventListener('input', () => {
                if (input.classList.contains('error')) {
                    setTimeout(() => {
                        validateField(input);
                    }, 300);
                }
            });
        });

        // Variable para evitar envíos múltiples
        let formSubmissionInProgress = false;

        // Manejar envío del formulario
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Siempre prevenir el envío normal
            e.stopPropagation(); // Evitar que el evento se propague

            // Prevenir múltiples envíos
            if (formSubmissionInProgress) {
                console.log('⚠️ Envío ya en progreso, ignorando clic adicional');
                return;
            }

            if (!validateForm()) {
                // Hacer scroll al primer campo con error
                const firstError = contactForm.querySelector('.error');
                if (firstError) {
                    firstError.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                    firstError.focus();
                }
                return;
            }

            // Marcar como en progreso
            formSubmissionInProgress = true;

            // Formatear mensaje para Call Me Bot antes del envío
            formatCallMeBotMessage();

            // Mostrar indicador de envío
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            const sendingText = currentLanguage === 'es' ? 'Enviando mensaje...' : 'Sending message...';

            submitButton.textContent = sendingText;
            submitButton.disabled = true;
            submitButton.style.opacity = '0.7';
            submitButton.style.cursor = 'not-allowed';

            try {
                // Esperar un momento para que se actualice el campo de mensaje
                await new Promise(resolve => setTimeout(resolve, 200));

                // Obtener el mensaje final del campo hidden
                const callmebotField = document.getElementById('callmebotMessage');
                const finalMessage = callmebotField ? callmebotField.value : '';

                console.log('📝 Mensaje a enviar:', finalMessage);

                // Configuración para múltiples números de WhatsApp
                // ⚠️ IMPORTANTE: Para agregar un segundo número real:
                // 1. Cambia el segundo 'phone' por el número real (ej: '5491234567890')
                // 2. Cambia el segundo 'apikey' por el API key correspondiente a ese número
                // 3. Cada número necesita su propio API key de CallMeBot
                const whatsappNumbers = [
                    { phone: '5492916454112', apikey: '9876927', name: 'Principal' },
                    { phone: '5492916430305', apikey: '2296460', name: 'Secundario' }
                ];
                
                // URL encode del mensaje para evitar problemas con caracteres especiales
                const encodedMessage = encodeURIComponent(finalMessage);

                console.log('📤 Enviando mensaje a múltiples números de WhatsApp...');
                
                // Función para enviar a un número específico
                const sendToWhatsApp = async (numberConfig, delay = 0) => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${numberConfig.phone}&apikey=${numberConfig.apikey}&text=${encodedMessage}`;
                            
                            console.log(`📱 Enviando a ${numberConfig.name} (${numberConfig.phone})...`);
                            console.log(`🔗 URL generada:`, callMeBotUrl);
                            console.log(`🔑 API Key utilizada: ${numberConfig.apikey}`);
                            
                            try {
                                // Método 1: Intentar con fetch normal primero
                                fetch(callMeBotUrl, {
                                    method: 'GET'
                                })
                                .then(response => {
                                    console.log(`📡 Respuesta de ${numberConfig.name}:`, response.status, response.statusText);
                                    if (response.ok) {
                                        console.log(`✅ Mensaje enviado exitosamente a ${numberConfig.name}`);
                                        resolve({ success: true, number: numberConfig.name, method: 'fetch' });
                                    } else {
                                        console.warn(`⚠️ Respuesta no exitosa de ${numberConfig.name}: ${response.status}`);
                                        // Intentar con método fallback
                                        return useFallbackMethod();
                                    }
                                })
                                .catch((fetchError) => {
                                    console.log(`ℹ️ Fetch falló para ${numberConfig.name}, intentando fallback:`, fetchError.message);
                                    return useFallbackMethod();
                                });
                                
                                // Función de fallback usando imagen
                                function useFallbackMethod() {
                                    console.log(`🔄 Usando método fallback para ${numberConfig.name}...`);
                                    try {
                                        const img = new Image();
                                        
                                        img.onload = () => {
                                            console.log(`✅ Fallback exitoso para ${numberConfig.name} (imagen cargada)`);
                                            resolve({ success: true, number: numberConfig.name, method: 'image' });
                                        };
                                        
                                        img.onerror = (imgError) => {
                                            console.log(`⚠️ Imagen falló para ${numberConfig.name}, pero mensaje probablemente enviado`);
                                            // Aún así consideramos como exitoso porque CallMeBot puede enviar el mensaje
                                            // aunque la respuesta de imagen falle
                                            resolve({ success: true, number: numberConfig.name, method: 'image-error' });
                                        };
                                        
                                        // Agregar timeout a la imagen para evitar cuelgues
                                        setTimeout(() => {
                                            console.log(`⏰ Timeout para ${numberConfig.name}, considerando como enviado`);
                                            resolve({ success: true, number: numberConfig.name, method: 'timeout' });
                                        }, 10000); // 10 segundos timeout
                                        
                                        img.src = callMeBotUrl;
                                        
                                    } catch (fallbackError) {
                                        console.error(`❌ Error crítico en fallback para ${numberConfig.name}:`, fallbackError);
                                        resolve({ success: false, number: numberConfig.name, error: fallbackError.message });
                                    }
                                }
                                
                            } catch (error) {
                                console.error(`❌ Error general enviando a ${numberConfig.name}:`, error);
                                resolve({ success: false, number: numberConfig.name, error: error.message });
                            }
                        }, delay);
                    });
                };

                // Enviar a todos los números - ahora sin delays ya que es completamente invisible
                const sendPromises = whatsappNumbers.map((numberConfig, index) => 
                    sendToWhatsApp(numberConfig, index * 100) // 100ms de delay mínimo para evitar saturar
                );

                // Esperar a que todos los envíos se completen
                const results = await Promise.all(sendPromises);
                
                // Mostrar resumen detallado de envíos
                const successful = results.filter(r => r.success);
                const failed = results.filter(r => !r.success);
                
                console.log(`📊 RESUMEN DETALLADO DE ENVÍOS:`);
                console.log(`✅ Exitosos: ${successful.length}/${whatsappNumbers.length}`);
                
                // Mostrar detalles de envíos exitosos
                successful.forEach(s => {
                    console.log(`  ✅ ${s.number}: Enviado via ${s.method || 'desconocido'}`);
                });
                
                // Mostrar detalles de envíos fallidos
                if (failed.length > 0) {
                    console.log(`❌ Fallidos: ${failed.length}`);
                    failed.forEach(f => {
                        console.log(`  ❌ ${f.number}: ${f.error || 'Error desconocido'}`);
                    });
                } else {
                    console.log(`🎉 ¡Todos los envíos fueron exitosos!`);
                }
                
                // Si al menos uno fue exitoso, considerar como éxito
                if (successful.length === 0) {
                    throw new Error('No se pudo enviar a ningún número de WhatsApp');
                }

                // Redirigir a la página de agradecimiento - proceso invisible instantáneo
                setTimeout(() => {
                    console.log('🔄 Redirigiendo a página de agradecimiento...');
                    // Pasar el idioma actual como parámetro en la URL
                    window.location.href = `./pages/gracias.html?lang=${currentLanguage}`;
                }, 1500); // Optimizado a 1500ms - sin ventanas = proceso instantáneo

            } catch (error) {
                console.error('❌ Error al enviar mensaje:', error);

                // Resetear botón en caso de error
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.opacity = '1';
                submitButton.style.cursor = 'pointer';
                
                // Resetear flag
                formSubmissionInProgress = false;

                // Mostrar mensaje de error
                alert(currentLanguage === 'es' 
                    ? 'Error al enviar el mensaje. Por favor, intenta de nuevo.' 
                    : 'Error sending message. Please try again.'
                );
            }
        });

        // Variable para evitar ejecuciones múltiples
        let messageFormattingInProgress = false;

        // Función para formatear el mensaje para Call Me Bot
        function formatCallMeBotMessage() {
            // Evitar ejecuciones múltiples
            if (messageFormattingInProgress) {
                console.log('⚠️ Formateo ya en progreso, evitando duplicación');
                return;
            }

            messageFormattingInProgress = true;

            try {
                console.log('🔄 Iniciando formateo de mensaje...');

                // Obtener valores de forma más controlada
                const nameInput = document.getElementById('name');
                const emailInput = document.getElementById('email');
                const phoneInput = document.getElementById('userPhone');
                const subjectInput = document.getElementById('subject');
                const messageInput = document.getElementById('message');

                const name = nameInput ? nameInput.value.trim().substring(0, 50) : '';
                const email = emailInput ? emailInput.value.trim().substring(0, 50) : '';
                const phone = phoneInput ? phoneInput.value.trim().substring(0, 20) : '';
                const subject = subjectInput ? subjectInput.value.trim().substring(0, 50) : '';
                let message = messageInput ? messageInput.value.trim().substring(0, 200) : '';

                // Limpiar caracteres problemáticos de cada campo
                const cleanField = (text) => {
                    return text.replace(/[\r\n\t]/g, ' ')
                        .replace(/\s+/g, ' ')
                        .trim();
                };

                const cleanName = cleanField(name);
                const cleanEmail = cleanField(email);
                const cleanPhone = cleanField(phone);
                const cleanSubject = cleanField(subject);
                const cleanMessage = cleanField(message);

                // Generar timestamp una sola vez
                const now = new Date();
                const fecha = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
                const hora = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;

                // Construir mensaje línea por línea usando array
                const messageParts = [];
                
                if (currentLanguage === 'es') {
                    messageParts.push('🌟 Nuevo contacto desde VGWebStudio');
                    messageParts.push(`⏰ Enviado: ${fecha} a las ${hora}`);
                    messageParts.push('🇪🇸 Idioma: Español');
                    messageParts.push(''); // línea en blanco
                    messageParts.push(`👤 Nombre: ${cleanName}`);
                    if (cleanEmail) messageParts.push(`📧 Email: ${cleanEmail}`);
                    if (cleanPhone) messageParts.push(`📱 Telefono: ${cleanPhone}`);
                    if (cleanSubject) messageParts.push(`📝 Asunto: ${cleanSubject}`);
                    if (cleanMessage) messageParts.push(`💬 Mensaje: ${cleanMessage}`);
                } else {
                    messageParts.push('🌟 New contact from VGWebStudio');
                    messageParts.push(`⏰ Sent: ${fecha} at ${hora}`);
                    messageParts.push('🇺🇸 Language: English');
                    messageParts.push(''); // línea en blanco
                    messageParts.push(`👤 Name: ${cleanName}`);
                    if (cleanEmail) messageParts.push(`📧 Email: ${cleanEmail}`);
                    if (cleanPhone) messageParts.push(`📱 Phone: ${cleanPhone}`);
                    if (cleanSubject) messageParts.push(`📝 Subject: ${cleanSubject}`);
                    if (cleanMessage) messageParts.push(`💬 Message: ${cleanMessage}`);
                }

                // Unir todas las partes con saltos de línea
                let finalMessage = messageParts.join('\n');

                // Límite estricto de caracteres
                if (finalMessage.length > 800) {
                    finalMessage = finalMessage.substring(0, 797) + '...';
                }

                console.log('📤 Mensaje construido:', finalMessage);
                console.log('📏 Longitud total:', finalMessage.length);

                // Actualizar campo hidden con máxima precaución
                const callmebotField = document.getElementById('callmebotMessage');
                if (callmebotField) {
                    // Verificar valor actual
                    const currentValue = callmebotField.value;
                    console.log('🔍 Valor actual del campo:', currentValue);

                    // Solo actualizar si es diferente y no está vacío el nuevo mensaje
                    if (finalMessage && finalMessage !== currentValue) {
                        callmebotField.value = finalMessage;
                        console.log('✅ Campo actualizado exitosamente');
                    } else {
                        console.log('⚠️ No se actualiza el campo (mismo valor o mensaje vacío)');
                    }
                } else {
                    console.error('❌ Campo callmebotMessage no encontrado');
                }

            } catch (error) {
                console.error('❌ Error al formatear mensaje:', error);
                const callmebotField = document.getElementById('callmebotMessage');
                if (callmebotField && !callmebotField.value) {
                    callmebotField.value = '🌟 Nuevo contacto desde VGWebStudio';
                }
            } finally {
                // Liberar el flag después de un pequeño delay
                setTimeout(() => {
                    messageFormattingInProgress = false;
                    console.log('🔓 Formateo completado, flag liberado');
                }, 100);
            }
        }

        // Re-validar cuando cambie el idioma
        const originalSwitchLanguage = switchLanguage;
        switchLanguage = function () {
            originalSwitchLanguage();

            // Re-validar campos que tienen errores
            setTimeout(() => {
                const errorInputs = contactForm.querySelectorAll('.error');
                errorInputs.forEach(input => {
                    validateField(input);
                });
            }, 250);
        };
    }

}); 