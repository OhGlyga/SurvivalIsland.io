// collisions/collisionBox.js
//Bu dosya, tüm varlıkların sahip olacağı basit bir “çarpışma kutusu” sınıfı olacak.
export class CollisionBox {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    /**
     * Check if this box intersects another box
     * @param {CollisionBox} other
     * @returns {boolean}
     */
    intersects(other) {
      return (
        this.x < other.x + other.width &&
        this.x + this.width > other.x &&
        this.y < other.y + other.height &&
        this.y + this.height > other.y
      );
    }
  }
  