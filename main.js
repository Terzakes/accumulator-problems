/*
----------------------------------------
SAMPLE
----------------------------------------

Challenge: Write function named test that returns the string "This Works!".
Solution: This one has already been complete for you.
*/

function test() {
 return "This Works!";
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named sum that will take an array of numbers and return the sum of them

Example: if you pass it [1,2,3] then it should return 6 (which is 1 + 2 + 3)
*/

function sum (arr) {
  return arr.length ? arr.reduce((a, b) => a + b) : 0;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleNumbers that will take an array of numbers and return an array with those numbers doubled

Example: if you pass it [1,2,3] then it should return [2,4,6]
*/

function doubleNumbers (arr) {
  return arr.map(e => e * 2);
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named multiplyNumbers that will take an array of numbers and
return an array with those numbers multiplied by another value

Examples:

- if you call multiplyNumbers([1,2,3], 0) you'd get [0,0,0]
- if you call multiplyNumbers([1,2,3], 5) you'd get [5,10,15]
*/

function multiplyNumbers (arr, num) {
  return arr.map(e => e * num);
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named doubleLetters that will take a string and double every letter in the string

Example: if you pass it "abc" then it should return "aabbcc"
*/

function doubleLetters(str) {
  var newStr = [];
  for (let i = 0; i < str.length; i++) {
    newStr.push(str[i]);
    newStr.push(str[i]);
  }
  return newStr.join('');
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named interleave that will take two arrays and interleaves them

Example: if you pass it ["a", "b", "c"] and ["d", "e", "f"] then it should return ["a", "d", "b", "e", "c", "f"]

NOTE: you can assume each input will be the same length
*/

function interleave (arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named createRange that will take a number and a default value and return an array of that many values

Example: if you pass it 4 and "Hello" then it should return ["Hello", "Hello", "Hello", "Hello"]
*/

function createRange(number, value) {
  let arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(value);
  }
  return arr;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named flipArray that will take an array and return an object where the keys are the items and the values are the indices

Example:

If you pass it ["quick", "brown", "fox"] then it should return { "quick": 0, "brown": 1, "fox": 2 }
*/

function flipArray(array) {
  const obj = {};
  array.map((e, i) => obj[e] = i);
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named arraysToObject that will take an array of 2-element arrays, and return an object of key/value pairs

Example:

If you pass it [[2014, "Horse"], [2015, "Sheep"]] then it should return { 2014: "Horse", 2015: "Sheep" }

*/

function arraysToObject(array) {
  const obj = {};
  array.map(e => obj[e[0]] = e[1]);
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write function named reverseString that will reverse a string without calling the built-in .split or .reverse methods

Example:

If you pass it "hello" then it should return "olleh"
*/

// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

function reverseString(string) {
  const arr = [];
  for (let i = string.length; i > -1; i--) {
    arr.push(string[i]);
  }
  return arr.join('');
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named repeats that returns true if the first half of the string equals the last half, and false if not

Example:

If you pass it "haha" then it should return true because "ha" (the first half) equals "ha" (the second half)
If you pass it "yay" then it should return false because it's odd
If you pass it "heehaw" then it should return false because "hee" doesn't equal "haw"
*/

function repeats(string) {
  if (!string.length) {
    return true;
  } else if (string.length % 2 === 0) {
    const str1 = string.substring(0, string.length / 2);
    const str2 = string.substring(string.length / 2);
    return str1 === str2;
  } else {
    return false;
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named everyOther that returns every other character in the string

Example:

If you pass it "abcdef" then it should return "ace" because those represent every other letter
*/

function everyOther(string) {
  let newStr = [];
  for (let i = 0; i < string.length; i += 2) {
    newStr.push(string[i]);
  }
  return newStr.join('');
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named allEqual that returns true if every character in the string is the same

Example:

If you pass "aaa" it should return true
If you pass "aba" it should return false
*/
function allEqual(string) {
  if (string.length) {
    for (let i = 0; i < string.length; i++) {
      if (string[i] !== string[string.length - 1]) {
        return false;
      } else {
        return true;
      }
    }
  } else {
    return true;
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumLetters that returns the sum of every character in the string

Example:

If you pass "45" it should return 9
If you pass "246" it should return 10
*/
function sumLetters(string) {
  return string.length ? string.split('').map(e => Number(e)).reduce((a, b) => a + b) : 0;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named countVowels that returns the number of vowels in a string, excluding "y"

Example:

If you pass "you" it should return 2
*/

function countVowels(string) {
  return string.length ? string.match(/[AaEeIiOoUu]/g).length : 0;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named split that takes a string and returns an array of the letters

Example:

If you pass "you" it should return ["y", "o", "u"]

NOTE: do not use the builtin `split` method
*/

function split(string) {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    arr[i] = string[i];
  }
  return arr;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named getCodePoints that takes a string and returns an array of the codePoints of the letters

See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt

Example:

If you pass "Hello" it should return [ 72, 101, 108, 108, 111 ]
*/

function getCodePoints(string) {
  return string.split('').map(e => e.codePointAt(0));
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterMap that takes a string and returns an object of the letters and their positions in the string

Example:

If you pass "Yo" it should return {Y: 0, o: 1}
If you pass "Hello" it should return {H: 0, e: 1, l: 3, o: 4}
*/

function letterMap(string) {
  const obj = {};
  string.split('').map((e, i) => obj[e] = i);
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named letterCount that takes a string and returns an object with the letters and the number of their occurrences

Example:

If you pass "Yo" it should return {Y: 1, o: 1}
If you pass "Hello" it should return {"H": 1, "e": 1, "l": 2, "o": 1}
*/

function letterCount(string) {
  const obj = {};
  string.split('').map(e => obj[e] = obj[e] + 1 || 1);
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named threeOdds that takes 2 numbers and returns true if there are 3 odd numbers _between_ those two numbers

Example:

If you pass 0,2 it should return false because the only number between 0 and 2 is 1
If you pass 0,6 it should return true because between 0 and six (the numbers 1,2,3,4,5) there are three odds - 1, 3 and 5
*/

function threeOdds(num1, num2) {
  let count = 0;
  for (let i = num1; i < num2 + 1; i++) {
    if (count === 3) {
      return true;
    } else if (i % 2 !== 0) {
      count++;
    }
  }
  return false;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function called leftPad that takes a string, a length and a fill character and returns a string padded to length with the fill character

Example:

If you pass "a", 3, "*" it should return "**a" - that is, a string of length 3, padded on the left by the "*" character
*/

function leftPad(string, padNum, delimiter, i = padNum) {
  if (!padNum) {
    return string;
  } else {
    if (i <= string.length) {
      return string;
    } else {
      string = delimiter + string;
      return leftPad(string, --padNum, delimiter, i);
    }
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named createString that takes a number and a letter and creates a string of that many letters

Example:

If you pass "a", 3 it should return "aaa"
If you pass "b", 3 it should return "bb"
*/

function createString(number, letter) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr.push(letter);
  }
  return arr.join('');
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named factorial that takes a number and returns its factorial

Factorial of 4 means 4 * 3 * 2 * 1

Example:

If you pass 4 it should return 24 since that's 4 * 3 * 2 * 1
If you pass 5 it should return 120 since that's 5 * 4 * 3 * 2 * 1
*/

function factorial(number) {
  return !number ? 1 : number * factorial(number - 1);
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named arrayOfNumbers that takes a number and returns an array of all the numbers between 1 and that number, inclusive

Example:

If you pass 1 it should return [1]
If you pass 3 it should return [1,2,3]
*/

function arrayOfNumbers(number) {
  if (number === 0) {
    return [];
  }
  const arr = [];
  for (let i = 1; i < number + 1; i++) {
    arr.push(i);
  }
  return arr;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named evenOdd that takes a number and returns an object with the numbers and whether they are even or odd

Example:

If you pass 1,4 it should return {"1": "odd", "2": "even", "3": "odd", "4": "even"}
*/

function evenOdd(number1, number2) {
  if (number1 === 0 && number2 === 0) {
    return {};
  }
  const obj = {};
  for (let i = number1; i < number2 + 1; i++) {
    obj[i] = i % 2 === 0 ? 'even' : 'odd';
  }
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named growingKeys that takes a number and a string and returns an object where the keys are that string, repeated one more each time

Example:

If you pass 2,"d" it should return {"d": true, "dd": true}
*/

function growingKeys(number, letter) {
  const obj = {};
  for (let i = 1; i < number + 1; i++) {
    let str = '';
    for (let j = 0; j < i; j++) {
      str += letter;
    }
    obj[str] = true;
  }
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named every that takes an array and a value and returns true if every element of the array equals the value

Example:

If you pass [1,1], 1 it should return true
If you pass [1,2], 1 it should return false
*/

function every(array, num) {
  return !array.length ? true : (array[0] === num ? every(array.slice(1), num) : false);
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named some that takes an array and a value and returns true if at least one element of the array equals the value

Example:

If you pass [1,2], 1 it should return true
If you pass [3,2], 1 it should return false
*/

function some(array, num) {
  if (!array.length) {
    return false;
  } else {
    if (array[0] === num) {
      return true;
    } else {
      return some(array.slice(1), num);
    }
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named toSentence that takes an array and returns a string with the elements joined by commas, with a trailing 'and'

Example:

If you pass ["Sue", "Will"] it should return "Sue and Will"
If you pass ["Sue", "Will", "Rachel"] it should return "Sue, Will and Rachel"
*/

function toSentence(array, str = '') {
  if (!array.length) {
    return str;
  } else {
    if (array.length > 2) {
      str += array[0] + ', ';
      return toSentence(array.slice(1), str);
    } else if (array.length > 1) {
      str += array[0];
      return toSentence(array.slice(1), str);
    } else {
      str += ' and ' + array[0];
      return toSentence(array.slice(1), str);
    }
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named acronym that takes an array and returns a string that is an acronym of the items in the array

Example:

If you pass ["Sue", "Will"] it should return "SW"
If you pass ["Java", Script", "Object", "Notation"] it should return "JSON"
*/

function acronym(array) {
  return array.map(e => e[0]).join('');
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named min that takes an array and returns minimum value of the array

Example:

If you pass [0,-3,2,5] it should return -3
*/

function min(array, a = undefined) {
  if (!array.length) {
    return a;
  } else {
    if (array[0] < a || !a) {
      a = array[0];
    }
    return min(array.slice(1), a);
  }
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named index that takes an array of objects, and a property name, and returns an object where the keys are the specified property

Example:

If you pass [{id: 1, name: "Joe"}, {id: 2, name: "Sue"}] it should return {1: {id: 1, name: "Joe"}, 2: {id: 2, name: "Sue"}}

*/

function index(array, prop) {
  const obj = {};
  array.map((e, i, a) => obj[e[prop]] = a[i]);
  return obj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named invert that takes an object and returns an object where the keys and values have been inverted

Example:

If you pass {id: 1, name: "Joe"} it should return {1: "id", Joe: "name"}
*/

function invert(obj) {
  const newObj = {};
  Object.entries(obj).map(e => newObj[e[1]] = e[0]);
  return newObj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named addSignature that takes an object and a name, and returns an object where

- the keys are suffixed with "-signed"
- the values are suffixed with " - <name>"

Example:

If you pass {"contract": "foo"}, "Fred" it should return {"contract-signed": "foo - Fred"}
*/

function addSignature(name, obj) {
  if (!Object.entries(name).length) {
    return {};
  }
  const newObj = {};
  Object.entries(obj).map(e => newObj[e[0] + '-signed'] = e[1] + ` - ${name}`);
  return newObj;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named pairs that takes an object and returns an array of strings of key/value pairs

Example:

If you pass {name: "Will", age: 24} it should return ["name - will", "age - 24"]
*/

function pairs(obj) {
  return Object.entries(obj).map(e => `${e[0]} - ${e[1].toLowerCase()}`);
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named sumValues that takes an object and returns the sum of the values

Example:

If you pass {a: 1, b: 2} it should return 3
*/

function sumValues(obj) {
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
  }
  return sum;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named biggestProperty that takes an object and returns the name of the property with the highest value

Example:

If you pass {1999: 4036, 2000: 7654} it should return '2000'
*/

function biggestProperty(obj) {
  let largest = 0;
  let val;
  for (let key in obj) {
    if (obj[key] > largest) {
      largest = obj[key];
      val = key;
    }
  }
  return val;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named keyForValue that takes an object and a value and returns the name of the property that matches that value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return '1999'
*/

function keyForValue(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) return key;
  }
  return undefined;
}


/*
----------------------------------------
CHALLENGE
----------------------------------------

Write a function named containsValue that takes an object and a value and returns true if the object contains the value

Example:

If you pass {1999: 4036, 2000: 7654} and 4036, it should return true
*/

function containsValue(obj, val) {
  for (let key in obj) {
    if (obj[key] === val) return true;
  }
  return false;
}
