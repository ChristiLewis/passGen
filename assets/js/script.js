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
  alert("#$%&'()*+,-./:;<=>?@[\]^_`{|}~");
};

myExpression();


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
