$(document).ready(function () {

    var windowHeight;
    var customNavbar = $("#customNavbar");

    init();
    
    customNavbar.on("click", "a", null, function () {
        customNavbar.collapse('hide'); 
        setTimeout(function() {
            $('.navbar').hide();   
        }, 100);
    });

    $('#studyCarousel').carousel({
        interval: false
    });

    $('#studyCarousel').bind('slide.bs.carousel', function (e) {
        var title = $('.subject-title')[0];
        var newTitle = title.cloneNode(true);
        title.parentNode.replaceChild(newTitle, title);
        var description = $('.subject-description')[0];
        var newDescription = description.cloneNode(true);
        description.parentNode.replaceChild(newDescription, description);
        switch (e.relatedTarget.id) {
            case 'first':
                $('.subject-title').find('p').text("Aree di Attività (1/2)");
                $('.subject-description').find('ul').html('<li>Diritto di famiglia</li>' +
                    '<li>Amministrazione di Sostegno</li>' +
                    '<li>Successioni e Donazioni</li>' +
                    '<li>Obbligazioni e Contratti</li>');
                break;
            case 'second':
                $('.subject-title').find('p').text("Aree di Attività (2/2)");
                $('.subject-description').find('ul').html('<li>Proprietà e Diritti Reali</li>' +
                    '<li>Locazione e Procedimenti di Sfratto</li>' +
                    '<li>Comunione e Condominio</li>' +
                    '<li>Responsabilità Medica</li>' +
                    '<li>Infortunistica Stradale</li>');
                break;
            default:
                break;
        }
    });

});

function init() {
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
}

function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    window.onscroll = function (e) {  
        setTimeout(function() {
            $('.navbar').show();
        }, 50);
    } 
}

function checkPosition() {
    var titlePositionFromTop = $('.subject-title')[0].getBoundingClientRect().top;
    var descriptionPositionFromTop = $('.subject-description')[0].getBoundingClientRect().top;

    if (titlePositionFromTop - windowHeight <= 0) {
        $('.subject-title').addClass('animate-title');
    }

    if (descriptionPositionFromTop - windowHeight <= 0) {
        $('.subject-description').addClass('animate-description');
    }
}