//https://plnkr.co/edit/zWibXlVW934pYDaWiPpX?p=preview
//https://javascript.info/promise-api
let urls = [
    'https://api.github.com/users/iliakan',
    '/',
    'http://no-such-url'
  ];

  Promise.all(
      urls.map(url => fetch(url).catch(err => err))
    )
    .then(responses => Promise.all(
      // if it's an error then pass on
      // otherwise response.json() and catch errors as results
      responses.map(r => r instanceof Error ? r : r.json().catch(err => err))
    ))
    .then(results => {
      alert(results[0].name); // Ilya Kantor
      alert(results[1]); // SyntaxError: Unexpected token < in JSON at position 0
      alert(results[2]); // TypeError: failed to fetch (text may vary)
    });