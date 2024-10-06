// Task 6: Timer with Callback
// Scenario: You want to execute a specific action after a countdown.
// •	Write a function that starts a countdown and accepts a callback to be executed when the timer ends.
// •	The callback could display a message like “Time’s up!” or perform another action.
function countDown(num,callback){
    callback();
    for(i=1;i<=num;i++){
        console.log(i);
    }
}
n=10
countDown(n,()=>setTimeout(()=>console.log("Time's up!"),100))