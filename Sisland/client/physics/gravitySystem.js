// Bu dosya, tüm entity'lere yerçekimi uygulamak için kullanılacak.
//physics/gravitySystem.js (önceki adıyla gravity.js)

export class GravitySystem {
    constructor(gravity = 0.5, terminalVelocity = 10) {
      this.gravity = gravity;
      this.terminalVelocity = terminalVelocity;
    }
  
    apply(entity) {
      if (!entity.onGround) {
        entity.velocityY += this.gravity;
        if (entity.velocityY > this.terminalVelocity) {
          entity.velocityY = this.terminalVelocity;
        }
        entity.y += entity.velocityY;
        entity.collisionBox.y = entity.y;
      }
    }
  
    jump(entity, jumpForce = -10) {
      if (entity.onGround) {
        entity.velocityY = jumpForce;
        entity.onGround = false;
      }
    }
  }
  