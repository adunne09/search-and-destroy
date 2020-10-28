"use strict";

// Complete this algo
const binarySearch = (array, target) => {
  if (array.length === 1) {
    return target === array[0];
  }

  let midpoint = Math.ceil(array.length / 2);
  let middleValue = array[midpoint];

  if (middleValue === target) return true;
  else if (middleValue < target) {
    let splitArr = array.slice(midpoint);
    return binarySearch(splitArr, target);
  } else {
    let splitArr = array.slice(0, midpoint);
    return binarySearch(splitArr, target);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
