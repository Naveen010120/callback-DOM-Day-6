// Task 14: Conditional Operation
// Scenario: You want to perform an operation on a number only if a certain condition is met.
// •	Write a function that accepts a number and a callback for the condition.
// •	The callback should decide whether or not to perform the operation on the number (e.g., only if the number is positive).
function conditionalOperator(n,callback){
    if(n>0){
        callback(n);
    }else{
        console.log("enter the number that is greater then '0")
    }
}
function checkCondition(val){
    res=" "
    while(val>=1){
       res+=val+" ";
       console.log(res)
        val--;
    }
}
num=10
conditionalOperator(num,checkCondition)