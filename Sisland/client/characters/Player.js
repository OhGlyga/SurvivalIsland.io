// characters/Player.js

import { Entity } from './Entity.js';

export class Player extends Entity {
  constructor(options) {
    super({...options });
    this.speed = options.speed || 3;
    this.jumpForce = options.jumpForce || -10;
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
}


