$('.slider').slick({
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
            breakpoint: 800,
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

// $(".vertical-slider").slick({
//     dots: true,
//     vertical: true,
//     centerMode: true,
//     slidesToShow: 1,
//     slidesToScroll: 1
// });