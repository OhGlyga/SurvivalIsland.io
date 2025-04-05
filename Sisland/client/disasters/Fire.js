//Yangın afeti buradan yönetilecek
//disasters/fire.js

import { Disaster } from './Disaster.js';

export class Fire extends Disaster {
    constructor() {
        super('Yangın')
    }
   
    //İleride: Yangın yayılımı, hasar gibi özel şeyler buraya gelecek...
}