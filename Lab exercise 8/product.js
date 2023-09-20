 // Function to fetch and display products
 function fetchProducts() {
    const productList = document.getElementById("productList");
    const searchInput = document.getElementById("searchInput");
    const sortSelect = document.getElementById("sortSelect");

    fetch('https://cynthiaesthermetilda.github.io/Xhrdemo/products.json')
      .then(response => response.json())
      .then(data => {
        let products = data;

        // Filter products based on the search input
        const searchTerm = searchInput.value.toLowerCase();
        products = products.filter(product =>
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
        );

        // Sort products based on the selected sorting option
        const sortBy = sortSelect.value;
        if (sortBy === "name") {
          products.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "price-asc") {
          products.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
          products.sort((a, b) => b.price - a.price);
        }

        // Generate HTML elements for each product
        productList.innerHTML = "";
        products.forEach(product => {
          const productDiv = document.createElement("div");
          productDiv.classList.add("product");

          const productName = document.createElement("h2");
          productName.textContent = product.name;

          const productDescription = document.createElement("p");
          productDescription.textContent = product.description;

          const productPrice = document.createElement("p");
          productPrice.textContent = `Price: $${product.price.toFixed(2)}`;

          const productImage = document.createElement("img");
          productImage.src = product.image_url; // Update image source
          productImage.alt = product.name;

          productDiv.appendChild(productName);
          productDiv.appendChild(productDescription);
          productDiv.appendChild(productPrice);
          productDiv.appendChild(productImage);

          productList.appendChild(productDiv);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  // Attach event listeners to the search input and sort select
  document.getElementById("searchInput").addEventListener("input", fetchProducts);
  document.getElementById("sortSelect").addEventListener("change", fetchProducts);

  // Initial fetch and display
  fetchProducts();