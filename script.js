// script.js
const messages = [
    "Selamat ulang tahun listia 🎉",
    "panjang Umur",
    "Semoga hari-harimu penuh kebahagiaan!",
    "Semoga semua impianmu tercapai!",
    "Kesehatan, kebahagiaan, dan kesuksesan untukmu :)",
    "jangan lupa makan seblak",
    "Semoga cepat TOBAT ",
    "Nikmati hari spesialmu bersama mamas tersayang! 🎂"
  ];
  
  let currentIndex = 0;
  
  const slideText = document.getElementById('slideText');
  
  function showSlide(index) {
    slideText.style.opacity = 0;
    setTimeout(() => {
      slideText.textContent = messages[index];
      slideText.style.opacity = 1;
    }, 500);
  }
  
  document.getElementById('prevBtn').addEventListener('click', function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : messages.length - 1;
    showSlide(currentIndex);
  });
  
  document.getElementById('nextBtn').addEventListener('click', function() {
    currentIndex = (currentIndex < messages.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
  });
  
  showSlide(currentIndex);
  