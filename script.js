// Toggle the navigation menu for mobile view
function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("active");
}

document.getElementById("scrollBtn").addEventListener("click", function () {
  const nextSection = document.getElementById("passion");
  nextSection.scrollIntoView({ behavior: "smooth" });
});

function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

}
// script.js

function toggleMenu() {
  const menu = document.getElementById("navMenu");
  const toggle = document.getElementById("menuToggle");
  menu.classList.toggle("active");
  toggle.classList.toggle("open");
}

function scrollToBottom() {
  document.getElementById("more").scrollIntoView({ behavior: "smooth" });
}

function previewImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const imagePreview = document.getElementById('image-preview');
    imagePreview.style.display = 'block';
    imagePreview.src = reader.result;
    document.getElementById('remove-btn').style.display = 'inline-block';
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}
// Scroll Down button
document.getElementById("scrollBtn").addEventListener("click", function () {
  const nextSection = document.getElementById("passion");
  nextSection.scrollIntoView({ behavior: "smooth" });
});

// Scroll Up button logic
const scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
  // Show button after scrolling down 400px
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};

scrollUpBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
