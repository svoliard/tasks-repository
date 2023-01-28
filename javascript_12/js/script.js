function formValidation() {
    const userid = document.registration.userid;
    const password = document.registration.passid;
    const username = document.registration.username;
    const address = document.registration.address;
    const country = document.registration.country;
    const zip = document.registration.zip;
    const email = document.registration.email;
    const msex = document.registration.msex;
    const fsex = document.registration.fsex;

    userValidation(userid, 12, 5);
    passwordValidation(password, 12, 7);
    allLetter(username);
    alphanumeric(address);
    countrySelect(country);
    allNumeric(zip);
    validateEmail(email);
    validRadioInput(msex, fsex);
}
function userValidation(field, max, min) {
    const fieldLength = field.value.length;
    if (fieldLength === 0 || fieldLength >= min || fieldLength < max) {
        alert("User Id should not be empty / length be between " + max + " to " + min);
        return false;
    }
    return true;
}
function passwordValidation(field, max, min) {
    const fieldLength = field.value.length;
    if (fieldLength === 0 || fieldLength >= min || fieldLength < max) {
        alert("Password should not be empty / length be between " + max + " to " + min);
        return false;
    }
    return true;
}
function allLetter(field) {
    const letters = /^[A-Za-z]+$/;
    if (field.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');
        return false;
    }
}
function alphanumeric(field) {
    const characters = /^[0-9a-zA-Z]+$/;
    if (field.value.match(characters)) {
        return true;
    } else {
        alert('User address must have alphanumeric characters only');
        return false;
    }
}
function countrySelect(field) {
    if (field.value === "Default") {
        alert("Please, Select your country from the list");
        return false;
    } else {
        return true;
    }
}
function allNumeric(field) {
    const numbers = /^[0-9]+$/;
    if (field.value.match(numbers)) {
        return true;
    } else {
        alert('ZIP code must have numeric characters only');
        return false;
    }
}
function validateEmail(field) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (field.value.match(mailFormat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        return false;
    }
}
function validRadioInput(firstField, secondField) {
    if (!firstField.checked && !secondField.checked) {
        alert('Select Male/Female');
        return false;
    } else {
        return true;
    }
}