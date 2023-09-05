
$(document).ready(function(){   
  $('section .titulo-seccion').css('opacity', '1');

    //Antes estaban las 2 sliders juntas, pero como no puedo sacarle las flechas solo al del TOP, tuve que repetir codigo
  $('section #slider').slick({
    slidesToShow: 6,
      slidesToScroll: 4,
      autoplay: false,
      arrows: false,
      responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,  
              }
            },
            {
              breakpoint:1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            },
      ]
    });

  $('.sliderSinNumero').slick({
      slidesToShow: 6,
      slidesToScroll: 4,
      autoplay: false,
      responsive: [
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              arrows: false,
            }
          },
          {
              breakpoint: 1000,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,  
                arrows: false,            
              }
            },
            {
              breakpoint:1400,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                arrows: true, 
              }
            },
      ]
    });

});

// Menu hamburguesa
$(".btn-hamb").click(function() {
  $(this).toggleClass("active");
});

// Menu perfil
let divContenedor = document.querySelector('.contenedor-img-profile-icon');
let divMenu = document.querySelector('.menu-desplegable');

divContenedor.addEventListener('mouseover', function () {
    divMenu.classList.add('open'); //
});

divMenu.addEventListener('mouseout', function () {  
    divMenu.classList.remove('open');
});






//Nav efecto:
let header = document.getElementById('header');

// Función para controlar el scroll
function handleScroll() {
  let scrollY = window.scrollY;

  if (scrollY == 0) {
    header.classList.remove("active");
  } else {
    header.classList.add("active");
  }
}
window.addEventListener('scroll', handleScroll);

//Cuando se clickea en el icono de busqueda, se abre el input
let searchIcon = document.getElementById('search-icon');
let searchInput = document.getElementById('search-input');

searchIcon.addEventListener('click', () => {
    searchIcon.classList.toggle('expandir');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus();
    }
});

document.addEventListener('click', (event) => {
    if (!searchInput.contains(event.target) && !searchIcon.contains(event.target)) {
        searchIcon.classList.remove('expanded');
        searchInput.classList.remove('active');
    }
});


// Menu mobile

let navToggle = document.getElementById('nav-toggle');
let mobileMenu = document.getElementById('mobile-menu');
let blurBackground = document.getElementById('blur-background');
let fullPageOverlay = document.getElementById('full-page-overlay');


document.body.appendChild(blurBackground);
document.body.appendChild(fullPageOverlay);

navToggle.addEventListener('click', function () {
    if (mobileMenu.classList.contains('menu-open')) {
        mobileMenu.classList.remove('menu-open');
        blurBackground.style.display = 'none';
        fullPageOverlay.style.display = 'none';
    } else {
        mobileMenu.classList.add('menu-open');
        blurBackground.style.display = 'block';
        fullPageOverlay.style.display = 'block';
    }
});

blurBackground.addEventListener('click', function () {
  closeMenu();
});

fullPageOverlay.addEventListener('click', function () {
  closeMenu();
});

function closeMenu() {
  mobileMenu.classList.remove('menu-open');
  blurBackground.style.display = 'none';
  fullPageOverlay.style.display = 'none';
  $(".btn-hamb").toggleClass("active");
}

mobileMenu.addEventListener('click', function (event) {
    event.stopPropagation();
});


// Menu li activo:
let menuItems = document.querySelectorAll('.mobile-menu ul.links li');
menuItems[0].classList.add('active');
menuItems.forEach(function (item) {
    item.addEventListener('click', function () {
        menuItems.forEach(function (el) {
            el.classList.remove('active'); //recorre todos los li y le saca la clase active si alguno la tiene
        });
        item.classList.add('active'); //agrego la clase active a el li clickeado
    });
});




