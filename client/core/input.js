// input.js - Kullanıcı giriş yönetimi (klavye, fare, dokunmatik)

/**
 * Kullanıcı girişlerini yönetecek modülü başlatır
 * @returns {Object} - Giriş işleyici nesnesi
 */
export function initInput() {
  // Tuş durumunu saklayan obje
  const keys = {};
  
  // Fare pozisyonu ve durumu
  const mouse = {
    x: 0,
    y: 0,
    isDown: false,
    button: -1 // -1: basılı değil, 0: sol tuş, 1: orta tuş, 2: sağ tuş
  };
  
  // Dokunmatik ekran desteği
  const touch = {
    isActive: false,
    x: 0,
    y: 0
  };
  
  // Klavye olayları dinleyicileri
  window.addEventListener('keydown', (event) => {
    keys[event.code] = true;
  });
  
  window.addEventListener('keyup', (event) => {
    keys[event.code] = false;
  });
  
  // Fare olayları dinleyicileri
  window.addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
  });
  
  window.addEventListener('mousedown', (event) => {
    mouse.isDown = true;
    mouse.button = event.button;
  });
  
  window.addEventListener('mouseup', (event) => {
    mouse.isDown = false;
    mouse.button = -1;
  });
  
  // Dokunmatik ekran olayları dinleyicileri
  window.addEventListener('touchstart', (event) => {
    touch.isActive = true;
    if (event.touches.length > 0) {
      const touchEvent = event.touches[0];
      touch.x = touchEvent.clientX;
      touch.y = touchEvent.clientY;
    }
  });
  
  window.addEventListener('touchmove', (event) => {
    if (event.touches.length > 0) {
      const touchEvent = event.touches[0];
      touch.x = touchEvent.clientX;
      touch.y = touchEvent.clientY;
    }
  });
  
  window.addEventListener('touchend', () => {
    touch.isActive = false;
  });
  
  console.log('Input sistemi başlatıldı');
  
  // Giriş işleyici nesnesi
  return {
    /**
     * Bir tuşun basılı olup olmadığını kontrol eder
     * @param {string} keyCode - Kontrol edilecek tuş kodu (örn. "KeyA", "Space")
     * @returns {boolean} - Tuş basılı ise true, değilse false
     */
    isKeyDown: function(keyCode) {
      return keys[keyCode] === true;
    },
    
    /**
     * Fare bilgilerini döndürür
     * @returns {Object} - Fare pozisyonu ve durumu
     */
    getMouse: function() {
      return { ...mouse };
    },
    
    /**
     * Dokunmatik ekran bilgilerini döndürür
     * @returns {Object} - Dokunmatik ekran pozisyonu ve durumu
     */
    getTouch: function() {
      return { ...touch };
    },
    
    /**
     * Oyuncu hareketi için yön kontrollerini döndürür
     * @returns {Object} - x ve y eksenleri için -1, 0, 1 değerlerini içerir
     */
    getMovementDirection: function() {
      const direction = { x: 0, y: 0 };
      
      // Yukarı/aşağı tuşlar (W, S, yukarı ok, aşağı ok)
      if (keys['KeyW'] || keys['ArrowUp']) direction.y = -1;
      if (keys['KeyS'] || keys['ArrowDown']) direction.y = 1;
      
      // Sol/sağ tuşlar (A, D, sol ok, sağ ok)
      if (keys['KeyA'] || keys['ArrowLeft']) direction.x = -1;
      if (keys['KeyD'] || keys['ArrowRight']) direction.x = 1;
      
      return direction;
    }
  };
} 