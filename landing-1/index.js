const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function() {
    if(pageYOffset > 50) {
        navbar.style.opacity = 0.9;
    } else {
        navbar.style.opacity = 1;
    }
  });