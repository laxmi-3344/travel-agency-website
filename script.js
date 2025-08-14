// Slider functionality for index.html
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

// Auto slide every 5 seconds
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// Form validation for contact.html
const form = document.getElementById('bookingForm');
const formMessage = document.getElementById('formMessage');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const destination = form.destination.value;

    if (!name || !email || !phone || !destination) {
      formMessage.textContent = "Please fill in all required fields.";
      formMessage.style.color = "red";
      return;
    }

    // Validate phone number: digits only, 10 to 15 length
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      formMessage.textContent = "Phone number must contain 10 to 15 digits only.";
      formMessage.style.color = "red";
      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
    }

    // If all validations pass
    formMessage.textContent = "Thank you! Your booking request has been submitted.";
    formMessage.style.color = "green";

    // Optionally reset form
    form.reset();
  });
}
