// VGWebStudio - Service Worker para Performance Optimization
const CACHE_NAME = 'vgwebstudio-v1.2';
const STATIC_CACHE = 'static-v1.2';
const DYNAMIC_CACHE = 'dynamic-v1.2';

// Recursos críticos para cachear inmediatamente
const STATIC_ASSETS = [
    '/',
    '/Portfolio/',
    '/Portfolio/index.html',
    '/Portfolio/styles.css',
    '/Portfolio/script.js',
    '/Portfolio/sw.js',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

// URLs que requieren estrategia de red primero
const NETWORK_FIRST_URLS = [
    'https://formspree.io/',
    'https://api.callmebot.com/'
];

// ============================================
// EVENTO DE INSTALACIÓN
// ============================================
self.addEventListener('install', event => {
    console.log('🔧 Service Worker: Instalando...');

    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('💾 Service Worker: Cacheando recursos críticos');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('✅ Service Worker: Instalación completa');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Error en instalación:', error);
            })
    );
});

// ============================================
// EVENTO DE ACTIVACIÓN
// ============================================
self.addEventListener('activate', event => {
    console.log('🚀 Service Worker: Activando...');

    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                            console.log('🗑️ Service Worker: Eliminando cache antiguo:', cacheName);
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
            .then(() => {
                console.log('✅ Service Worker: Activación completa');
                return self.clients.claim();
            })
    );
});

// ============================================
// ESTRATEGIA DE FETCH
// ============================================
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Ignorar solicitudes no-HTTP/HTTPS
    if (!request.url.startsWith('http')) return;

    // Estrategia basada en el tipo de recurso
    if (isStaticAsset(request.url)) {
        event.respondWith(cacheFirstStrategy(request));
    } else if (isNetworkFirstURL(request.url)) {
        event.respondWith(networkFirstStrategy(request));
    } else if (request.destination === 'document') {
        event.respondWith(staleWhileRevalidateStrategy(request));
    } else {
        event.respondWith(cacheFirstStrategy(request));
    }
});

// ============================================
// ESTRATEGIAS DE CACHING
// ============================================

// Cache First - Para recursos estáticos
async function cacheFirstStrategy(request) {
    try {
        const cachedResponse = await caches.match(request);
        if (cachedResponse) {
            return cachedResponse;
        }

        const networkResponse = await fetch(request);
        const cache = await caches.open(DYNAMIC_CACHE);

        // Solo cachear respuestas exitosas
        if (networkResponse.status === 200) {
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.error('❌ Cache First falló:', error);

        // Fallback para páginas HTML
        if (request.destination === 'document') {
            return caches.match('/Portfolio/index.html');
        }

        throw error;
    }
}

// Network First - Para APIs y formularios
async function networkFirstStrategy(request) {
    try {
        const networkResponse = await fetch(request);

        // Cachear respuestas exitosas para usar como fallback
        if (networkResponse.status === 200) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, networkResponse.clone());
        }

        return networkResponse;
    } catch (error) {
        console.log('🌐 Network falló, usando cache:', request.url);
        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        throw error;
    }
}

// Stale While Revalidate - Para documentos HTML
async function staleWhileRevalidateStrategy(request) {
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);

    const networkResponsePromise = fetch(request)
        .then(response => {
            if (response.status === 200) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(() => cachedResponse);

    return cachedResponse || networkResponsePromise;
}

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================
function isStaticAsset(url) {
    return url.includes('.css') ||
        url.includes('.js') ||
        url.includes('.png') ||
        url.includes('.jpg') ||
        url.includes('.jpeg') ||
        url.includes('.gif') ||
        url.includes('.svg') ||
        url.includes('.ico') ||
        url.includes('fonts.googleapis.com') ||
        url.includes('cdnjs.cloudflare.com');
}

function isNetworkFirstURL(url) {
    return NETWORK_FIRST_URLS.some(networkUrl => url.includes(networkUrl));
}

// ============================================
// MANEJO DE MENSAJES
// ============================================
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data && event.data.type === 'GET_CACHE_SIZE') {
        getCacheSize().then(size => {
            event.ports[0].postMessage({ type: 'CACHE_SIZE', size });
        });
    }
});

// Función para obtener el tamaño del cache
async function getCacheSize() {
    const cacheNames = await caches.keys();
    let totalSize = 0;

    for (const cacheName of cacheNames) {
        const cache = await caches.open(cacheName);
        const keys = await cache.keys();

        for (const request of keys) {
            const response = await cache.match(request);
            if (response) {
                const blob = await response.blob();
                totalSize += blob.size;
            }
        }
    }

    return Math.round(totalSize / 1024); // Retorna en KB
}

// ============================================
// LIMPIEZA AUTOMÁTICA DE CACHE
// ============================================
self.addEventListener('activate', event => {
    event.waitUntil(
        cleanOldCaches().then(() => {
            console.log('🧹 Service Worker: Cache limpiado');
        })
    );
});

async function cleanOldCaches() {
    const cacheNames = await caches.keys();
    const currentCaches = [STATIC_CACHE, DYNAMIC_CACHE];

    return Promise.all(
        cacheNames.map(cacheName => {
            if (!currentCaches.includes(cacheName)) {
                return caches.delete(cacheName);
            }
        })
    );
}

console.log('🚀 VGWebStudio Service Worker cargado correctamente'); 