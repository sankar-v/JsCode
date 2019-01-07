//https://javascript.info/promise-api
let urls = [
    'https://api.github.com/users/iliakan',
    'http://api.github.com/users/remy',
    'https://api.github.com/users/jeresig'
  ];
  
  Promise.all(
    fetch('https://api.github.com/users/iliakan').catch(err => err),
    fetch('https://api.github.com/users/remy').catch(err => err),
    fetch('http://no-such-url').catch(err => err)  
    )
    // for each response show its status
    .then(responses => { // (*)
        alert(responses[0].status); // 200
        alert(responses[1].status); // 200
        alert(responses[2]); // TypeError: failed to fetch (text may vary)
      }
    );