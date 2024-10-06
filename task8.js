// Task 8: Error Handling with Callback
// Scenario: You want to execute an operation that might throw an error and handle that error using a callback.
// •	Write a function that accepts two callbacks—one for success and one for handling an error.
// •	Simulate a situation where the operation may succeed or fail, and call the appropriate callback.
function errorHandling(callback1,callback2,n){
    if(0<n){
        callback1(n);
    }else{
        callback2(n);
    }
}
num=0;

errorHandling((c1)=>
{
    let res=" "
    for(i=1;i<=c1;i++){
    res+=i+" ";
    }
    console.log(`numbers upto ${c1} are ${res}`);
},(c2)=>console.log(`${c2} is less then 1 so enter a larger Number`), num)