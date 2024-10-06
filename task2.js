arr=[1,2,3,4,5,6];
function numberProcess(a,callback){
    callback(a);
}
numberProcess(arr,(num)=>{
    num.forEach(data=>console.log(data*2))
});
