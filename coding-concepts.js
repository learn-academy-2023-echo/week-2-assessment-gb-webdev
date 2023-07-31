// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Echo 2023"
// console.log(cohort.split(""))

// a) Your answer: ["E" "c" "h" "o" "2" "0" "2" "3"]
// b) Verify and explain: It did log what I thought, but I did forget the space in the middle and the commas. Splits a string into an array, but every single entry(including spaces, seperated by commas).

// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: An error of some type? Maybe undefined? since I don't think you can add a string into the function invoking brackets like that. It should just be added into the string interpolation instead.
// b) Verify and explain: It wasundefined, not exactly a proper error, but still can be fixed with the string interpolated message instead.

// --------------------3) What will this log?

// const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: Correct!

// --------------------4) What will this log?

// const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: Correct!

// --------------------5) What will this log?

// const myCodingSkills = {
//   languages: ["JavaScript", "Ruby"],
//   frameworks: ["React", "Ruby on Rails"],
//   databases: "PostgreSQL",
//   versionControl: "GitHub"
// }
// console.log(myCodingSkills.languages[0])

// a) Your answer: ["Javascript"]
// b) Verify and explain: Incorrect, it only returned the word itself. no string, no square bracket.

// --------------------STRETCH: What will this log?

// class Learn {
//   constructor(name) {
//     this.student = name
//     this.cohort = "Echo"
//     this.year = 2023
//   }
// }
// const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: 
//student: george
//cohort: Echo
//year: 2023

// b) Verify and explain:
// Incorrect, it is wrapped in curly braces and all on the same line. The names are strings(barre the number) and the key pair values are seperated by commas.