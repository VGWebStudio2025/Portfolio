# 🚀 Portfolio VGWebStudio

Portfolio profesional, moderno y minimalista para VGWebStudio - Estudio de diseño y desarrollo web.

## ✨ Características

- **Diseño Moderno y Minimalista**: Interfaz limpia y profesional
- **Totalmente Responsivo**: Se adapta perfectamente a todos los dispositivos
- **Animaciones Suaves**: Efectos sutiles que mejoran la experiencia de usuario
- **Fácil Personalización**: Estructura clara y bien documentada
- **Optimizado para Performance**: Carga rápida y optimizado para SEO
- **Portfolio Filtrable**: Sistema de filtros para organizar proyectos
- **Formulario de Contacto**: Formulario funcional con validaciones

## 🎨 Secciones Incluidas

1. **Header con Navegación**: Logo y menú de navegación responsivo
2. **Hero Section**: Presentación principal con llamada a la acción
3. **Sobre Nosotros**: Información del estudio y servicios
4. **Portfolio de Proyectos**: Galería filtrable de trabajos realizados
5. **Contacto**: Formulario de contacto e información
6. **Footer**: Enlaces y redes sociales

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos con variables CSS y Grid/Flexbox
- **JavaScript (Vanilla)**: Funcionalidades interactivas
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía Inter

## 📁 Estructura del Proyecto

```
Portfolio VGWebStudio/
│
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript funcional
└── README.md          # Documentación
```

## 🚀 Instalación y Uso

1. **Descarga los archivos** en tu servidor web o abre `index.html` en tu navegador
2. **Personaliza el contenido** según tus necesidades
3. **Agrega tus proyectos** en la sección de portfolio
4. **Actualiza la información de contacto**

## 🎯 Personalización

### Cambiar Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Color principal */
    --primary-dark: #1d4ed8;       /* Color principal oscuro */
    --primary-light: #3b82f6;      /* Color principal claro */
    /* ... más variables */
}
```

### Agregar Nuevos Proyectos

Para agregar un nuevo proyecto al portfolio:

1. **Método Manual**: Copia y pega el HTML de un proyecto existente en la sección `.portfolio-grid`
2. **Método JavaScript**: Usa la función global `addPortfolioItem()`:

```javascript
addPortfolioItem({
    title: "Mi Nuevo Proyecto",
    description: "Descripción del proyecto",
    category: "web", // web, ecommerce, landing
    icon: "laptop-code", // Icono de Font Awesome
    liveUrl: "https://ejemplo.com",
    detailsUrl: "#"
});
```

### Personalizar Información del Estudio

Edita las siguientes secciones en `index.html`:

- **Logo**: Cambia "VGWebStudio" en el header
- **Título Hero**: Modifica la sección `.hero-title`
- **Descripción**: Actualiza `.hero-description`
- **Sobre Nosotros**: Edita el contenido de la sección `#nosotros`
- **Contacto**: Actualiza email, teléfono y horarios

### Categorías de Portfolio

Las categorías predefinidas son:
- `all`: Todos los proyectos
- `web`: Sitios web corporativos
- `ecommerce`: Tiendas online
- `landing`: Páginas de aterrizaje

Para agregar nuevas categorías:
1. Agrega un botón de filtro en `.portfolio-filters`
2. Asigna la categoría a tus proyectos con `data-category="tu-categoria"`

## 📝 Formulario de Contacto

El formulario incluye:
- Validación de campos obligatorios
- Validación de formato de email
- Mensajes de confirmación
- Estados de carga

**Nota**: El formulario actualmente simula el envío. Para funcionalidad real, conecta con un backend o servicio como:
- Formspree
- Netlify Forms
- EmailJS
- Tu propio servidor

## 🎨 Tipografía y Iconos

- **Fuente**: Inter (Google Fonts) - Moderna y legible
- **Iconos**: Font Awesome 6.0.0 - Amplia biblioteca de iconos

## 📱 Responsive Design

El portfolio es completamente responsivo con breakpoints:
- **Desktop**: > 768px
- **Tablet**: 768px - 480px
- **Mobile**: < 480px

## 🔧 Funcionalidades JavaScript

- **Navegación móvil**: Menú hamburguesa funcional
- **Smooth scrolling**: Navegación suave entre secciones
- **Filtros de portfolio**: Sistema de filtrado dinámico
- **Animaciones on scroll**: Elementos aparecen al hacer scroll
- **Contadores animados**: Estadísticas con animación
- **Formulario interactivo**: Validaciones y feedback
- **Notificaciones**: Sistema de mensajes para el usuario

## 🚀 Optimizaciones de Performance

- CSS optimizado con variables y metodología BEM
- JavaScript vanilla (sin dependencias)
- Lazy loading preparado para imágenes
- Throttling en eventos de scroll
- Animaciones optimizadas con `will-change`

## 🎯 SEO Ready

- Estructura HTML semántica
- Meta tags configurados
- Headings jerárquicos correctos
- Alt tags preparados para imágenes
- URLs amigables con scroll suave

## 📞 Soporte y Personalización

Este portfolio está diseñado para ser fácilmente personalizable. Si necesitas ayuda adicional:

1. Revisa los comentarios en el código
2. Usa las funciones globales de JavaScript incluidas
3. Modifica las variables CSS para cambios rápidos

## 🌟 Próximas Mejoras

Características que puedes agregar:
- [ ] Galería de imágenes con lightbox
- [ ] Blog o sección de noticias
- [ ] Testimonios de clientes
- [ ] Integración con redes sociales
- [ ] Modo oscuro
- [ ] Múltiples idiomas
- [ ] Animaciones más complejas
- [ ] PWA (Progressive Web App)

## 📄 Licencia

Este proyecto está disponible para uso personal y comercial de VGWebStudio.

---

**¡Tu presencia digital profesional está lista! 🎉**

Para cualquier duda o personalización adicional, el código está bien documentado y estructurado para facilitar las modificaciones. 