// SurvivalIsland.io - Ana oyun dosyası
// Bu dosya oyunu başlatır ve tüm modülleri yükler

// Gerekli modülleri import et
import { initGameLoop } from './core/gameLoop.js';
import { initRenderer } from './core/renderer.js';
import { initInput } from './core/input.js';
import { loadConfig } from './config/gameConfig.js';
import { initUI } from './ui/ui.js';

// Oyun durumu
const gameState = {
  isRunning: false,
  currentMode: 'survival',
  players: [],
  map: null,
  time: 0
};

// Oyunu başlat
async function startGame() {
  console.log('SurvivalIsland.io başlatılıyor...');
  
  try {
    // Yapılandırmayı yükle
    const config = await loadConfig();
    
    // Render motorunu başlat
    const renderer = initRenderer(config.graphics);
    
    // Kullanıcı girdilerini başlat
    const inputHandler = initInput();
    
    // Kullanıcı arayüzünü başlat
    initUI(gameState);
    
    // Oyun döngüsünü başlat
    initGameLoop(gameState, renderer, inputHandler);
    
    gameState.isRunning = true;
    console.log('Oyun başarıyla başlatıldı!');
  } catch (error) {
    console.error('Oyun başlatılırken hata oluştu:', error);
  }
}

// Sayfa yüklendiğinde oyunu başlat
window.addEventListener('load', startGame);

// Geliştirici için global erişim
window.gameState = gameState; 