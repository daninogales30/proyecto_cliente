# Análisis Detallado del Código JavaScript

## 1. **Slider del Banner Principal**
### **Variables:**
- `currentSlide`: Índice del slide actual (inicia en 0).
- `slides`:  Devuelve todos los elementos con clase `.slide`.
- `totalSlides`: Número total de slides.

### **Funciones:**
- **`showSlide(index)`**  
    ```javascript
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }
    ```
  - Recorre todos los slides con `forEach`.

  - Añade la clase `active` al slide con el índice que coincide, borrando los demás.

  - Controla qué slide es visible.

- **`nextSlide()`**  
    ```javascript
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }
    ```

  - Incrementa `currentSlide` usando módulo (`%`) para que no se pase del total

  - Ejemplo: Si hay 3 slides, `(2 + 1) % 3 = 0`.
    
- **`prevSlide()`**  
    ```javascript
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }
    ```
  - Decrementa `currentSlide` ajustando con `+ totalSlides` para evitar valores negativos.

  - Ejemplo: `(0 - 1 + 3) % 3 = 2`.

### **Event Listeners:**
- Botones "next" y "prev" llaman a sus respectivas funciones.

### **Cambio Automático:**
- `setInterval(nextSlide, 5000)`: Cambia el slide cada 5 segundos.

---

## 2. **Carrusel de Opiniones (Testimonios)**
### **Variables:**
- `currentTestimonial`: Índice del testimonio actual.
- `testimonials`: Devuelve los elementos con la clase `.testimonial`.

### **Funciones:**
- **`showTestimonial(index)`**  
    ```javascript
    function showTestimonial(index) {
            testimonials.forEach((testimonial, i) => {
                testimonial.classList.toggle('active', i === index);
            });
    }
    ```
  - Similar a `showSlide`, activa el testimonio correspondiente al índice.

- **`nextTestimonial()` y `prevTestimonial()`**  
    ```javascript
    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }

    function prevTestimonial() {
        currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentTestimonial);
    }
    ```
  - Lógica idéntica al slider del banner.

### **Event Listeners y Intervalo:**

- Mismos botones de navegación y intervalo automático que el banner.

---

## 3. **Gestión de Productos**
### **Array `products`:**
- Almacena objetos con detalles de productos (id, nombre, categoría, precio, imagen y descripcion).

### **Función `viewProductDetails(productId)`:**
    
- Busca el producto en el array con `find()`.

- **Almacenamiento Local:**  

  - Guarda el producto seleccionado en `localStorage` como JSON.

  - Redirige a `producto.html` para mostrar detalles.

- **Manejo de Errores:**  

  - Si el producto no existe, muestra error en consola.


---





