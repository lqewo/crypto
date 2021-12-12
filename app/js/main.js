$(function() {
  $('.crypt__inner').slick({
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    speed: 10000,
    slidesToShow: 3,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      }
    ]
  });

  $('.crypt__inner--reverse').slick({
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    speed: 10000,
    arrows: false,
    slidesToShow: 5,
    variableWidth: true,
    slidesToScroll: -1,
    autoplaySpeed: 0,
    autoplay: true,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 5
        }
      }
    ]
  });
});