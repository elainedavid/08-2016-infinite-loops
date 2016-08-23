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
console.log("Blue Cars List");
console.dir(blueCarsList);

// 14. findCarsByColor
var findCarsByColor = function(carList, searchColor) {
	var allMatchingCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "color" && value === searchColor) {
				allMatchingCars.push(carObject);
			}
		});
	});
	return allMatchingCars;
};

var silverCarsList = findCarsByColor(sampleCarList, "silver");
console.log("Silver Cars List");
console.dir(silverCarsList);

// 15. findCarsByYear
var findCarsByYear = function(carList, searchYear) {
	var allMatchingCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "year" && value === searchYear) {
				allMatchingCars.push(carObject);
			}
		});
	});
	return allMatchingCars;
};

var carsFrom2011List = findCarsByYear(sampleCarList, 2011);
console.log("Cars From 2011 List");
console.dir(carsFrom2011List);

// 16. findCarsBetweenYears
var findCarsBetweenYears = function(carList, startYear, endYear) {
	var allMatchingCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "year" && value > startYear && value < endYear) {
				allMatchingCars.push(carObject);
			}
		});
	});
	return allMatchingCars;
};

var carsBetweenList = findCarsBetweenYears(sampleCarList, 2001, 2005);
console.log("Cars Between 2001 and 2005");
console.dir(carsBetweenList);

// 17. findCarsByMake
var findCarsByMake = function(carList, searchMake) {
	var allMatchingCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "make" && value === searchMake) {
				allMatchingCars.push(carObject);
			}
		});
	});
	return allMatchingCars;
};

var carsByMakeList = findCarsByMake(sampleCarList, "Toyota");
console.log("Cars By Toyota");
console.dir(carsByMakeList);

// 18. findCarsByMakeAndModel
var findCarsByMakeAndModel = function(carList, searchMake, searchModel) {
	var finalMatchList = [];
	/*
	var matchingMakeList = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "make" && value === searchMake) {
				matchingMakeList.push(carObject);
			}
		});
	});
	loop(matchingMakeList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "model" && value === searchModel) {
				finalMatchList.push(carObject);
			}
		});
	});
	*/
	loop(carList, function(carObject, carIndex) {
		var matchCtr = 0;
		loop(carObject, function(value, key) {
			if ((key === "make" && value === searchMake) ||
				(key === "model" && value === searchModel)) {
				matchCtr++;
			}
		});
		if (matchCtr === 2)
			finalMatchList.push(carObject);
	});
	return finalMatchList;
};

var carsByMakeAndModelList = findCarsByMakeAndModel(sampleCarList, "Nissan", "Leaf");
console.log("Cars That Are Nissan Leafs");
console.dir(carsByMakeAndModelList);


// 19. Random Price Generator
var randomPriceGenerator = function(carList, minRange, maxRange) {
	loop(carList, function(carObject, carIndex) {
		carObject["price"] = Math.round(Math.random() * (maxRange - minRange) + minRange);
	});
};

console.log("RandomPriceGenerator");
randomPriceGenerator(sampleCarList, 15000, 50000);
console.dir(sampleCarList);

var findByPrice = function(carList, lowEndPrice, highEndPrice) {
	var allMatchingCars = [];
	loop(carList, function(carObject, carIndex) {
		loop(carObject, function(value, key) {
			if (key === "price" && value >=  lowEndPrice && value <= highEndPrice) {
				allMatchingCars.push(carObject);
			}
		});
	});

	if (allMatchingCars.length < 1)
		return "There are no cars that fit what you're looking for, try cars.com";

	return allMatchingCars;
};

console.log("Cars By Price");
var carsByPriceList = findByPrice(sampleCarList, 20000, 25000);
console.dir(carsByPriceList);

// 20. VerySpecificSearch
var verySpecificSearch = function(carList, searchMake, searchModel, searchColor, searchYear, lowEndPrice, highEndPrice) {
	var finalMatchList = [];
	loop(carList, function(carObject, carIndex) {
		var matchCtr = 0;
		loop(carObject, function(value, key) {
			if ((key === "make" && value === searchMake) ||
				(key === "model" && value === searchModel) ||
				(key === "color" && value === searchColor) ||
				(key === "year" && value === searchYear) ||
				(key === "price" && value >=  lowEndPrice && value <= highEndPrice)) {
				matchCtr++;
			}
		});
		if (matchCtr === 5)
			finalMatchList.push(carObject);
	});

	if (finalMatchList.length < 1)
		return "There are no cars that fit what you're looking for, try cars.com";

	return finalMatchList;
};

console.log("Cars By Very Specific Search");
var carsBySpecificSearchList = verySpecificSearch(sampleCarList, "Nissan", "Leaf", "blue", 2011, 20000, 25000);
console.dir(carsBySpecificSearchList);
var carsBySpecificSearchList = verySpecificSearch(sampleCarList, "Nissan", "Leaf", "silver", 2001, 20000, 35000);
console.dir(carsBySpecificSearchList);

}());


