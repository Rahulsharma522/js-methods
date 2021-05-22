// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Find largest number in numbers

var maxNum = Math.max(...numbers);
console.log(maxNum);

// Find longest string in strings

var lengthArray = [];
 var num = 0;
 var longestString = "";
 strings.forEach(function(element){
     if (element.length > num){
          num = element.length;
          longestString = element;
     }
 });

// Find all the even numbers

var evenArray = numbers.filter(element => element % 2 == 0);
console.log(evenArray); // [12, 4, 18, 6]

// Find all the odd numbers

var oddArray = numbers.filter(element => element % 2);
console.log(oddArray); // [1, 9, 7, 11, 3, 101, 5]

// Find all the words that contain 'is' use string method 'includes'

console.log(strings.includes('is'));

// Find all the words that contain 'is' use string method 'indexOf'
   
console.log(strings.indexOf('is'));
// Check if all the numbers in numbers array are divisible by three use array method (every)
function divide(num){
    if (num%3 == 0){
    console.log(num);
    }
    }
    numbers.every(divide)

//  Sort Array from smallest to largest

   console.log(strings.sort())

 // Remove the last word in strings
   strings.pop();

// Add a new word in the array
  strings.push("sentences")

// Remove the first word in the array
    strings.shift();

// Place a new word at the start of the array use (upshift)
 strings.unshift("words");

// Make a subset of numbers array [18,9,7,11]
 numbers.slice(3,7);

// Make a subset of strings array ['a','collection']
  strings.slice(2,4);
// Replace 12 & 18 with 1221 and 1881
console.log(numbers.toString().replace(18,1881).split(" "));
console.log(numbers.toString().replace(12,1221).split(" "));

// Replace words with string in strings array
strings.toString().replace("word", "string").split(",")

// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jaya", lastname: "lili" }
];

// Find all customers whose firstname starts with 'J'
var nameStartsWith;
  for (let key in customers) {
  nameStartsWith = (customers[key].firstname.charAt(0));
  if(nameStartsWith == "J") {
  console.log(customers[key]);
  }
}
// Create new array with firstname and lastname
var arr = [
  { firstname: "rahul", lastname: "sharma"},
  { firstname: "karan", lastname: "sharma"},
  { firstname: "parush", lastname: "sharma"}

];


// Sort the array created above alphabetically
arr.sort(function(one, two){
    if(one.firstname < two.firstname){ return -1; }
    return -1
    if(one.firstname < two.firstname){ return 1; }
    return 0;
});
