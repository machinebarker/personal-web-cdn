// This JS Script has been created by Adithya
$(document).ready(function () {
    $('.contactForm').validate({
        errorClass: 'is-invalid',
        validClass: 'is-valid',
        errorElement: 'small',
        rules: {
            _replyto: {
                required: true
            },
            message: {
                required: true
            }
        },
        messages: {
            _replyto: 'Please enter your valid email!',
            message: 'Please enter your message!'
        }
    });

    // LightGallery
    $('#photos').lightGallery({
        download: false,
        zoom: true
    });

    // Owl Carousel
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        margin: 10,
        autoplay: true,
        responsiveClass: true,
        lazyLoad: true,
        loop: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 3,
            }
        }
    });

    // Tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Typed JS
    new Typed('#typed', {
    strings: ['Web Developer', 'Photographer'],
    typeSpeed: 80,
    delaySpeed: 80,
    backSpeed: 80,
    loop: true
    });

    // Back to Top
    $(window).scroll(() => {
        if($(this).scrollTop() > 100) {
            $('.btn-up').fadeIn();
        } else {
            $('.btn-up').fadeOut();
        }
    });

    $('.btn-up').click(() => {
        $('html, body').animate({
            scrollTop: 0
        }, 800, 'easeInOutExpo');
        return false;
    });
});

// Preloader
$(window).on('load', () => {
    $('.preloader').addClass('preloader-finish');
});

$(window).scroll(function () { 
    let wScroll = $(this).scrollTop();
    
    // Gallery
    if(wScroll > $('#gallery').offset().top - 500) {
        $('.img-gallery').each((i) => {
            setTimeout(() => {
                $('.img-gallery').eq(i).addClass('show');
            }, 200 * (i+1));
        });
    }

    // Skills
    if(wScroll > $('#skills').offset().top - 400) {
        $('#skills .card').each((i) => {
            setTimeout(() => {
                $('#skills .card').eq(i).addClass('show');
            }, 200 * (i+1));
        });
    }

    // Playlist
    if(wScroll > $('#playlist').offset().top - 300) {
        $('#playlist .playlist-cover').each((i) => {
            setTimeout(() => {
                $('#playlist .playlist-cover').eq(i).addClass('show');
            }, 200 * (i+1));
        });
    }

    // Contact
    if(wScroll > $('#contact').offset().top - 300) {
        $('#contact .col-md-6').addClass('show');
    }
});

// ? Smooth Scroll
$('.page-scroll').on('click', function(e) { 
    let dest = $(this).attr('href');
    // getSection
    let destElement = $(dest);
    // move Scroll
    $('html, body').animate({
        scrollTop: destElement.offset().top - 80
    }, 1450, 'easeInOutExpo');
    e.preventDefault();
});

// This JS Script has been created by Adithya