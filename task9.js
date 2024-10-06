// Task 9: User Input Processing
// Scenario: You want to process user input in different ways (e.g., converting the input to uppercase, trimming whitespace, etc.).
// •	Write a function that accepts user input and a callback.
// •	The callback should apply a transformation to the input and return the modified result.
function inputProcess(input,callback){
    callback(input);
}
function transform(text){
    console.log(text.toUpperCase())
    console.log(text.trimStart())
    console.log(text.split(' '))
    console.log(text.padEnd(text.length+3,",ok"))
}
num=" Hello Guys Welcome to My page"
inputProcess(num,transform)