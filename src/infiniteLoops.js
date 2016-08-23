(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    for (var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }
};

// 1. countVowels
var countVowels = function(inputString) {
	var vowelCount = 0;
	var vowelArray = ['a', 'e', 'i', 'o', 'u'];
	loop(inputString, function(inputChar) {
		if (vowelArray.indexOf(inputChar.toLowerCase()) !== -1) {
			vowelCount++;
		}
	});
	return vowelCount;
};

console.log("Number of vowels: " + countVowels("this is a test"));

// 2. stringReversal
var stringReversal = function(inputString) {
	var result = [];
	loop(inputString, function(inputChar) {
		result.unshift(inputChar);
	});
	return result.join("");
};

console.log("Reversed string: " + stringReversal("hello world"));

// 3. isPalindrome
var isPalindrome = function(inputString) {
	var reversedString = stringReversal(inputString);
	return inputString === reversedString;
};

console.log("isPalindrome (madam): " + isPalindrome("madam"));
console.log("isPalindrome (ninja): " + isPalindrome("ninja"));

// 4. largestNumber
var largestNumber = function(numbersList) {
	var result = 0;
	loop(numbersList, function(number) {
		if (number > result) {
			result = number;
		}
	});
	return result;
};

console.log("Largest number: " + largestNumber([32, 4, 56, 7, 9]));

// 5. multBy
var multBy = function(numbersList, multiplier) {
	var result = [];
	loop(numbersList, function(number) {
		result.push(number * multiplier);
	});
	return result;
};

console.log("Multiply by: " + multBy([2,3,4,5,6], 2));

// 6. squareBy 
var squareBy = function(numbersList, multiplier) {
	var result = [];
	loop(numbersList, function(number) {
		result.push(Math.pow(number, multiplier));
	});
	return result;
};

console.log("Square by: " + squareBy([2,3,4,5,6], 3));

// 7. capitalizeFirstLetters 
var capitalizeFirstLetters = function(inputString) {
	var result = [];
	var splitString = inputString.split(" ");
	loop(splitString, function(word) {
		result.push(word.slice(0, 1).toUpperCase() + word.slice(1));
	});
	return result.join(" ");
};

console.log("Capitalize first letter: " + capitalizeFirstLetters("this is not in camel case"));

// 8. collectValues 

// 9. containsValue 

// 10. copyObj

// 11. extendObj 

// 12. swapShuffle 


var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);


// 13. findBlueCars

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


