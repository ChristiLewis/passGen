// Assignment Code
//Added some extra intro user interaction


//GLOBAL SCOPE VARIABLES LISTED. NOTE: CHARACTER ARRAY BY JORDAN MASONE BACK TO HORIZ BY CLC

var generateBtn = document.querySelector("#generate");

var possibleArray = [];

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
      possibleArray4.concat(possibleArray1, possibleArray2, possibleArray3)
        alert("Please choose at least one character type for your password")
        passwordGenerator();
    } else {
      possibleArray4 = possibleArray3.concat(specialChar)
    };
    console.log(possibleArray4);

    function randomChar(possibleArray) {
      var randomIndex = Math.floor(Math.random() * promptLength);
      var randomElement = possibleArray[randomIndex];
      console.log(randomElement);
      return randomElement;
    };

    function possibleArray() {
      for (let i = 0; i < passwordLength; i++) {
        const possibleChar = randomChar(possibleArray);
        finalPass.concat(possibleChar);
        finalPass.join(possibleArray,possibleArray1, possibleArray2, possibleArray3, possibleArray4);
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
