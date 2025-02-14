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


