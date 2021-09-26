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

// Storing previous password to store in below list
var password = "";
var prevPasswords = [];

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
      errorShake()
      return "Invalid Input: choose at least one type."
    } else if ((pswdLength < 8) || (pswdLength > 128)) {
      errorShake()
      return "Invalid Input: length out of range."
    }

    let pswd = "";
    for (let ii = 0; ii < pswdLength; ii++) {
      pswd = pswd + chars[Math.floor(Math.random() * chars.length)]
    }

    return pswd
  }

  // Adding previous password to list if is valid
  if ((password) && (!password.includes("Invalid Input:"))) {
    prevPasswords.push(password)
    var prevText = document.querySelector("#all-passwords");
    let s = ""
    for (let ii = prevPasswords.length-1; ii >= 0; ii--) {
      s = s + prevPasswords[ii] + "\n"
    }

    prevText.value = s
  }

  password = generatePassword();

  passwordText.value = password;
  passwordText.select();
}

// Error shake on input form if user input is invalid
function errorShake() {
  // Add class for CSS animation application
  let form = document.getElementById("input-form")
  form.classList.add('error');

  setTimeout(function() {
      form.classList.remove('error');
  }, 300);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

