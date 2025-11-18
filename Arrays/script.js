"use strict";

/* 
Problem 1: Remove Duplicates from Sorted Array
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.
*/

const removeDuplicates = function (nums) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > nums[x]) {
      // x = x + 1;
      x++;
      nums[x] = nums[i];
    }
  }
  return x + 1;
};

// const result = removeDuplicates([1, 1, 2]);
const result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3]);
console.log(result);

/*
Problem 2: Remove element from an array
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/
function removeElement(nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x++;
    }
  }

  return x;
}

console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

/*
Problem 3: Reverse a string
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.
*/
const reverseString = function (s) {
  let len = s.length;
  let halfLength = Math.floor(len / 2);
  for (let i = 0; i < halfLength; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  console.log(s);
  // return s;
};

// const resultString = reverseString(["h", "e", "l", "l", "o"]);
// console.log(resultString);
// console.log(reverseString(["H", "a", "n", "n", "a", "h"]));

/*
Problem 4: Best time to buy and sell stocks
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
const maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  let profit = 0;
  for (let i = 1; i <= prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }
  return maxProfit;
};

const maxResult = maxProfit([7, 1, 5, 3, 6, 4]);
console.log(maxResult);
