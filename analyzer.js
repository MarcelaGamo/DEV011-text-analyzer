//TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length; 
  },

  //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.//
  getCharacterCount: (text) => {
    return text.length;
  },

  //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => { // esta funcion me ayuda
    const textWithoutPunctuation = text.replace(/[^\w\s]/g, ''); // a crear un margen
    const textWithoutSpaces = textWithoutPunctuation.replace(/\s/g, '');
    return textWithoutSpaces.length;
  },

  //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  getAverageWordLength: (text) => {  
    const words = text.split(' '); //divide texto e palabras 
    let totalLength = 0; // se uctiliza para mantener la suma total de las longitudes 
    for (let i= 0; // declara una variable i = 0 para recorrer las posiciones del array 'word'
      i <words.length; i++) { // mientras i sea menor quel array esta se seguira ejecutando
      totalLength += words[i].length; 
    }
    const  averageLength = totalLength / words.length; //Suma total de palabras / catidad de palaras de texto
    return parseFloat(averageLength.toFixed(2)); //toFixed redondea a 2 decimales y PaseFloat convierte numero decimal
  },
    
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const regex = /\b\d+(\.\d+)?\b/g; //Buscar numeros en textos
    const matches = text.match(regex); // Devulve la coincidencias encontradas 
    if (!matches) {
      return 0;
    }
    return matches.length;
    
  },
  
  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.

  getNumberSum: (text) => {
    const numbers = text.match(/\d+/g);
    if (!numbers) return 0;
    const sum = numbers.reduce((total, number) => total + parseInt(number, 10), 0);
    return sum;
    
  },
}
export default analyzer;