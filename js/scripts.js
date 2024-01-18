document.addEventListener('DOMContentLoaded', function () {
    let menuBtn = document.querySelector('.nav-btn');
  
    menuBtn.addEventListener('click', function (e) {
      document.querySelector('body').classList.toggle('mobile-nav-active');
      menuBtn.classList.toggle('fa-xmark');
    });
  });
  