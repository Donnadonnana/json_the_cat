const request = require('request');

request.get('https://api.thecatapi.com/v1/breeds/search?q=sib', {
  headers: {
    'x-api-key': 'b01651ff-9bdc-4206-ae86-321fcd25db6d'
  }
}, (err, res, body) => {
  console.log(JSON.parse(body));
})