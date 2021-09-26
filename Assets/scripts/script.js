// Assignment Code
var generateBtn = document.querySelector("#generate");

// Collection of valid characters for each type, keys are equal to checkbox IDs
// Todo add "crazy character" sets
var charSets = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  special: "!#$%&*+-_",
  kanji: kanji.substr(Math.floor(Math.random()*(kanji.length-20)),20)
};

// Create and default password length
var pswdLength = 8;

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  function getTypes() {
    // Getting desired types of characters to include
    var chars = ""
    for (const key in charSets) {
      if (document.getElementById(key).checked) {
        chars = chars + charSets[key]
      }
    }
    return chars
  }

  // Read desired character sets and password length
  var chars = getTypes();
  pswdLength = document.getElementById("pswd-length").value;

  function generatePassword() {

    // Input validation checks that length is in range and at least one type is selected
    if (chars.length == 0) {
      return "Invalid Input: choose at least one type."
    } else if ((pswdLength < 8) || (pswdLength > 128)) {
      return "Invalid Input: length out of range."
    }

    let pswd = "";
    for (let ii = 0; ii < pswdLength; ii++) {
      pswd = pswd + chars[Math.floor(Math.random() * chars.length)]
    }

    return pswd
  }

  var password = generatePassword();

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
