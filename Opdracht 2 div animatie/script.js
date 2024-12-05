let div = document.getElementById('movingDiv');
let button = document.getElementById('changeDirectionButton');
let position = 0; // Begint op positie 0
let speed = 2; // Verplaatsing per interval (pixels)
let direction = 1; // 1 voor rechts, -1 voor links

// Functie om de richting van de beweging te veranderen
button.addEventListener('click', function() {
    direction *= -1; // Omkeert de richting
});

// Beweeg de div elke 100 milliseconden
setInterval(function() {
    position += speed * direction; // Beweeg in de juiste richting
    div.style.left = position + 'px'; // Wijzig de left stijl van de div

    // Stop de beweging als de div het einde van de pagina bereikt
    if (position > window.innerWidth - 50 || position < 0) {
        direction *= -1; // Verander de richting als de div het einde bereikt
    }
}, 100);

