//https://www.datchley.name/es6-promises/
//an immediately resolved promise..
var p1 = Promise.resolve("foo bar");

//can get it after teh fact, unlike events..
p1.then((res) => console.log(res));

var p2 = new Promise(function(resolve, reject){
    setTimeout(()=> resolve(4), 2000);
});

//handler cannot change promise, just value
p2.then((res)=>{
    res +=2;
    console.log(res);
})

// still gets 4
p2.then((res) => console.log("Promise p2 :" + res)); 

var p3 = new Promise((resolve, reject) =>{
    resolve(5);
});
p3.then((val)=> console.log("Promise p3 " + val));