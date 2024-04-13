document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled')
    }
})
// document.addEventListener('DOMContentLoaded', function () {
//     const menuBtn = document.getElementById("menu_nav");
//     const navLinks = document.getElementById("nav-links");
//     const menuBtnIcon = menuBtn.querySelector("i");

//     menuBtn.addEventListener("click", function (e) {
//         // Toggle la clase 'open' en el elemento de navegación
//         navLinks.classList.toggle("open");

//         // Cambia el icono del botón del menú
//         const isOpen = navLinks.classList.contains("open");
//         menuBtnIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
//     });
// });


var limit = 100, // Max number of stars
    body = document.body;
loop = {
    //initilizeing
    start: function () {
        for (var i = 0; i <= limit; i++) {
            var star = this.newStar();
            star.style.top = this.rand() * 500 + '%';
            star.style.left = this.rand() * 100 + '%';
            star.style.webkitAnimationDelay = this.rand() + 's';
            star.style.mozAnimationDelay = this.rand() + 's';
            body.appendChild(star);
        }
    },
    //to get random number
    rand: function () {
        return Math.random();
    },
    //createing html dom for star
    newStar: function () {
        var d = document.createElement('div');
        d.innerHTML =
            '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
        return d.firstChild;
    },
};
loop.start();