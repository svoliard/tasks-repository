function getDataType(value) {
    if (typeof value === 'number') {
        return 'It\'s number!'
    } else if (typeof value === 'string') {
        return 'It\'s string!'
    } else if (typeof value === 'boolean') {
        return 'It\'s boolean!'
    } else if (typeof value === 'object') {
        return 'It\'s object!'
    } else if (typeof value === 'undefined') {
        return 'It\'s undefined!'
    } else if (typeof value === 'function') {
        return 'It\'s function!'
    } else if (typeof value === 'symbol') {
        return 'It\'s symbol!'
    } else {
        return 'null'
    }
    document.getElementById("dataType").innerHTML = value;
}
document.write(getDataType(5));
document.write(getDataType('orc'));
document.write(getDataType(true));