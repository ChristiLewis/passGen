// Assignment code here
function myDeclaration() {
  alert("This message is coded as a declaration");
};

myDeclaration();

var myExpression = function(){
  alert("This message is coded as an expression");
};

myExpression();

var myExpression = function(){
  //alert("#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
  alert("Take the #$%&! out of making a new password with passGen!");
};

myExpression();

var shortOrLong = function() {
  //debugger
  // ask user if they want a small or large password
  var promptShort = window.prompt('Would you like a SHORT or LONG password? Enter "S" or "L" to choose.');

  // Conditional Recursive Function Call- CAN REPLACE || WITH A NOT ! LOGIC if (!promptShort) {
  if (promptShort === "" || promptShort === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return shortOrLong();
  }
  // Add promptShort conversion to all lowercase letters with the toLowerCase() function
  promptShort = promptShort.toLowerCase();
  // if player picks "s" confirm and continue
  if (promptShort === "s") {
    // confirm size
    var confirmShort = window.confirm("You selected small, please confirm!");

    // if yes (true), skip criteria selection to auto include all
    if (confirmShort) {
      window.alert(userInfo.name + " This will auto-select all criteria to generate a random secure short password");
      // define smallest length of 8 characters from a max set of 128
      userInfo.passwdShort = Math.max(!0, userInfo.length - 120);
      // return true if player wants a short
      return true;
      Math.random();

    // if no (false), return to criteria
    }
    else {
      startCriteria();
      return false;
    }  
  }
}

shortOrLong();

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
