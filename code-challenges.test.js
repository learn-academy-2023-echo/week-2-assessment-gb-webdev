// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe ("divByThree", () => {
//     it("returns a string letting you know if the entered number is devisible by 3 or not.", () => { 
//         const object1 = { number: 15 }
//         const object2 = { number: 0 }
//         const object3 = { number: -7 } 
//     expect(divByThree(object1.number)).toEqual(`${object1.number} is divisible by three`)
//     expect(divByThree(object3.number)).toEqual(`${object3.number} is not divisible by three`)
//     })
// })
//Good failur: ReferenceError: divByThree is not defined
// Expected output: "15 is divisible by three"
// Expected output: "0 is divisible by three"
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// Pseudo code: Make a function that takes in a number. add a conditional with a sum to see if the entered number divided by 3 eventually = 0. have 2 if/else statements, if num / 3 eventually = 0, return "num (in string interpolation) is divisable by 3". If not return the opposite.

// const divByThree = (number) => {
//     if (number % 3 === 0) {
//     return `${number} is divisible by three`
//     }
//     else {
//     return `${number} is not divisible by three`
//     } 
// }

// console.log(divByThree(number))

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

// describe("capNouns", () => {
//     it("takes in an array and returns the same array capitalised", () => {
//         const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
//         const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
//         expect(capNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(capNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

// Good fauilure:  ReferenceError: capNouns is not defined

// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// Pseudo code: write a function that takes in the array. use .map to iterate through the array, create an action, below return the value 0 indexed, this will access the first index of each value in the array. Use .toUpperCase to captialise the first index letter in the array, then concat the rest of the remaining word them with + (also .substring(1)) .

// const capNouns = (array) => {
//     return array.map((value) => {
//         return value[0].toUpperCase() + value.substring(1)
//     })
// }
// console.log(upCase(randomNouns1))
// console.log(upCase(randomNouns2))
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
    it("finds the first vowel in a strings returns it's index", () => {
        const vowelTester1 = "learn"
        const vowelTester2 = "academy"
        const vowelTester3 = "challenges"
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})
// // Expected output: 1
// // Expected output: 0
// // Expected output: 2

// // b) Create the function that makes the test pass.

// Pseudo code: create a for function/loop to iterate through the string. set the condition for the loop to stop and return the index on the first vowl it comes accross. (this one was a struggle and I couldn't get it right, I tried for 6+ hours.

let firstVowel = vowelTester1.indexOf("e", "i", "o", "u")
let firstVowels = vowelTester2.indexOf("a", "e", "i", "o")
let firstVowelz = vowelTester3.indexOf("a", "e", "i", "o")
console.log(firstVowel)
console.log(firstVowels)
console.log(firstVowelz)
