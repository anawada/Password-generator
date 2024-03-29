// Array of special characters to be included in password
const specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
const upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// variable declared in a global scope to be used for 2  !== functions
let passwordLength = 0;

// variable declared in global scope
let passwordOptions = {};
// Function to prompt user for password options
function getPasswordOptions() {

  passwordLength = prompt("Choose a password length between 10 and 64");

  if (passwordLength < 65 && passwordLength > 9) {
  let passwordOptionsLowerCase = confirm(
    "Would you like to use lowercase characters?"
  );

  let passwordOptionsUpperCase = confirm(
    "Would you like to use Uppercase characters?"
  );

  let passwordOptionsNumeric = confirm(
    "Would you like to use Numeric characters?"
  );

  let passwordOptionsSpecialCharacter = confirm(
    "Would you like to use Special Characters?"
  ); 

    //Object created with user input
    passwordOptions = {
    length: passwordLength,
    lowerCase: passwordOptionsLowerCase,
    upperCase: passwordOptionsUpperCase,
    numeric: passwordOptionsNumeric,
    specialCharactersOp: passwordOptionsSpecialCharacter,
    }

  }else {
    alert("Please, choose a password length between 10 and 64.");
    getPasswordOptions();
  }
  return passwordOptions;
}
  // from this function I returned the object with the user's answers



// Function for getting a random element from an array
function getRandom(arr) {
  
  //variable created to store the result

  let randomCharacters = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    randomCharacters += arr[randomIndex];
  }

  return randomCharacters;
}

// Function to generate password with user input
function generatePassword() {
  let chosenCharacters = [];
  let generatedPassword = "";

  // created a variable to manipulate the object generated in getPasswordOptions()
  let options = getPasswordOptions();

  if (
    options.lowerCase === false &&
    options.upperCase === false &&
    options.specialCharactersOp === false &&
    options.numeric === false
  ) {
    alert("You need to choose at least one option... Let's try again!");
  } else {
    //conditionals created accessing the object to check if the answer was true of false and concatenating the arrays in case true
    if (options.lowerCase) {
      chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
    } 
    if (options.upperCase) {
      chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
    } 
    if (options.specialCharactersOp) {
      chosenCharacters = chosenCharacters.concat(specialCharacters);
    } 
    if (options.numeric) {
      chosenCharacters = chosenCharacters.concat(numericCharacters);
    } 
    console.log(chosenCharacters);
    generatedPassword = getRandom(chosenCharacters);
  }

  return generatedPassword;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
