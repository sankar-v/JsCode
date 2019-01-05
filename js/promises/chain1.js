//https://codeburst.io/javascript-learn-promises-f1eaa00c5461

const p = new Promise(function(resolve, reject){
    setTimeout(()=> resolve(1), 2000);
}).then((result)=> {
    console.log(result);
    return result + 2;
}).then((result)=> {
    console.log(result);
    return result + 2;
}).then((result)=> {
    console.log(result);
    return result + 2;
});

p.then(console.log("helo"));