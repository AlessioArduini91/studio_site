$(document).ready(function () {

    var windowHeight;

    init();

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
                $('.subject-title').find('p').text("Diritto di Famiglia");
                $('.subject-description').find('ul').html('<li>Separazioni e divorzi</li>' +
                    '<li>Amministrazioni di Sostegno</li>' +
                    '<li>Successioni Ereditarie </li>' +
                    '<li>Divisioni Immobiliari</li>');
                break;
            case 'second':
                $('.subject-title').find('p').text("Proprietà e Possesso");
                $('.subject-description').find('ul').html('<li>Usucapione</li>' +
                    '<li>Servitù</li>');
                break;
            case 'third':
                $('.subject-title').find('p').text("Contratti e obbligazioni");
                $('.subject-description').find('ul').html('<li>Obbligazioni</li>' +
                    '<li>Contratti di Locazione</li>' +
                    '<li>Contratti di Appalto</li>' +
                    '<li>Recupero Crediti ed Esecuzioni</li>' +
                    '<li>Contratti di Vendita</li>');
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