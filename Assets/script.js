// Assignment Code
var generateBtn = document.querySelector("#generate");


//possible characters for the password generator

var add_Uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var add_Lowercase = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var add_Number = ["1","2","3","4","5","6","7","8","9","0"];
var add_SpecialCharacters = ["!","@","#","$","%","&"];
var add_TotalCharacters = [];
var display_Password = [];
  
//generate the password with defined pop up questions

function generatePassword () {

  var password_Length = prompt("How long do you want your password to be..must be between 8 and 128 characters", "Enter # of characters");
    if (password_Length < 8 || password_Length > 128) {
      alert("please check your entry and try again. Note: password length must be between 8 and 128 characters long");
      generatePassword();
  }
  var add_Upperconfirm= confirm("Click OK to confirm uppercase characters.");
    if (add_Upperconfirm === true) {
      add_TotalCharacters = add_TotalCharacters.concat(add_Uppercase)
  } else {    
  }
  var add_Lowercaseconfirm = confirm("Click OK to confirm including lowercase characters.");
    if (add_Lowercaseconfirm === true) {
      add_TotalCharacters = add_TotalCharacters.concat(add_Lowercase);
  } else {
  }
  var add_Numberconfirm = confirm("Click OK to confirm including numeric characters.");
    if (add_Numberconfirm === true) {
      add_TotalCharacters = add_TotalCharacters.concat(add_Number)
  } else {
  }
  var add_SpecialCharactersconfirm = confirm("Click OK to confirm including special characters.");
    if (add_SpecialCharactersconfirm === true) {
      add_TotalCharacters = add_TotalCharacters.concat(add_SpecialCharacters)
  } else {
  }
    if (!add_Upperconfirm && !add_Lowercaseconfirm && !add_Numberconfirm && !add_SpecialCharactersconfirm) {
      alert("please select at least one of the 4 options!!!")
      return generatePassword();
    }
    for (var i=0; i < password_Length; i++) {
    
    display_Password = display_Password + add_TotalCharacters[Math.floor(Math.random() * add_TotalCharacters.length)];
  }
    //this is what returns the newly created password to the UI
  return display_Password;
}

    // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
passwordText.value = password;
  
  }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
