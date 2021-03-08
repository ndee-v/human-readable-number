const units = ['zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty'
]



const tens = [
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
]



module.exports = function toReadable(number) {
    if (number >= 0 && number <= 20) return units[number]

    if (number >= 21 && number < 100) {
        let a = tens[(number - number % 10)/ 10 - 1]
        let b = (number % 10 === 0) ? '': units[number %10]
        if (b !== '') return a + ' ' + b
        return a
    }

    if (number >= 100 && number <= 999) {
        let a = units[(number - number % 100)/ 100 ] + ' hundred'
        let b = ''
        if (number % 100 !== 0) {
            b = ' ' + toReadable(number % 100)
        }
        return a + b
    }
}


// for (let i = 222; i < 232; i++) {
//     console.log(toReadable(i))
// }

//console.log((21 - 21%10)/10)