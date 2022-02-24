// Assignment Code
//Added some extra intro user interaction


//GLOBAL SCOPE VARIABLES LISTED. NOTE: CHARACTER ARRAY BY JORDAN MASONE BACK TO HORIZ BY CLC

var generateBtn = document.querySelector("#generate");

var numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

var specialChar = [
  '@', '%', '+', '|', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var lowerCasedChar = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCasedChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

//Here the user is immediately involved, inspired by Bamar https://stackoverflow.com/users/1491895/barmar
function getName() {
  var person = prompt("Hello! Please enter your first name and click the button to begin", "Your Name");
  var x = document.getElementById('personName');
  x.textContent = person;
};

getName();

function passwordGenerator() {
  alert("Let passGen take the #$%&! out of making a new password!");

  var possibleArray = [' '];
  var finalPass = [' '];

  function passwordLength(n) {
    if(n < 8 || n > 128) {
      return false;
    } else {
      return true;
    }
  }

  //FIGURE OUT THE USER'S PREFERRED VALUES
  //COMBINE INPUT INTO AN ARRAY

  var passwordLength = prompt("How long do you want your password to be? Please select a number between 8-128");
  if (isNaN(passwordLength)) {
    alert('Please choose a number between greater than seven but less than 129')
    return null;
  } else {
    console.log(passwordLength);

    var confirmNumbers = confirm("Do you want to include numbers?");
    if (confirmNumbers === false) {
      !numbers;
    } else {
      const possibleArray = numbers;
      console.log(possibleArray);
    };

    var confirmUpper = confirm("Do you want to include uppercase letters?");
    if (confirmUpper === true) {
      const possibleArray2 = upperCasedChar;
      console.log(possibleArray2);
    } else {
      !upperCasedChar;
    };

    var confirmLower = confirm("Do you want to include lowercase letters?");
    if (confirmLower === true) {
      const possibleArray3 = lowerCasedChar;
      console.log(possibleArray3)
    } else {
      !lowerCasedChar
    };

    var confirmSpecial = confirm("Do you want to include special symbols?");
    if (confirmSpecial === true) {
      const possibleArray4 =specialChar;
      console.log(possibleArray4)
    } else {
      !specialChar.concat(possibleArray);
    };

    function randomChar(possibleArray) {
      var randomIndex = Math.floor(Math.random() * passwordLength);
      var randomElement = possibleArray[randomIndex];
      console.log(randomElement);
      return randomElement;
    };

    function possibleArray(passwordLength) {
      for (let i = 0; i < passwordLength; i++) {
        const possibleChar = randomChar(possibleArray);
        finalPass.concat(possibleChar);
        finalPass.join('possibleArray');
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        document.body.style.backgroundColor = rndCol;
      };
      console.log(finalPass)

    };


  };

}

// FOR LOOP OVER THE PASSWORD LENGTH
// RANDOMLY SELECT A VALUE FROM THE POSSIBLE
// JOIN THE PASSWORD ARRAY AND RETURN THE PASSWORD



//Write password to the #password input
function writePassword() {
  var password = passwordGenerator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);
