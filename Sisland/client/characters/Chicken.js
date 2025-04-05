//Kendi özel değerlerine sahip bir tavuk sınıfı
//characters/Chicken.js

import { Animal } from './Animal.js';

export class Chicken extends Animal {
    constructor(options) {
            super({
                ...options,
                type: 'chicken',
                width: options.width || 30,
                height: options.height || 30,
                color: options.color || 'yellow',
                speed: options.speed || 2.5,
                jumpForce: options.jumpForce || -15,
                health: options.health || 60

            });

            //ileride eklenecek özel yetenekler
            this.abilities = options.abilities || [];
        }
            //Özel yetenek fonksiyonu şimdilik boş kalacak
            useAbility() {
            console.log(`${this.type} uses its special ability (not implemented yet).`);
        }
    }
        
