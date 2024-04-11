// Skrypt do mnożenia przez 2
function multiplyByTwo() {
    const inputValue = parseFloat(document.getElementById('inputVariable').value);
    const result = inputValue * 2;
    document.getElementById('multiplicationResult').innerText = `Wynik mnożenia przez 2: ${result}`;
}
