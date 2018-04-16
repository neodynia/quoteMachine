$(document).ready(function () {
    $('#getNew').on('click', function () {
    
        $.getJSON('https://random-quote-generator.herokuapp.com/api/quotes/random',
        function (quoteObj) {
        $('#quote-body').text(quoteObj.quote);
        $('#quote-author').text(quoteObj.author);
        });
    });
});