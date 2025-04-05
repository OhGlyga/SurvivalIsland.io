//Bu sınıf, oyundaki her şeyin temelidir: oyuncu, hayvan, taş, platform, meteor…
import { CollisionBox } from '../collisions/collisionBox.js';

export class Entity {
  constructor({id, x, y, width, height, color = 'white'}) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.velocityY = 0;
    this.onGround = false;

    // Çarpışma kutusu  
    this.collisionBox = new CollisionBox(x, y, width, height);
  }

  updatePosition() {
    this.collisionBox.x = this.x;
    this.collisionBox.y = this.y;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


