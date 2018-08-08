const Countries = require('./models/countries.js');
const SelectView = require('./views/select_view.js');
const DisplayView = require('./views/display_view.js');

document.addEventListener('DOMContentLoaded', () => {

const countries = new Countries();
countries.getData();

countries.bindEvents();

const selectElement = document.querySelector('#countries');
const countriesDropDown = new SelectView(selectElement);
countriesDropDown.bindEvents();

const infoDiv = document.querySelector('#country');
const countryInfoDisplay = new DisplayView(infoDiv);
countryInfoDisplay.bindEvents();

});
