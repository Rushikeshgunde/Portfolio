$(document).ready(function () {
    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle')
    });

    $(window).on('scroll load', function () {
        
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')
        
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }
    })
});

// smooth scrolling

$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();
    $('body,html').animate({
        scrollTop: $($(this).attr('href')).offset().top
    },
        500,
        'linear'
    )
})

// typewritter

const texts = [
    "FRONT-END DEVELOPER",
    "REACT DEVELOPER",
    
]

let speed = 100;
const textElements = document.querySelector(".typewriter");

let textindex = 0;
let charIndex = 0;

function typewritter() {
    if (charIndex < texts[textindex].length) {
        textElements.innerHTML += texts[textindex].charAt(charIndex);
        charIndex++;
        setTimeout(typewritter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, - 1);
        setTimeout(eraseText, 50);
    } else {
        textindex = (textindex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typewritter,500)
    }
}

window.onload=typewritter