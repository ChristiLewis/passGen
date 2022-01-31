// // Assignment code here
// function myDeclaration() {
//   alert("This message is coded as a declaration");
// };

// myDeclaration();

// var myExpression = function(){
//   alert("This message is coded as an expression");
// };

// myExpression();

var myExpression = function(){
   //alert("#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  alert("Take the #$%&! out of making a new password with passGen!");
};

myExpression();

var a = "a";

var logStuff = function() {
  var b = "b";
  console.log(a);
  console.log(b);
};

console.log(a);
//console.log(b); // error
logStuff();

var longOrShort = function() {
  //debugger
  // ask user if they want a small or large password
};
// This is a number data type
var userPasswdLength = 128
console.log(userPasswdLength)

// function to generate a random numeric value
var randomNumber = function() {
  var value = Math.floor(Math.random() * 21) + 40;
  return value;
};

randomNumber();
console.log(randomNumber)


const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
 
  var promptLength = window.prompt('Would you like a SHORT or LONG password? Enter "S" or "L" to choose.');

    // Conditional Recursive Function Call- CAN REPLACE || WITH A NOT ! LOGIC if (!promptShort) {
    if (promptLength === "" || promptLength === null) {
      window.alert("You need to provide a valid answer! Please try again.");
      return true
    }
    // Add promptShort conversion to all lowercase letters with the toLowerCase() function
    promptLength = promptLength.toLowerCase();
    // if player picks "s" confirm and continue
    if (promptLength === "s") {
    // confirm size
      var confirmShort = window.confirm("You selected a short password, please confirm!");

      // if yes (true), skip criteria selection to auto include all
      if (confirmShort) {
        window.alert(" This will auto-select all criteria to generate a random 8 character password");
        // define smallest length of 8 characters from a max set of 128
        userInfo.passwdShort = Math.max(0, userInfo.length - 120);
        // return true if player wants a short
        return true;
        userInfo.passwdShort;

      // if no (false), return to criteria
      }
      else {
        startCriteria();
        return false;
        
      }
    } 
  }
);


// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


// function to start criteria selection
var startCriteria = function() {
  //debugger
  // reset USER stats REFER TO NEW OBJECT FUNCTION (METHOD)
  //userInfo.reset();
  
  for (var i = 0; i < userInfo.length; i++) {
    if (userInfo.length > 8) {
      window.alert("Please choose criteria to make a long password" + (i + 1) + "characters in length");
      //debugger
      var pickedUserObj = userInfo[i];

      //enemy.health = Math.floor(Math.random() * 21) + 40;
      pickedUserObj.length = randomNumber(9-128);

      long(pickedUserObj);

      // if player is still alive and we're not at the last enemy in the array
      if (userInfo.length > 9 && i < userInfo.length < 24) {
        // ask if user wants to use the auto random selector before next criteria
        var shortConfirm = window.confirm("Would you like to randomly generate your password?");
      
        // if yes, take them to the store() function
        if (shortConfirm) {
          passGen();
        }
      }
    }
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }    
  }
  // play again- I THINK THE ENDGAME FUNCTION REPLACES THE startCriteria HERE
  //startCriteria();

  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};


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

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
