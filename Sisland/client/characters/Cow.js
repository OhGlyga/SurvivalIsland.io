//İnek karakteri burada tanımlanacak
//characters/Cow.js
import { Animal } from './Animal.js';

export class Cow extends Animal {
    constructor(options) {
        super({
            ...options,
            type: 'cow',
            width: options.width || 50,
            height: options.heigh || 50,
            color: options.color || 'brown',
            speed: options.speed || 1.5,
            jumpForce: options.jumpForce || -26,
            health: options.health || 140
        })
        this.abilities = options.abilities || []; //İleride kullanılacak yetenekler için
    }
    //Şimdilik special move eklemiyorum
}
