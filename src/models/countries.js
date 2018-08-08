const PubSub = require('../helpers/pub_sub.js');

const Countries = function(){
  this.countries = null;
};

Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((data) => {
    this.countries = data.countries;
    PubSub.publish('Countries:countries-loaded', this.countries);
  });

};



module.exports = Countries;
