document.addEventListener('DOMContentLoaded', function() {
    const introText = "Discover the darkest sounds of the underground.";
    const introTextElement = document.getElementById('intro-text');
    let index = 0;

    function typeIntroText() {
        if (index < introText.length) {
            introTextElement.textContent += introText.charAt(index);
            index++;
            
            setTimeout(typeIntroText, 50); // Задержка в миллисекундах между добавлением каждой буквы
        }
    
    }

    typeIntroText();
});

window.onload = play();
document.getElementById('tryAgain').addEventListener('click', () => { play() });

function play() {
    var logoTitle = 'Welcome to 𝔰𝔦𝔫𝔣𝔲𝔩𝔢𝔳𝔢𝔯 𝔭𝔩𝔞𝔠𝔢 label';
    var possible = "";
    var logoTitleContainer = document.getElementById('other-text');
    var index = 0;

    logoTitleContainer.style.fontSize = '45px';
 
    function generateRandomTitle() {
        var logoRandom = logoTitle.substring(0, index);
        for (var j = index; j < logoTitle.length; j++) {
            logoRandom += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        logoTitleContainer.textContent = logoRandom;
        index++;
        if (index <= logoTitle.length) {
            setTimeout(generateRandomTitle, 20);
        }
    }

    generateRandomTitle();
}
