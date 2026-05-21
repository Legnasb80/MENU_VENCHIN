// ==================== CONFIGURACIÓN DEL NEGOCIO ====================
const CONFIG = {
    whatsappNumber: '584120265275', // Reemplazar con el número real (código de país + número, sin + ni espacios)
    currency: '$',
    storeName: 'RICE & WOK'
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
        img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80',
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
        img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop&q=80',
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
        img: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=400&fit=crop&q=80',
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
        img: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&h=400&fit=crop&q=80',
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
const DOM = {
    categoriesNav: document.getElementById('categoriesNav'),
    productsGrid: document.getElementById('productsGrid'),
    cartBadge: document.getElementById('cartBadge'),
    cartTotalPreview: document.getElementById('cartTotalPreview'),
    cartDrawer: document.getElementById('cartDrawer'),
    drawerOverlay: document.getElementById('drawerOverlay'),
    cartDrawerBody: document.getElementById('cartDrawerBody'),
    cartSubtotal: document.getElementById('cartSubtotal'),
    cartTotal: document.getElementById('cartTotal'),
    btnConfirmWhatsApp: document.getElementById('btnConfirmWhatsApp'),
    customizerModalOverlay: document.getElementById('customizerModalOverlay'),
    customizerModal: document.getElementById('customizerModal'),
    modalProductImg: document.getElementById('modalProductImg'),
    modalProductCategory: document.getElementById('modalProductCategory'),
    modalProductTitle: document.getElementById('modalProductTitle'),
    modalProductDesc: document.getElementById('modalProductDesc'),
    dynamicCustomizerOptions: document.getElementById('dynamicCustomizerOptions'),
    modalSpecialNotes: document.getElementById('modalSpecialNotes'),
    modalQtyDisplay: document.getElementById('modalQtyDisplay'),
    modalTotalPriceDisplay: document.getElementById('modalTotalPriceDisplay'),
    btnModalAddToCart: document.getElementById('btnModalAddToCart'),
    currentYear: document.getElementById('currentYear'),
    mainHeader: document.getElementById('mainHeader'),
    headerBadges: document.getElementById('headerBadges'),
    mainContainer: document.getElementById('mainContainer')
};

// ==================== INICIALIZACIÓN ====================
document.addEventListener('DOMContentLoaded', () => {
    // Configurar año en el footer
    if (DOM.currentYear) {
        DOM.currentYear.textContent = new Date().getFullYear();
    }

    // Escuchar scroll para reducir el header (efectos visuales premium)
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            DOM.mainHeader.classList.add('scrolled');
        } else {
            DOM.mainHeader.classList.remove('scrolled');
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
    if (DOM.headerBadges) {
        if (status.isOpen) {
            DOM.headerBadges.innerHTML = `
                <div class="badge status-open">
                    <span class="pulse-dot"></span>
                    Abierto Ahora
                </div>`;
        } else {
            DOM.headerBadges.innerHTML = `
                <div class="badge status-closed">
                    <span class="pulse-dot-red"></span>
                    Cerrado Ahora
                </div>`;
        }
    }

    // 2. Mostrar/Ocultar Banner de Cerrado en el mainContainer
    let closedBanner = document.getElementById('closedBanner');
    if (!status.isOpen) {
        if (!closedBanner && DOM.mainContainer) {
            closedBanner = document.createElement('div');
            closedBanner.id = 'closedBanner';
            closedBanner.className = 'closed-banner';

            // Insertar al inicio de mainContainer
            DOM.mainContainer.insertBefore(closedBanner, DOM.mainContainer.firstChild);
        }

        if (closedBanner) {
            closedBanner.innerHTML = `
                <div class="closed-banner-icon">
                    <i class="fa-solid fa-clock"></i>
                </div>
                <div class="closed-banner-content">
                    <span class="closed-banner-title">Estamos fuera de horario comercial</span>
                    <span class="closed-banner-desc">
                        Nuestro horario de atención al público es de <strong>Martes a Domingo de 12:00 PM a 11:00 PM</strong>.
                        Puedes seguir planificando y estructurando tu pedido y enviarlo por WhatsApp; lo procesaremos con prioridad tan pronto abramos el local.
                        <br><span style="opacity: 0.85; display: inline-block; margin-top: 4px;"><i class="fa-solid fa-circle-info"></i> Estado actual: ${status.message} ${status.nextOpening}.</span>
                    </span>
                </div>`;
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
    const cartFooter = document.querySelector('.drawer-footer');
    if (!cartFooter) return;

    let closedNotice = document.getElementById('cartClosedNotice');

    if (!isOpen && cart.length > 0) {
        if (!closedNotice) {
            closedNotice = document.createElement('div');
            closedNotice.id = 'cartClosedNotice';
            closedNotice.className = 'cart-closed-notice';

            // Insertar arriba del botón de confirmar pedido
            if (DOM.btnConfirmWhatsApp) {
                cartFooter.insertBefore(closedNotice, DOM.btnConfirmWhatsApp);
            } else {
                cartFooter.appendChild(closedNotice);
            }
        }

        closedNotice.innerHTML = `
            <i class="fa-solid fa-clock text-gold"></i>
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
    DOM.categoriesNav.innerHTML = '';
    CATEGORIES.forEach(cat => {
        const activeClass = cat.id === currentCategory ? 'active' : '';
        const button = document.createElement('button');
        button.className = `category-tab ${activeClass}`;
        button.setAttribute('data-id', cat.id);
        button.onclick = () => selectCategory(cat.id);
        button.innerHTML = `<i class="fa-solid ${cat.icon}"></i> ${cat.name}`;
        DOM.categoriesNav.appendChild(button);
    });
}

function selectCategory(catId) {
    currentCategory = catId;

    // Actualizar tabs activas
    const tabs = DOM.categoriesNav.querySelectorAll('.category-tab');
    tabs.forEach(tab => {
        if (tab.getAttribute('data-id') === catId) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });

    // Transición suave de los productos
    DOM.productsGrid.style.opacity = '0';
    DOM.productsGrid.style.transform = 'translateY(10px)';

    setTimeout(() => {
        renderProducts();
        DOM.productsGrid.style.opacity = '1';
        DOM.productsGrid.style.transform = 'translateY(0)';
    }, 200);
}

// ==================== RENDERIZAR PRODUCTOS ====================
function renderProducts() {
    DOM.productsGrid.innerHTML = '';

    const filteredProducts = PRODUCTS.filter(p => p.category === currentCategory && !p.hidden);

    if (filteredProducts.length === 0) {
        DOM.productsGrid.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-face-smile-wink"></i>
                <p>Próximamente más sorpresas en esta sección...</p>
            </div>`;
        return;
    }

    filteredProducts.forEach(product => {
        const productCard = document.createElement('article');
        productCard.className = 'product-card';

        // Obtener badge text
        const catObj = CATEGORIES.find(c => c.id === product.category);
        const categoryBadgeText = catObj ? catObj.name : '';

        // Comprobar si está en el carrito para mostrar el control de cantidad básico
        const cartQty = getProductQuantityInCart(product.id);
        const hasQty = cartQty > 0;

        let actionButtonHTML = '';
        if (product.customizable) {
            actionButtonHTML = `
                <button class="btn-add-action" onclick="openCustomizer(${product.id})">
                    <i class="fa-solid fa-sliders"></i> Personalizar
                </button>`;
        } else {
            if (hasQty) {
                actionButtonHTML = `
                    <div class="card-qty-control">
                        <button class="card-qty-btn" onclick="updateSimpleQty(${product.id}, -1)">−</button>
                        <span class="card-qty-display">${cartQty}</span>
                        <button class="card-qty-btn" onclick="updateSimpleQty(${product.id}, 1)">+</button>
                    </div>`;
            } else {
                actionButtonHTML = `
                    <button class="btn-add-action" onclick="addSimpleProduct(${product.id})">
                        <i class="fa-solid fa-plus"></i> Agregar
                    </button>`;
            }
        }

        productCard.innerHTML = `
            <div class="img-container">
                <img src="${product.img}" alt="${product.name}" class="product-img" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80';">
                <span class="badge-overlay">${categoryBadgeText}</span>
            </div>
            <div class="product-details">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="card-footer">
                    <div class="price-box">
                        <span class="price-label">Desde</span>
                        <span class="price-value">${CONFIG.currency}${product.price.toFixed(2)}</span>
                    </div>
                    <div class="action-box">
                        ${actionButtonHTML}
                    </div>
                </div>
            </div>
        `;

        DOM.productsGrid.appendChild(productCard);
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
    DOM.modalProductImg.src = product.img;
    DOM.modalProductImg.onerror = () => {
        DOM.modalProductImg.src = 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&h=400&fit=crop&q=80';
    };

    const catObj = CATEGORIES.find(c => c.id === product.category);
    DOM.modalProductCategory.textContent = catObj ? catObj.name : 'ARROZ';
    DOM.modalProductTitle.textContent = product.name;
    DOM.modalProductDesc.textContent = product.desc;
    DOM.modalSpecialNotes.value = '';
    DOM.modalQtyDisplay.textContent = currentModalQty;

    // Renderizar opciones dinámicas
    DOM.dynamicCustomizerOptions.innerHTML = '';

    product.options.forEach((opt, optIdx) => {
        const section = document.createElement('div');
        section.className = 'customizer-section';

        const heading = document.createElement('h4');
        heading.className = 'section-opt-title';

        let iconHtml = '';
        if (opt.name === 'size') iconHtml = '<i class="fa-solid fa-expand text-gold"></i>';
        else if (opt.name === 'extras') iconHtml = '<i class="fa-solid fa-circle-plus text-gold"></i>';
        else if (opt.name === 'soya') iconHtml = '<i class="fa-solid fa-droplet text-gold"></i>';
        else if (opt.name === 'drink') iconHtml = '<i class="fa-solid fa-beer-mug-empty text-gold"></i>';
        else iconHtml = '<i class="fa-solid fa-angle-right text-gold"></i>';

        heading.innerHTML = `${iconHtml} ${opt.title}`;
        section.appendChild(heading);

        const sub = document.createElement('p');
        sub.className = 'section-opt-subtitle';
        sub.textContent = opt.type === 'radio' ? 'Selecciona una sola opción' : 'Puedes seleccionar varias opciones';
        section.appendChild(sub);

        const grid = document.createElement('div');
        grid.className = 'options-grid';

        opt.choices.forEach((choice, choiceIdx) => {
            const inputId = `opt-${optIdx}-${choiceIdx}`;
            const input = document.createElement('input');
            input.type = opt.type;
            input.name = `option-${optIdx}`;
            input.id = inputId;
            input.className = 'option-pill-input';
            input.value = choiceIdx;

            // Valor por defecto
            if (opt.type === 'radio' && choice.default) {
                input.checked = true;
            }

            // Escuchar cambios para recalcular precio total
            input.onchange = calculateModalPrice;

            const label = document.createElement('label');
            label.className = 'option-pill-label';
            label.setAttribute('for', inputId);

            const nameSpan = document.createElement('span');
            nameSpan.className = 'option-name';
            nameSpan.textContent = choice.name;

            const priceSpan = document.createElement('span');
            priceSpan.className = 'option-price';
            priceSpan.textContent = choice.price > 0
                ? `+ ${CONFIG.currency}${choice.price.toFixed(2)}`
                : 'Incluido';

            label.appendChild(nameSpan);
            label.appendChild(priceSpan);

            grid.appendChild(input);
            grid.appendChild(label);
        });

        section.appendChild(grid);
        DOM.dynamicCustomizerOptions.appendChild(section);
    });

    // Mostrar modal
    DOM.customizerModalOverlay.classList.add('visible');
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
    DOM.modalTotalPriceDisplay.textContent = `${CONFIG.currency}${totalPrice.toFixed(2)}`;
}

function adjustModalQty(delta) {
    currentModalQty += delta;
    if (currentModalQty < 1) currentModalQty = 1;
    DOM.modalQtyDisplay.textContent = currentModalQty;
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
    const specialNotes = DOM.modalSpecialNotes.value.trim();

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
    // Cerrar si hace clic en el overlay exterior
    if (event.target === DOM.customizerModalOverlay) {
        closeCustomizerModalDirect();
    }
}

function closeCustomizerModalDirect() {
    DOM.customizerModalOverlay.classList.remove('visible');
    document.body.style.overflow = '';
    currentProduct = null;
}

// ==================== INTERACCIONES DEL PANEL DEL CARRITO ====================
function toggleCartDrawer(open) {
    if (open) {
        DOM.cartDrawer.classList.add('open');
        DOM.drawerOverlay.classList.add('visible');
        document.body.style.overflow = 'hidden';
    } else {
        DOM.cartDrawer.classList.remove('open');
        DOM.drawerOverlay.classList.remove('visible');
        document.body.style.overflow = '';
    }
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const subtotalPrice = cart.reduce((sum, item) => sum + (item.totalUnitPrice * item.qty), 0);

    // Actualizar badge flotante
    DOM.cartBadge.textContent = totalItems;
    if (totalItems > 0) {
        DOM.cartBadge.classList.remove('empty');
    } else {
        DOM.cartBadge.classList.add('empty');
    }

    DOM.cartTotalPreview.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;

    // Renderizar items del carrito
    DOM.cartDrawerBody.innerHTML = '';

    if (cart.length === 0) {
        DOM.cartDrawerBody.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Tu carrito de compras está vacío</p>
                <span>¡El Wok te espera! Elige tus combinaciones y dale sabor a tu día.</span>
            </div>`;
        DOM.cartSubtotal.textContent = `${CONFIG.currency}0.00`;
        DOM.cartTotal.textContent = `${CONFIG.currency}0.00`;
        DOM.btnConfirmWhatsApp.disabled = true;

        // Remover el aviso de cerrado si existe
        const closedNotice = document.getElementById('cartClosedNotice');
        if (closedNotice) {
            closedNotice.remove();
        }
        return;
    }

    DOM.btnConfirmWhatsApp.disabled = false;

    // Actualizar aviso de cerrado en el carrito si aplica
    const status = getStoreStatus();
    updateCartClosedWarning(status.isOpen, status.nextOpening);

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';

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
            <img src="${item.img}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&h=200&fit=crop&q=80';">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-customizations">${customizationsText || 'Sin extras'}</p>
                <div class="cart-item-footer">
                    <span class="cart-item-price">${CONFIG.currency}${(item.totalUnitPrice * item.qty).toFixed(2)}</span>
                    <div class="qty-control-wrapper">
                        <button class="qty-btn-sm" onclick="adjustCartItemQty(${index}, -1)">−</button>
                        <span class="qty-display-sm">${item.qty}</span>
                        <button class="qty-btn-sm" onclick="adjustCartItemQty(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
            <button class="btn-remove-item" onclick="removeCartItem(${index})" aria-label="Eliminar platillo"><i class="fa-solid fa-trash-can"></i></button>
        `;

        DOM.cartDrawerBody.appendChild(itemDiv);
    });

    DOM.cartSubtotal.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;
    DOM.cartTotal.textContent = `${CONFIG.currency}${subtotalPrice.toFixed(2)}`;
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
    DOM.cartBadge.classList.remove('bounce');
    void DOM.cartBadge.offsetWidth; // Truco de reflow para reiniciar animación
    DOM.cartBadge.classList.add('bounce');
}

// ==================== GENERAR PEDIDO POR WHATSAPP ====================
function sendOrderToWhatsApp() {
    if (cart.length === 0) return;

    const subtotalPrice = cart.reduce((sum, item) => sum + (item.totalUnitPrice * item.qty), 0);

    let message = `🥢 *PEDIDO - ${CONFIG.storeName}* 🥢\n`;
    message += `===============================\n\n`;

    cart.forEach((item, idx) => {
        message += `*${item.qty}x ${item.name}*\n`;
        message += `   • Precio Unit: ${CONFIG.currency}${item.totalUnitPrice.toFixed(2)}\n`;

        if (item.customizations && item.customizations.length > 0) {
            item.customizations.forEach(c => {
                const addPrice = c.price > 0 ? ` (+${CONFIG.currency}${c.price.toFixed(2)})` : '';
                message += `   • _${c.choiceName}_${addPrice}\n`;
            });
        }

        if (item.notes) {
            message += `   • 📝 _Nota:_ "${item.notes}"\n`;
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

    // Abrir enlace de WhatsApp en una pestaña nueva
    window.open(whatsappUrl, '_blank');
}
