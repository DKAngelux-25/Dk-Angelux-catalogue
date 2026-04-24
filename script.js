let cart = JSON.parse(localStorage.getItem('dk_cart')) || [];

let cart = JSON.parse(localStorage.getItem('dk_cart')) || [];

function displayProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    filtered.forEach(product => grid.appendChild(buildProductCard(product)));
}

function buildProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const mktTag = product.isMarketplace ? '<span class="badge-mkt">Marketplace</span>' : '';
    card.innerHTML = `
        ${mktTag}
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <select id="select-${product.id}" onchange="updatePriceDisplay(${product.id})">
            ${product.options.map((opt, i) => `<option value="${i}">${opt.type} (${opt.unit})</option>`).join('')}
        </select>
        <p class="price"><span id="price-${product.id}">${product.options[0].price}</span> FCFA</p>
        <input type="number" id="qty-${product.id}" value="1" min="1" class="qty-input">
        <button onclick="addToCart(${product.id})">
            <i class="fas fa-cart-plus"></i> Ajouter
        </button>
    `;
    return card;
}

function updatePriceDisplay(id) {
    const product = products.find(p => p.id === id);
    const select = document.getElementById(`select-${id}`);
    const priceSpan = document.getElementById(`price-${id}`);
    if (product && select && priceSpan) {
        priceSpan.innerText = product.options[select.value].price;
    }
}

function addToCart(id) {
    const product = products.find(p => p.id === id);
    const select = document.getElementById(`select-${id}`);
    const qtyInput = document.getElementById(`qty-${id}`);
    if (!product || !select) return;
    const selectedOption = product.options[select.value];
    const quantity = parseInt(qtyInput ? qtyInput.value : 1) || 1;
    cart.push({ name: product.name, type: selectedOption.type, price: selectedOption.price, qty: quantity });
    saveCart();
    updateCartHeader();
    const btn = select.closest('.product-card').querySelector('button');
    if (btn) {
        const original = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-check"></i> Ajouté !';
        btn.style.background = '#25D366';
        setTimeout(() => { btn.innerHTML = original; btn.style.background = ''; }, 1200);
    }
}

function filterCategory(cat) {
    const promoCarousel = document.querySelector('.carousel-container');
    if (promoCarousel) promoCarousel.style.display = 'none';
    document.getElementById('category-header').innerHTML = `
        <div class="category-banner-wrapper">
            <img src="images/banner-${cat}.webp" alt="Rayon ${cat}">
            <button onclick="resetHome()" class="btn-back">← Retour à l'accueil</button>
        </div>`;
    displayProducts(cat);
}

function resetHome() {
    const promoCarousel = document.querySelector('.carousel-container');
    if (promoCarousel) promoCarousel.style.display = 'block';
    document.getElementById('category-header').innerHTML = '';
    document.getElementById('search-input').value = '';
    displayProducts('all');
}

function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    if (query === '') { displayProducts('all'); return; }
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
    );
    if (filtered.length === 0) {
        grid.innerHTML = `<p class='no-result'>😕 Aucun produit trouvé pour « ${query} »</p>`;
        return;
    }
    filtered.forEach(product => grid.appendChild(buildProductCard(product)));
}

function clearCart() {
    cart = [];
    localStorage.removeItem('dk_cart');
    updateCartHeader();
}

function saveCart() {
    localStorage.setItem('dk_cart', JSON.stringify(cart));
}

function updateCartHeader() {
    let totalQty = 0, totalPrice = 0;
    cart.forEach(item => { totalQty += item.qty; totalPrice += item.price * item.qty; });
    document.getElementById('cart-count').innerText = totalQty;
    document.getElementById('cart-total').innerText = totalPrice.toLocaleString('fr-FR');
}

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { showSlides(slideIndex += n); }
function showSlides(n) {
    const slides = document.getElementsByClassName('carousel-slide');
    if (!slides.length) return;
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for (let i = 0; i < slides.length; i++) slides[i].style.display = 'none';
    slides[slideIndex - 1].style.display = 'block';
}
setInterval(() => plusSlides(1), 5000);

function openOrderModal() {
    if (cart.length === 0) { alert('⚠️ Votre panier est vide !'); return; }
    renderModalCartRecap();
    updateModalTotal();
    document.getElementById('order-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeOrderModal() {
    document.getElementById('order-modal').style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('order-modal');
    overlay.addEventListener('click', e => { if (e.target === overlay) closeOrderModal(); });
});

function renderModalCartRecap() {
    const recap = document.getElementById('modal-cart-recap');
    if (!recap) return;
    let html = '<ul class="recap-list">';
    cart.forEach(item => {
        html += `<li>
            <span>${item.qty}× ${item.name} <em>(${item.type})</em></span>
            <span>${(item.price * item.qty).toLocaleString('fr-FR')} FCFA</span>
        </li>`;
    });
    recap.innerHTML = html + '</ul>';
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function updateModalTotal() {
    const mode = document.querySelector('input[name="payment"]:checked').value;
    const base = getCartTotal();
    const total = mode === 'flex' ? Math.round(base * 1.10) : base;
    document.getElementById('modal-total-display').innerText = total.toLocaleString('fr-FR') + ' FCFA';
    document.getElementById('label-cash').classList.toggle('selected', mode === 'cash');
    document.getElementById('label-flex').classList.toggle('selected', mode === 'flex');
}

function submitOrder() {
    const name = document.getElementById('client-name').value.trim();
    const phone = document.getElementById('client-phone').value.trim();
    const location = document.getElementById('client-location').value.trim();
    const day = document.getElementById('client-day').value.trim();
    const mode = document.querySelector('input[name="payment"]:checked').value;
    if (!name || !phone || !location || !day) { alert('⚠️ Veuillez remplir tous les champs (*).'); return; }
    const base = getCartTotal();
    const isFlex = mode === 'flex';
    const total = isFlex ? Math.round(base * 1.10) : base;
    const maj = isFlex ? Math.round(base * 0.10) : 0;
    const now = new Date();
    const date = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const heure = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    let msg = `╔══════════════════════════╗\n     🛒 FACTURE PRO FORMA\n     DK ANGELUX\n╚══════════════════════════╝\n\n`;
    msg += `📅 Date : ${date} à ${heure}\n`;
    msg += `──────────────────────────────\n`;
    msg += `👤 CLIENT\n   Prénom : ${name}\n   Téléphone : ${phone}\n   Livraison : ${location}\n   Jour souhaité : ${day}\n`;
    msg += `──────────────────────────────\n🛍️ ARTICLES COMMANDÉS\n\n`;
    cart.forEach((item, i) => {
        msg += `  ${i+1}. ${item.name} (${item.type})\n     Qté : ${item.qty} × ${item.price.toLocaleString('fr-FR')} FCFA = ${(item.price * item.qty).toLocaleString('fr-FR')} FCFA\n`;
    });
    msg += `\n──────────────────────────────\n💰 MONTANT\n   Sous-total : ${base.toLocaleString('fr-FR')} FCFA\n`;
    if (isFlex) msg += `   Majoration DK-FLEX (+10%) : +${maj.toLocaleString('fr-FR')} FCFA\n`;
    msg += `   *TOTAL À PAYER : ${total.toLocaleString('fr-FR')} FCFA*\n`;
    msg += `──────────────────────────────\n💳 Mode : ${isFlex ? 'DK-FLEX (2 tranches)' : 'Cash à la livraison'}\n`;
    if (isFlex) {
        const t = Math.round(total / 2);
        msg += `   → Tranche 1 : ${t.toLocaleString('fr-FR')} FCFA\n   → Tranche 2 : ${t.toLocaleString('fr-FR')} FCFA\n`;
    }
    msg += `\n📍 Quartier LOGOTÉ – SAGBADO, LOMÉ\n📞 +228 70 00 93 06\n✨ Dk Angelux – Le choix vous distingue`;
    window.open(`https://wa.me/22870009306?text=${encodeURIComponent(msg)}`, '_blank');
    setTimeout(() => {
        clearCart(); closeOrderModal();
        ['client-name','client-phone','client-location','client-day'].forEach(id => document.getElementById(id).value = '');
    }, 800);
}

updateCartHeader();
displayProducts();
