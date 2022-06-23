var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charsNumbers = '0123456789';
var charsSymbols = '+-_=/;><)(*&^%$#@!&{}[]';


function generatePassword() {

    var promptCount = window.prompt('How many characters would you like your password to contain?')
    if (promptCount === null || promptCount <= 8 || promptCount >= 128) {
      window.alert('Choose a character count between 8 and 128');
        generatePassword();
    } else {

    var confirmSpec = window.confirm('Click OK to confirm special characters');
    var confirmNum = window.confirm('Click OK to confirm numeric characters');
    var confirmLower = window.confirm('Click OK to confirm lowercase characters');
    var confirmUpper = window.confirm('Click OK to confirm uppercase characters');
    var allowed = '';
    var password = '';
    var passwordLength = parseInt(promptCount);
        {
        if (confirmUpper == true) {
          allowed += upperCase;
        }
        if (confirmLower == true) {
          allowed += lowerCase;
        }
        if (confirmNum == true) {
          allowed += charsNumbers;
        }
        if (confirmSpec == true) {
          allowed += charsSymbols;
        }

        //randomizing function to randomize password
        for(var i = 0; i < passwordLength; i++) {
          var random = Math.floor(Math.random() * allowed.length);
          password += allowed[random];
          var passwordText = document.querySelector("#password");
          passwordText.value = password;
        }};
}};


function writePassword() {
  var password = generatePassword();
};

    generateBtn.addEventListener("click", writePassword);