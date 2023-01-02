function countryPhoneCode(countryISO) {
    switch (countryISO) {
        case 'BHS':
            return '+1-242';
        case 'BRN':
            return '+673';
        case 'COL':
            return '+57';
        case 'CZE':
            return '+420';
        case 'FIN':
            return '+358';
        case 'MDA':
            return '+373';
        case 'NPL':
            return '+977';
        case 'PAL':
            return '+680';
        case 'QAT':
            return '+974';
        case 'MSR':
            return '+1-664';
        default:
            return 'there is no other country';
    }
    document.getElementById("phone_prefix").innerHTML = countryISO;
}
document.write(countryPhoneCode('MSR'));