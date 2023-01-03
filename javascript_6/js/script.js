const dataStrings = [7, 2, 'g', 'g', 2, 11, 2, 7, 'c', 2, 4, 9, 7, 2];
let mostFrequent = 1;
let more = 0;
let item;
for (let i = 0; i < dataStrings.length; i++) {
    for (let j = i; j < dataStrings.length; j++) {
        if (dataStrings[i] == dataStrings[j])
            more++;
        if (mostFrequent < more) {
            mostFrequent = more;
            item = dataStrings[i];
        }
    }
    more = 0;
}
function find_duplicate_in_array(dataStrings) {
    const object = {};
    const result = [];

    dataStrings.forEach(item => {
        if (!object[item])
            object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
        if (object[prop] >= 2) {
            result.push(prop);
        }
    }

    return result;

}
console.log((find_duplicate_in_array(dataStrings)) + (` most frequent is ${item} (${mostFrequent} times ) `));