

var charset_Number = ["0","1","2","3","4","5","6","7","8","9"];





// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {

  var password_length = Number(prompt("how long do you want your password to be..must be between 8 and 128 characters",""));

  


return [
  password_length,
];


}

function generatePassword() {
  password = [];

  var charset_Initial = [];

  promptOrConfirmValues = writePassword();
  password_length = promptOrConfirmValues[0];
}

if (password_length <8 || password_length >128) {
  prompt("Retry your entry again, you must enter a value between 8 and 128");
} else {
  for (var i=0; i<password_length; i++) {
    password.push(charset_Initial[Math.round(Math.random() *charset_Initial)]);
  }
}