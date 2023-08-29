//TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(/\s+/);
    return words.length; 
  },

//TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCount: (text) => {
    return text.length;
  },

//TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  getCharacterCountExcludingSpaces: (text) => {
    const textWithoutPunctuation = text.replace(/[^\w\s]/g, '');
    const textWithoutSpaces = textWithoutPunctuation.replace(/\s/g, '');
      return textWithoutSpaces.length;
  },

//TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
getAverageWordLength: (text) => {  
  const words = text.split(/\s+/); //divide texto e palabras 
  let totalLength= words.join('').length; // se uctiliza para mantener la suma total de las longitudes 
  //for (let i= 0; // declara una variable i = 0 para recorrer las posiciones del array 'word'
   // i <words.length; i++) {  // mientras i sea menor quel array esta se seguira ejecutando
    //totalLength += words[i].length; 
    //console.log (totalLength);
  //}
  //hacer la division 
    return totalLength/words.length;
},
//TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
  getNumberCount: (text) => {
    const numbers = text.match(/\d+/g);
    return numbers ? numbers.length : 0;
  
  },

  //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  getNumberSum: (text) => {
      let numbers = text.match(/\d+/g);
      if (!numbers) return 0;
      const sum = numbers.reduce((total, number) => total + parseInt(number, 10), 0);
      return sum;
  },
}

export default analyzer;
