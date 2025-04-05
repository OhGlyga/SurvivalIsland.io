//Burası çarpışmaları yöneten sistem olacak.
// collisions/collisionSystem.js

import { CollisionBox } from './collisionBox.js';

export class CollisionSystem {
  constructor() {
    this.entities = [];
  }

  /**
   * Sisteme çarpışma kutusu olan bir varlık ekle
   * @param {Object} entity - entity must have { id, collisionBox }
   */
  addEntity(entity) {
    if (entity.collisionBox) {
      this.entities.push(entity);
    }
  }

  /**
   * Belirli bir varlığın başka bir varlıkla çarpışıp çarpışmadığını kontrol et
   * @param {Object} target
   * @returns {Array} - çarpıştığı diğer varlıklar
   */
  checkCollisions(target) {
    const results = [];
    for (const entity of this.entities) {
      if (entity !== target && entity.collisionBox.intersects(target.collisionBox)) {
        results.push(entity);
      }
    }
    return results;
  }

  clear() {
    this.entities = [];
  }
}
