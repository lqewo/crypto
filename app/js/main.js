$(function() {
  $('.crypt__inner').slick({
    cssEase: 'linear',
    centerMode: true,
    centerPadding: '60px',
    speed: 10000,
    slidesToShow: 5,
    arrows: false,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    autoplay: true,
    infinite: true,
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
    slidesToShow: 5,
    arrows: false,
    infinite: true,
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
});