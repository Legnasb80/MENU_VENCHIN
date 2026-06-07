// ==================== CONFIGURACIÓN DEL NEGOCIO ====================
const CONFIG = {
    whatsappNumber: '584120265275', // Reemplazar con el número real (código de país + número, sin + ni espacios)
    currency: '$',
    storeName: 'VENCHIN'
};

// ==================== BASE DE DATOS DE PRODUCTOS ====================
const CATEGORIES = [
    { id: 'arroz', name: 'Arroz Frito', icon: 'fa-fire-burner' },
    { id: 'combos', name: 'Combos', icon: 'fa-box-open' },
    { id: 'entradas', name: 'Entradas', icon: 'fa-shrimp' },
    { id: 'bebidas', name: 'Bebidas', icon: 'fa-bottle-water' }
];

const PRODUCTS = [
    {
        id: 1,
        category: 'arroz',
        name: 'Arroz Chino VENCHIN',
        desc: 'Nuestra especialidad insuperable salteada al wok con jamon premium, tortilla de huevo picada y cebollín y repollo fresco, con un toque de salsa de soya especial.',
        price: 2.99,
        img: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=400&fit=crop&q=80',
        customizable: true,
        options: [
            {
                title: 'Selecciona el Tamaño',
                type: 'radio',
                name: 'size',
                choices: [
                    { name: 'Individual (Aprox. 400g)', price: 0.00, default: true },
                    { name: 'Duo VENCHIN (Para 2 personas)', price: 2.00 },
                    { name: 'Banquete Familiar (Para 4 personas)', price: 7.00 }
                ]
            },
            {
                title: 'Acompañantes',
                type: 'checkbox',
                name: 'extras',
                choices: [
                    { name: 'Porcion de papas', price: 1.50 },
                    { name: 'Lumpias', price: 1.50 },
                    { name: 'Tender de pollo', price: 2.50 }
                ]
            },
            {
                title: 'Nivel de Salsa de Soya',
                type: 'radio',
                name: 'soya',
                choices: [
                    { name: 'Normal (Receta Original)', price: 0.00, default: true },
                    { name: 'Poca Soya (Menos salado)', price: 0.00 },
                    { name: 'Extra Soya (Sabor más intenso)', price: 0.00 }
                ]
            }
        ]
    },
    {
        id: 2,
        category: 'arroz',
        name: 'Arroz VENCHIN con Pollo',
        desc: 'Delicioso y clásico arroz salteado al wok con trozos de pechuga de pollo marinada, cebollín fresco, huevo desmenuzado y nuestro toque de salsa de soya china especial.',
        price: 4.99,
        img: 'https://images.unsplash.com/photo-1779503999842-b6debf6db50b?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        customizable: true,
        options: [
            {
                title: 'Selecciona el Tamaño',
                type: 'radio',
                name: 'size',
                choices: [
                    { name: 'Individual (Aprox. 400g)', price: 0.00, default: true },
                    { name: 'Duo VENCHIN (Para 2 personas)', price: 2.00 },
                    { name: 'Banquete Familiar (Para 4 personas)', price: 7.00 }
                ]
            },
            {
                title: 'Acompañantes',
                type: 'checkbox',
                name: 'extras',
                choices: [
                    { name: 'Porcion de papas', price: 1.50 },
                    { name: 'Lumpias', price: 1.50 },
                    { name: 'Tender de Pollo ', price: 2.50 }
                ]
            }
        ]
    },
    {
        id: 3,
        category: 'arroz',
        name: 'Arroz Chaufa Veggie',
        hidden: true,
        desc: 'Sabor saludable y lleno de umami. Arroz salteado al wok con champiñones laminados, brócoli crujiente, pimentón dulce, cebollín y brotes de soya orgánicos.',
        price: 5.49,
        img: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=400&fit=crop&q=80',
        customizable: true,
        options: [
            {
                title: 'Selecciona el Tamaño',
                type: 'radio',
                name: 'size',
                choices: [
                    { name: 'Individual', price: 0.00, default: true },
                    { name: 'Familiar', price: 3.00 }
                ]
            },
            {
                title: 'Ingredientes Extra',
                type: 'checkbox',
                name: 'extras',
                choices: [
                    { name: 'Champiñones Extras', price: 1.20 },
                    { name: 'Tofu Frito', price: 1.50 }
                ]
            }
        ]
    },
    {
        id: 4,
        category: 'combos',
        name: 'Combo Dúo VENCHIN',
        desc: 'Ideal para parejas. 2 Arroces VENCHIN (duo) + Refresco de 1L.',
        price: 10.00,
        img: 'https://images.unsplash.com/photo-1779503616083-480ca440cbe4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        customizable: true,
        options: [
            {
                title: 'Elige tu Refresco',
                type: 'radio',
                name: 'drink',
                choices: [
                    { name: 'Coca Negra 1L', price: 0.00, default: true },
                    { name: 'Limon 1L', price: 0.00 }
                ]
            },
            {
                title: '¿Deseas agregar algo extra?',
                type: 'checkbox',
                name: 'extras',
                choices: [
                    { name: 'Adicion de Pollo', price: 2.00 },
                    { name: '2 Lumpias adicionales', price: 3.00 },
                    { name: 'Tender de pollo', price: 3.00 }
                ]
            }
        ]
    },
    {
        id: 5,
        category: 'combos',
        name: 'Combo X4 VENCHIN',
        desc: 'Un plan para varios. 4 Arroces VENCHIN (Individuales).',
        price: 10.00,
        img: 'https://images.unsplash.com/photo-1779503972150-f7b3831701ab?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        customizable: true,
        options: [
            {
                title: '¿Deseas agregar algo extra?',
                type: 'checkbox',
                name: 'extras',
                choices: [
                    { name: 'Adicion de Pollo', price: 2.00 },
                    { name: '2 Lumpias adicionales', price: 3.00 },
                    { name: 'Tender de pollo', price: 3.00 }
                ]
            }
        ]
    },
    {
        id: 6,
        category: 'entradas',
        name: 'Lumpias de Vegetales (2 unidades)',
        desc: 'Rollitos crujientes rellenos de repollo y zanahoria sazonados con especias asiáticas y fritos a la perfección. Acompañados de salsa agridulce casera.',
        price: 2.99,
        img: 'https://images.unsplash.com/photo-1606525437817-0055b7982efb?w=600&h=400&fit=crop&q=80',
        customizable: false
    },
    {
        id: 7,
        category: 'entradas',
        name: 'Wantón Frito Crujiente (6 unidades)',
        desc: 'Láminas finas de masa crocante rellenas de carne de cerdo marinada con un toque de jengibre y ajo, fritas al momento. Incluye salsa agridulce.',
        price: 3.49,
        img: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&h=400&fit=crop&q=80',
        customizable: false
    },
    {
        id: 8,
        category: 'bebidas',
        name: 'Té Frío con Limón Artesanal',
        hidden: true,
        desc: 'Infusión helada de té negro premium hecha en casa con limones frescos seleccionados y el dulzor justo. Refrescante e ideal para acompañar el wok.',
        price: 1.50,
        img: 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=400&fit=crop&q=80',
        customizable: false
    },
    {
        id: 9,
        category: 'bebidas',
        name: 'Refresco GLUP! (1 Litro)',
        desc: 'Refresco Glup de 1 Litro frio.',
        price: 1.00,
        img: 'https://images.unsplash.com/photo-1779502691963-1f2c502d4a0d?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        customizable: true,
        options: [
            {
                title: 'Elige el Sabor',
                type: 'radio',
                name: 'flavor',
                choices: [
                    { name: 'Cola Negra', price: 0.00, default: true },
                    { name: 'Limón', price: 0.00 }
                ]
            }
        ]
    }
];

// ==================== ESTADO GLOBAL DE LA APLICACIÓN ====================
let cart = [];
let currentCategory = 'arroz';
let currentProduct = null;
let currentModalQty = 1;

// ==================== ELEMENTOS DEL DOM ====================
function setSafeHtml(element, html) {
    element.textContent = '';
    element.insertAdjacentHTML('beforeend', html);
}

function validatePrice(price) {
    const num = Number(price);
    if (isNaN(num) || num < 0 || num > 10000) return 0;
    return parseFloat(num.toFixed(2));
}

function escapeHtml(text) {
    if (typeof text !== 'string') text = String(text || '');
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function sanitizeForWhatsApp(text) {
    if (typeof text !== 'string') return '';
    return text.replace(/[_*[\]]/g, '\\$&');
}

const DOM = {
    navCategorias: document.getElementById('navCategorias'),
    cuadriculaProductos: document.getElementById('cuadriculaProductos'),
    insigniaCarrito: document.getElementById('insigniaCarrito'),
    vistaPreviaTotalCarrito: document.getElementById('vistaPreviaTotalCarrito'),
    cajonCarrito: document.getElementById('cajonCarrito'),
    superposicionCajon: document.getElementById('superposicionCajon'),
    cuerpoCajonCarrito: document.getElementById('cuerpoCajonCarrito'),
    subtotalCarrito: document.getElementById('subtotalCarrito'),
    totalCarrito: document.getElementById('totalCarrito'),
    btnConfirmarWhatsApp: document.getElementById('btnConfirmarWhatsApp'),
    superposicionModalPersonalizador: document.getElementById('superposicionModalPersonalizador'),
    modalPersonalizador: document.getElementById('modalPersonalizador'),
    imgProductoModal: document.getElementById('imgProductoModal'),
    categoriaProductoModal: document.getElementById('categoriaProductoModal'),
    tituloProductoModal: document.getElementById('tituloProductoModal'),
    descProductoModal: document.getElementById('descProductoModal'),
    opcionesDinamicasPersonalizador: document.getElementById('opcionesDinamicasPersonalizador'),
    notasEspecialesModal: document.getElementById('notasEspecialesModal'),
    pantallaCantModal: document.getElementById('pantallaCantModal'),
    pantallaPrecioTotalModal: document.getElementById('pantallaPrecioTotalModal'),
    btnModalAgregarCarrito: document.getElementById('btnModalAgregarCarrito'),
    anioActual: document.getElementById('anioActual'),
    cabeceraPrincipal: document.getElementById('cabeceraPrincipal'),
    insigniasCabecera: document.getElementById('insigniasCabecera'),
    contenedorPrincipal: document.getElementById('contenedorPrincipal')
};

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    // Configurar año en el footer
    if (DOM.anioActual) {
        DOM.anioActual.textContent = new Date().getFullYear();
    }

    // Escuchar scroll para reducir el header (efectos visuales premium)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            DOM.cabeceraPrincipal.classList.add('scrolled');
        } else {
            DOM.cabeceraPrincipal.classList.remove('scrolled');
        }
    });

    renderCategories();
    renderProducts();
    updateCartUI();

    // Inicializar y actualizar el estado de horario comercial
    updateStoreStatus();
    // Actualización automática en tiempo real cada 30 segundos
    setInterval(updateStoreStatus, 30000);
});

// ==================== CONTROL DE HORARIO COMERCIAL ====================
// Martes a Domingo: 12:00 PM (mediodía) a 11:00 PM (noche). Lunes cerrado.
function getStoreStatus() {
    const now = new Date();
    const day = now.getDay(); // 0 = Domingo, 1 = Lunes, 2 = Martes, etc.
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Si es Lunes, está cerrado
    if (day === 1) {
        return {
            isOpen: false,
            message: 'Los lunes estamos cerrados por descanso del personal comercial.',
            nextOpening: 'Abrimos el martes a las 12:00 PM'
        };
    }

    const timeInMinutes = hours * 60 + minutes;
    const openTime = 12 * 60; // 12:00 PM
    const closeTime = 23 * 60; // 11:00 PM

    if (timeInMinutes >= openTime && timeInMinutes < closeTime) {
        return {
            isOpen: true
        };
    } else {
        let message = '';
        let nextOpening = '';

        if (timeInMinutes < openTime) {
            message = 'El local se encuentra cerrado actualmente.';
            nextOpening = 'Abrimos hoy a las 12:00 PM';
        } else {
            message = 'El local ya ha cerrado sus operaciones por hoy.';
            if (day === 0) {
                // Domingo por la noche, abrimos el Martes
                nextOpening = 'Abrimos el martes a las 12:00 PM';
            } else {
                nextOpening = 'Abrimos mañana a las 12:00 PM';
            }
        }

        return {
            isOpen: false,
            message,
            nextOpening
        };
    }
}

// ==================== ACTUALIZAR ESTADO DE LA TIENDA ====================
function updateStoreStatus() {
    const status = getStoreStatus();

    // 1. Actualizar el Badge del Header
    if (DOM.insigniasCabecera) {
        const safeMessage = escapeHtml(status.message);
        const safeNextOpening = escapeHtml(status.nextOpening);
        if (status.isOpen) {
            setSafeHtml(DOM.insigniasCabecera, `<div class="insignia estado-abierto"><span class="punto-pulso"></span> Abierto Ahora</div>`);
        } else {
            setSafeHtml(DOM.insigniasCabecera, `<div class="insignia estado-cerrado"><span class="punto-pulso-rojo"></span> Cerrado Ahora</div>`);
        }
    }

    // 2. Mostrar/Ocultar Banner de Cerrado en el contenedorPrincipal
    let closedBanner = document.getElementById('closedBanner');
    if (!status.isOpen) {
        if (!closedBanner && DOM.contenedorPrincipal) {
            closedBanner = document.createElement('div');
            closedBanner.id = 'closedBanner';
            closedBanner.className = 'banner-cerrado';

            // Insertar al inicio de contenedorPrincipal
            DOM.contenedorPrincipal.insertBefore(closedBanner, DOM.contenedorPrincipal.firstChild);
        }

        if (closedBanner) {
            setSafeHtml(closedBanner, `<div class="icono-banner-cerrado"><i class="fa-solid fa-clock"></i></div><div class="contenido-banner-cerrado"><span class="titulo-banner-cerrado">Estamos fuera de horario comercial</span><span class="desc-banner-cerrado">Nuestro horario de atención al público es de <strong>Martes a Domingo de 12:00 PM a 11:00 PM</strong>. Puedes seguir planificando y estructurando tu pedido y enviarlo por WhatsApp; lo procesaremos con prioridad tan pronto abramos el local.<br><span style="opacity: 0.85; display: inline-block; margin-top: 4px;"><i class="fa-solid fa-circle-info"></i> Estado actual: ${escapeHtml(status.message)} ${escapeHtml(status.nextOpening)}.</span></span></div>`);
        }
    } else {
        if (closedBanner) {
            closedBanner.remove();
        }
    }

    // 3. Actualizar la interfaz del carrito para incluir aviso de horario
    updateCartClosedWarning(status.isOpen, status.nextOpening);
}

// ==================== ACTUALIZAR ADVERTENCIA DE CARRITO CERRADO ====================
function updateCartClosedWarning(isOpen, nextOpening) {
    const cartFooter = document.querySelector('.pie-cajon');
    if (!cartFooter) return;

    let closedNotice = document.getElementById('cartClosedNotice');

    if (!isOpen && cart.length > 0) {
        if (!closedNotice) {
            closedNotice = document.createElement('div');
            closedNotice.id = 'cartClosedNotice';
            closedNotice.className = 'aviso-carrito-cerrado';

            // Insertar arriba del botón de confirmar pedido
            if (DOM.btnConfirmarWhatsApp) {
                cartFooter.insertBefore(closedNotice, DOM.btnConfirmarWhatsApp);
            } else {
                cartFooter.appendChild(closedNotice);
            }
        }

        closedNotice.innerHTML = `
            <i class="fa-solid fa-clock texto-dorado"></i>
            <div>
                <strong>Nota de Horario:</strong> Actualmente estamos fuera de servicio. Puedes enviar tu pedido y lo procesaremos con prioridad al abrir (${nextOpening}).
            </div>`;
    } else {
        if (closedNotice) {
            closedNotice.remove();
        }
    }
}

// ==================== RENDERIZAR CATEGORÍAS ====================
function renderCategories() {
    DOM.navCategorias.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const activeClass = cat.id === currentCategory ? 'active' : '';
        const button = document.createElement('button');
        button.className = `pestana-categoria ${activeClass}`;
        button.setAttribute('data-id', cat.id);
        button.onclick = () => selectCategory(cat.id);
        button.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.name}`;
        DOM.navCategorias.appendChild(button);
    });
}

function selectCategory(catId) {
    currentCategory = catId;

    // Actualizar tabs activas
    const tabs = DOM.navCategorias.querySelectorAll('.pestana-categoria');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-id') === catId) {
            tab.classList.add('activo');
        } else {
            tab.classList.remove('activo');
        }
    });

    // Transición suave de los productos
    DOM.cuadriculaProductos.style.opacity = '0';
    DOM.cuadriculaProductos.style.transform = 'translateY(10px)';

    setTimeout(() => {
        renderProducts();
        DOM.cuadriculaProductos.style.opacity = '1';
        DOM.cuadriculaProductos.style.transform = 'translateY(0)';
    }, 200);
}

// ==================== RENDERIZAR PRODUCTOS ====================
function renderProducts() {
    DOM.cuadriculaProductos.innerHTML = '';

    const filteredProducts = PRODUCTS.filter(p => p.category === currentCategory && !p.hidden);

    if (filteredProducts.length === 0) {
        DOM.cuadriculaProductos.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-face-smile-wink"></i>
                <p>Próximamente más sorpresas en esta sección...</p>
            </div>`;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('article');
        productCard.className = 'tarjeta-producto';

        // Obtener insignia text
        const catObj = CATEGORIES.find(c => c.id === product.category);
        const categoryBadgeText = catObj ? catObj.name : '';

        // Comprobar si está en el carrito para mostrar el control de cantidad básico
        const cartQty = getProductQuantityInCart(product.id);
        const hasQty = cartQty > 0;

        let actionButtonHTML = '';
        if (product.customizable) {
            actionButtonHTML = `
                <button class="btn-accion-agregar" onclick="openCustomizer(${product.id})">
                    <i class="fa-solid fa-sliders"></i> Personalizar
                </button>`;
        } else {
            if (hasQty) {
                actionButtonHTML = `
                    <div class="control-cant-tarjeta">
                        <button class="btn-cant-tarjeta" onclick="updateSimpleQty(${product.id}, -1)">−</button>
                        <span class="pantalla-cant-tarjeta">${cartQty}</span>
                        <button class="btn-cant-tarjeta" onclick="updateSimpleQty(${product.id}, 1)">+</button>
                    </div>`;
            } else {
                actionButtonHTML = `
                    <button class="btn-accion-agregar" onclick="addSimpleProduct(${product.id})">
                        <i class="fa-solid fa-plus"></i> Agregar
                    </button>`;
            }
        }

        productCard.innerHTML = `
            <div class="contenedor-img">
                <img src="${product.img}" alt="${product.name}" class="img-producto" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80';">
                <span class="superposicion-insignia">${categoryBadgeText}</span>
            </div>
            <div class="detalles-producto">
                <h3 class="titulo-producto">${product.name}</h3>
                <p class="desc-producto">${product.desc}</p>
                <div class="pie-tarjeta">
                    <div class="caja-precio">
                        <span class="etiqueta-precio">Desde</span>
                        <span class="valor-precio">${CONFIG.currency}${product.price.toFixed(2)}</span>
                    </div>
                    <div class="action-box">
                        ${actionButtonHTML}
                    </div>
                </div>
            </div>
        `;

        DOM.cuadriculaProductos.appendChild(productCard);
    });
}

// ==================== SISTEMA DE CARRITO (MÉTODOS BÁSICOS) ====================
function addSimpleProduct(prodId) {
    const product = PRODUCTS.find(p => p.id === prodId);
    if (!product) return;

    // Crear un item de carrito estándar sin personalizaciones
    const cartItemId = `simple-${prodId}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += 1;
    } else {
        cart.push({
            cartItemId,
            id: product.id,
            name: product.name,
            img: product.img,
            basePrice: product.price,
            totalUnitPrice: product.price,
            qty: 1,
            customizations: [],
            notes: ''
        });
    }

    triggerCartBadgeBounce();
    updateCartUI();
    renderProducts(); // Actualizar el botón de la tarjeta
}

function updateSimpleQty(prodId, delta) {
    const cartItemId = `simple-${prodId}`;
    const index = cart.findIndex(item => item.cartItemId === cartItemId);

    if (index > -1) {
        cart[index].qty += delta;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
        renderProducts();
    }
}

function getProductQuantityInCart(prodId) {
    // Para productos simples sumamos su cantidad en el carrito
    return cart
        .filter(item => item.id === prodId && item.cartItemId.startsWith('simple-'))
        .reduce((sum, item) => sum + item.qty, 0);
}

// ==================== MODAL DE PERSONALIZACIÓN ====================
function openCustomizer(prodId) {
    const product = PRODUCTS.find(p => p.id === prodId);
    if (!product) return;

    currentProduct = product;
    currentModalQty = 1;

    // Cargar contenido en el modal
    DOM.imgProductoModal.src = product.img;
    DOM.imgProductoModal.onerror = () => {
        DOM.imgProductoModal.src = 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80';
    };

    const catObj = CATEGORIES.find(c => c.id === product.category);
    DOM.categoriaProductoModal.textContent = catObj ? catObj.name : 'ARROZ';
    DOM.tituloProductoModal.textContent = product.name;
    DOM.descProductoModal.textContent = product.desc;
    DOM.notasEspecialesModal.value = '';
    DOM.pantallaCantModal.textContent = currentModalQty;

    // Renderizar opciones dinámicas
    DOM.opcionesDinamicasPersonalizador.innerHTML = '';

    product.options.forEach((opt, optIdx) => {
        const section = document.createElement('div');
        section.className = 'seccion-personalizador';

        const heading = document.createElement('h4');
        heading.className = 'titulo-opcion-seccion';

        let iconHtml = '';
        if (opt.name === 'size') iconHtml = '<i class="fa-solid fa-expand texto-dorado"></i>';
        else if (opt.name === 'extras') iconHtml = '<i class="fa-solid fa-circle-plus texto-dorado"></i>';
        else if (opt.name === 'soya') iconHtml = '<i class="fa-solid fa-droplet texto-dorado"></i>';
        else if (opt.name === 'drink') iconHtml = '<i class="fa-solid fa-beer-mug-empty texto-dorado"></i>';
        else iconHtml = '<i class="fa-solid fa-angle-right texto-dorado"></i>';

        heading.innerHTML = `${iconHtml} ${opt.title}`;
        section.appendChild(heading);

        const sub = document.createElement('p');
        sub.className = 'subtitulo-opcion-seccion';
        sub.textContent = opt.type === 'radio' ? 'Selecciona una sola opción' : 'Puedes seleccionar varias opciones';
        section.appendChild(sub);

        const grid = document.createElement('div');
        grid.className = 'cuadricula-opciones';

        opt.choices.forEach((choice, choiceIdx) => {
            const inputId = `opt-${optIdx}-${choiceIdx}`;
            const input = document.createElement('input');
            input.type = opt.type;
            input.name = `option-${optIdx}`;
            input.id = inputId;
            input.className = 'entrada-pildora-opcion';
            input.value = choiceIdx;

            // Valor por defecto
            if (opt.type === 'radio' && choice.default) {
                input.checked = true;
            }

            // Escuchar cambios para recalcular precio total
            input.onchange = calculateModalPrice;

            const label = document.createElement('label');
            label.className = 'etiqueta-pildora-opcion';
            label.setAttribute('for', inputId);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'nombre-opcion';
            nameSpan.textContent = choice.name;

            const priceSpan = document.createElement('span');
            priceSpan.className = 'precio-opcion';
            priceSpan.textContent = choice.price > 0
                ? `+ ${CONFIG.currency}${choice.price.toFixed(2)}`
                : 'Incluido';

            label.appendChild(nameSpan);
            label.appendChild(priceSpan);

            grid.appendChild(input);
            grid.appendChild(label);
        });

        section.appendChild(grid);
        DOM.opcionesDinamicasPersonalizador.appendChild(section);
    });

    // Mostrar modal
    DOM.superposicionModalPersonalizador.classList.add('visible');
    document.body.style.overflow = 'hidden';

    calculateModalPrice();
}

function calculateModalPrice() {
    if (!currentProduct) return;

    let unitPrice = currentProduct.price;

    // Leer opciones seleccionadas
    if (currentProduct.options) {
        currentProduct.options.forEach((opt, optIdx) => {
            const inputs = document.getElementsByName(`option-${optIdx}`);
            inputs.forEach(input => {
                if (input.checked) {
                    const choiceIdx = parseInt(input.value);
                    const choice = opt.choices[choiceIdx];
                    unitPrice += choice.price;
                }
            });
        });
    }

    const totalPrice = unitPrice * currentModalQty;
    DOM.pantallaPrecioTotalModal.textContent = `${CONFIG.currency}${totalPrice.toFixed(2)}`;
}

function adjustModalQty(delta) {
    currentModalQty += delta;
    if (currentModalQty < 1) currentModalQty = 1;
    DOM.pantallaCantModal.textContent = currentModalQty;
    calculateModalPrice();
}

function addProductFromModal() {
    if (!currentProduct) return;

    let selectedCustomizations = [];
    let extraCost = 0;

    // Recopilar selecciones
    if (currentProduct.options) {
        currentProduct.options.forEach((opt, optIdx) => {
            const inputs = document.getElementsByName(`option-${optIdx}`);
            inputs.forEach(input => {
                if (input.checked) {
                    const choiceIdx = parseInt(input.value);
                    const choice = opt.choices[choiceIdx];
                    if (choice.price > 0 || opt.name === 'size' || opt.name === 'soya' || opt.name === 'drink' || opt.name === 'flavor') {
                        selectedCustomizations.push({
                            optionTitle: opt.title,
                            optionName: opt.name,
                            choiceName: choice.name,
                            price: choice.price
                        });
                        extraCost += choice.price;
                    }
                }
            });
        });
    }

    const unitPrice = currentProduct.price + extraCost;
    const specialNotes = DOM.notasEspecialesModal.value.trim();

    // Crear una clave única de combinación para identificar si ya existe exactamente el mismo producto personalizado
    const customKeyDetails = selectedCustomizations.map(c => `${c.optionName}:${c.choiceName}`).sort().join('|');
    const cartItemId = `custom-${currentProduct.id}-${customKeyDetails}-${specialNotes}`;

    const existingIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
        cart[existingIndex].qty += currentModalQty;
    } else {
        cart.push({
            cartItemId,
            id: currentProduct.id,
            name: currentProduct.name,
            img: currentProduct.img,
            basePrice: currentProduct.price,
            totalUnitPrice: unitPrice,
            qty: currentModalQty,
            customizations: selectedCustomizations,
            notes: specialNotes
        });
    }

    closeCustomizerModalDirect();
    triggerCartBadgeBounce();
    updateCartUI();
    toggleCartDrawer(true);
}

function closeCustomizerModal(event) {
    // Cerrar si hace clic en el superposicion exterior
    if (event.target === DOM.superposicionModalPersonalizador) {
        closeCustomizerModalDirect();
    }
}

function closeCustomizerModalDirect() {
    DOM.superposicionModalPersonalizador.classList.remove('visible');
    document.body.style.overflow = '';
    currentProduct = null;
}

// ==================== INTERACCIONES DEL PANEL DEL CARRITO ====================
function toggleCartDrawer(open) {
    if (open) {
        DOM.cajonCarrito.classList.add('abierto');
        DOM.superposicionCajon.classList.add('visible');
        if (window.innerWidth <= 576) {
            document.body.style.overflow = 'hidden';
            document.body.classList.add('desbordamiento-oculto');
        }
    } else {
        DOM.cajonCarrito.classList.remove('abierto');
        DOM.superposicionCajon.classList.remove('visible');
        document.body.style.overflow = '';
        document.body.classList.remove('desbordamiento-oculto');
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotalPrice = cart.reduce((sum, item) => sum + (item.totalUnitPrice * item.qty), 0);

    // Actualizar insignia flotante
    DOM.insigniaCarrito.textContent = totalItems;
    if (totalItems > 0) {
        DOM.insigniaCarrito.classList.remove('vacio');
    } else {
        DOM.insigniaCarrito.classList.add('vacio');
    }

    DOM.vistaPreviaTotalCarrito.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;

    // Renderizar items del carrito
    DOM.cuerpoCajonCarrito.innerHTML = '';

    if (cart.length === 0) {
        DOM.cuerpoCajonCarrito.innerHTML = `
            <div class="estado-carrito-vacio">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Tu carrito de compras está vacío</p>
                <span>¡El Wok te espera! Elige tus combinaciones y dale sabor a tu día.</span>
            </div>`;
        DOM.subtotalCarrito.textContent = `${CONFIG.currency}0.00`;
        DOM.totalCarrito.textContent = `${CONFIG.currency}0.00`;
        DOM.btnConfirmarWhatsApp.disabled = true;

        // Remover el aviso de cerrado si existe
        const closedNotice = document.getElementById('cartClosedNotice');
        if (closedNotice) {
            closedNotice.remove();
        }
        return;
    }

    DOM.btnConfirmarWhatsApp.disabled = false;

    // Actualizar aviso de cerrado en el carrito si aplica
    const status = getStoreStatus();
    updateCartClosedWarning(status.isOpen, status.nextOpening);

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item-carrito';

        // Formatear texto de personalizaciones
        let customizationsText = '';
        if (item.customizations && item.customizations.length > 0) {
            customizationsText = item.customizations.map(c => {
                const priceText = c.price > 0 ? ` (+${CONFIG.currency}${c.price.toFixed(2)})` : '';
                return `${c.choiceName}${priceText}`;
            }).join(', ');
        }

        if (item.notes) {
            customizationsText += customizationsText ? ` | Nota: "${item.notes}"` : `Nota: "${item.notes}"`;
        }

        itemDiv.innerHTML = `
            <img src="${escapeHtml(item.img)}" alt="${escapeHtml(item.name)}" class="img-item-carrito" onerror="this.src='https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop&q=80';">
            <div class="detalles-item-carrito">
                <h4 class="nombre-item-carrito">${escapeHtml(item.name)}</h4>
                <p class="personalizaciones-item-carrito">${escapeHtml(customizationsText) || 'Sin extras'}</p>
                <div class="pie-item-carrito">
                    <span class="precio-item-carrito">${CONFIG.currency}${(item.totalUnitPrice * item.qty).toFixed(2)}</span>
                    <div class="envoltura-control-cant">
                        <button class="btn-cant-pq" onclick="adjustCartItemQty(${index}, -1)">−</button>
                        <span class="pantalla-cant-pq">${item.qty}</span>
                        <button class="btn-cant-pq" onclick="adjustCartItemQty(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="btn-eliminar-item" onclick="removeCartItem(${index})" aria-label="Eliminar platillo"><i class="fa-solid fa-trash-can"></i></button>
        `;

        DOM.cuerpoCajonCarrito.appendChild(itemDiv);
    });

    DOM.subtotalCarrito.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;
    DOM.totalCarrito.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;
}

function adjustCartItemQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartUI();
    renderProducts();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderProducts();
}

function triggerCartBadgeBounce() {
    DOM.insigniaCarrito.classList.remove('rebote');
    void DOM.insigniaCarrito.offsetWidth; // Truco de reflow para reiniciar animación
    DOM.insigniaCarrito.classList.add('rebote');
}

// ==================== GENERAR PEDIDO POR WHATSAPP ====================
function sendOrderToWhatsApp() {
    if (cart.length === 0) return;

    const subtotalPrice = cart.reduce((sum, item) => sum + (item.totalUnitPrice * item.qty), 0);

    let message = `🥢 *PEDIDO - ${CONFIG.storeName}* 🥢\n`;
    message += `===============================\n\n`;

    cart.forEach((item, idx) => {
        const safeName = sanitizeForWhatsApp(item.name);
        message += `*${item.qty}x ${safeName}*\n`;
        message += `   • Precio Unit: ${CONFIG.currency}${item.totalUnitPrice.toFixed(2)}\n`;

        if (item.customizations && item.customizations.length > 0) {
            item.customizations.forEach(c => {
                const safeChoiceName = sanitizeForWhatsApp(c.choiceName);
                const addPrice = c.price > 0 ? ` (+${CONFIG.currency}${c.price.toFixed(2)})` : '';
                message += `   • _${safeChoiceName}_${addPrice}\n`;
            });
        }

        if (item.notes) {
            const safeNotes = sanitizeForWhatsApp(item.notes);
            message += `   • 📝 _Nota:_ "${safeNotes}"\n`;
        }

        message += `   👉 *Subtotal:* ${CONFIG.currency}${(item.totalUnitPrice * item.qty).toFixed(2)}\n\n`;
    });

    message += `===============================\n`;
    message += `💰 *TOTAL A PAGAR:* *${CONFIG.currency}${subtotalPrice.toFixed(2)}*\n\n`;
    message += `📍 *DATOS DE ENTREGA Y PAGO:*\n`;
    message += `   • *Nombre:* \n`;
    message += `   • *Dirección de envío:* \n`;
    message += `   • *Método de pago:* (Pago Móvil / Efectivo)\n\n`;
    message += `💡 _Por favor, rellene sus datos arriba y le confirmaremos su pedido de inmediato._`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CONFIG.whatsappNumber}&text=${encodedMessage}`;

    const newWindow = window.abierto(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.abiertoer = null;
}
