// Written by : Hafiz Abdullah.
// Assignment No: 45.
//Date : 22-2-2024.

import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extras: { [key: string]: any }[]): object {
    const CarInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extras)
    };
    return CarInfo;
}

const car = storeCarInfo('Suzuki', 'Cultus', {color: 'blue'}, {features: ['navigation', 'sunroof']});
console.log(car);
