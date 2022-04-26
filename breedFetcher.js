const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
request.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, {
  headers: {
    'x-api-key': 'b01651ff-9bdc-4206-ae86-321fcd25db6d'
  }
}, (err, res, body) => {
 
  const obj = JSON.parse(body)[0];

  const description = obj.description;

  callback(err, description);
})
};

module.exports = { fetchBreedDescription };
