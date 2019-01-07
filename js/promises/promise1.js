//https://flaviocopes.com/javascript-promises/

let done = true

const isItDoneYet = new Promise((resolve,reject)=>{
    let workDone = ''
    if (done){
        workDone = "here is the thing I  built"
        resolve(workDone);
    }else{
        workDone = "I could not do anything"
        reject(workDone);
    }
});

isItDoneYet
    .then((res) => { console.log(res) 
                        return res = res + " Step 1";} )
    .then((res) => { console.log(res) 
                        return res = res + " Step 2";} )
    .then((res)=>  { console.log(res) 
                        return res = res + " Step 3";} )
    .then((res)=> { console.log(res)});

isItDoneYet.then((res) => console.log("Promise 1 :" + res));

const checkIfItsDone = () => {
    console.log("calling checkIfItsDone");
    isItDoneYet
      .then(ok => {
        console.log(ok)
      })
      .catch(err => {
        console.error(err)
      })
}
checkIfItsDone();