// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialchars = "!@#$%^&*";
var passwordLength;
var password = [];

//Generate a random Uppercase variable
var generateRandomUppercase = function () {
    var arraylength = uppercase.length;
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, uppercase[i])
        return (uppercase[i]);
    }
};

//Generate a Random Lower case Variable
var generateRandomLowercase = function () {
    var arraylength = lowercase.length;
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, lowercase)
        return (lowercase[i]);
    };
}

//Generate a random number
var generateRandomNumber = function () {
    var arraylength = numbers.length;
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, numbers[i])
        return (numbers[i]);
    };
}

//Generate a Random Special Character
var generateRandomspecialchars = function () {
    var arraylength = specialchars.length;
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, specialchars[i])
        return (specialchars[i]);
    };
}


var pswdCriteria = function () {
    var lowerCase = window.confirm("Do you want lowercase letters in your password?");
    var upperCase = window.confirm("Do you want uppercase letters in your password?");
    var numbers = window.confirm("Do you want numbers in your password?");
    var special = window.confirm("Do you want special characters in your password?");

    console.log(lowerCase, upperCase, numbers, special);
    return (lowerCase, upperCase, numbers, special);
};

var enterPasswordLength = function () {
    passwordLength = prompt("Please enter the length of the desired Password: ");
    console.log("Password Length: " + passwordLength);
    return (passwordLength);
};
var generatePassword = function () {

    // Get password lenght
    enterPasswordLength();
    // Checking if password length is <8 or >128. then ask again.
    while (passwordLength < 8 || passwordLength > 128) {
        window.alert("Password length should be between 8 to 128 characters. Please try again.");
        enterPasswordLength();
    };
    pswdCriteria();

    // Generate the random Password of entered length
    for (let i = 0; i < enterPasswordLength.length; i++) {



    };

    return;
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
