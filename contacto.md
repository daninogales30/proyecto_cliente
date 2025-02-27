## 1. **Carrito.html**
### **Variables:**

- **`faqQuestions`**: Devuelve en este caso, una lista con los elementos con la clase .faq-question, en este caso las preguntas.

### **Codigo cargado al inicio: (se usa para poder activar u ocultar las respuestas de las preguntas)**
-   ```javascript
    faqQuestions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling; 
            const icon = question.querySelector(".toggle-icon");
            answer.classList.toggle("active"); 
            icon.textContent = answer.classList.contains("active") ? "-" : "+"; 
            });
        });
    ```
    - Hacemos un bucle forEach (`faqQuestions.forEach(question => {`), recorriendo las preguntas y añadiendole un evento a la pregunta al hacerle click (`question.addEventListener("click", () => {`).

    - Cogemos la pregunta usando `nextElementSibling` que sirve para coger el elemento que viene justo detrás.

    - Cogemos los elementos que tienen la clase .toggle-icon, es decir, cogemos el icono de +.

    - Alternamos el elemento para que alterne entre la clase active, y cuando está la clase active salga - en vez de +.

### **Funciones:**
- **`function sendMessage()`**

    ```javascript
    function sendMessage() {
        const input = document.getElementById("chatbot-input");
        const message = input.value.trim();
        if (message) {
            const messagesContainer = document.getElementById("chatbot-messages");
            const userMessage = document.createElement("div");
            userMessage.classList.add("message", "user");
            userMessage.textContent = message; // 
            messagesContainer.appendChild(userMessage);
            const botMessage = document.createElement("div");
            botMessage.classList.add("message", "bot");
            botMessage.textContent = "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
            messagesContainer.appendChild(botMessage);
            input.value = "";
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            }
        }
    ```
    - Cogemos el input donde escribimos el mensaje al bot `const input = document.getElementById("chatbot-input");`.

    - Cogemos el mensaje, es decir, el valor del input.

    - Si existe mensaje, cogeremos el container de mensajes `const messagesContainer = document.getElementById("chatbot-messages");` y creamos el div donde meteremos el mensaje del usuario `const userMessage = document.createElement("div");`.

    - Al div del mensaje del usuario le añadimos la clase message con valor user, y como contenido, se le pondrá el introducido en el input.

    - Lo añadimos al div de mensajes `messagesContainer.appendChild(userMessage);`.

    - Hacemos lo mismo con el mensaje del bot, creamos un div, le añadimos la clase message con el valor bot y su texto específico del bot `botMessage.textContent = "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";`. Lo añadimos al contenedor, vaciamos el valor del input y hacemos que automáticamente te scrollee hacia abajo.

```javascript
document.getElementById("contact-form").addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.");
        });
```
- Aqui solo añadimos que al completar el formulario le mande un mensaje al usuario que ya se pondran en contacto con él.