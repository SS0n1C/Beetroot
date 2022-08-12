$(function(){
    $(".top-slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dotsClass: 'slick-dots top-dots'
    });
  
  })
  $(document).ready(function(){
    $('.second-slider').slick({
      arrows:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      speed: 500,
    });
  }); 
  $(document).ready(function(){
    $('.thirty-slider').slick({
      arrows:true,
      slidesToShow: 8,
      slidesToScroll: 1,
      speed: 500,
      centerPadding:500,
      nextArrow: "<img src='assets/img/3_block/next.png' class='next' alt='2'>",
      prevArrow: "<img src='assets/img/prev.png' class='prev' alt='1'>",
    });
  }); 
    
  