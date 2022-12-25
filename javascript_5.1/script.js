function reverse(content) {
    if(typeof content === 'string') {
        return content.split('').sort().join('');
    } else if(typeof content === 'number') {
        return String(content).split('').reverse().join('');
    } else {
        return 'Not corect data input!'
    }
}
console.log(reverse(75463));