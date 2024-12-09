
!(function($) {
  "use strict";

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top + 2;

        if ($('#header').length) {
          scrollto -= $('#header').outerHeight()

        }

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('.mobile-nav .nav-logo').remove();
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
    });
  });

  // Stick the header at top on scroll
  $("#header").sticky({
    topSpacing: 0,
    zIndex: '50'
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // ********* ALL ***********************************************
    $('#nav-all').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $("#my-all").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

   // ********** PIN **********************************************
   $('#nav-pin').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $("#my-pin").addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });


    // ********** WEB **********************************************
    $('#nav-web').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $("#my-web").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });


      // ********** AI **********************************************
      $('#nav-ai').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $("#my-ai").addClass('filter-active');
  
        portfolioIsotope.isotope({
          filter: $(this).data('filter')
        });
      });


    // *********** GRAPHICS *********************************************
    $('#nav-graphic').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $("#my-graphic").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });
    // *********** APP *********************************************
    $('#nav-app').on('click', function () {
      $("#portfolio-flters li").removeClass('filter-active');
      $("#my-app").addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });


    // ********************************************************


    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    autoplaySpeed: 2500,
    autoplayTimeout: 10000
  });

  // Initi AOS
  AOS.init({
    duration: 600
  });

  $('.venobox_custom').venobox({
    framewidth : '1000px',                            // default: ''
    frameheight: '1000px',                            // default: ''
    // border     : '10px',                             // default: '0'
    // bgcolor    : '#5dff5e',                          // default: '#fff'
    // titleattr  : 'data-title',                       // default: 'title'
    // numeratio  : true,                               // default: false
    // infinigall : true,                               // default: false
    // share      : ['facebook', 'twitter', 'download'] // default: []
});

})(jQuery);
