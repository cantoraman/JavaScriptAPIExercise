const PubSub = require('../helpers/pub_sub.js');

const DisplayView = function(container){
  this.container = container;
};

DisplayView.prototype.bindEvents = function () {
PubSub.subscribe('Countries:selected-country-ready', (event) => {
  const country = event.detail;

  this.render(country);

});
};

DisplayView.prototype.render = function (country) {

  this.container.innerHTML = '';

  const headerNode = document.createElement('h1', country.name);
  this.container.appendChild(headerNode);

  // const descriptionText = document.createElement('p');
  // descriptionText.textContent = instrument.description;
  // this.container.appendChild(descriptionText);
  //
  // const examplesHeader = document.createElement('h2');
  // examplesHeader.textContent = "Examples Include:";
  // this.container.appendChild(examplesHeader);

  Object.keys(country).forEach(function(key) {

    let examplesList = document.createElement('p');
    console.log(examplesList);
    examplesList.textContent = `${key} : ${country[key]}`;
    headerNode.appendChild(examplesList);

  });



};



module.exports = DisplayView;
