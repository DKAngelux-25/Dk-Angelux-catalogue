let cart = JSON.parse(localStorage.getItem('dk_cart')) || [];

// 1. Affichage des produits
function displayProducts(filter = 'all') {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';

    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Badge Marketplace
        const mktTag = product.isMarketplace ? '<span class="badge-mkt">Marketplace</span>' : '';

        card.innerHTML = `
            ${mktTag}
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <select id="select-${product.id}" onchange="updatePriceDisplay(${product.id})">
                ${product.options.map((opt, index) => `<option value="${index}">${opt.type} (${opt.unit})</option>`).join('')}
            </select>
            <p class="price"><span id="price-${product.id}">${product.options[0].price}</span> FCFA</p>
            <button onclick="addToCart(${product.id})">Ajouter au panier</button>
        `;
        grid.appendChild(card);
    });
}

// 2. Mise à jour du prix à l'écran
function updatePriceDisplay(id) {
    const product = products.find(p => p.id === id);
    const select = document.getElementById(`select-${id}`);
    const priceSpan = document.getElementById(`price-${id}`);
    priceSpan.innerText = product.options[select.value].price;
}

// 3. Ajout au panier
function addToCart(id) {
    const product = products.find(p => p.id === id);
    const select = document.getElementById(`select-${id}`);
    const selectedOption = product.options[select.value];

    const item = {
        name: product.name,
        type: selectedOption.type,
        price: selectedOption.price,
        qty: 1
    };

    cart.push(item);
    saveCart();
    alert(`${product.name} ajouté !`);
}

// 4. Envoi WhatsApp
function sendWhatsApp() {
    let message = "Bonjour Dk Angelux, voici ma commande :\n\n";
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.qty}x ${item.name} (${item.type}) : ${item.price} FCFA\n`;
        total += item.price;
    });

    message += `\n*Total : ${total} FCFA*\nMode : Paiement à la livraison`;
    
    const url = `https://wa.me/22870009306?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

// Auto-play (optionnel)
setInterval(() => { plusSlides(1); }, 5000);

// Initialisation
displayProducts();
