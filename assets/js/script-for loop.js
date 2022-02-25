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
    } else if (possibleArray4 === [""] && possibleArray3.concat(specialChar) === [""] ) {
      alert("Please choose at least one character type for your password");
      passwordGenerator();
    } else {
      possibleArray4 = possibleArray3.concat(specialChar)
    };
    console.log(possibleArray4);

    // RANDOMLY SELECT A VALUE FROM THE POSSIBLE
    // JOIN THE PASSWORD ARRAY AND RETURN THE PASSWORD
    var finalPass = (possibleArray4.concat(possibleArray1, possibleArray2, possibleArray3) &&
      confirm("Here is your new password:", ((o = promptLength, n = "console.log(possibleArray.join(''))") => Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o => n[o % n.length]).join(""))()));
        var z = document.getElementById('password');
        z.textContent = finalPass;
          // return true if user wants a short quick passcode
          return true 
          
    function rndCol() {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
          document.body.style.backgroundColor = rndCol;
    }
          
  
    // FOR LOOP OVER THE PASSWORD LENGTH
  

//     function finalPass(promptLength) {
      
//         for (let i = 0; i < promptLength; i++) {
//           const possibleChar = randomChar(possibleArray);
//           finalPass.push(possibleChar);
//           finalPass.join('possibleChar');
//         };
//     };
//     console.log(finalPass);

//     function randomChar(possibleArray) {
//       var randomIndex = Math.floor(Math.random() * possibleArray.length);
//       var randomElement = possibleArray[randomIndex];
//       console.log(randomElement);
//       return randomElement;
//     };
//   };
// };

// //Write password to the #password input
// var writePassword = function () {
//   console.log(writePassword);
//   var passwordText = document.querySelector("#password");
//   passwordText.value = writePassword;
  
 

// };

//       // if yes (true), skip criteria selection to auto include all
//       if (confirmShort) {
//         var short = window.prompt("Here is your bespoke random password:", ((o = 8, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&()*+,-./:;<=>?@[^_`{|}~") => Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o => n[o % n.length]).join(""))());
//         var z = document.getElementById('password');
//         z.textContent = short;
//         // return true if user wants a short quick passcode
//         return true;

// Add event listener to generate button
generateBtn.addEventListener("click", passwordGenerator);

  //Write password to the #password input
  function writePassword() {
    console.log(writePassword);
    var passwordText = document.querySelector('password');
    passwordText.value = (writePassword && rndCol);
};


// Add event listener to generate button
generateBtn.addEventListener('click', passwordGenerator, () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});
}