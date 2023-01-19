$('.hero-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  arrows:true,
  autoplay:false,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_next',
  pauseOnHover: false,
  pauseOnFocus: false,

});

    

    $('.differentslider').slick({
      dots: false,
      infinite: true,
      speed: 1500,
      slidesToShow: 3,
      slidesToScroll:1,
      autoplay: true,
      arrows: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      
     
    
      responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
   
        ]
      });






      $('.hero-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll:1,
        autoplay: false,
        arrows: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next'
       
      
       
        });







