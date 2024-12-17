function genereerTafel(getal) {
    const container = document.getElementById('tafelContainer');
    container.innerHTML = '';

    for (let i = 1; i <= 10; i++) {
        const resultaat = i * getal;
        container.innerHTML += i + " x " + getal + " = " + resultaat + "<br>";
    }
}

window.onload = function() {
    const defaultValue = document.getElementById('getalInput').value;
    genereerTafel(defaultValue);

    document.getElementById('generateBtn').addEventListener('click', function() {
        const inputValue = document.getElementById('getalInput').value;
        genereerTafel(inputValue);
    });
};
