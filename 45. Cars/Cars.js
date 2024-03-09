"use strict";
// Written by : Hafiz Abdullah.
// Assignment No: 45.
//Date : 22-2-2024.
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extras) {
    const CarInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extras));
    return CarInfo;
}
const car = storeCarInfo('Suzuki', 'Cultus', { color: 'blue' }, { features: ['navigation', 'sunroof'] });
console.log(car);
