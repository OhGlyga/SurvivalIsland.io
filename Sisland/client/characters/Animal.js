//Hayvanların temel sınıfı
// characters/Animal.js

import { Entity } from './Entity.js';

export class Animal extends Entity {
  constructor(options) {
    super({ ...options });

    this.speed = options.speed || 2;
    this.jumpForce = options.jumpForce || -8;
    this.health = options.health || 100;
    this.maxHealth = this.health;

    this.type = options.type || 'generic'; //chicken, cow vb. hayvanlar...
    this.abilites = options.abilites || []; //özel yetenekler (ileride)
  }

    handleInput(input) {
        if (input.isKeyPressed('a')) this.x -= this.speed;
        if (input.isKeyPressed('d')) this.x += this.speed;
        if (input.isKeyPressed(' ')) this.tryJump();
    }

    tryJump() {
        if (this.onGround) {
            this.velocityY = this.jumpForce;
            this.onGround = false;
        }
    }

    takeDamage(amount) {
        this.health -= amount;
         if (this.health < 0) this.health = 0;   
    }

    heal(amount) {
        this.health += amount;
        if(this.health > this.maxHealth) this.health = this.maxHealth;
    }
    }
    
    
