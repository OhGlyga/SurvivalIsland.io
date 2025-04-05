// core/input.js

export class Input {
    constructor() {
      this.keys = {};
  
      // Tuşa basıldığında
      window.addEventListener('keydown', (e) => {
        this.keys[e.key.toLowerCase()] = true;
      });
  
      // Tuş bırakıldığında
      window.addEventListener('keyup', (e) => {
        this.keys[e.key.toLowerCase()] = false;
      });
    }
  
    /**
     * Belirli bir tuşun basılı olup olmadığını kontrol eder
     * @param {string} key - örn: 'w', 'a', 's', 'd'
     * @returns {boolean}
     */
    isKeyPressed(key) {
      return !!this.keys[key.toLowerCase()];
    }
  }
  