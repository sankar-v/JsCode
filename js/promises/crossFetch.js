//https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
import fetch from 'cross-fetch';
// Or just: import 'cross-fetch/polyfill';
fetch('api.github.com/users/lquixada')
    .then(res => {
        if (res.status >= 400){
            throw new Error("Bad response from server");
        }
        return res.json();
    })
    .then(user => {
        console.log(user);
    })
    .catch(err => {
        console.error(err);
});
