const navbar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', () => {
    if(pageYOffset > 50) {
        navbar.style.opacity = 0.7;
    } else {
        navbar.style.opacity = 1;
    }
  });

const showMore = document.getElementById('show-more');

showMore.addEventListener('click', () => {
    alert('Ошибка подключения к серверу 404, попробуйте позднее');
})