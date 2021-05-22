 
var data = [
    {
      name: "Butters",
      age: 3,
      type: "dog"
    },
    {
      name: "Lizzy",
      age: 6,
      type: "dog"
    },
    {
      name: "Red",
      age: 1,
      type: "cat"
    },
    {
      name: "Joey",
      age: 3,
      type: "dog"
    },
    {
      name: "Pochi",
      age: 3,
      type: "dog"
    }
  ];
  
  // write a function that will sum all of the dogs ages in dog years using for loop.
  // 1 human year = 7 dog year
  
  // your code goes here
  
  function sumofAges() {
    var sum = 0;
  for (let i = 0; i < data.length; i ++) {
  sum = sum + data[i].age*7;
  }
  return(sum);
  }
  
   // Solution is 105
  
  // Write the same function using
// 1. filter - for filtering the cat or dog
const ages = data.filter((animal) => {
  return animal.type === 'dog';
})

// 2. map - to multiply human year to dog year
.map((animal) => {
  return animal.age *= 7
})

// 3. reduce - to accumulate total age.
.reduce((total, animal) => {
  return total + animal.age;
})
  // 1. filter - for filtering the cat or dog
  // 2. map - to multiply human year to dog year
  // 3. reduce - to accumulate total age.
  
  // Solution 105