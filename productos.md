## 1. **Productos.html**
### **Variables:**
- `products`: Objeto de arrays de productos

### **Estructura:**
- **8 productos** definidos como objetos con propiedades:
  - `id`: Identificador único (número).

  - `name`: Nombre del producto (string).

  - `category`: Categoría (string, ej: "smartphones", "tv").

  - `price`: Precio en euros (number).

  - `image`: Ruta relativa de la imagen (string).

  - `description`: Detalle extenso del producto (string).

---
### **Funciones:**
- **`loadProducts(filteredProducts = products)`**
    ```javascript
        function loadProducts(filteredProducts = products) {
            const productGrid = document.getElementById("product-grid");
            productGrid.innerHTML = "";

            filteredProducts.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}€</p>
                    <button class="btn" onclick="viewProductDetails(${product.id})">Ver Detalles</button>
                `;
                productGrid.appendChild(productCard);
            });
        }
    ```

    - Cogemos el grid de productos con `document.getElementById("product-grid");`.

    - Vaciamos el el contenido para que no haya nada.

    - Recorremos los productos con `forEach`.

    - Creamos la "card" o la tarjeta del producto.

    - Le añadimos el codigo correspondiente:
      ```javascript
        productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}€</p>
                <button class="btn" onclick="viewProductDetails(${product.id})">Ver Detalles</button>
        `;
        ```

    - Añadimos el producto al grid con `appendChild(productCard)`

- **`function filterProducts()`**
    ```javascript
    function filterProducts() {
        const category = document.getElementById("category-filter").value;
        const price = parseFloat(document.getElementById("price-filter").value);
        const search = document.getElementById("search-bar").value.toLowerCase();

        const filteredProducts = products.filter(product => {
            return (category === "all" || product.category === category) &&
                product.price <= price
                && product.name.toLowerCase().includes(search);
        });

        loadProducts(filteredProducts);
    }
    ```
    - Cogemos el valor de la categoria `document.getElementById("category-filter").value;` y el del precio, y lo parseamos a float, es decir, lo pasamos a decimal `parseFloat(document.getElementById("price-filter").value);`

    - Cogemos el valor de la busqueda y lo pasamos a minúsculas `document.getElementById("search-bar").value.toLowerCase();`

    - Creamos una variable llamada `filteredProducts` que va a almacenar cada producto en array.
    
    - Al ser una filtración, lo que vamos a buscar es que se valide lo que se introduce. Se van a añadir productos al array si la categoria es igual a "all", si la categoria del producto coincide con la puesta en la variable `category` y si el nombre del producto en minúsculas incluye el valor de la búsqueda, en este caso, de la variable `search`