// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z".split(" ");
var lowercase = "a b c d e f g h i j k l m n o p q r s t u v w x y z".split(" ");
var numbers = "1 2 3 4 5 6 7 8 9 0".split(" ");
var specialchars = " ! # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~ ".split(" ");
var passwordLength;
var passwordChar = [];
var lowerCase, upperCase, numerals, special;

//Generate a random Uppercase variable
var generateRandomUppercase = function () {
    var arraylength = uppercase.length;
    console.log("Uppercase Array Length " + arraylength);
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, uppercase[character])
        return (uppercase[character]);
    }
};

//Generate a Random Lower case Variable
var generateRandomLowercase = function () {
    var arraylength = lowercase.length;
    console.log("Lowercase Array Length " + arraylength);
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, lowercase[character]);
        return (lowercase[character]);
    };
}

//Generate a random number
var generateRandomNumber = function () {
    var arraylength = numbers.length;
    console.log("numbers Array Length " + arraylength);
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, numbers[character]);
        return (numbers[character]);
    };
}

//Generate a Random Special Character
var generateRandomspecialchars = function () {
    var arraylength = specialchars.length;
    console.log("special characters Array Length " + arraylength);
    for (i = 0; i < arraylength; i++) {
        var character = Math.floor(Math.random() * arraylength);
        console.log(character, specialchars[character]);
        return (specialchars[character]);
    };
}


var pswdCriteria = function () {
    lowerCase = window.confirm("Do you want lowercase letters in your password?");
    upperCase = window.confirm("Do you want uppercase letters in your password?");
    numerals = window.confirm("Do you want numbers in your password?");
    special = window.confirm("Do you want special characters in your password?");

    console.log("Lowercase => " + lowerCase, "Uppercase => " + upperCase, "Numbers =>" + numerals, "Special Characters =>" + special);
    return (lowerCase, upperCase, numerals, special);
};

var enterPasswordLength = function () {
    passwordLength = prompt("Please enter the length of the desired Password: ");
    if (passwordLength === null) {
        return;
    }
    console.log("Password Length: " + passwordLength);
    return (passwordLength);
};
var generatePassword = function () {
    console.log(passwordLength);
    console.log(lowerCase, upperCase, numerals, special);
    // Generate the random Password of entered length
    for (let i = 0; i < passwordLength; i++) {
        if (lowerCase === true)
            if (passwordChar.length < passwordLength) {
                return;
            }
            else {
                passwordChar += generateRandomLowercase();
            }

        if (upperCase === true)
            if (passwordChar.length < passwordLength) {
                return;
            }
            else {
                passwordChar += generateRandomUppercase();
            }

        if (numerals === true)
            if (passwordChar.length < passwordLength) {
                return;
            }
            else {
                passwordChar += generateRandomNumber();
            }

        if (special === true)
            if (passwordChar.length < passwordLength) {
                return;
            }
            else {
                passwordChar += generateRandomspecialchars();
            }

    };




    // };
    console.log(passwordChar);

    // password = generateRandomLowercase();
    // generateRandomUppercase();
    // generateRandomNumber();
    // generateRandomspecialchars();
    return (passwordChar);
};
var reset = function () {

}


// Write password to the #password input
function writePassword() {
    //Checking which criteria user wants for the password
    pswdCriteria();
    // Get password lenght
    enterPasswordLength();
    // Checking if password length is <8 or >128. then ask again.
    while (passwordLength < 8 || passwordLength > 128) {
        if (passwordLength === null) {
            return;
        }
        window.alert("Password length should be between 8 to 128 characters. Please try again.");
        enterPasswordLength();
    };

    debugger;
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    reset();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
