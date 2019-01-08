//cross origin include..
fetch('https://example.com', {
  credentials: 'include'  
})

// The calling script is on the origin 'https://example.com'
fetch('https://example.com', {
  credentials: 'same-origin'  
})
//Dont include credentials..
fetch('https://example.com', {
  credentials: 'omit'  
})

//uploading json data...
var url = 'https://example.com/profile';
var data = {username: 'example'};

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));s

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', JSON.stringify(response)));

//Uploading multiple files
var formData = new FormData();
var photos = document.querySelector("input[type='file'][multiple]");

formData.append('title', 'My Vegas Vacation');
for (var i = 0; i < photos.files.length; i++) {
  formData.append('photos', photos.files[i]);
}

fetch('https://example.com/posts', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(response => console.log('Success:', JSON.stringify(response)))
.catch(error => console.error('Error:', error));