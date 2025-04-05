//Deprem afeti buradan yönetilecek.
//disaster/Earthquake.js

import { Disaster } from './Disaster.js';

export class Earthquake extends Disaster {
    constructor() {
        super('Deprem');
    }
   
    //İleride: sarsıntı, kamera titremesi ve fiziksel etkiler vs. buraya eklenecek.
}