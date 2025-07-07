// VGWebStudio Portfolio - JavaScript Básico
document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // NAVEGACIÓN MÓVIL
    // ============================================
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle del menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Cerrar menú al hacer click fuera
    document.addEventListener('click', function(e) {
        if (navToggle && navMenu && !navToggle.contains(e.target) && !navMenu.contains(e.target)) {
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

    window.addEventListener('scroll', function() {
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
        button.addEventListener('click', function() {
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
    // EFECTO DE ESCRITURA AUTOMÁTICA (TYPEWRITER)
    // ============================================
    const heroTitle = document.querySelector('.hero-title');
    
    if (heroTitle) {
        // Guardar el texto original
        const originalHTML = heroTitle.innerHTML;
        
        // Limpiar el título inicialmente
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        // Crear cursor parpadeante
        const cursor = '<span class="typing-cursor">|</span>';
        
        // Agregar estilos para el cursor
        const cursorStyle = document.createElement('style');
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
        
        // Función para escribir el texto
        function typeWriter(element, html, speed = 80) {
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
                        setTimeout(type, speed + Math.random() * 50); // Velocidad variable más realista
                    } else {
                        setTimeout(type, 10); // Procesar etiquetas rápidamente
                    }
                    
                    i++;
                } else {
                    // Texto completado, mantener cursor por 2 segundos y luego quitarlo
                    setTimeout(() => {
                        element.innerHTML = currentText;
                    }, 2000);
                }
            }
            
            // Esperar un poco antes de empezar a escribir
            setTimeout(type, 800);
        }
        
        // Iniciar el efecto de escritura
        typeWriter(heroTitle, originalHTML, 60);
    }

    console.log('🚀 VGWebStudio Portfolio cargado correctamente');
}); 