// Slider del Banner
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;




function showSlide(index) {
   slides.forEach((slide, i) => {
       slide.classList.toggle('active', i === index);
   });
}




function nextSlide() {
   currentSlide = (currentSlide + 1) % totalSlides;
   showSlide(currentSlide);
}




function prevSlide() {
   currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
   showSlide(currentSlide);
}




document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);




// Carrusel de Opiniones
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;




function showTestimonial(index) {
   testimonials.forEach((testimonial, i) => {
       testimonial.classList.toggle('active', i === index);
   });
}




function nextTestimonial() {
   currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
   showTestimonial(currentTestimonial);
}




function prevTestimonial() {
   currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
   showTestimonial(currentTestimonial);
}




document.querySelector('.carousel-nav .next').addEventListener('click', nextTestimonial);
document.querySelector('.carousel-nav .prev').addEventListener('click', prevTestimonial);




// Cambiar slides automáticamente cada 5 segundos
setInterval(nextSlide, 5000);
setInterval(nextTestimonial, 5000);

function viewProductDetails(productId) {
   const product = products.find(p => p.id === productId);
   localStorage.setItem("selectedProduct", JSON.stringify(product));
   window.location.href = "producto.html";
}

const products = [
   { id: 1, name: "Iphone 16", category: "smartphones", price: 500, image: "../imgs/iphone16.jpg", description: "Chip A18 Pro. Un chip colosal.Todo bajo Control de Cámara.Mezcla de Audio.Te van a oír.Nuevo ultra gran angular de 48 Mpx.Viva la resolución.iOS 18. Haz más tuyo cada píxel.Hasta 4 horas más de autonomía.Otro mundo.Referencia: 001094612300841" },
   { id: 2, name: "PS5 Pro", category: "consoles", price: 799.99, image: "../imgs/ps5Pro.jpg", description: "Consola de alta calidad" },
   { id: 3, name: "Dyson V15 Detect Absolute", category: "accesorios", price: 799.99, image: "../imgs/dyson.jpg", description: "Tremenda" },
];


