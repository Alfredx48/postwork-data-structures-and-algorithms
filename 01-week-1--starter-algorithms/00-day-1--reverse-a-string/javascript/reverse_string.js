/**
 * !PseudoCode
  
** Initialize an empty string 
** loop over the input string backwards 
** take each character and add it to the empty string 
** return the string 
*/

// function reverseString(str) {
//   return str.split("").reverse().join("")
// }

const reverseString = str => {
	let reverseString = "";

	for (let i = str.length - 1; i >= 0; i--) {
		reverseString += str[i];
	}
	return reverseString;
};


/** 
 *! In place reverse 
*/
// function reverseString(str) {
//   let charArray = str.split('')
//   let left = 0
//   let right = str.length - 1

//   while (left < right) {
//     console.log(left, right)
//     let temp = charArray[left]
//     charArray[left] = charArray[right]
//     charArray[left] = temp

//     left++
//     right--
//   }
//   return charArray.join("")
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution
