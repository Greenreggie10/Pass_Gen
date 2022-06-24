//GIVEN I need a new, secure password

//step 1
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//step 2:
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password


function generatePassword() {
  confirms();

  if () {

  }


  var length =prompt("How many characters -between 8 & 128- would you like your password to contain?");
  console.log(length);
  if (length < 8 || length > 128) {
    alert ("Please only make the length between 8 to 128 characters!")
  generatePassword();
  }
  var myPassword ="";
  return myPassword;
};




//step 3:
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters


//step 4:
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//step 5:
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected

//step 6:
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria

//step 7:
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Password generator 
// click a button & you get generated a code 
// Assignment code here



//

function confirms () {
  //Lower case letters
  var lCharactersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var lCharactersPrompt = confirms('Would you like to use lowercase letters? Enter "YES" or "NO" to choose.');
  console.log(lCharactersPrompt);

  //Upper case letters
  var ucCharactersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var ucCharactersPrompt= confirm("Would you like to use uppercase letters?");
  console.log(ucCharacters);

  //Numeric characters
  var numCharactersArray = Math.floor(Math.random() + 9 )
  var numCharactersPrompt = confirm("Would you like to use numeric characters?");
  console.log(numCharacters);

  //Special characters
  var sCharactersArray = ['!','@','#','$','%','&','*']
  var sCharactersPrompt = confirm("Would you like to use special characters?");
  console.log(sCharacters);


  //if statements 
  var confirmationArray = []

  if (lCharactersArrayt) {
    confirmationArray.push('lCharactersArray')
   }

   if (ucCharactersArray) {
    confirmationArray.push('ucCharactersArray')
   }

  if (numCharactersPrompt) {
    confirmationArray.push('numCharactersArray')
  }

  if (sCharactersPrompt) {
   confirmationArray.push('sCharactersPrompt')
  }
 

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword( );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
