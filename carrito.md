## 1. **Carrito.html**
### **Funciones:**
- **`function loadCartItems()`**    
    ```javascript
    function loadCartItems() {
        const cartItemsContainer = document.getElementById("cart-items");
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        let total = 0;

        cartItemsContainer.innerHTML = ""; // Limpiar el contenedor

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = "<p>No hay productos en el carrito.</p>";
            document.getElementById("cart-total").textContent = `0€`;
            return;
        }

        cart.forEach((item, index) => {
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Precio: ${item.price}€</p>
                    <button class="btn-remove" onclick="removeItem(${index})">Eliminar<button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
            total += item.price;
            });

            // Actualizar el total
            document.getElementById("cart-total").textContent = `${total}€`;
        }
    ```
    - Cogemos el contenedor de items de las cartas `document.getElementById("cart-items");`, y cogemos la carta de nuestro almacenamiento interno, en este caso la parseamos a JSON para poder manejar mejor los datos `JSON.parse(localStorage.getItem("cart")) || [];`.
    - Limpiamos el contenedor para que no haya nada `cartItemsContainer.innerHTML = "";`
    - Si en mi almacenamiento no tengo cartas de productos es igual a 0, es decir, no has añadido nada al carrito, crea un parrafo que te dice que no hay productos y el total es igual a 0€.
    - Recorremos las cartas de productos de mi almacenamiento con `forEach((item, index)`, pasando clave valor, teniendo el item y de valor su index.
    - Creamos el item de la carta `document.createElement("div");`, le añade la clase "cart-item", `cartItem.classList.add("cart-item");` y le añadimos el html del producto.
    - Al container de todas las carts, le añadimos los productos y el precio total lo actualizamos.

- **`function removeItem(index)`**
    ```javascript
    function removeItem(index) {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart)); 
        loadCartItems(); 
        }
    ```
    - Cogemos la carta desde el almacenamiento local y la parseamos a JSON.
    - Eliminamos el elemento con la posicion 1.
    - Convertimos el array local del almacenamiento interno, pero sin ese cart que hemos borrado.
    - Y volvemos a usar el método de cargar items, para reutilizar código `loadCartItems()`.
  
- **`function confirmPurchase()`**
    ```javascript
    function confirmPurchase() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        alert("¡Compra confirmada! Gracias por tu compra en TechWave.");
        localStorage.removeItem("cart"); 
        loadCartItems(); 
        }
    ```
    - Cogemos la carta, usando el `localStorage`.
    - Si el carrito esta vacio, no se realiza la compra
    - Y cuando se complete la compra, remueve los items que ha comprado y vuelve a cargar los items, en este caso ninguno.

- **`loadCartItems();`**
  - Aqui ejecutamos el cargar productos, para que le aparezcan los productos del carrito