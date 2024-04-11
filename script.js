// Skrypt do obliczeń
function calculate() {
  // Pobranie wartości z pól tekstowych
  const inputValue = parseFloat(document.getElementById("inputVariable").value);
  const secondValue = parseFloat(
    document.getElementById("secondVariable").value
  );

  // Obliczenia
  const additionResult = inputValue + secondValue;
  const subtractionResult = inputValue - secondValue;
  const multiplicationResult = inputValue * secondValue;
  const divisionResult = inputValue / secondValue;

  // Wyświetlenie wyników w divach
  document.getElementById(
    "additionResult"
  ).innerText = `Dodawanie: ${additionResult}`;
  document.getElementById(
    "subtractionResult"
  ).innerText = `Odejmowanie: ${subtractionResult}`;
  document.getElementById(
    "multiplicationResult"
  ).innerText = `Mnożenie: ${multiplicationResult}`;
  document.getElementById(
    "divisionResult"
  ).innerText = `Dzielenie: ${divisionResult}`;
}
