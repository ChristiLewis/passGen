// Passwords are difficult to come up with and it was a very challenging assignment so here is my expression to gain user empathy!

var myExpression = function () {
  alert("Take the #$%&! out of making a new password with passGen!");
};

myExpression();
//Here the user is immediately involved, manners inspired by Bamar https://stackoverflow.com/users/1491895/barmar
function getName() {
  var person = prompt("Please enter your first name", "Your Name");
  var x = document.getElementById('personName');
  x.textContent = person;
}

getName();

// Commenting-out or removing experiments to clean-up the code, see prior versions to see the mess!

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    //debugger
    const btn = document.querySelector("#generate");
    
    //Here is a wildcard- I found a random color generator that I am incorporating
    btn.addEventListener('click', () => {
      const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
      document.body.style.backgroundColor = rndCol;

      var passwordLength = window.prompt('Would you like a SHORT or LONG password? Enter a number between 9-128 to choose.');
      // Conditional Recursive Function Call- CAN REPLACE || WITH A NOT ! LOGIC if (!promptShort) {
      if (passwordLength === "" || passwordLength === null) {
        window.alert("You need to provide a valid answer! Please choose a number between 9-128.");
        return true;
      }
      // Add promptShort conversion to all lowercase letters with the toLowerCase() function
      passwordLength = passwordLength.toLowerCase();
      // if user picks "s" confirm and continue
      if (passwordLength === "s") {
        // confirm size
        var confirmShort = window.confirm("You selected a short password. This will auto-select all criteria to generate a random 8 character password; please confirm!");

        // if yes (true), skip criteria selection to auto include all
        if (confirmShort) {
          var short = window.prompt("Here is your random short password:", ((o = 8, n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&()*+,-./:;<=>?@[^_`{|}~") => Array.from(crypto.getRandomValues(new Uint32Array(o))).map(o => n[o % n.length]).join(""))());
          var z = document.getElementById('password');
          z.textContent = short;
          // return true if user wants a short quick passcode
          return true;
        }
        else {
          // (passwordLength === "l");
          var confirmLong = window.confirm("You selected a long password. This means you will be asked to accept or reject a random length and series of criteria; please confirm.");
          if (confirmLong) {
            var pickedUserObj = userInfo[i];
            pickedUserObj.length = randomNumber(9 - 128);
            long(pickedUserObj);
            for (var i = 0; i < userInfo.length; i++) {
              if (userInfo.length > 9 && i < userInfo.length < 129) {
                window.confirm("Please choose criteria to make a long password" + (i + 1) + "characters in length");
                // Defining a long passcode; if yes, take them to the startCiteria() function
                startCriteria();
                return true;
              }
              else {
                passwordLength();
                return true;
              }
            }

          }
          else {
            window.alert("Ok, see you next time!");

          }
        }
      };
    })
  }
}



    // function for password by Sadhana Rajan https://stackoverflow.com/users/8728220/sadhana-rajan
    // function getRandomUpperCase() {
    //   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 65 );
    // }

    // function getRandomLowerCase() {
    //   return String.fromCharCode( Math.floor( Math.random() * 26 ) + 97 );
    // } 

    // function getRandomNumber() {
    //   return String.fromCharCode( Math.floor( Math.random() * 10 ) + 48 );
    // }

    // function getRandomSymbol() {
    //    // const symbol = '!@#$%^&*(){}[]=<>/,.|~?';
    //    const symbol = '!@$&';
    //    return symbol[ Math.floor( Math.random() * symbol.length ) ];
    // }

    // const randomFunc = [ getRandomUpperCase, getRandomLowerCase, getRandomNumber, getRandomSymbol ];

    // function getRandomFunc() {
    //    return randomFunc[Math.floor( Math.random() * Object.keys(randomFunc).length)];
    // }

    // function generatePassword() {
    //   let password = '';
    //   const passwordLength = Math.random() * (32 - 8) + 8;
    //   for (let i = 1; i <= passwordLength; i++) {
    //     password += getRandomFunc()();
    //   }
    //   //check with regex
    //   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
    //   if (!password.match(regex)) {
    //     password = generatePassword();

    //     // function to generate a random numeric value
    //     var randomNumber = function (min, max) {
    //       var value = Math.floor(Math.random() * (max - min + 1) + min);

    //       return value;
    //     };


    //     Get references to the #generate element
    //     var generateBtn = document.querySelector("#generate");

    //     // Write password to the #password input
    //     function writePassword() {
    //       var password = generatePassword();
    //       var passwordText = document.querySelector("#password");

    //       passwordText.value = password;

    //     }
    //     function randomChar(array) {
    //       var randomIndex = Math.floor(Math.random() * array.length);
    //       var randomElement = array[randomIndex];
    //       return randomElement

    //     }
    //     // // Add event listener to generate button
    //     // generateBtn.addEventListener("click", writePassword);
    //     var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //     var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
    //     var lowercase = ["abcdefghijklmnopqrstuvwxyz"]
    //     var special = ["#$%&'()*+,-./:;<=>?@[^_`{|}~"]



//     function longPass() {
//       var passLength = prompt("How long do you want your password to be? Please select a number between 9-128");
//       var confirmNumbers = confirm("Do you want to include numbers?")
//       var confirmUpper = confirm("Do you want to include uppercase letters?")
//       var confirmLower = confirm("Do you want to include lowercase letters?")
//       var confirmSpecial = confirm("Do you want to include special symbols?")
//       var possibleArray = []
//       var finalPass = []

//       if (confirmNumbers === true) {
//         possibleArray.push(numbers);
//       }

//       if (confirmUpper === true) {
//         possibleArray.push(uppercase);
//       }

//       if (confirmLower === true) {
//         possibleArray.push(lowercase);
//       }

//       if (confirmSpecial === true) {
//         possibleArray.push(special);
//       }

//       if (passLength > 9 && passLength < 129) {
//         return true
//       }

//       for (let i = 0; i < passlength; i++) {
//         const possibleChar = randomChar(possibleArray);
//         finalPass.push(possibleChar);
//         console.log(finalPass);
//       }
//     }
//   }
// 
