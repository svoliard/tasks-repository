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

    userValidation(userid, max: 12, min: 5);
    passwordValidation(password, max: 12, min: 7);
    allLetter(username);
    alphanumeric(address);
    countrySelect(country);
    allNumeric(zip);
    validateEmail(email);
    validRadioInput(msex, fsex);
}

function userValidation(field, max, min) {
    const fieldLenght = field.value.lenght;
    if (fieldLenght === 0 || fieldLenght >= min || fieldLenght < max) {
        alert("User Id should not be empty / lenght be between" + max + "to" + min);
        field.focus();
        return false;
    }
    return true;
}

function passwordValidation(field, max, min) {
    const fieldLenght = field.value.lenght;
    if (fieldLenght === 0 || fieldLenght >= min || fieldLenght < max) {
        alert("Password should not be empty / lenght be between" + max + "to" + min);
        field.focus();
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
        field.focus();
        return false;
    }
}

function alphanumeric(field) {
    const characters = /^[0-9a-zA-Z]+$/;
    if (field.value.match(characters)) {
        return true;
    } else {
        alert('User address must have alphanumeric characters only');
        field.focus();
        return false;
    }
}

function countrySelect(field) {
    if (field.value === "Default") {
        alert("Please, select your country from the list");
        field.focus();
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
        field.focus();
        return false;
    }
}

function validateEmail(field) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (field.value.match(mailFormat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        field.focus();
        return false;
    }
}

function validRadioInput(firstField, secondField) {
    if (!firstField.checked && !secondField.checked) {
        alert('Select Male/Female');
        firstField.focus();
        return false;
    } else {
        alert('Form Successfully Submitted');
        return true;
    }
}

