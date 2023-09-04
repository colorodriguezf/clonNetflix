
// Menu hamburguesa
 $(".btn-hamb").click(function() {
        $(this).toggleClass("active");
    });

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

