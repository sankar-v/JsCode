//https://javascript.info/promise-api
const loadCached= (url) => {
    let cache = loadCached.cache || (loadCached.cache = new Map());

    if (cache.has(url)){
        return Promise.resolve(cache.get(url)); // (*) - guaranteed to return a promise 
    }

    return fetch(url)
        .then(response => response.text())
        .then(text => {
            cache.set(url, text);
            return text;
        }
    );
}