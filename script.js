// Carta Exacta de "El Huarique D' Jaimito" extraída del Menú
const products = [
  // POLLOS A LA BRASA
  { id: 1, name: "1/8 de Pollo a la Brasa", category: "pollos", price: 8.00, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" },
  { id: 2, name: "1/4 de Pollo a la Brasa", category: "pollos", price: 13.00, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" },
  { id: 3, name: "1 Pollo Entero a la Brasa", category: "pollos", price: 52.00, img: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=500&q=80" },
  { id: 4, name: "Mostrito", category: "pollos", price: 12.00, img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80" },
  { id: 5, name: "Mostro", category: "pollos", price: 15.00, img: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?auto=format&fit=crop&w=500&q=80" },
  { id: 6, name: "Porción de Papa", category: "pollos", price: 9.00, img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=500&q=80" },
  { id: 7, name: "Salchipapa", category: "pollos", price: 9.00, img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=500&q=80" },

  // ESPECIALIDADES
  { id: 8, name: "Chaufa de Pollo", category: "especialidades", price: 12.00, img: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=500&q=80" },
  { id: 9, name: "Lomo Saltado", category: "especialidades", price: 12.00, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },
  { id: 10, name: "Tallarín Saltado", category: "especialidades", price: 12.00, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80" },
  { id: 11, name: "Tallarín Saltado con Lomo Saltado", category: "especialidades", price: 15.00, img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=80" },

  // PARRILLAS
  { id: 12, name: "Pollo a la Plancha", category: "parrillas", price: 15.00, img: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80" },
  { id: 13, name: "Parrilla", category: "parrillas", price: 16.00, img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=80" },
  { id: 14, name: "Parrilla Mixta", category: "parrillas", price: 16.00, img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=80" },

  // MATES
  { id: 15, name: "Café", category: "mates", price: 3.00, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
  { id: 16, name: "Café Pasado", category: "mates", price: 4.00, img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=500&q=80" },
  { id: 17, name: "Té / Manzanilla / Anís", category: "mates", price: 2.00, img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=500&q=80" },

  // REFRESCOS Y GASEOSAS
  { id: 18, name: "1 Jarra de Chicha Morada", category: "refrescos", price: 10.00, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
  { id: 19, name: "1 Jarra de Maracuyá", category: "refrescos", price: 10.00, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
  { id: 20, name: "1 Jarra de Limonada", category: "refrescos", price: 10.00, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
  { id: 21, name: "1/2 Jarra (Chicha / Maracuyá / Limonada)", category: "refrescos", price: 6.00, img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=500&q=80" },
  { id: 22, name: "Gaseosa Personal", category: "refrescos", price: 4.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 23, name: "Gaseosa Fanta Personal", category: "refrescos", price: 3.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 24, name: "Gaseosa Gordita", category: "refrescos", price: 5.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 25, name: "Gaseosa Pirañita", category: "refrescos", price: 2.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 26, name: "Gaseosa 1½ Litros", category: "refrescos", price: 9.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 27, name: "Gaseosa 2½ Litros", category: "refrescos", price: 12.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 28, name: "Gaseosa 3 Litros", category: "refrescos", price: 14.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" },
  { id: 29, name: "Frugos 1.5 Litros", category: "refrescos", price: 7.00, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80" }
];

let cart = [];

// Elementos DOM
const menuGrid = document.getElementById('menuGrid');
const categoryBtns = document.querySelectorAll('.category-btn');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartItemsContainer = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

// Renderizar Productos
function renderProducts(items) {
  menuGrid.innerHTML = items.map(product => `
    <div class="product-card">
      <img src="${product.img}" alt="${product.name}" class="product-img">
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <div class="product-footer">
          <span class="product-price">S/ ${product.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart(${product.id})">Agregar +</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Filtros por Categoría
categoryBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.dataset.category;
    if (category === 'todos') {
      renderProducts(products);
    } else {
      const filtered = products.filter(p => p.category === category);
      renderProducts(filtered);
    }
  });
});

// Lógica de Carrito
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const existing = cart.find(item => item.id === productId);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
  toggleCart(true);
}

function changeQuantity(productId, delta) {
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      cart = cart.filter(p => p.id !== productId);
    }
  }
  updateCart();
}

function updateCart() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  cartCount.textContent = totalCount;
  cartTotal.textContent = `S/ ${totalPrice.toFixed(2)}`;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Tu carrito está vacío 🍗<br><small>Selecciona tus platos de la carta.</small></p>`;
  } else {
    cartItemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div>
          <h4>${item.name}</h4>
          <p>S/ ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
        <div class="cart-controls">
          <button onclick="changeQuantity(${item.id}, -1)">-</button>
          <span>${item.quantity}</span>
          <button onclick="changeQuantity(${item.id}, 1)">+</button>
        </div>
      </div>
    `).join('');
  }
}

function toggleCart(open) {
  if (open) {
    cartDrawer.classList.add('active');
    cartOverlay.classList.add('active');
  } else {
    cartDrawer.classList.remove('active');
    cartOverlay.classList.remove('active');
  }
}

cartToggle.addEventListener('click', () => toggleCart(true));
cartClose.addEventListener('click', () => toggleCart(false));
cartOverlay.addEventListener('click', () => toggleCart(false));

// Enviar mensaje a WhatsApp
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert("Agrega platillos a tu carrito.");
    return;
  }

  let text = "¡Hola! Quisiera hacer un pedido en *EL HUARIQUE D' JAIMITO*:\n\n";
  cart.forEach(item => {
    text += `• *${item.quantity}x* ${item.name} - S/ ${(item.price * item.quantity).toFixed(2)}\n`;
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  text += `\n*TOTAL:* S/ ${total.toFixed(2)}\n\n`;
  text += "📍 *Dirección de Entrega:* (Indica tu dirección exacta en Ahuac)";

  const phone = "51913761155";
  window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
});

// Inicialización
renderProducts(products);