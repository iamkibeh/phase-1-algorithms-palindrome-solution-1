function isPalindrome(word) {
  // Write your algorithm here
  if(word.split("").reverse().join("")===word){
    return true
  }
  return false;
}

/* 
  Add your pseudocode here
  first convert the string word to an array of characters then reverse the array using .reverse method.
  then join the reversed word and if the reversed word is strictly equal to the word, return true else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
