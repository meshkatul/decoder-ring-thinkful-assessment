// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substituteEncode(input, substitute) {
    //check the alphabet is missing
    if (!substitute) return false;
    //check all chracters are unique
    let unique = isUniqueAlphabet(substitute);
    if (!unique) {
      return false;
    }
    //check the alphabet length is 26
    if (substitute.length !== 26) {
      return false;
    }
    let template = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let newInput = input.toLowerCase();
    for (let i = 0; i < newInput.length; i++) {
      if (newInput[i] === " ") {
        result += " ";
      } else {
        //get the index number from 26 alphabet template
        const inNum = template.indexOf(newInput[i]);
        //find the value of that index from substitute alphabets
        const letter = substitute[inNum];
        result += letter;
      }
    }
    return result;
  }

  function substituteDecode(input, substitute) {
    //check the alphabet is missing
    if (!substitute) return false;
    //check all chracters are unique
    let unique = isUniqueAlphabet(substitute);
    if (!unique) {
      return false;
    }
    //check the alphabet length is 26
    if (substitute.length !== 26) {
      return false;
    }
    let template = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    let newInput = input.toLowerCase();
    for (let i = 0; i < newInput.length; i++) {
      if (newInput[i] === " ") {
        result += " ";
      } else {
        //get the index number of input from substitute
        const inNum = substitute.indexOf(newInput[i]);
        //find the value of that index from 26 alphabet template
        const letter = template[inNum];
        result += letter;
      }
    }
    return result;
  }

  //check the substitute alphabets are unique
  function isUniqueAlphabet(substitute) {
    //convert to array
    const arr = substitute.split("");
    //convert to set
    const setArr = new Set(arr);
    if (setArr.size === substitute.length) {
      return true;
    }
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if (encode) {
      return substituteEncode(input, alphabet);
    } else {
      return substituteDecode(input, alphabet);
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
