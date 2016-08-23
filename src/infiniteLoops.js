(function() {
  'use strict';

var loop = function(collection, callback){
    // ultimate side-effects function
    if (Array.isArray(collection) || typeof collection === 'string') {
    	for (var i = 0; i < collection.length; i++) {
      		callback(collection[i]);
    	}
  	} else if (typeof collection === 'object') {
    	for (var key in collection) {
      		callback(collection[key]);
    	}
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

// 6. powerOf 
var powerOf = function(numbersList, multiplier) {
	var result = [];
	loop(numbersList, function(number) {
		result.push(Math.pow(number, multiplier));
	});
	return result;
};

console.log("Power of: " + powerOf([2,3,4,5,6], 3));

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
var collectValues = function(inputObject) {
	var result = [];
	loop(inputObject, function(value) {
		result.push(value);
	})
	return result;
};

var ninjaObject = {};
ninjaObject["martial art"] = "ninjutsu";
ninjaObject["weapon"] = "katana";
ninjaObject["skills"] = ["climbing walls", "stealth", "throwing sharp metal stars"];

console.log("Collect Values: " + collectValues(ninjaObject));

// 9. containsValue 
var containsValue = function(inputObject, targetValue) {
	var hasValue = false;
	loop(inputObject, function(value) {
		if (value === targetValue) {
			hasValue = true;
		}
	});
	return hasValue;
};

console.log("Contains Value: " + containsValue(ninjaObject, "katana"));
console.log("Contains Value: " + containsValue(ninjaObject, "tea preparation"));

// updated loop function
var loop = function(collection, callback){

  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      // passing the index as a second argument to our callback
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object') {
    for (var key in collection) {
      // passing the key as a second argument
      callback(collection[key], key);
    }
  }
};

// 10. copyObj
var copyObj = function(inputObject) {
	var resultObj = {};
	loop(inputObject, function(value, key) {
		resultObj[key] = value;
	});
	return resultObj;
};

var ninjaObjectCopy = copyObj(ninjaObject);
console.log("Copy Object: " + collectValues(ninjaObjectCopy));

// 11. extendObj
var extendObj = function(targetObject, sourceObject) {
	loop(sourceObject, function(value, key) {
		targetObject[key] = value;
	});
	return targetObject;
};

var secondObject = {
	costume: "black kimono",
	origin: "Japan"
};

var extendedObject = extendObj(ninjaObject, secondObject);
console.log("Extend Object: " + collectValues(extendedObject));

// 12. swapShuffle 
var swapShuffle = function(numbersList) {
	loop(numbersList, function(value, index) {
		numbersList.push(numbersList.splice(index, 1));
	});
	return numbersList;
};

console.log("Swap Shuffle: " + swapShuffle([1,2,3,4,5]));

var sampleCarList = helpers.carFactory(helpers.carDatabase, helpers.carMaker, 100);
console.dir(sampleCarList);

// 13. findBlueCars
var findBlueCars = function(carList) {
	var allBlueCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "color" && value === "blue") {
				allBlueCars.push(carObject);
			}
		});
	});
	return allBlueCars;
};

var blueCarsList = findBlueCars(sampleCarList);
console.dir(blueCarsList);

// 14. findCarsByColor

// 15. findCarsByYear

// 16. findCarsBetweenYears

// 17. findCarsByMake

// 18. findCarsByMakeAndModel

// 19. Random Price Generator

// 20. VerySpecificSearch



}());


