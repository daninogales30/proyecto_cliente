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

- **`function viewProductDetails(productId)`**
    ```javascript
    function viewProductDetails(productId) {
        const product = products.find(p => p.id === productId);
        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "producto.html";
        }
    ```
    - Usamos el método `find` para buscar en el array `products` el producto que tenga el mismo `id` que el productId proporcionado. El resultado se guarda en la variable product.
    - Usamos `JSON.stringify(product)` para convertir el objeto `product` en una cadena de texto (string) y lo guardamos en el `localStorage` con la clave `"selectedProduct"`.
    - Cambiamos la URL actual a `"producto.html"`, lo que hace que el navegador cargue esa página.
    - Esto permite que el usuario vea los detalles del producto en una nueva página.

- **Configuración de Eventos y Carga Inicial**
    ```javascript
    document.getElementById("category-filter").addEventListener("change", filterProducts);
    document.getElementById("price-filter").addEventListener("input", () => {
        document.getElementById("price-value").textContent = `Hasta $${document.getElementById("price-filter").value}`;
        filterProducts();
    });
    document.getElementById("search-bar").addEventListener("input", filterProducts);

    loadProducts();
    ```
    
    - `document.getElementById("category-filter").addEventListener("change", filterProducts);` escucha cambios en el filtro de categoría y llama a filterProducts para actualizar los productos.

    - `document.getElementById("price-filter").addEventListener("input", () => {` escucha cambios en el filtro de precio (cuando el usuario mueve la barra deslizante).

    - `document.getElementById("price-value").textContent = Hasta $${document.getElementById("price-filter").value};` actualiza el texto que muestra el valor actual del precio seleccionado.

    - `filterProducts();`llama a la función `filterProducts` para filtrar los productos según el nuevo precio.

    - `});`Cierra la función anónima que se ejecuta al cambiar el filtro de precio.

    - `document.getElementById("search-bar").addEventListener("input", filterProducts);` escucha lo que el usuario escribe en la barra de búsqueda y llama a filterProducts para filtrar los productos.

    - `loadProducts();` carga y muestra todos los productos al abrir la página por primera vez.