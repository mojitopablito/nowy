
function calculate() {
    const number1 = parseInt(document.getElementById('kwiiatki').value);
    const number2 = parseInt(document.getElementById('gowno').value);

    const wynik = number1 + number2;

    document.getElementById('result').innerText = "Wynik: "+wynik;
}
