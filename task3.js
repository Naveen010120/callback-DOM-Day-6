// Task 3: Delayed Message
// Scenario: You want to display a message after a delay.
// •	Write a function that accepts a message and a callback.
// •	Use the callback to display the message after a specified time delay.
function hello(msg,msg1,callback){
    callback(msg,msg1);
    
}
function callback(msg,msg1){
    setTimeout((msg,msg1)=>console.log(msg,msg1),1000,msg,msg1)
}
hello("hi i am here","end..",callback);
