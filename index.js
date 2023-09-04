import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
// Dom references:
const userInput = document.querySelector('textarea');
const wordCount = document.querySelector('[data-testid="word-count"]'); 
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterNoSpacesCount = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]');
const tre = document.querySelector('[data-testid="average-word-lenght"]');
console.log (tre,"prueba1");


// al levantar la tecla me da los resultados

userInput.addEventListener('keyup', () => {
  const text = userInput.value; 
  const iCountC=analyzer.getWordCount(text);
  wordCount.innerHTML = "Total palabras:"+iCountC;
});
userInput.addEventListener('keyup', () => {
  const text = userInput.value; 
  const iCountC=analyzer.getCharacterCount(text);
  characterCount.innerHTML = "Total caracteres:"+iCountC;
});
userInput.addEventListener('keyup', () => {
  const text = userInput.value; 
  const iCountC=analyzer.getCharacterCountExcludingSpaces(text);
  characterNoSpacesCount.innerHTML = "Caracteres excluyendo espacios:"+iCountC;
});
userInput.addEventListener('keyup', () => {
  const text = userInput.value; 
  const iCountC=analyzer.getAverageWordLength(text);
  console.log (tre.textContent,"prueba");
  tre.innerHTML = "Longitud de palabras:"+iCountC;
  
});
userInput.addEventListener('keyup', () => {
  const text = userInput.value; 
  const iCountC=analyzer.getNumberCount(text);
  numberCount.innerHTML = "Total números:"+iCountC;
});
userInput.addEventListener('keyup', () => {
  const text = userInput.value; // input
  const iCountC=analyzer.getNumberSum(text);
  numberSum.innerHTML = "Suma números:"+iCountC;
});

const textarea = document.querySelector('[name="user-input"]');
const resetButton = document.getElementById('reset-button'); 
resetButton.addEventListener('click',function() { //Escuchar evento para qeue cuado yo haga click me traiga la informacion
  textarea.value="";
  wordCount.innerHTML="Recuento caracteres";
  characterCount.innerHTML="Recuento caracteres";
  characterNoSpacesCount.innerHTML="Recuento total caracteres";
  numberCount.innerHTML="Total numeros";
  numberSum.innerHTML="Suma todos los número";
  tre.innerHTML="longitud palabras";
});

 