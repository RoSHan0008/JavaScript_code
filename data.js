const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/regions/list',
  headers: {
    'X-RapidAPI-Key': 'e47f10f13fmsh3a2b320bbd4cf4ep100bb7jsnf91c513fd359',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});