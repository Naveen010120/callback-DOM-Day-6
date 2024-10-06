function welcome(name,callback){
    callback();
    return name;
}
string="naveen";
res=welcome(string,function(){
    console.log("Hello")
});
console.log(res)
