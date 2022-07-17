
document.addEventListener('DOMContentLoaded', function () {
    let GetQuoteButton = document.querySelector('#getQuote');
    GetQuoteButton.addEventListener('click', function() {

        // Create the arrays
        let quotes = new Array(4);
        let sources = new Array(4);

        // Initialize the arrays with quotes
        quotes[0] = "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.";
        sources[0] = "Albert Einstein";

        quotes[1] = "Be yourself; everyone else is already taken.";
        sources[1] = "Oscar Wilde";

        quotes[2] = "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.";
        sources[2] = "Bernard M. Baruch";

        quotes[3] = "You know you're in love when you can't fall asleep because reality is finally better than your dreams.";
        sources[3] = "Dr. Seuss";

        // Get a random index into the arrays
        i = Math.floor(Math.random() * quotes.length);

        document.getElementById('QuoteText').innerHTML = "\"" + quotes[i] + "\""+"<em>- " + sources[i] + "</em>";
        ModalQuote = new bootstrap.Modal(document.getElementById('Quote'), { keyboard: false });
        ModalQuote.show();

    });
});
