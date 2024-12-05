let div = document.getElementById('movingDiv');
let button = document.getElementById('changeDirectionButton');
let position = 0; // Begint op positie 0
let speed = 2; // Verplaatsing per interval (pixels)
let direction = 1; // 1 voor rechts, -1 voor links

// Lijst van kleuren voor de div
let colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
let colorIndex = 0; // Houdt bij welke kleur de div nu heeft

// Functie om de richting van de beweging en de kleur te veranderen bij knopdruk
button.addEventListener('click', function() {
    // Verander de kleur van de div bij elke knopdruk
    colorIndex = (colorIndex + 1) % colors.length; // Verhoog de index en herhaal bij het einde van de lijst
    div.style.backgroundColor = colors[colorIndex]; // Verander de kleur van de div
    
    // Omkeer de richting bij elke knopdruk
    direction *= -1;
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
