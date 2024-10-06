// Task 7: String Transformation
// Scenario: You want to transform a list of strings (e.g., convert to uppercase or reverse the string).
// •	Write a function that takes an array of strings and a callback function.
// •	The callback should define how each string is transformed.
function stringTransform(str,callback){
    callback(str);
}
string="hello welcome to my page..";
stringTransform(string,(text)=>{console.log(text.toUpperCase())
    let res=text.split("").reverse().join("");
    console.log(res)
})