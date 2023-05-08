// 1) Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

let arr = [1, 2, 3, 4, 5];
let result = findPair(arr, 8);
console.log(result);

function findPair(arr, num) {
  let pair = [];
  let i, j;

  for (i = 0; i < arr.length - 1; i++) 
  {
    for (j = i + 1; j < arr.length; j++) 
    {
      if (arr[i] + arr[j] == num) {
        pair.push(arr[i], arr[j]);
        return pair;
      }
    }
  }
  if (i == arr.length - 1) {
    return null;
  }
}



// 2) Write a function that takes a string as input and returns the reverse of the string.

str = "hello"
console.log(reverseString(str));

function reverseString(string) {
    let revString = ""
    for (let i = string.length-1; i >= 0; i--) {
        revString+=string[i] 
    }
    return revString
}



// 3) Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

let arra = [1, 2, 3, 4, 6];

function toFindSum(arr) {
  let firstMax = findMax(arr);

  arr.splice(arr.indexOf(firstMax), 1);

  let secMax = findMax(arr);

  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  return firstMax + secMax;
}
console.log(`Sum is ${toFindSum(arra)}`);



// 4) Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

let strings = ["hi", "hello", "hey", "howdy"];

function filterStrings(strings) {
  for (let i = 0; i < strings.length; i++) 
  {
    if (strings[i].length <= 3) {
      strings.splice(i, 1);
    }
  }
  return strings;
}

console.log(filterStrings(strings));



// 5) Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function findEven(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] % 2 == 0)) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(findEven(arr));



// 6) Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.

arr = [{
  name: "John",
  age: 22,
  city: "Karachi"
},
{
  name: "Jane",
  age: 19,
  city: "Karachi"
},
{
  name: "Ali",
  age: 21,
  city: "Karachi"
},
]

console.log(pluck(arr));

function pluck(objects) {
  let newArr = []
  for (let i = 0; i < objects.length; i++) {
    newArr.push(objects[i].name)
  }
  return newArr
}



// 7) Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

str = "rotator";
console.log(isPalindrome(str));

function isPalindrome(str) {
  let length = str.length, i;

  for (i = 0; i < Math.floor(length / 2); i++) {
    if (str[i] != str.charAt(length - 1 - i)) {
      break;
    }
  }
  if (i == Math.floor(length / 2)) {
    return true;
  } else {
    return false;
  }
}



// 8) Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.



str = "hello world";
function findFrequency(str) {
  let i, j, count, frequency = 1, char;

  for (i = 0; i < str.length - 1; i++) {
    count = 1;
    for (j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > frequency) {
      frequency = count
      char = str[i]
    }
  }
  return char;
}

console.log(findFrequency(str));



// 9) Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

arr = ["hi", "hello", "hey", "howdy"];

function stringLengths(strings) {
  let lengths = [];
  for (let i = 0; i < strings.length; i++) {
    lengths.push(strings[i].length);
  }
  return lengths;
}

console.log(stringLengths(arr));



// 10) Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

arr = [1, 5, 9, 20];

function firstGreater(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) {
      return i;
    }
  }
}
console.log(firstGreater(arr));

