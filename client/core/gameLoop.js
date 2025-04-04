// gameLoop.js - Oyun döngüsü yönetimi

/**
 * Oyun döngüsünü başlatır
 * @param {Object} gameState - Oyunun mevcut durumu
 * @param {Object} renderer - Render işlemlerini yapan nesne
 * @param {Object} inputHandler - Kullanıcı girdilerini işleyen nesne
 */
export function initGameLoop(gameState, renderer, inputHandler) {
  let lastTime = 0;
  const targetFPS = 60;
  const frameTime = 1000 / targetFPS; // ms cinsinden bir kare süresi
  
  // Ana oyun döngüsü
  function gameLoop(currentTime) {
    // İlk kare için
    if (lastTime === 0) {
      lastTime = currentTime;
      requestAnimationFrame(gameLoop);
      return;
    }
    
    // Kare arası geçen süre (delta time)
    const deltaTime = currentTime - lastTime;
    
    // Oyun durumu güncellenmeli mi?
    if (deltaTime >= frameTime) {
      // Oyun mantığını güncelle
      update(deltaTime / 1000, gameState, inputHandler); // Saniye cinsine çevir
      
      // Oyunu render et
      renderer.render(gameState);
      
      // Son kare zamanını güncelle
      lastTime = currentTime;
    }
    
    // Bir sonraki kareyi iste
    if (gameState.isRunning) {
      requestAnimationFrame(gameLoop);
    }
  }
  
  // Oyun döngüsünü başlat
  requestAnimationFrame(gameLoop);
  
  console.log('Oyun döngüsü başlatıldı');
}

/**
 * Oyun mantığını günceller
 * @param {number} deltaTime - Son güncellemeden bu yana geçen süre (saniye)
 * @param {Object} gameState - Oyun durumu
 * @param {Object} inputHandler - Kullanıcı girdileri
 */
function update(deltaTime, gameState, inputHandler) {
  // Oyuncu girdilerini işle
  processInput(inputHandler, gameState);
  
  // Oyun zamanını güncelle
  gameState.time += deltaTime;
  
  // Fizik ve çarpışmaları hesapla
  updatePhysics(deltaTime, gameState);
  
  // Karakterleri güncelle
  updateCharacters(deltaTime, gameState);
  
  // Afetleri güncelle
  updateDisasters(deltaTime, gameState);
}

/**
 * Kullanıcı girdilerini işler
 * @param {Object} inputHandler - Kullanıcı girdilerini işleyen nesne
 * @param {Object} gameState - Oyun durumu
 */
function processInput(inputHandler, gameState) {
  // Şimdilik boş, input.js içinde işlemler yapılacak
}

/**
 * Fizik hesaplamalarını yapar
 * @param {number} deltaTime - Son güncellemeden bu yana geçen süre (saniye)
 * @param {Object} gameState - Oyun durumu
 */
function updatePhysics(deltaTime, gameState) {
  // Şimdilik boş, physics/ klasöründeki modüller tarafından doldurulacak
}

/**
 * Karakterleri günceller
 * @param {number} deltaTime - Son güncellemeden bu yana geçen süre (saniye)
 * @param {Object} gameState - Oyun durumu
 */
function updateCharacters(deltaTime, gameState) {
  // Şimdilik boş, characters/ klasöründeki modüller tarafından doldurulacak
}

/**
 * Afetleri günceller
 * @param {number} deltaTime - Son güncellemeden bu yana geçen süre (saniye)
 * @param {Object} gameState - Oyun durumu
 */
function updateDisasters(deltaTime, gameState) {
  // Şimdilik boş, disasters/ klasöründeki modüller tarafından doldurulacak
} 