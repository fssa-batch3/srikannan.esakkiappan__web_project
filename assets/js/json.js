function getUsers() {
    fetch("http://localhost:3000/parkin",)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        console.log(data);
        // Access your data here
      });
  }
getUsers();

// const data = null;

// // const xhr = new XMLHttpRequest();
// const xhr=require('xhr2')
// xhr.withCredentials = true;

// // xhr.addEventListener('readystatechange', function () {
// // 	if (this.readyState === this.DONE) {
// // 		console.log(this.responseText);
// // 	}
// // });

// xhr.open('GET', 'https://google-maps-geocoding.p.rapidapi.com/geocode/json?latlng=40.714224%2C-73.96145&language=en');
// xhr.setRequestHeader('content-type', 'application/octet-stream');
// xhr.setRequestHeader('X-RapidAPI-Key', '67ae57c9f0mshbf62d572b7eb629p1fbabdjsnbe6a12f81b5b');
// xhr.setRequestHeader('X-RapidAPI-Host', 'google-maps-geocoding.p.rapidapi.com');

// xhr.send(data);

// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
//   params: {
//     address: '164 Townsend St., San Francisco, CA',
//     language: 'en'
//   },
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '67ae57c9f0mshbf62d572b7eb629p1fbabdjsnbe6a12f81b5b',
//     'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com'
//   }
// };

// // try {
// 	axios.request(options)
//   .then(function (response){
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// })

const axios=require('axios')

const params = {
  access_key: '2b21b822261a7e3fb6069f54c65ac788',
  query: '1600 Pennsylvania Ave NW'
}

axios.get('http://api.positionstack.com/v1/forward?access_key=2b21b822261a7e3fb6069f54c65ac788&query=')
  .then(response => {
    console.log(response.data);
  }).catch(error => {
    console.log(error);
  });