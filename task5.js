// <!-- Task 5: Array Filtering
// Scenario: You want to filter an array of numbers based on a condition (e.g., even or odd numbers).
// •	Write a function that takes an array of numbers and a callback function.
// •	The callback should decide whether a number should be included in the filtered result. -->
arr=[1,2,3,4,5,6,7,8];
function evenOdd(a,callback,callback1){
    callback(a);
    callback1(a);
}
function even(a){
   let res= a.filter((data)=>data%2==0)
   console.log(res)
}
function odd(a){
    let res1=a.filter((data)=>data%2!=0)
    console.log(res1)
}
evenOdd(arr,even,odd)
