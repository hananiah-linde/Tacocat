function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let returnObj = isPalindrome(userString);
    displayMessage(returnObj);
}

function isPalindrome(userString) {
    let returnObj = {};
    let regex = /[^a-z0-9]/gi;

    userString = userString.toLowerCase();
    userString = userString.replace(regex, "");

    let revString = userString.split("").reverse().join("");

    if (revString == userString) {
        returnObj.msg = "Well Done! You entered a Palindrome!"
    }
    else {
        returnObj.msg = "Sorry! You did not enter a Palindrome!"
    }

    returnObj.reversed = revString;

    return returnObj;
}


function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}