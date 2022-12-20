function countryPhoneCode(countryISO) {
    if (countryISO === 'BHS') {
        countryISO = '+1-242';
    }
    else if (countryISO === 'BRN') {
        countryISO = '+673';
    }
    else if (countryISO === 'COL') {
        countryISO = '+57';
    }
    else if (countryISO === 'CZE') {
        countryISO = '+420';
    }
    else if (countryISO === 'FIN') {
        countryISO = '+358';
    }
    else if (countryISO === 'MDA') {
        countryISO = '+373';
    }
    else if (countryISO === 'NPL') {
        countryISO = '+977';
    }
    else if (countryISO === 'PAL') {
        countryISO = '+680';
    }
    else if (countryISO === 'QAT') {
        countryISO = '+974';
    }
    else if (countryISO === 'MSR') {
        countryISO = '+1-664';
    }
    else {
        countryISO = 'there is no other country';
    }
    document.getElementById("phone_prefix").innerHTML = countryISO;
}
countryPhoneCode('FIN');