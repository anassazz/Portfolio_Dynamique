
$(document).ready(function () {
    // Fonctionnalité : Basculer le mode sombre
    $('#darkModeToggle').click(function () {
        $('body').toggleClass('bg-dark text-white');
        $('.navbar').toggleClass('navbar-light bg-light navbar-dark bg-dark');
        $(this).toggleClass('btn-outline-dark btn-outline-light');
        const isDarkMode = $('body').hasClass('bg-dark');
        $(this).text(isDarkMode ? 'Mode Clair' : 'Mode Sombre');
    });

    // Fonctionnalité : Animation de défilement pour les liens de navigation
    $('.nav-link').click(function (e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - $('.navbar').outerHeight()
        }, 800);
    });

    // Fonctionnalité : Formulaire de contact avec validation et message de confirmation
    $('#contactForm').submit(function (e) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const message = $('#message').val();

        if (name && email && message) {
            alert(`Merci, ${name} ! Votre message a été envoyé avec succès.`);
            $(this)[0].reset();
        } else {
            alert('Veuillez remplir tous les champs.');
        }
    });

    // Fonctionnalité : Charger plus de projets (simulation)
    let projectsVisible = 3;
    $('#loadMore').click(function () {
        const totalProjects = $('.card').length;

        projectsVisible += 3;
        $('.card').slice(0, projectsVisible).fadeIn();

        if (projectsVisible >= totalProjects) {
            $(this).hide();
        }
    });

    // Initialisation : Afficher les 3 premiers projets
    $('.card').hide().slice(0, projectsVisible).show();
});

///////////////////////////////////////////////////////////////////////////aton


////Scroll to Top Button
$(document).ready(function () {
    // Show the button when scrolling down
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) { // If scrolled more than 200px from top
            $('#scrollToTopBtn').fadeIn();
        } else {
            $('#scrollToTopBtn').fadeOut();
        }
    });
  
    // Scroll to the top when the button is clicked
    $('#scrollToTopBtn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600); // Scrolls smoothly to the top
        return false;
    });
  });
  