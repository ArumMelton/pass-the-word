// Declare variables for button and possible characters. //

var generateBtn = document.querySelector("#generate");
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charsNumbers = '0123456789';
var charsSymbols = '+-_=/;><)(*&^%$#@!&{}[]';

// Function for generating password. //

function generatePassword() {

  // Character count conditional statement first. If input is unsatisfactory, asks again. //

    var promptCount = window.prompt('How many characters would you like your password to contain?')
    if (promptCount === null || promptCount < 8 || promptCount > 128)
    {
      window.alert('Choose a character count between 8 and 128');
        generatePassword();
    } else {

      // Confirmation for the rest of the parameters selected. //

    var confirmSpec = window.confirm('Click OK to confirm special characters');
    var confirmNum = window.confirm('Click OK to confirm numeric characters');
    var confirmLower = window.confirm('Click OK to confirm lowercase characters');
    var confirmUpper = window.confirm('Click OK to confirm uppercase characters');

      // establish empty starting values and convert the prompt count value into an integer. //

    var allowed = '';
    var password = '';
    var passwordLength = parseInt(promptCount);

      // check conditions and filter selections. //

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

        //for loop for randomizing function to randomize password //

        for(var i = 0; i < passwordLength; i++) {
          var random = Math.floor(Math.random() * allowed.length);
          password += allowed[random];
          var passwordText = document.querySelector("#password");
          passwordText.value = password;
        }};
}};
        // Call function to write password //

function writePassword() {
  var password = generatePassword();
};

    generateBtn.addEventListener("click", writePassword);