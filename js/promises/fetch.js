https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-

var fetchJSON = function(url){
    return new Promise((resolve, reject)=>{
        $.getJSON(url)
            .done((json) => resolve(json))
            .fail((xhr, status, err) => reject(status + err.message));
    });
}

var itemUrls = [ 
    'http://www.api.com/items/1234',
    'http://www.api.com/items/4567'
];
itemPromises = itemUrls.map(fetchJSON);

Promise.all(itemPromises)
    .then(function(results) {
        //we only get here if ALL promises fulfill
        results.forEach(function(item) {
            // process item
        });
    })
    .catch(function(err) {
        // Will catch failure of first failed promise
        console.log("Failed:", err);
    });