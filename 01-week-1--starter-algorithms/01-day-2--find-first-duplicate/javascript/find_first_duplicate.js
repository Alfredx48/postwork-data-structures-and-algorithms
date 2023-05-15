/**
 *!PseudoCode

 ** Create a Set (or hashtable) to store unique elements from the array.
 ** Loop over the array.
 ** If the current item from the array is already in the Set,
 ** return the array item (first duplicate found).
 ** Else, add it to the Set.
 ** If the loop completes without finding a duplicate, return -1.
*/

function findFirstDuplicate(arr) {
	const set = new Set();
	for (let i = 0; i < arr.length; i++) {
		if (set.has(arr[i])) {
			return arr[i];
		}
		set.add(arr[i]);
	}
	return -1;
}


if (require.main === module) {
	// add your own tests in here
	console.log("Expecting: 3");
	console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

	console.log("");

	console.log("Expecting: -1");
	console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
