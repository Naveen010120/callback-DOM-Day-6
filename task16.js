// Task 16: Multi-step Process
// Scenario: You are running a multi-step process and want to perform different actions at each step.
// •	Write a function that accepts an array of steps and a callback.
// •	The callback should be executed after each step is completed.
function multipleStepFunction(n,callback){
   for(data of n){
    console.log(data);
    callback(data,n)
   }
}
function nextStep(a,n){
    if(a.length<n.length)
    console.log(`${a} next step to be continue..`)

}
arr=["naveen",23,"mahesh",40,"deekshith",21,"vamshi",18]
multipleStepFunction(arr,nextStep)