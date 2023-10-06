/* function greetMe(param) {
    console.log(`szia ${param}!`)
}

greetMe("argument")

 */// A fenti függvényben található paraméter és argumentum a hivatalos nevüket jelzi! 

 // NaN = Not a Number

/* function addTwoNumbers(num1, num2) {
    let sum = num1 + num2
    console.log(`the sum of two numbers (${num1}, ${num2}) is: ${sum}`)
    return sum
}

let resultOfAddTwoNumbers = addTwoNumbers(12.2, 20)

console.log(`the resultOfAddTwoNumbers: ${resultOfAddTwoNumbers}`) */


function cbExample() {
    console.log("i am a callback function")
}

function funcExample(name, callback) {
    console.log(`hello ${name}`)
    callback()
}

funcExample("Bence", cbExample)