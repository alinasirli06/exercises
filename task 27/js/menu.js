let productCards = document.getElementById("product-cards");

fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(data => {
    displayProducts(data);
  });

const displayProducts = (products) => {
  const productHTML = products.map(product => {
    return `
      <div class="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 p-4 group">
        <div class="relative h-72 w-full mb-4 overflow-hidden rounded-xl bg-gray-50">
          <img 
            src="${product.image}" 
            alt="${product.name}" 
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          >
        </div>
        
        <div class="space-y-2">
          <h3 class="font-bold text-gray-900 text-lg leading-tight h-14">
            ${product.name}
          </h3>
          
          <div class="flex items-center justify-between">
            <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
              Ölçü: ${product.size}
            </span>
            <span class="text-2xl font-black text-blue-600">
              ${product.price}
            </span>
          </div>
          
          <button class="w-full mt-4 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300">
            Sifariş et
          </button>
        </div>
      </div>
    `;
  }).join("");

  productCards.innerHTML = productHTML;
};