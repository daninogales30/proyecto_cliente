# TechWave - La Mejor Experiencia de Compra en Tecnología 🚀

Bienvenido a **TechWave**, la tienda en línea definitiva para los amantes de la tecnología. Nuestro objetivo es ofrecerte una plataforma moderna, intuitiva y completamente optimizada para que encuentres y compres los productos más innovadores del mercado sin complicaciones.  

TechWave está diseñado para que la experiencia de compra sea rápida, sencilla y segura, con una interfaz clara, un sistema de carrito eficiente y un proceso de contacto ágil.  

---

## 🌟 Características Principales

✅ **Página de inicio atractiva y funcional**  
✅ **Catálogo de productos actualizado y bien organizado**  
✅ **Detalles completos de cada producto con imágenes y precios**  
✅ **Carrito de compras dinámico y fácil de usar**  
✅ **Formulario de contacto para atención personalizada**  
✅ **Chatbot de soporte y preguntas frecuentes para resolver dudas al instante**  
✅ **Diseño responsivo y optimizado para móviles y escritorio**  
✅ **Funcionalidades avanzadas como filtros de productos y búsqueda**  

---

## 📌 Descripción de las Secciones
🔹Antes de empezar hemos utilizado una funcionalidad llamada localStorage para almacenar datos localmente ya que no usamos base de datos.Hemos sacado esta funcionalidad de estas paginas:
   🔹https://es.javascript.info/localstorage
   🔹https://www.freecodecamp.org/espanol/news/como-usar-localstorage-en-javascript/
🔹También usamos JSON, para pasar los datos a JSON y asi acceder mas facilmente

# Descripcion de la página (`index.html`) 
🔹 **Desarrollado por:** **Dario Romero**  
🔹 **Descripción:**  
   - Presenta la identidad de la tienda con un diseño moderno y llamativo.  
   - Incluye un banner interactivo con un slider que muestra los productos destacados.  
   - Sección de productos destacados con imágenes, precios y enlaces a detalles.  
   - Carrusel de opiniones de clientes para generar confianza.  
   - Navegación clara con acceso a todas las secciones del sitio.  

🔹 **Tecnologías utilizadas:**  
   - HTML5, CSS3, JavaScript.  
   - Animaciones CSS para mejorar la experiencia del usuario.
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

### 2️⃣ Catálogo de Productos (`productos.html`)  
🔹 **Desarrollado por:** **Dario Romero y Jesús Gómez**  
🔹 **Descripción:**  
   - Lista de productos disponibles con imágenes, nombres, precios y categorías.  
   - Filtros avanzados para buscar productos por categoría, precio y nombre.  
   - Diseño responsivo que se adapta a diferentes dispositivos.  
   - Botones para ver detalles de cada producto y añadirlos al carrito.  

🔹 **Tecnologías utilizadas:**  
   - HTML5, CSS3, JavaScript.  
   - Funcionalidades dinámicas con JavaScript para filtrar y mostrar productos.  

---

### 3️⃣ Detalles de Producto (`producto.html`)  
🔹 **Desarrollado por:** **Jesús Gómez**  
🔹 **Descripción:**  
   - Página individual para cada producto con información detallada.  
   - Descripción completa, precio, especificaciones técnicas e imágenes en alta calidad.  
   - Botones para añadir el producto al carrito o a la lista de favoritos.  
   - Diseño limpio y centrado en la experiencia del usuario.  

🔹 **Tecnologías utilizadas:**  
   - HTML5, CSS3, JavaScript.   

---

### 4️⃣ Carrito de Compras (`carrito.html`)  
🔹 **Desarrollado por:** **Daniel Nogales**  
🔹 **Descripción:**  
   - Muestra los productos añadidos al carrito con imagen, nombre y precio.  
   - Funcionalidad para eliminar productos en tiempo real.  
   - Cálculo automático del total de la compra.  
   - Botón para confirmar la compra y vaciar el carrito después de la compra.  

🔹 **Tecnologías utilizadas:**  
   - HTML5, CSS3, JavaScript.  

---

### 5️⃣ Contacto y Soporte (`contacto.html`)  
🔹 **Desarrollado por:** **Daniel Nogales**  
🔹 **Descripción:**  
   - Formulario de contacto con validación para enviar consultas.  
   - Sección de **Preguntas Frecuentes (FAQ)** con respuestas desplegables.  
   - **Chatbot de soporte** que responde automáticamente a las consultas más comunes.  
   - Diseño intuitivo y fácil de usar.  

🔹 **Tecnologías utilizadas:**  
   - HTML5, CSS3, JavaScript.  
   - Funcionalidades dinámicas con JavaScript para el chatbot y las FAQ.  

---

## 👨‍💻 Equipo de Desarrollo y Contribuciones

| **Nombre**         | **Sección Desarrollada**                          | **Contribuciones**                                                                 |
|--------------------|------------------------------------------------|-----------------------------------------------------------------------------------|
| **Daniel Nogales** | Carrito de compras y Contacto con Chatbot y FAQ | Desarrollo del carrito de compras, chatbot de soporte y formulario de contacto.   |
| **Dario Romero**   | Página de inicio y parte del Catálogo de Productos | Diseño de la página de inicio, slider interactivo y sección de productos destacados. |
| **Jesús Gómez**    | Otra parte del Catálogo de Productos y Detalles de Producto | Desarrollo del catálogo de productos y la página de detalles de producto.          |

---

## 🛠️ Cómo Ejecutar el Proyecto

1. **Descarga o clona este repositorio:**  
   ```sh
   git clone https://github.com/daninogales30/proyecto_cliente.git