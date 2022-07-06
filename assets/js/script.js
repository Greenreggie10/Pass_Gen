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
  
  
  var length = parseInt(prompt("How many characters -between 8 & 128- would you like your password to contain?"));
  console.log(typeof length);
  if (length < 8 || length > 128) {
    alert ("Please only make the length between 8 to 128 characters!")
    return null; 
  }
  //Lower case letters
  var lCharactersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var lCharactersPrompt = confirm('Would you like to use lowercase letters? Enter "YES" or "NO" to choose.');
  console.log(lCharactersPrompt);
  
    //Upper case letters
    var ucCharactersArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    var ucCharactersPrompt= confirm("Would you like to use uppercase letters?");
    console.log(ucCharactersPrompt);
  
    //Numeric characters
    var numCharactersArray = Math.floor(Math.random() * 10)
    var numCharactersPrompt = confirm("Would you like to use numeric characters?");
    console.log(numCharactersPrompt);
  
    //Special characters
    var sCharactersArray = ['!','@','#','$','%','&','*']
    var sCharactersPrompt = confirm("Would you like to use special characters?");
    console.log(sCharactersPrompt);
   
    if (!sCharactersPrompt && !numCharactersPrompt && !ucCharactersPrompt && !lCharactersPrompt) {
      alert ('please chose one of specified characters')
      generatePassword();
    }


    var passwordArray = []; 
    for (let i = 0; i < length; i++) {
      var characterSelctor = Math.floor(Math.random() * 4)
      if (characterSelctor === 0 && sCharactersPrompt){
        var item = sCharactersArray[Math.floor(Math.random() * 7)]
        passwordArray.push(item);
      } else if (characterSelctor === 1 && ucCharactersPrompt){
        var item = ucCharactersArray[Math.floor(Math.random() * 26)]
        passwordArray.push(item);
      } else if (characterSelctor === 2 && lCharactersPrompt){
        var item = lCharactersArray[Math.floor(Math.random() * 26)]
        passwordArray.push(item) 
      } else if (characterSelctor === 3 && numCharactersPrompt){
        var item =  Math.floor(Math.random() * 10 )
        passwordArray.push(item)
    } else {
      i--
    }
  }

  var myPassword = passwordArray.join("");
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



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};
