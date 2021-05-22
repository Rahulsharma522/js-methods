var words = [
    'mystery',
    'brother',
    'aviator',
    'crocodile',
    'pearl',
    'orchard',
    'crackpot'
  ];
  //Write a function findLongestWord that takes an array of words and returns the longest one.
  //If there are 2 with the same length, it should return the first occurrence.
  function findLongestWord(){
      var findLongestWord = "";
      for(i = 0; i < words.length; i++){
          if(words[i].length > longestword.length){
              longestword = words[i];
          }
      }
      return longestword;
  }
  console.log(findLongestWord());
  
 var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
  // Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
  // Use reduce method of array
  // Use the above sum and calculate the average.
  var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10]
   var summary = (accumulator, currentValue) => accumulator + currentValue;
         console.log(numbers1.reduce(summary));

   function averageNumbers (arr) {
     return reducer(numbers1)/numbers1.length
}

console.log(averageNumbers(numbers1));
  // Output is 87
  
  
  
  var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
  //Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
  
  var averageNumbers = (accumulator, currentValue) => accumulator + currentValue;
 var total = numbers2.reduce(averageNumbers)
    console.log(total);
  var average = total/numbers2.length;
   console.log(average);

  // output is 48 and 6
  
  var words2 = [
    'seat',
    'correspond',
    'linen',
    'motif',
    'hole',
    'smell',
    'smart',
    'chaos',
    'fuel',
    'palace'
  ];
  //Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

  function averageWordLength(array){
    var wordslength = 0;
    array.forEach((e) => wordslength += e.length)
    return wordslength / array.length
  }