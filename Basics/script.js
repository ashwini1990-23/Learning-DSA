"use strict";
/*
// Programming 101
console.log("Hello World!");
console.log("Ashwini Patil");

const a = 10;
const b = 20;

const sum = a + b;
const multiply = a * b;

console.log(multiply);
console.log(sum);

let x = 10;
x = 20;
console.log(x);

let firstName = "Ashwini";
let lastName = "Patil";

let fullName = firstName + " " + lastName;
console.log(fullName);

let arr = [1, 2, 3, 4];
console.log(arr);
console.log(arr[3]);

///////////////////////////////////////
// Loops 01
for (let i = 0; i <= 4; i++) {
  console.log("Hello World!");
}

for (let i = 3; i < 5; i++) {
  console.log("Hello World!");
}

for (let i = 2; i < 9; i = i + 2) {
  console.log("Hello World!", i);
}

for (let i = 5; i > 0; i--) {
  console.log("Hello", i);
}

for (let i = 5; i < 4; i++) {
  console.log("hello", i);
}

const greet = function (i) {
  console.log("Namaste....", i);
};
for (let i = 0; i < 5; i++) {
  greet(i);
}

// Print all the even numbers in array
const numArray = [10, 5, 21, 0, 8, 3];
let length = numArray.length;
console.log(numArray[0], length);
// console.log(numArray[6]);
console.log("Even numbers of array----");
for (let i = 0; i < length; i++) {
  if (numArray[i] % 2 === 0) {
    console.log(numArray[i]);
  }
}
// while loop
let i = 0;
while (i < 5) {
  console.log("Hello..");
  i++;
}

/////////////////////////////////
// Loops 02
// Q1: Write a function to search for an element in an array and returns the index, if the element is not present then just return -1
const arr1 = [4, 2, 0, 10, 8, 30];
const elementSearch = function (arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (element === arr[i]) {
      // console.log(`Element ${element} is present in an array`);
      return i;
    }
  }
  return -1;
};

let result = elementSearch(arr1, 10);
console.log(result);
result = elementSearch(arr1, 49);
console.log(result);

// Q2: Write a function that returns the number of negative numbers in as array
const numberArray = [2, -9, 17, 0, 1, -10, -4, 8, -1, -1];
const negativeNumbers = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      // count = count + 1;
      count++;
    }
  }
  return count;
};

const counts = negativeNumbers(numberArray);
console.log("Total negative numbers in an array: ", counts);

// Q3: Write the function that returns the largest number in an array
let arrLargest = [50, 0, 7, 10, 8, 17, 1];
// let arrLargest = [-9, -19, -3];
const largestNumber = function (arr) {
  // let largest=0;
  // let largest=arr[0];
  let largest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};

const largest = largestNumber(arrLargest);
console.log("Largest number in an array is: ", largest);


//////////////////////////////////////////
// Second Largest number in an array
// let secondLargestArray = [4, 9, 0, 2, 8, 7, 1];
let secondLargestArray = [1, 9, 34, 9];
const secondLargest = function (arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  if (arr.length === 0) {
    return "Array is empty, there are no elements!";
  }
  if (arr.length < 2) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
      secondLargest = arr[i];
    }
  }
  console.log(firstLargest, secondLargest);
  return secondLargest;
};

const res = secondLargest(secondLargestArray);
console.log(res);

////////////////////////////////////////////
// Loop in Loop(Nested Loop)
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log("i=" + i + " j=" + j);
  }
}

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}

console.log("------- j<=i ---------");
for (let i = 0; i < 5; i++) {
  for (let j = 0; j <= i; j++) {
    console.log(i, j);
  }
}

console.log("------------ j=i & j>0------------");
for (let i = 0; i < 3; i++) {
  for (let j = i; j > 0; j--) {
    console.log(i, j);
  }
}

console.log("------------ j=i & j>=0------------");
for (let i = 0; i < 3; i++) {
  for (let j = i; j >= 0; j--) {
    console.log(i, j);
  }
}

console.log("------- i=5 ---------");
for (let i = 5; i > 0; i--) {
  for (let j = 0; j < i; j++) {
    console.log(i, j);
  }
}
*/

/*
///////////////////////////////////
// Star Pattern
   
let n = 6;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 1; i <= n; i++) {
  let row = "";

  // for (let j = 0; j < i + 1; j++)
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 1; i <= 4; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + j;
    // row = row + j;
  }
  console.log(row);
}

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
    // row = row + j;
  }
  console.log(row);
}

console.log("-------------");
let n1 = 5;
for (let i = 0; i < n1; i++) {
  let row = "";
  for (let j = 0; j < n1 - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n1; i++) {
  let row = "";
  for (let j = 0; j < n1 - i; j++) {
    row = row + "*";
  }
  console.log(row);
}
let n3 = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " . ";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + " * ";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  let swirch = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + swirch;
    if (swirch === 1) swirch = 0;
    else swirch = 1;
  }
  console.log(row);
}
let swirch = 1;
for (let i = 0; i < 5; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + swirch;
    if (swirch === 1) swirch = 0;
    else swirch = 1;
  }
  console.log(row);
}
 */

//////////////////////////////////
// Count Digit: Write a function that returns the count of digits in a number

const countDigits = function (num) {
  // If num is 0
  if (num === 0) return 1;

  // Change/ convert -ve number to positive number
  num = Math.abs(num);

  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
};

let num = -10;
let result = countDigits(num);
console.log(result);

console.log(Math.abs(-98));

// Revision of Star Pattern
let n = 5;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + (i + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + ".";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

for (let i = 0; i < n; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

let toggle = 1;
for (let i = 0; i < n; i++) {
  let row = "";

  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle === 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

/////////////////////////////////////
// Palindrome: An integer is a palindrome when it reads the same forward and backward E.g: 121
console.log("------------ Palindrome --------------");
const isPalindrome = function (number) {
  if (number < 0) return false;
  const numberCopy = number;
  let reverse = 0;
  let rem;
  while (number > 0) {
    rem = number % 10;
    reverse = reverse * 10 + rem;
    number = Math.floor(number / 10);
  }
  // console.log(reverse);
  // if (reverse === numberCopy) {
  //   return true;
  // } else {
  //   return false;
  // }
  return reverse === numberCopy;
};

const resultPalindrome = isPalindrome(34);
console.log(resultPalindrome);

//////////////////////////////////////
// Reverse an integer
const reverseInteger = function (num) {
  // if (num < 0) return false;
  let numCopy = num;
  // Convert -ve number to +ve number
  num = Math.abs(num);
  let rev = 0;
  let rem;
  while (num > 0) {
    rem = num % 10;
    rev = rev * 10 + rem;
    num = Math.floor(num / 10);
  }
  let limit = Math.pow(2, 31); // limit= 2 ** 31;
  if (rev < -limit || rev > limit - 1) return 0;
  // if (numCopy < 0) {
  //   // rev = -rev;
  //   return -rev;
  // } else return rev;
  return numCopy < 0 ? -rev : rev;
};

const reversedNumber = reverseInteger(-12345678988);
console.log(reversedNumber);
