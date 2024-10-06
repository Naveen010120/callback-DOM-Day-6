// Task 12: Task Completion Checker
// Scenario: You want to check if a user has completed a task and take action based on the result.
// •	Write a function that accepts a task and a callback.
// •	The callback should check whether the task is completed and take an appropriate action, such as showing a message.
function completionCheck(input,callback){
  callback(input);
}
function processChecking(text){
    if(text>=10){
        console.log(`you have completed all tasks..🤗🤗`)
    }else if(text>=9){
        console.log("you need to complete some tasks..")
    }else{
        console.log("no tasks is submitted pls upload the tasks..❌🔍")
    }
}
num=0;
completionCheck(num,processChecking)