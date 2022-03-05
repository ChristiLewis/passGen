// Assignment Code
//GLOBAL SCOPE VARIABLES LISTED. NOTE: CHARACTER ARRAY BY JORDAN MASONE BACK TO HORIZ BY CLC

var generateBtn = document.querySelector("#generate");

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

const specialChar = [
  '@', '%', '+', '|', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

const lowerCasedChar = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const upperCasedChar = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

//Here the user is immediately involved, inspired by Bamar https://stackoverflow.com/users/1491895/barmar
function getName() {
  var person = prompt("Hello! Please enter your first name and click the button to begin", "Your Name");
  var x = document.getElementById('personName');
  x.textContent = person;
};

getName();

//crypto.getRandomValues(typedArray);
/* Assuming that window.crypto.getRandomValues is available */
//This only makes numeric codes- works but NA
var array = new Uint32Array(1);
self.crypto.getRandomValues(array);

console.log("Your random password:");
for (var i = 0; i < array.length; i++) {
console.log(array[i]);
}



//function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;
  console.log(value)
  return value;
};

randomNumber();



function passwordGenerator() {
  alert("Let passGen take the #$%&! out of making a new password!");

  //FIGURE OUT THE USER'S PREFERRED VALUES
  //COMBINE INPUT INTO AN ARRAY
    var promptLength = window.prompt("How long do you want your password to be? Please select a number between 8-128");
    if (promptLength < 8 || promptLength > 128 || promptLength === "") {

      alert('Please type in a number greater than (7) but less than (129).')
      passwordGenerator();

    } else {
      console.log(promptLength);

      var confirmNumbers = confirm("Do you want to include numbers?");
      if (confirmNumbers === false) {
        var possibleArray1 = [""];

      } else {
        possibleArray1 = (numbers);
      };

      console.log(possibleArray1);

      var confirmUpper = confirm("Do you want to include uppercase letters?");
      if (confirmUpper === false) {
        var possibleArray2 = [""];

      } else {
        possibleArray2 = possibleArray1.concat(upperCasedChar);
      };

      console.log(possibleArray2);

      var confirmLower = confirm("Do you want to include lowercase letters?");
      if (confirmLower === false) {
        var possibleArray3 = [""];

      } else {
        possibleArray3 = possibleArray2.concat(lowerCasedChar);
      };

      console.log(possibleArray3);

      var confirmSpecial = confirm("Do you want to include special symbols?");
      if (confirmSpecial === false) {
        var possibleArray4 = [""];

      } else if (possibleArray4 === [""] && possibleArray3.concat(specialChar) === [""]) {
        alert("Please choose at least one character type for your password");
        passwordGenerator();

      } else {
        possibleArray4 = possibleArray3.concat(specialChar)
      };

      console.log(possibleArray4);

      // RANDOMLY SELECT A VALUE FROM THE POSSIBLE
      // JOIN THE PASSWORD ARRAY AND RETURN THE PASSWORD
      var possibleArray = (possibleArray4.concat(possibleArray1, possibleArray2, possibleArray3));
      var finalArray = possibleArray.join('');
        console.log(finalArray);

      var confirmFinalPass = window.confirm("Get ready for your new password!");
         
        if (confirmFinalPass) {
          var finalPass = window.confirm("Here is your new password:", (( o = 8, n = "xvcovaehrpgqrb") => Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o => n[o % finalArray.length]).join(""))());
          var z = document.getElementById('password');
          z.textContent = finalPass;
          // return true to see the passcode
          return true;
        } 
        else {
          window.alert("Ok, see you next time!");
        }
    }
  };

   // Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);

