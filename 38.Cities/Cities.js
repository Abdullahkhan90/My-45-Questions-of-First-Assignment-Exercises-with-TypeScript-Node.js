"use strict";
// Written by: Hafiz Abdullah.
// Set describe_City Function.
function describe_City(cityName, country = 'DefaultCountry') {
    console.log(`${cityName} is in ${country}.`);
}
// Results.
describe_City('Karachi', 'Pakistan');
describe_City('New Delhi', 'India');
describe_City('Colombo');
