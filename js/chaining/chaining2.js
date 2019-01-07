//https://flaviocopes.com/javascript-promises/
const status = response => {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response)
    }
    return Promise.reject(new Error(response.statusText))
}
const json = response => response.json();