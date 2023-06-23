// Smooth scrolling
$(document).ready(function () {
    $('a[data-scroll]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.getAttribute('data-scroll'));
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 2000);
        }
    });
});

// ScrollReveal animations
ScrollReveal().reveal('.hero-content', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.section', {
    delay: 300,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.projectsection', {
    delay: 500,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.skill', {
    delay: 250,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out'
});

// Obfuscate and insert the email address
document.addEventListener("DOMContentLoaded", function () {
    var emailPlaceholder = document.getElementById("email-placeholder");
    var emailAddress = "moc.liamtoh@resuah.lyrehs".split("").reverse().join("");
    emailPlaceholder.innerHTML = '<a href="mailto:' + emailAddress + '">' + emailAddress + '</a>';
});

