//https://codeburst.io/javascript-learn-promises-f1eaa00c5461
function delay(t){
    return new Promise(function(resolve, reject){
        return setTimeout(resolve, t);
    });
}

function logHi(){
    console.log('hi');
}

delay(2000).then(logHi);