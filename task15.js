// Task 15: Sorting with Callback
// Scenario: You want to sort an array of objects based on different properties.
// •	Write a function that takes an array of objects and a callback.
// •	The callback should define the property by which the array should be sorted (e.g., sorting by name or age).
function sortingFuction(a,callback){
    callback(a);
}
function ascendingOrder(n){
   res=n.sort((a,b)=>a-b);
   console.log(res)
}
arr=[45,63,2,134,83,12,0]
sortingFuction(arr,ascendingOrder)