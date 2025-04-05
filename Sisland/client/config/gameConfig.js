// gameConfig.js - Oyun yapılandırma ayarları

/**
 * Oyun yapılandırma ayarlarını yükler
 * @returns {Promise<Object>} - Oyun yapılandırması
 */
export async function loadConfig() {
  // Gerçek bir uygulamada bu ayarlar bir sunucudan veya dosyadan yüklenebilir
  // Şimdilik sabit değerler kullanıyoruz
  
  return {
    // Grafik ayarları
    graphics: {
      width: 1024,
      height: 768,
      fullscreen: false,
      quality: 'high' // 'low', 'medium', 'high'
    },
    
    // Ses ayarları
    audio: {
      musicVolume: 0.7,
      sfxVolume: 1.0,
      enabled: true
    },
    
    // Oyun ayarları
    game: {
      difficulty: 'normal', // 'easy', 'normal', 'hard'
      startingResources: {
        wood: 50,
        stone: 20,
        food: 100
      },
      disasterFrequency: 0.02 // 0-1 arası, 1 en sık
    },
    
    // Karakter ayarları
    player: {
      speed: 200, // piksel/saniye
      startingHealth: 100,
      inventorySize: 20 // max eşya sayısı
    },
    
    // Geliştirici ayarları
    dev: {
      debugMode: false,
      showFPS: true
    }
  };
} 