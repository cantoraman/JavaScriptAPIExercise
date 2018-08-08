const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Countries = function(){
  this.countries = null;
};





Countries.prototype.getData = function () {
  const request = new Request('https://restcountries.eu/rest/v2/all');

  request.get((data) => {

    this.countries = data;
    PubSub.publish('Countries:countries-loaded', this.countries);
  });

}



module.exports = Countries;
