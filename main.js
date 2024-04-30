$(document).ready(() => {
  
  //scroll effecr for content
  $(window).on('scroll', () => {
    if ($(window).scrollTop() >= 450) {
      $('#about-title').removeClass('-translate-x-[150%]');
      $('#about-title').removeClass('opacity-0');
      $('#about-img').removeClass('translate-x-[150%]');
      $('#about-img').removeClass('opacity-0');
    }
  });

  
    
  //oepn and close the top navbar menu
  $('#open-top-menu').click( () => {
    $('#top-menu').addClass('right-0');
  });
  $('#close-top-menu').click(() => {
    $('#top-menu').removeClass('right-0');
  });
  
  
  //auto scroll to clicked section
  $('a').click(function() {
    let target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      $('#top-menu').removeClass('right-0');
      return false;
    }
  });
  
});
