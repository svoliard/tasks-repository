const numbers = [4, 60, 53, 26, 2, 98, 11, 145, 3]

let maximum = -Infinity
let minimum = Infinity

for (let number of numbers) {
    if (number > maximum)
        maximum = number

    if (number < minimum)
        minimum = number
}

console.log(`Maximum: ${maximum};` + ` Minimum: ${minimum}`);