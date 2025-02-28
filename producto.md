## 1. **producto.html**

### **Variables:**
- `selectedProduct`: Objeto que almacena el producto seleccionado desde `localStorage`.

---

### **Funciones:**

- **Mostrar los detalles del producto**
    ```javascript
    if (selectedProduct) {
        document.getElementById("product-image").src = selectedProduct.image;
        document.getElementById("product-name").textContent = selectedProduct.name;
        document.getElementById("product-price").textContent = `${selectedProduct.price}€`;
        document.getElementById("product-description").textContent = selectedProduct.description;
    } else {
        window.location.href = "productos.html";
    }
    ```
    - Se obtiene el producto guardado en `localStorage` con `JSON.parse(localStorage.getItem("selectedProduct"))`.
    - Si existe, se actualizan los elementos del DOM con los detalles del producto.
    - Si no hay un producto seleccionado, se redirige a `productos.html`.

- **`function addToCart()`**
    ```javascript
    function addToCart() {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(selectedProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${selectedProduct.name} ha sido añadido al carrito.`);
    }
    ```
    - Se obtiene el carrito desde `localStorage`.
    - Si el carrito no existe, se inicializa como un array vacío.
    - Se añade el producto seleccionado al array y se guarda en `localStorage`.
    - Se muestra una alerta confirmando la acción.

- **`function addToFavorites()`**
    ```javascript
    function addToFavorites() {
        const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (!favorites.some(item => item.id === selectedProduct.id)) {
            favorites.push(selectedProduct);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            alert(`${selectedProduct.name} ha sido añadido a favoritos.`);
        } else {
            alert("Este producto ya está en tus favoritos.");
        }
    }
    ```
    - Se obtiene el producto seleccionado de `localStorage`.
    - Se obtiene la lista de favoritos desde `localStorage`.
    - Se verifica si el producto ya está en la lista.
    - Si no está en favoritos, se añade y se guarda en `localStorage`.
    - Se muestra una alerta confirmando la acción o informando que ya está en favoritos.