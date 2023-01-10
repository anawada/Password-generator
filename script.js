// Array of special characters to be included in password
let specialCharacters = [
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
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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
let upperCasedCharacters = [
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

// variable declarated in a global scope to be used for 2  !== functions
let passwordLength = 0;

// Function to prompt user for password options
function getPasswordOptions() {
  
    passwordLength = prompt("Choose a password length between 10 and 64");
    console.log("passwordLength: " + passwordLength);

   let passwordOptionsLowerCase = confirm("Would you like to use lowercase characters?");
    console.log("lowercase: " + passwordOptionsLowerCase);

    let passwordOptionsUpperCase = confirm("Would you like to use Uppercase characters?");
    console.log("uppercase: " + passwordOptionsUpperCase);

    let passwordOptionsNumeric = confirm("Would you like to use Numeric characters?");
    console.log("numeric: " + passwordOptionsNumeric);

    let passwordOptionsSpecialCharacter = confirm("Would you like to use Special Characters?");
    console.log("special characters: " + passwordOptionsSpecialCharacter);

    //Object created with user input 
    let passwordOptions = {
    length: passwordLength,
    lowerCase: passwordOptionsLowerCase,
    upperCase: passwordOptionsUpperCase,
    numeric: passwordOptionsNumeric,
    specialCharactersOp: passwordOptionsSpecialCharacter
  }
  console.log(passwordOptions);

// from this function I returned the object with the user's answers
    return passwordOptions;
  
}

//variable created globally to be used in two different functions
let randomCharacters = "";

// Function for getting a random element from an array
function getRandom(arr) {

  //created an variable to store the result 

  for (let i = 0; i < passwordLength; i++) {

    let randomIndex = Math.floor(Math.random()*arr.length)
    randomCharacters += arr[randomIndex]
    
  }
  console.log("random Characters" + randomCharacters);

  return randomCharacters
}


// Function to generate password with user input
function generatePassword() {

  let chosenCharacters = [];
  let generatedPassword = "";
  console.log(generatedPassword);

  // created a variable to manipulate the object generated in getPasswordOptions()
  let options = getPasswordOptions();

  if(options.lowerCase === false && options.upperCase === false && options.specialCharactersOp === false && options.numeric === false){
    alert("You need to choose at least one option! Let's try again!")
    generatePassword();
  }else {
    //conditionals created acessing the object to check if the answer was true of false and concatenating the arrays in case true
    if (options.lowerCase === true){
      chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
    }else {
      console.log("nope");
    }
    if (options.upperCase === true){
      chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
    }else {
      console.log("nope");
    }
    if (options.specialCharactersOp === true){
      chosenCharacters = chosenCharacters.concat(specialCharacters);
    }else {
      console.log("nope");
    }
    if (options.numeric === true){
      chosenCharacters = chosenCharacters.concat(numericCharacters);
    }else {
      console.log("nope");
    }
    console.log(chosenCharacters)
  }

  generatedPassword = getRandom(chosenCharacters);
  console.log("generated" + generatedPassword)
  return generatedPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

