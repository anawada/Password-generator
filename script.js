// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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


// Function to prompt user for password options
function getPasswordOptions() {
  
  let passwordLength = prompt("Choose a password length between 10 and 64");
    console.log(passwordLength);

   let passwordOptionsLowerCase = confirm("Would you like to use lowercase characters?");
    console.log(passwordOptionsLowerCase);

    let passwordOptionsUpperCase = confirm("Would you like to use Uppercase characters?");
    console.log(passwordOptionsUpperCase);

    let passwordOptionsNumeric = confirm("Would you like to use Numeric characters?");
    console.log(passwordOptionsNumeric);

    let passwordOptionsSpecialCharacter = confirm("Would you like to use Special Characters?");
    console.log(passwordOptionsSpecialCharacter);

    let passwordOptions = {
    length: passwordLength,
    lowerCase: passwordOptionsLowerCase,
    uppercase: passwordOptionsUpperCase,
    numeric: passwordOptionsNumeric,
    specialCharactersOp: passwordOptionsSpecialCharacter
  }
  console.log(passwordOptions);

    return passwordOptions;
  
}



// Function for getting a random element from an array
function getRandom(arr) {

  let randomIndex = Math.floor(Math.random()*arrayName.length)

}

// Function to generate password with user input
function generatePassword() {

  let options = getPasswordOptions();

  if (options.lowerCase === true) {
    chosenCharacters = lowerCasedCharacters 
  }
    
  }

  const array1 = ['a', 'b', 'c'];
  const array2 = ['d', 'e', 'f'];
  const chosenCharacters = array1.concat(array2);

  let generatePassword = "";
  for (let i = 0; i < options.length; i++) {
    
   practicePassword += "j"

   console.log(options);
  }
}



  //return practicePassword;
//}

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
