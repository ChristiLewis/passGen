// // Assignment code here
// Passwords are difficult to come up with and it was a very challenging assignment so here is my expression to gain user empathy!

var myExpression = function(){
   //alert("#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  alert("Take the #$%&! out of making a new password with passGen!");
};

myExpression();
//Here the user is immediately involved, and we return to civility inspired by Bamar
//stackoverflow-example post prompt text to the page via HTML by Bamar https://stackoverflow.com/users/1491895/barmar
function getName() {
  var person = prompt("Please enter your first name", "Your Name");
  var x = document.getElementById('personName');
  x.textContent = person;
}

getName();

// Commenting-out or removing experiments to clean-up the code, see prior versions to see the mess!

// Below is a way to get an integer back between two values
function getRandomInt(min, max) {
  min = Math.ceil(9);
  max = Math.floor(129);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

console.log(getRandomInt);
getRandomInt();

console.log(Math.random());
// expected output: a number from 0 to <1 See below in function form
function getRandom() {
  return Math.random();
}

//crypto.getRandomValues(typedArray)
/* Assuming that window.crypto.getRandomValues is available */
//This only makes numeric codes- works but NA
// var array = new Uint32Array(1);
// self.crypto.getRandomValues(array);

// console.log("Your random password:");
// for (var i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }



// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;
  console.log(value)
  return value;
};

randomNumber();

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

function passGen() {
  //debugger
  const btn = document.querySelector('button');

  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }
  //Here is a wildcard- I found a random color generator that I am incorporating
  btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;

    var promptLength = window.prompt('Would you like a SHORT or LONG password? Enter "S" or "L" to choose.');

    // Conditional Recursive Function Call- CAN REPLACE || WITH A NOT ! LOGIC if (!promptShort) {
    if (promptLength === "" || promptLength === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return true;
    }
    // Add promptShort conversion to all lowercase letters with the toLowerCase() function
    promptLength = promptLength.toLowerCase();
    // if user picks "s" confirm and continue
    if (promptLength === "s") {
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
      (promptLength === "l");
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
            promptLength();
            return true;
          }
        }

      }
      else {
        window.alert("Ok, see you next time!");

      }
    }
  };
}     


// if ()
               
//                   window.confirm("Would you like to include Uppercase characters?");
//                   window.confirm("Would you like to include lowercase characters?");
//                   window.confirm("Would you like to include number characters?");
//                   window.confirm("Would you like to include special characters?");
              

//function for password by Sadhana Rajan https://stackoverflow.com/users/8728220/sadhana-rajan
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
//    let password = '';
//    const passwordLength = Math.random() * (32 - 8) + 8;
//    for( let i = 1; i <= passwordLength; i++ ) {
//        password += getRandomFunc()();
//    }
//    //check with regex
//    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
//    if( !password.match(regex) ) {
//        password = generatePassword();

// // function to generate a random numeric value
// var randomNumber = function(min, max) {
//   var value = Math.floor(Math.random() * (max - min + 1) + min);

//   return value;
// };


// function to start criteria selection
function startCriteria() {
  //debugger
  // reset USER stats REFER TO NEW OBJECT FUNCTION (METHOD)
  //userInfo.reset();
  for (var i = 0; i < userInfo.length; i++) {
    if (userInfo.length > 8) {
      window.alert("Please choose criteria to make a long password" + (i + 1) + "characters in length");
      //debugger
      var pickedUserObj = userInfo[i];

      //confirmLong = Math.floor(Math.random() * 21) + 40;
      pickedUserObj.length = randomNumber(9 - 128);

      long(pickedUserObj);

      // if player is still alive and we're not at the last enemy in the array
      if (userInfo.length > 9 && i < userInfo.length < 129) {
        // ask if user wants to use the auto random selector before next criteria
        var shortConfirm = window.confirm("Would you like to randomly generate your password?");

        // if yes, take them to the promptLength() function
        if (shortConfirm) {
          promptLength();
        }
      }
    }
    else {
      window.alert("Ok, see you next time!");
      break;
    }
  }
  // play again- I THINK THE ENDGAME FUNCTION REPLACES THE startCriteria HERE
  //startCriteria();
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
}


var fight = function(enemy) {
  //console.log(enemy);
  //keep track of who goes first
  var isPlayerTurn = true;

  if (Math.random() > 0.5) {
    isPlayerTurn = false;
  }

  while (playerInfo.health > 0 && enemy.health > 0) {
    if (isPlayerTurn) {
    //REPLACE VARIABLE EXPRESSION WITH OBJECT FUNCTION
    // WRAP OBJECT FUNCTION IN AN IF/ELSE IN this WHILE LOOP
    // NEST IT INSIDE ANOTHER IF/ELSE FOR RANDOMNESS
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }

      // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
      // Math.max added to never show a negative number in the game
      // enemy.health = Math.max(0, enemy.health - playerInfo.attack);
      // generate random damage value based on player's attack power
      var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
      
      enemy.health = Math.max(0, enemy.health - damage);
    
      console.log(
        playerInfo.name + 
          ' attacked ' + 
          enemy.name + 
          '. ' + 
          enemy.name + 
          ' now has ' + 
          enemy.health + 
          ' health remaining.'
      );

      // check enemy's health
      if (enemy.health <= 0) {
        window.alert(enemy.name + ' has died!');

        // award player money for winning
        playerInfo.money = playerInfo.money + 20;

        // leave while() loop since enemy is dead
        break;
      } else {
        window.alert(enemy.name + ' still has ' + enemy.health + ' health left.');
      }
      //PLAYER GETS ATTACKED FIRST
    } else {
      var damage = randomNumber(enemy.attack - 3, enemy.attack);

      // remove player's health by subtracting the amount set in the enemy.attack variable
    // Math.max added to never show a negative number in the game
    //playerInfo.health = Math.max(0, playerInfo.health - enemy.attack);
      playerInfo.health = Math.max(0, playerInfo.health - damage);
      console.log(
        enemy.name + 
          " attacked " + 
          playerInfo.name + 
          ". " + 
          playerInfo.name + 
          " now has " + 
          playerInfo.health + 
          " health remaining."
      );
      // CHECK PLAYER'S HEALTH "LOSE" - Player robot's health is zero or less
      if (playerInfo.health <= 0) {
        window.alert(playerInfo.name + " has died!");
        break;
      } else {
        window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
      }
    }
    //Switch turn order for next round
    isPlayerTurn = !isPlayerTurn;
  }
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword)
