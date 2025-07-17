// VGWebStudio Portfolio - JavaScript Básico

// ============================================
// SISTEMA DE INTERNACIONALIZACIÓN (i18n) - GLOBAL
// ============================================

// Objeto con todas las traducciones (disponible globalmente)
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
            'portfolio.project1.title': 'ProyectoDAX Blog',
            'portfolio.project1.desc': 'Blog moderno desarrollado con HTML, CSS y SCSS',
            'portfolio.project1.placeholder': 'ProyectoDAX Blog',
            
            // Próximamente
            'portfolio.coming-soon.badge': 'Próximamente',
            'portfolio.coming-soon.message': 'En desarrollo',
            'portfolio.coming-soon.ecommerce.title': 'Tienda Online Moderna',
            'portfolio.coming-soon.ecommerce.desc': 'Estamos trabajando en una increíble tienda online con las últimas tecnologías',
            'portfolio.coming-soon.ecommerce.placeholder': 'E-commerce',
            'portfolio.project2.title': 'Dentisan - Consultorio Odontológico',
            'portfolio.project2.desc': 'Landing page de demostración para consultorio odontológico con diseño moderno y profesional',
            'portfolio.project2.placeholder': 'Dentisan',
            'portfolio.project3.title': 'Club El Nacional Rugby',
            'portfolio.project3.desc': 'Sitio web institucional del histórico club de rugby fundado en 1919 en Bahía Blanca',
            'portfolio.project3.placeholder': 'El Nacional Rugby',
            
            // Descripciones detalladas para el modal
            'portfolio.project1.description': 'Blog moderno y funcional desarrollado con HTML, CSS y SCSS. Diseño responsive con una interfaz limpia y profesional, optimizado para la experiencia del usuario.',
            'portfolio.project2.description': 'Landing page de demostración para consultorio odontológico. Página completamente funcional con información ficticia, diseñada como template/plantilla personalizable para cualquier consultorio dental real. Incluye secciones de servicios, equipo médico, testimonios y contacto.',
            'portfolio.project3.description': 'Sitio web institucional completo del Club El Nacional, histórico club de rugby fundado en 1919 en Bahía Blanca, Argentina. Incluye información sobre la Copa Patagonia, historia del club, galería de fotos, equipos, staff técnico y sección de contacto. Diseño moderno y funcional que refleja la tradición y prestigio del club.',
            
            // Modal de proyectos
            'modal.loading': 'Cargando imagen...',
            'modal.visit': 'Visitar Proyecto',

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
            'team.cv.download': 'Ver CV',
            
            // Modal de selección de idioma para CV
            'cv.modal.title': 'Seleccionar Idioma',
            'cv.modal.description': 'Elige en qué idioma deseas ver el CV:',
            'cv.modal.spanish': 'Ver en Español',
            'cv.modal.english': 'Ver en Inglés',
            'cv.modal.cancel': 'Cancelar',
            'cv.modal.english.unavailable': 'CV en inglés no disponible aún',
            'cv.modal.spanish.unavailable': 'CV en español no disponible aún'
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
            'portfolio.project1.title': 'ProyectoDAX Blog',
            'portfolio.project1.desc': 'Modern blog developed with HTML, CSS and SCSS',
            'portfolio.project1.placeholder': 'ProyectoDAX Blog',
            
            // Coming Soon
            'portfolio.coming-soon.badge': 'Coming Soon',
            'portfolio.coming-soon.message': 'In development',
            'portfolio.coming-soon.ecommerce.title': 'Modern Online Store',
            'portfolio.coming-soon.ecommerce.desc': 'We are working on an amazing online store with the latest technologies',
            'portfolio.coming-soon.ecommerce.placeholder': 'E-commerce',
            'portfolio.project2.title': 'Dentisan - Dental Clinic',
            'portfolio.project2.desc': 'Demo landing page for dental clinic with modern and professional design',
            'portfolio.project2.placeholder': 'Dentisan',
            'portfolio.project3.title': 'Club El Nacional Rugby',
            'portfolio.project3.desc': 'Institutional website of the historic rugby club founded in 1919 in Bahía Blanca',
            'portfolio.project3.placeholder': 'El Nacional Rugby',
            
            // Detailed descriptions for modal
            'portfolio.project1.description': 'Modern and functional blog developed with HTML, CSS and SCSS. Responsive design with a clean and professional interface, optimized for user experience.',
            'portfolio.project2.description': 'Demo landing page for dental clinic. Fully functional page with fictional information, designed as a customizable template/layout for any real dental clinic. Includes sections for services, medical team, testimonials and contact.',
            'portfolio.project3.description': 'Complete institutional website for Club El Nacional, historic rugby club founded in 1919 in Bahía Blanca, Argentina. Includes information about Copa Patagonia, club history, photo gallery, teams, technical staff and contact section. Modern and functional design that reflects the tradition and prestige of the club.',
            
            // Project modal
            'modal.loading': 'Loading image...',
            'modal.visit': 'Visit Project',

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
            'team.cv.download': 'View CV',
            
            // CV Language Selection Modal
            'cv.modal.title': 'Select Language',
            'cv.modal.description': 'Choose the language to view the CV:',
            'cv.modal.spanish': 'View in Spanish',
            'cv.modal.english': 'View in English',
            'cv.modal.cancel': 'Cancel',
            'cv.modal.english.unavailable': 'English CV not available yet',
            'cv.modal.spanish.unavailable': 'Spanish CV not available yet'
        }
    };

// ============================================
// INICIALIZACIÓN CUANDO EL DOM ESTÁ LISTO
// ============================================
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

    // ============================================
    // SISTEMA DE IDIOMAS
    // ============================================
    
    // Variable para el idioma actual - SIEMPRE ESPAÑOL POR DEFECTO
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
        if (!langToggle) return;
        
        // Actualizar el atributo data-lang para mover el slider
        langToggle.setAttribute('data-lang', language);
        
        // Actualizar solo el texto móvil
        const mobileText = langToggle.querySelector('.mobile-only');
        if (mobileText) {
            mobileText.textContent = language === 'es' ? 'ES' : 'EN';
        }
        
        // Actualizar título del botón
        if (language === 'es') {
            langToggle.title = 'Cambiar a inglés';
        } else {
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
            
            // Actualizar modales si están abiertos
            updateModalLanguage(); // Modal de proyectos
            updateCVModalIfOpen(); // Modal de CV

            // Reiniciar el efecto de escritura del título con el nuevo idioma
            if (typeof startTypewriterEffect === 'function') {
                startTypewriterEffect(currentLanguage);
            }

            // Guardar en localStorage
            localStorage.setItem('language', currentLanguage);

    
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


    }

    // Ejecutar inicialización
    initializeLanguage();
    
    // ==============================================
    // CONFIGURACIÓN: IDIOMA PREDETERMINADO ESPAÑOL
    // ==============================================
    // ESTAS LÍNEAS FUERZAN QUE LA PÁGINA SIEMPRE INICIE EN ESPAÑOL
    // Para volver al comportamiento normal (respetar elección del usuario), 
    // comentar las siguientes 4 líneas:
    localStorage.removeItem('language'); // Limpiar configuración previa
    currentLanguage = 'es'; // Forzar español
    localStorage.setItem('language', 'es'); // Guardar español como preferencia
    updateTexts('es');
    updateLanguageButton('es');
    // ==============================================

    // ============================================
    // MANEJO DE DESCARGA DE CV
    // ============================================
    function initializeCVDownload() {
        const cvButtons = document.querySelectorAll('.btn-cv:not(.btn-cv-disabled)');
        
        cvButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Obtener el tipo de persona desde el atributo data-person
                const personType = button.getAttribute('data-person');
                
                // Mostrar modal de selección de idioma
                showCVLanguageModal(personType, button);
            });
        });
        
        // Manejar botones deshabilitados con mensaje más amigable
        const disabledButtons = document.querySelectorAll('.btn-cv-disabled');
        disabledButtons.forEach(button => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Mensaje más profesional según el idioma
                const message = currentLanguage === 'es' 
                    ? 'CV no disponible aún. ¡Próximamente!'
                    : 'CV not available yet. Coming soon!';
                    
                // Crear notificación temporal en lugar de alert
                showTempNotification(message, 'info');
                return false;
            });
        });
    }
    
    // Función para mostrar notificaciones temporales
    function showTempNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `temp-notification temp-notification--${type}`;
        
        // Seleccionar icono según el tipo
        let icon;
        switch(type) {
            case 'success':
                icon = 'fas fa-check-circle';
                break;
            case 'error':
                icon = 'fas fa-exclamation-circle';
                break;
            case 'info':
            default:
                icon = 'fas fa-info-circle';
                break;
        }
        
        notification.innerHTML = `
            <i class="${icon}"></i>
            <span>${message}</span>
        `;
        
        // Estilos inline para la notificación
        let backgroundColor;
        switch(type) {
            case 'success':
                backgroundColor = '#10b981';
                break;
            case 'error':
                backgroundColor = '#ef4444';
                break;
            case 'info':
            default:
                backgroundColor = '#3b82f6';
                break;
        }
        
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${backgroundColor};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 9999;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            transform: translateX(100%);
            transition: transform 0.3s ease;
        `;
        
        document.body.appendChild(notification);
        
        // Animar entrada
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Remover después de 3 segundos
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // ============================================
    // MODAL DE SELECCIÓN DE IDIOMA PARA CV
    // ============================================
    
    // Configuración de archivos CV
    const cvFiles = {
        valentin: {
            es: 'docs/cv/Valentín Otero_Desarrollo Web.pdf',
            en: 'docs/cv/Curriculum Vitae de Valentín Otero_Desarrollo Web (En ingles).pdf' // ✅ Versión en inglés disponible
        },
        gonzalo: {
            es: 'docs/cv/Currículum Vitae CV Gonzalo Rivero.pdf',
            en: 'docs/cv/Currículum Vitae CV Gonzalo Rivero (ingles).pdf' // ✅ Versión en inglés disponible
        }
    };
    
    // Función para mostrar el modal de selección de idioma
    function showCVLanguageModal(personType, button) {
        // Crear modal si no existe O recrearlo para actualizar traducciones
        let modal = document.getElementById('cvLanguageModal');
        if (modal) {
            // Remover modal existente para recrearlo con traducciones actualizadas
            modal.remove();
        }
        
        // Crear nuevo modal con traducciones actuales
        modal = createCVLanguageModal();
        
        // Almacenar información del botón y persona
        modal.dataset.personType = personType;
        modal.dataset.buttonRef = button.id || 'cv-button';
        
        // Mostrar modal con animación suave
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Agregar evento para cerrar al hacer clic fuera del modal
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                hideCVLanguageModal();
            }
        });
        
        // Forzar reflow para que la animación funcione
        modal.offsetHeight;
        
        // Activar animación de entrada
        requestAnimationFrame(() => {
            modal.style.opacity = '1';
            const content = modal.querySelector('.cv-modal-content');
            if (content) {
                content.style.transform = 'scale(1)';
            }
        });
    }
    
    // Función para crear el modal de selección de idioma (con traducciones)
    function createCVLanguageModal() {
        const modal = document.createElement('div');
        modal.id = 'cvLanguageModal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, rgba(74, 144, 226, 0.15), rgba(80, 102, 144, 0.15));
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        
        modal.innerHTML = `
            <div class="cv-modal-content" style="
                background: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
                padding: 40px;
                border-radius: 24px;
                text-align: center;
                max-width: 460px;
                width: 90%;
                max-height: 90vh;
                box-shadow: 
                    0 25px 50px -12px rgba(0, 0, 0, 0.25),
                    0 0 0 1px rgba(255, 255, 255, 0.8);
                border: 1px solid rgba(255, 255, 255, 0.2);
                transform: scale(0.8);
                transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                position: relative;
                overflow: hidden;
            ">
                <!-- Decorative elements -->
                <div style="
                    position: absolute;
                    top: -50px;
                    right: -50px;
                    width: 100px;
                    height: 100px;
                    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1), rgba(80, 102, 144, 0.1));
                    border-radius: 50%;
                    z-index: 1;
                "></div>
                <div style="
                    position: absolute;
                    bottom: -30px;
                    left: -30px;
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(45deg, rgba(74, 144, 226, 0.08), rgba(80, 102, 144, 0.08));
                    border-radius: 50%;
                    z-index: 1;
                "></div>
                
                <!-- Icon -->
                <div style="
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #4a90e2 0%, #5066a0 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 25px;
                    box-shadow: 0 8px 25px rgba(74, 144, 226, 0.3);
                    position: relative;
                    z-index: 2;
                ">
                    <span style="font-size: 2.2rem; color: white;">📄</span>
                </div>
                
                <!-- Title -->
                <h3 class="cv-modal-title" style="
                    margin: 0 0 15px 0;
                    color: #2d3748;
                    font-size: 1.8rem;
                    font-weight: 700;
                    background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    position: relative;
                    z-index: 2;
                ">
                    ${getTranslation('cv.modal.title')}
                </h3>
                
                <!-- Description -->
                <p class="cv-modal-description" style="
                    margin: 0 0 35px 0;
                    color: #718096;
                    line-height: 1.6;
                    font-size: 1.1rem;
                    font-weight: 400;
                    position: relative;
                    z-index: 2;
                ">
                    ${getTranslation('cv.modal.description')}
                </p>
                
                <!-- Language Buttons -->
                <div style="display: flex; gap: 16px; justify-content: center; margin: 35px 0; flex-wrap: wrap; position: relative; z-index: 2;">
                    <button onclick="downloadCVInLanguage('es')" 
                        class="cv-btn-spanish"
                        style="
                            padding: 18px 30px;
                            background: linear-gradient(135deg, #e53e3e 0%, #c53030 100%);
                            color: white;
                            border: none;
                            border-radius: 16px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 1.05rem;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            min-width: 160px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            box-shadow: 0 4px 15px rgba(229, 62, 62, 0.3);
                            position: relative;
                            overflow: hidden;
                        ">
                        <img src="img/flags/spain-flag-circle.png" alt="Bandera España" style="width: 24px; height: 24px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));" />
                        <span class="cv-btn-spanish-text">${getTranslation('cv.modal.spanish')}</span>
                    </button>
                    <button onclick="downloadCVInLanguage('en')" 
                        class="cv-btn-english"
                        style="
                            padding: 18px 30px;
                            background: linear-gradient(135deg, #3182ce 0%, #2b77cb 100%);
                            color: white;
                            border: none;
                            border-radius: 16px;
                            cursor: pointer;
                            font-weight: 600;
                            font-size: 1.05rem;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            min-width: 160px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            gap: 12px;
                            box-shadow: 0 4px 15px rgba(49, 130, 206, 0.3);
                            position: relative;
                            overflow: hidden;
                        ">
                        <img src="img/flags/usa-flag-circle.png" alt="Bandera USA" style="width: 24px; height: 24px; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));" />
                        <span class="cv-btn-english-text">${getTranslation('cv.modal.english')}</span>
                    </button>
                </div>
                
                <!-- Cancel Button -->
                <button onclick="hideCVLanguageModal()" 
                    class="cv-btn-cancel"
                    style="
                        padding: 14px 28px;
                        background: linear-gradient(135deg, #718096 0%, #4a5568 100%);
                        color: white;
                        border: none;
                        border-radius: 12px;
                        cursor: pointer;
                        font-weight: 500;
                        font-size: 1rem;
                        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                        box-shadow: 0 2px 8px rgba(113, 128, 150, 0.3);
                        position: relative;
                        z-index: 2;
                    ">
                    ${getTranslation('cv.modal.cancel')}
                </button>
            </div>
        `;
        
        // Agregar estilos de hover y animaciones (solo una vez)
        if (!document.getElementById('cv-modal-dynamic-styles')) {
            const style = document.createElement('style');
            style.id = 'cv-modal-dynamic-styles';
            style.textContent = `
                .cv-btn-spanish:hover {
                    background: linear-gradient(135deg, #c53030 0%, #9c2222 100%) !important;
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 8px 25px rgba(229, 62, 62, 0.4) !important;
                }
                
                .cv-btn-english:hover {
                    background: linear-gradient(135deg, #2b77cb 0%, #2a69ac 100%) !important;
                    transform: translateY(-3px) scale(1.02);
                    box-shadow: 0 8px 25px rgba(49, 130, 206, 0.4) !important;
                }
                
                .cv-btn-cancel:hover {
                    background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%) !important;
                    transform: translateY(-2px) scale(1.02);
                    box-shadow: 0 6px 20px rgba(113, 128, 150, 0.4) !important;
                }
                
                .cv-btn-spanish:active, .cv-btn-english:active {
                    transform: translateY(-1px) scale(0.98);
                    transition: all 0.1s ease;
                }
                
                .cv-btn-cancel:active {
                    transform: translateY(-1px) scale(0.98);
                    transition: all 0.1s ease;
                }
                
                /* Efecto de brillo en hover */
                .cv-btn-spanish:before, .cv-btn-english:before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    transition: left 0.5s ease;
                }
                
                .cv-btn-spanish:hover:before, .cv-btn-english:hover:before {
                    left: 100%;
                }
                
                /* Animaciones para móvil */
                @media (max-width: 480px) {
                    .cv-btn-spanish, .cv-btn-english {
                        min-width: 100% !important;
                        margin: 8px 0 !important;
                    }
                    
                    .cv-modal-content {
                        padding: 30px 20px !important;
                        margin: 20px !important;
                    }
                }
                
                /* Animación de entrada */
                @keyframes cvModalShow {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                
                .cv-modal-show {
                    animation: cvModalShow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(modal);
        return modal;
    }
    
    // Función para actualizar textos del modal según el idioma actual
    function updateCVModalTexts(modal) {
        if (!modal) return;
        
        const title = modal.querySelector('.cv-modal-title');
        const description = modal.querySelector('.cv-modal-description');
        const spanishBtnText = modal.querySelector('.cv-btn-spanish-text');
        const englishBtnText = modal.querySelector('.cv-btn-english-text');
        const cancelBtn = modal.querySelector('.cv-btn-cancel');
        
        if (title) title.textContent = getTranslation('cv.modal.title');
        if (description) description.textContent = getTranslation('cv.modal.description');
        if (spanishBtnText) spanishBtnText.textContent = getTranslation('cv.modal.spanish');
        if (englishBtnText) englishBtnText.textContent = getTranslation('cv.modal.english');
        if (cancelBtn) cancelBtn.textContent = getTranslation('cv.modal.cancel');
    }
    
    // Función para actualizar el modal de CV si está abierto cuando cambia el idioma
    function updateCVModalIfOpen() {
        const modal = document.getElementById('cvLanguageModal');
        if (modal && modal.style.display === 'flex') {
            // El modal está abierto, recrearlo con las nuevas traducciones
            const personType = modal.dataset.personType;
            const buttonRef = modal.dataset.buttonRef;
            
            // Remover modal actual
            modal.remove();
            
            // Crear nuevo modal con traducciones actualizadas
            const newModal = createCVLanguageModal();
            newModal.dataset.personType = personType;
            newModal.dataset.buttonRef = buttonRef;
            
            // Mostrar el nuevo modal inmediatamente
            newModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Función para ocultar el modal
    function hideCVLanguageModal() {
        const modal = document.getElementById('cvLanguageModal');
        if (modal && modal.style.display === 'flex') {
            const content = modal.querySelector('.cv-modal-content');
            
            // Iniciar animación de salida
            modal.style.opacity = '0';
            if (content) {
                content.style.transform = 'scale(0.8)';
            }
            
            // Ocultar modal después de la animación
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 300); // Tiempo de la animación
        }
    }
    
    // Función para descargar CV en el idioma seleccionado
    function downloadCVInLanguage(language) {
        const modal = document.getElementById('cvLanguageModal');
        const personType = modal.dataset.personType;
        
        // Verificar si existe el archivo para la persona y idioma
        const cvFile = cvFiles[personType] && cvFiles[personType][language];
        
        if (!cvFile) {
            const message = language === 'es' 
                ? getTranslation('cv.modal.spanish.unavailable')
                : getTranslation('cv.modal.english.unavailable');
            showTempNotification(message, 'info');
            hideCVLanguageModal();
            return;
        }
        
        // Proceder con la descarga directamente
        // La verificación de archivos se hará en el momento de descarga
        
        // Ocultar modal
        hideCVLanguageModal();
        
        // Mostrar efecto de descarga
        const button = document.querySelector(`[data-person="${personType}"]`);
        if (button) {
            const originalText = button.innerHTML;
            const downloadingText = currentLanguage === 'es' ? 'Descargando...' : 'Downloading...';
            
            button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> ${downloadingText}`;
            button.style.opacity = '0.7';
            
                    // Abrir CV en nueva pestaña
        setTimeout(() => {
            try {
                // Abrir el CV en una nueva pestaña
                const newWindow = window.open(cvFile, '_blank', 'noopener,noreferrer');
                
                // Restaurar botón
                button.innerHTML = originalText;
                button.style.opacity = '1';
                
                // Verificar si se pudo abrir la ventana (algunos navegadores bloquean pop-ups)
                if (!newWindow || newWindow.closed) {
                    // Si no se puede abrir nueva ventana, mostrar mensaje informativo
                    const blockedMessage = currentLanguage === 'es' 
                        ? 'Por favor, permite ventanas emergentes para ver el CV en nueva pestaña'
                        : 'Please allow pop-ups to view CV in new tab';
                    showTempNotification(blockedMessage, 'info');
                } else {
                    // Mostrar notificación de éxito
                    const successMessage = currentLanguage === 'es' 
                        ? '¡CV abierto en nueva pestaña!'
                        : 'CV opened in new tab!';
                    showTempNotification(successMessage, 'success');
                }
                
            } catch (error) {
                // Manejar errores
                button.innerHTML = originalText;
                button.style.opacity = '1';
                
                const errorMessage = currentLanguage === 'es' 
                    ? 'Error al abrir el CV. Intenta de nuevo.'
                    : 'Error opening CV. Please try again.';
                showTempNotification(errorMessage, 'error');
            }
        }, 800); // Reducido el tiempo de espera
        }
    }
    
    // Hacer funciones globalmente accesibles
    window.showCVLanguageModal = showCVLanguageModal;
    window.hideCVLanguageModal = hideCVLanguageModal;
    window.downloadCVInLanguage = downloadCVInLanguage;

    // Manejar cierre del modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const modal = document.getElementById('cvLanguageModal');
            if (modal && modal.style.display === 'flex') {
                hideCVLanguageModal();
            }
        }
    });

    // Ejecutar inicialización de CV
    initializeCVDownload();

    // ============================================
    // INTERACCIONES TÁCTILES PARA MÓVIL - PORTFOLIO
    // ============================================
    function initializeMobilePortfolio() {
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        portfolioItems.forEach((item, index) => {
            const overlay = item.querySelector('.portfolio-overlay');
            
            if (overlay) {
                // Agregar evento touch para mostrar overlay en móvil
                item.addEventListener('touchstart', function(e) {
                    // Remover active de todas las otras cards
                    portfolioItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('mobile-active');
                        }
                    });
                    
                    // Toggle active en la card actual
                    item.classList.toggle('mobile-active');
                    
                    // Prevenir scroll accidental
                    if (item.classList.contains('mobile-active')) {
                        e.preventDefault();
                    }
                });

                // También agregar evento click como fallback
                item.addEventListener('click', function(e) {
                    // Solo activar si no hay overlay visible
                    if (!item.classList.contains('mobile-active')) {
                        // Remover active de todas las otras cards
                        portfolioItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('mobile-active');
                            }
                        });
                        
                        item.classList.add('mobile-active');
                        e.preventDefault();
                    }
                });
            }
        });

        // Cerrar overlays al tocar fuera
        document.addEventListener('touchstart', function(e) {
            const isPortfolioItem = e.target.closest('.portfolio-item');
            if (!isPortfolioItem) {
                portfolioItems.forEach(item => {
                    item.classList.remove('mobile-active');
                });
            }
        });
    }

    // Ejecutar inicialización móvil
    initializeMobilePortfolio();

    // Función para detectar cambios en el sistema de idioma del navegador
    function detectBrowserLanguage() {
        // FUNCIÓN DESACTIVADA - Siempre iniciamos en español
        // const browserLang = navigator.language || navigator.languages[0];
        // const isSpanish = browserLang.startsWith('es');

        // Forzar español como idioma por defecto en la primera visita
        if (!localStorage.getItem('language')) {
            currentLanguage = 'es'; // SIEMPRE ESPAÑOL
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

    // Inicializar el efecto al cargar la página - SIEMPRE EN ESPAÑOL
    if (heroTitle) {
        startTypewriterEffect('es'); // Forzar español para el efecto de escritura
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


                
                // Función para enviar a un número específico
                const sendToWhatsApp = async (numberConfig, delay = 0) => {
                    return new Promise((resolve) => {
                        setTimeout(() => {
                            const callMeBotUrl = `https://api.callmebot.com/whatsapp.php?phone=${numberConfig.phone}&apikey=${numberConfig.apikey}&text=${encodedMessage}`;
                            
                            try {
                                // Método 1: Intentar con fetch normal primero
                                fetch(callMeBotUrl, {
                                    method: 'GET'
                                })
                                .then(response => {
                                    if (response.ok) {
                                        resolve({ success: true, number: numberConfig.name, method: 'fetch' });
                                    } else {
                                        // Intentar con método fallback
                                        return useFallbackMethod();
                                    }
                                })
                                .catch((fetchError) => {
                                    return useFallbackMethod();
                                });
                                
                                // Función de fallback usando imagen
                                function useFallbackMethod() {
                                    try {
                                        const img = new Image();
                                        
                                        img.onload = () => {
                                            resolve({ success: true, number: numberConfig.name, method: 'image' });
                                        };
                                        
                                        img.onerror = (imgError) => {
                                            // Aún así consideramos como exitoso porque CallMeBot puede enviar el mensaje
                                            // aunque la respuesta de imagen falle
                                            resolve({ success: true, number: numberConfig.name, method: 'image-error' });
                                        };
                                        
                                        // Agregar timeout a la imagen para evitar cuelgues
                                        setTimeout(() => {
                                            resolve({ success: true, number: numberConfig.name, method: 'timeout' });
                                        }, 10000); // 10 segundos timeout
                                        
                                        img.src = callMeBotUrl;
                                        
                                    } catch (fallbackError) {
                                        resolve({ success: false, number: numberConfig.name, error: fallbackError.message });
                                    }
                                }
                                
                            } catch (error) {
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
                
                // Si al menos uno fue exitoso, considerar como éxito
                if (successful.length === 0) {
                    throw new Error('No se pudo enviar a ningún número de WhatsApp');
                }

                // Redirigir a la página de agradecimiento - proceso invisible instantáneo
                setTimeout(() => {
                    // Pasar el idioma actual como parámetro en la URL
                    window.location.href = `./pages/gracias.html?lang=${currentLanguage}`;
                }, 1500); // Optimizado a 1500ms - sin ventanas = proceso instantáneo

            } catch (error) {
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
                return;
            }

            messageFormattingInProgress = true;

            try {

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



                // Actualizar campo hidden con máxima precaución
                const callmebotField = document.getElementById('callmebotMessage');
                if (callmebotField) {
                    // Verificar valor actual
                    const currentValue = callmebotField.value;

                    // Solo actualizar si es diferente y no está vacío el nuevo mensaje
                    if (finalMessage && finalMessage !== currentValue) {
                        callmebotField.value = finalMessage;
                    }
                }

            } catch (error) {
                const callmebotField = document.getElementById('callmebotMessage');
                if (callmebotField && !callmebotField.value) {
                    callmebotField.value = '🌟 Nuevo contacto desde VGWebStudio';
                }
            } finally {
                // Liberar el flag después de un pequeño delay
                setTimeout(() => {
                    messageFormattingInProgress = false;
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

}); // Fin DOMContentLoaded

// ============================================
// MODAL DE VISTA PREVIA DE PROYECTOS
// ============================================

// Cache de imágenes cargadas
const imageCache = new Map();

// Estado de preloading
const preloadingImages = new Set();

// Mapeo de proyectos a claves de traducción
const projectTranslationKeys = {
    proyectodax: 'project1',
    dentisan: 'project2',
    elnacional: 'project3'
};

// Datos de los proyectos (con claves de traducción)
const projectsData = {
    proyectodax: {
        titleKey: 'portfolio.project1.title',
        descriptionKey: 'portfolio.project1.description',
        image: 'img/vistaprevia/Index(DAX).png',
        url: 'https://proyectodax.netlify.app',
        technologies: ['HTML', 'CSS', 'SCSS'],
        features: {
            es: [
                'Diseño responsive moderno',
                'Optimizado para SEO',
                'Navegación intuitiva',
                'Carga rápida'
            ],
            en: [
                'Modern responsive design',
                'SEO optimized',
                'Intuitive navigation',
                'Fast loading'
            ]
        }
    },
    dentisan: {
        titleKey: 'portfolio.project2.title',
        descriptionKey: 'portfolio.project2.description',
        image: 'img/vistaprevia/index(DENTISAN).png',
        url: 'https://dentisan.netlify.app',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: {
            es: [
                'Diseño responsive profesional',
                'Formulario de contacto funcional',
                'Secciones completas de servicios',
                'Template personalizable',
                'Información de demostración'
            ],
            en: [
                'Professional responsive design',
                'Functional contact form',
                'Complete service sections',
                'Customizable template',
                'Demo information'
            ]
        }
    },
    elnacional: {
        titleKey: 'portfolio.project3.title',
        descriptionKey: 'portfolio.project3.description',
        image: 'img/vistaprevia/index(CEN).png',
        url: 'https://clubelnacionalrugby.netlify.app',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        features: {
            es: [
                'Sitio web institucional completo',
                'Historia y tradición del club',
                'Información Copa Patagonia',
                'Galería de fotos interactiva',
                'Secciones de equipos y staff',
                'Diseño responsive moderno'
            ],
            en: [
                'Complete institutional website',
                'Club history and tradition',
                'Copa Patagonia information',
                'Interactive photo gallery',
                'Teams and staff sections',
                'Modern responsive design'
            ]
        }
    }
    // Aquí se pueden agregar más proyectos en el futuro
};

// Función para precargar imagen
function preloadImage(imageSrc) {
    return new Promise((resolve, reject) => {
        // Si ya está en cache, resolver inmediatamente
        if (imageCache.has(imageSrc)) {
            resolve(imageCache.get(imageSrc));
            return;
        }

        // Si ya se está precargando, no hacer nada
        if (preloadingImages.has(imageSrc)) {
            return;
        }

        preloadingImages.add(imageSrc);

        const img = new Image();
        
        img.onload = () => {
            imageCache.set(imageSrc, img);
            preloadingImages.delete(imageSrc);
            resolve(img);
        };
        
        img.onerror = () => {
            preloadingImages.delete(imageSrc);
            reject(new Error(`Failed to load image: ${imageSrc}`));
        };
        
        img.src = imageSrc;
    });
}

// Función para cargar imagen con loading state
function loadImageWithSpinner(imageSrc, targetImg, loadingSpinner) {
    // Mostrar spinner y ocultar imagen
    if (loadingSpinner) {
        loadingSpinner.style.display = 'flex';
    }
    if (targetImg) {
        targetImg.style.display = 'none';
    }
    
    // Crear nueva imagen para probar carga
    const testImg = new Image();
    
    testImg.onload = function() {
        if (targetImg) {
            targetImg.src = imageSrc;
            targetImg.alt = `Vista previa de proyecto`;
        }
        
        // Ocultar spinner y mostrar imagen
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
        if (targetImg) {
            targetImg.style.display = 'block';
        }
    };
    
    testImg.onerror = function() {
        // Mostrar imagen placeholder
        if (targetImg) {
            targetImg.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"%3E%3Crect width="600" height="400" fill="%23f3f4f6"/%3E%3Ctext x="300" y="200" text-anchor="middle" fill="%23666" font-family="Arial" font-size="18"%3EImagen no disponible%3C/text%3E%3C/svg%3E';
            targetImg.alt = 'Vista previa no disponible';
        }
        
        if (loadingSpinner) {
            loadingSpinner.style.display = 'none';
        }
        if (targetImg) {
            targetImg.style.display = 'block';
        }
    };
    
    // Iniciar carga
    testImg.src = imageSrc;
}

// Función auxiliar para obtener traducciones
function getTranslation(key) {
    // Obtener idioma actual de forma más robusta
    const language = (typeof currentLanguage !== 'undefined' ? currentLanguage : null) || 
                     localStorage.getItem('language') || 
                     'es';
    
    const translationData = translations[language] || translations['es'];
    return translationData[key] || key;
}

// Función para abrir la vista previa del proyecto (mejorada)
function openProjectPreview(projectKey) {
    const project = projectsData[projectKey];
    if (!project) {
        return;
    }

    // Obtener elementos del modal
    const modal = document.getElementById('projectPreviewModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalProjectImage = document.getElementById('modalProjectImage');
    const modalProjectDescription = document.getElementById('modalProjectDescription');
    const modalProjectTech = document.getElementById('modalProjectTech');
    const modalProjectLink = document.getElementById('modalProjectLink');
    const loadingSpinner = document.getElementById('imageLoadingSpinner');
    


    // Llenar el modal con los datos del proyecto usando traducciones
    modalTitle.textContent = getTranslation(project.titleKey);
    modalProjectDescription.textContent = getTranslation(project.descriptionKey);
    
    // Configurar enlace del proyecto
    if (modalProjectLink && project.url) {
        modalProjectLink.href = project.url;
        modalProjectLink.onclick = null; // Limpiar cualquier onclick previo
    }

    // Cargar imagen con sistema de loading mejorado
    if (project.image) {
        loadImageWithSpinner(project.image, modalProjectImage, loadingSpinner);
    } else {
        // Si no hay imagen, ocultar spinner y mostrar placeholder
        loadingSpinner.style.display = 'none';
        modalProjectImage.style.display = 'block';
        modalProjectImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDYwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjZjNmNGY2Ii8+CjxwYXRoIGQ9Ik0yNTAgMTAwSDM1MFYzMDBIMjUwVjEwMFoiIGZpbGw9IiNkMWQ1ZGIiLz4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4PSIyODAiIHk9IjE4MCI+CjxwYXRoIGQ9Ik0xMiAyQzEzLjEgMiAxNCAyLjkgMTQgNEMxNCA1LjEgMTMuMSA2IDEyIDZDMTAuOSA2IDEwIDUuMSAxMCA0QzEwIDIuOSAxMC45IDIgMTIgMlpNMjEgOVYyMkMyMSAyMi42IDIwLjYgMjMgMjAgMjNIMEM5LjQgMjMgOSAyMi42IDkgMjJWOUM5IDguNCA5LjQgOCAxMCA4SDIwQzIwLjYgOCAyMSA4LjQgMjEgOVpNMTkgMTNIMThWMTBIMTZWMTNINUwxMiAyMEwyMCAxM0gxOVoiIGZpbGw9IiM5Y2EzYWYiLz4KPC9zdmc+Cjx0ZXh0IHg9IjMwMCIgeT0iMjUwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNjc3MTgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4K';
        modalProjectImage.alt = 'Vista previa no disponible';
    }

    // Agregar tecnologías
    modalProjectTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        modalProjectTech.appendChild(techTag);
    });

    // Mostrar el modal
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body

    // Agregar clase para animación
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // Guardar referencia del proyecto actual para actualizaciones de idioma
    modal.currentProjectKey = projectKey;
}

// Función para actualizar el modal cuando cambia el idioma
function updateModalLanguage() {
    const modal = document.getElementById('projectPreviewModal');
    if (modal && modal.style.display === 'flex' && modal.currentProjectKey) {
        const project = projectsData[modal.currentProjectKey];
        if (project) {
            const modalTitle = document.getElementById('modalTitle');
            const modalProjectDescription = document.getElementById('modalProjectDescription');
            
            if (modalTitle) {
                modalTitle.textContent = getTranslation(project.titleKey);
            }
            if (modalProjectDescription) {
                modalProjectDescription.textContent = getTranslation(project.descriptionKey);
            }
        }
        
        // Actualizar también los textos estáticos del modal
        const loadingText = modal.querySelector('[data-i18n="modal.loading"]');
        const visitButton = modal.querySelector('[data-i18n="modal.visit"]');
        
        if (loadingText) {
            loadingText.textContent = getTranslation('modal.loading');
        }
        if (visitButton) {
            visitButton.textContent = getTranslation('modal.visit');
        }
    }
}

// Preloading inteligente al hacer hover
document.addEventListener('DOMContentLoaded', function() {
    const previewButtons = document.querySelectorAll('.preview-btn');
    
    previewButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            // Obtener el proyecto del onclick
            const onclickAttr = this.getAttribute('onclick');
            const projectKey = onclickAttr.match(/openProjectPreview\('(.+?)'\)/)?.[1];
            
            if (projectKey && projectsData[projectKey] && projectsData[projectKey].image) {
                // Precargar imagen en hover para carga instantánea
                preloadImage(projectsData[projectKey].image).catch(err => {
                    // Preload falló, pero no es crítico
                });
            }
        });
    });
});

// Función para cerrar la vista previa
function closeProjectPreview() {
    const modal = document.getElementById('projectPreviewModal');
    
    // Remover clase de animación
    modal.classList.remove('active');
    
    // Limpiar referencia del proyecto
    modal.currentProjectKey = null;
    
    // Ocultar modal después de la animación
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Restaurar scroll del body
    }, 300);
}

// Cerrar modal al hacer click fuera del contenido
document.addEventListener('click', function(e) {
    const modal = document.getElementById('projectPreviewModal');
    if (e.target === modal) {
        closeProjectPreview();
    }
});

// Cerrar modal con la tecla Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectPreviewModal');
        if (modal && modal.style.display === 'flex') {
            closeProjectPreview();
        }
    }
});

// Hacer funciones globalmente accesibles
window.openProjectPreview = openProjectPreview;
window.closeProjectPreview = closeProjectPreview; 