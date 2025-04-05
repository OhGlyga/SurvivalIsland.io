//Rastgele afetleri tetikleyen kısım burada yer alacak
//disaster/disasterFacatory.js

import { Fire } from './Fire.js';
import { Earthquake } from './Earthquake.js';

const disasterClasses = [
    Fire,
    Earthquake,
];
export function getRandomDisaster() {
    const DisasterClass = disasterClasses[Math.floor(Math.random() * disasterClasses.length)];
    return new DisasterClass();
}