// Enable smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// For the slide show

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Show initial slide
showSlide(slideIndex);

// Manual controls
nextBtn.addEventListener('click', () => showSlide(slideIndex += 1));
prevBtn.addEventListener('click', () => showSlide(slideIndex -= 1));

// Auto-slide every 5 seconds
setInterval(() => showSlide(slideIndex += 1), 5000);

function showSlide(n) {
  if (n >= slides.length) { slideIndex = 0; }
  if (n < 0) { slideIndex = slides.length - 1; }

  slides.forEach(slide => slide.style.display = "none");
  slides[slideIndex].style.display = "block";
}


document.getElementById('appointmentForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default form submission

  const name = document.getElementById('firstName').value.trim();
  const email = document.getElementById('email').value.trim();
  const successMessage = document.getElementById('formSuccessMessage');

  if (name === '' || email === '') {
    alert('Please fill in your First Name and Email Address.');
    return;
  }

  // Show success message
  successMessage.style.display = 'block';

  // Optionally hide the message after 5 seconds
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 5000);

  // Reset the form
  this.reset();
});
