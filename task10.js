// Task 10: Mathematical Operations
// Scenario: You want to perform different mathematical operations on two numbers (e.g., addition, multiplication, etc.).
// •	Write a function that takes two numbers and a callback function.
// •	The callback should specify the operation to be performed on the numbers (like addition or multiplication).
function mathematicalOperation(a,b,callback){
    callback(a,b);
}
let res=mathematicalOperation(35,12,(x,y)=>{
    console.log(`addition of ${x} and ${y} is ${x+y}`)
      console.log(`Multiplication of ${x} and ${y} is ${x*y}`)
})

