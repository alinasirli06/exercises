// Məlumat bazası (Mock data)
const products = [
    {
        id: 1,
        title: "Apple iPhone 15 Pro",
        price: "2499 AZN",
        image: "https://images.unsplash.com/photo-1696446701796-da61225697cc?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "MacBook Air M2",
        price: "1950 AZN",
        image: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "AirPods Pro 2",
        price: "450 AZN",
        image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Apple Watch Ultra",
        price: "1200 AZN",
        image: "https://images.unsplash.com/photo-1434494878577-86c23bdd0639?q=80&w=1000&auto=format&fit=crop"
    }
];

const container = document.getElementById('product-list');

// Məhsulları ekrana çıxaran funksiya
function displayProducts() {
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p class="price">${product.price}</p>
                <button class="buy-btn">Səbətə at</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Səhifə yüklənəndə işə düşsün
displayProducts();