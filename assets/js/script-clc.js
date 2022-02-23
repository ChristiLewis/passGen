// Assignment Code

//GLOBAL SCOPE VARIABLES LISTED. NOTE: CHARACTER ARRAY BY JORDAN MASONE BACK TO HORIZ BY CLC

var generateBtn = document.querySelector("#generate");

var numbers = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
];

var specialChar = [
    '@', '%', '+', '|', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

var lowerCasedChar = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

var upperCasedChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

var finalPass = [];

//ADDED EXTRA USER INTERACTION
//stackoverflow-example post prompt text to the page via HTML by Bamar https://stackoverflow.com/users/1491895/barmar
function getName() {
    var person = prompt("Hello! Please enter your first name and click the button to begin", "Your Name");
    var x = document.getElementById('personName');
    x.textContent = person;
};

getName();

function randomChar(possibleArray) {
    var randomIndex = Math.floor(Math.random() * possibleArray.length);
    var randomElement = possibleArray[randomIndex];
    console.log(randomElement);
    return randomElement;
};

function passGen() {
    alert("Let passGen take the #$%&! out of making a new password!");
    var possibleArray = [];
    var passLength = n
    var n = 8 < n < 129

    //FIGURE OUT THE USER'S PREFERRED VALUES
    //COMBINE INPUT INTO AN ARRAY

    var confirmNumbers = confirm("Do you want to include numbers?");
    if (confirmNumbers === true) {
        possibleArray === possibleArray.concat(numbers);
    } else {
        possibleArray === !possibleArray.concat(numbers);
    };

    var confirmUpper = confirm("Do you want to include uppercase letters?");
    if (confirmUpper === true) {
        possibleArray === possibleArray.concat(upperCasedChar);

    } else {
        possibleArray === !possibleArray.concat(upperCasedChar);
    };

    var confirmLower = confirm("Do you want to include lowercase letters?");
    if (confirmLower === true) {
        possibleArray === possibleArray.concat(lowerCasedChar);
    } else {
        possibleArray === !possibleArray.concat(lowerCasedChar);
    };

    var confirmSpecial = confirm("Do you want to include special symbols?");
    if (confirmSpecial === true) {
        possibleArray === possibleArray.concat(specialChar);
    } else {
        possibleArray === !possibleArray.concat(specialChar);
    };

    var passLength = prompt("How long do you want your password to be? Please select a number between 9-128");
    if (isNaN(passLength) || passLength !== n ) { 
        alert('Please choose a number between 9-128')
        return null;
    } else {
        return passLength;
    }
};

console.log(`This is the possible: [${possibleArray}]`);
// FOR LOOP OVER THE PASSWORD LENGTH
// RANDOMLY SELECT A VALUE FROM THE POSSIBLE
// JOIN THE PASSWORD ARRAY AND RETURN THE PASSWORD

for (let i = 0; i < possibleArray.length; i++) {
    const possibleChar = randomChar(possibleArray);
    finalPass.push(possibleChar);
    finalPass.join(possibleChar);
};

// Write password to the #password input
function writePassword() {
    var password = passGen();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
