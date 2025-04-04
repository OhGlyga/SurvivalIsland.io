// renderer.js - Oyun görsellerini ekrana çizme

/**
 * Render motorunu başlatır
 * @param {Object} config - Grafik ayarları
 * @returns {Object} - Render motoru
 */
export function initRenderer(config) {
  let canvas = document.getElementById('game-canvas');
  
  // Canvas element yoksa oluştur
  if (!canvas) {
    canvas = document.createElement('canvas');
    canvas.id = 'game-canvas';
    document.body.appendChild(canvas);
  }
  
  const ctx = canvas.getContext('2d');
  
  // Canvas boyutlarını ayarla
  canvas.width = config?.width || 800;
  canvas.height = config?.height || 600;
  
  // Stil ayarları
  canvas.style.display = 'block';
  canvas.style.margin = 'auto';
  canvas.style.backgroundColor = '#87CEEB'; // Açık mavi gökyüzü
  
  console.log(`Renderer başlatıldı: ${canvas.width}x${canvas.height}`);
  
  // Render motoru
  const renderer = {
    /**
     * Oyun durumunu ekrana çizer
     * @param {Object} gameState - Oyun durumu
     */
    render: function(gameState) {
      // Canvas'ı temizle
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Arka planı çiz
      drawBackground(ctx, canvas.width, canvas.height);
      
      // Haritayı çiz
      if (gameState.map) {
        drawMap(ctx, gameState.map);
      }
      
      // Oyuncuları çiz
      drawPlayers(ctx, gameState.players);
      
      // Afetleri çiz
      drawDisasters(ctx, gameState);
      
      // UI bileşenlerini çiz - UI modülü tarafından yapılacak
    },
    
    /**
     * Canvas referansını döndürür
     * @returns {HTMLCanvasElement} - Canvas elemanı
     */
    getCanvas: function() {
      return canvas;
    },
    
    /**
     * Canvas context'ini döndürür
     * @returns {CanvasRenderingContext2D} - Canvas çizim contexti
     */
    getContext: function() {
      return ctx;
    }
  };
  
  return renderer;
}

/**
 * Arka planı çizer
 * @param {CanvasRenderingContext2D} ctx - Canvas çizim contexti
 * @param {number} width - Canvas genişliği
 * @param {number} height - Canvas yüksekliği
 */
function drawBackground(ctx, width, height) {
  // Gökyüzü (varsayılan canvas rengi)
  
  // Deniz
  ctx.fillStyle = '#1E90FF'; // Koyu mavi
  ctx.fillRect(0, height * 0.7, width, height * 0.3);
}

/**
 * Haritayı çizer
 * @param {CanvasRenderingContext2D} ctx - Canvas çizim contexti
 * @param {Object} map - Harita bilgisi
 */
function drawMap(ctx, map) {
  // Harita çizimi maps/ modülü tarafından yapılacak
  // Basit bir ada çiz
  if (!map.tiles) return;
  
  ctx.fillStyle = '#C2B280'; // Kum rengi
  ctx.beginPath();
  ctx.ellipse(
    ctx.canvas.width / 2, 
    ctx.canvas.height / 2, 
    ctx.canvas.width * 0.3, 
    ctx.canvas.height * 0.2, 
    0, 0, Math.PI * 2
  );
  ctx.fill();
}

/**
 * Oyuncuları çizer
 * @param {CanvasRenderingContext2D} ctx - Canvas çizim contexti
 * @param {Array} players - Oyuncu listesi
 */
function drawPlayers(ctx, players) {
  // Oyuncu çizimi characters/ modülü tarafından yapılacak
  if (!players || players.length === 0) return;
  
  players.forEach(player => {
    if (player.position) {
      ctx.fillStyle = player.color || '#FF0000';
      ctx.beginPath();
      ctx.arc(player.position.x, player.position.y, 10, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

/**
 * Afetleri çizer
 * @param {CanvasRenderingContext2D} ctx - Canvas çizim contexti
 * @param {Object} gameState - Oyun durumu
 */
function drawDisasters(ctx, gameState) {
  // Afet çizimi disasters/ modülü tarafından yapılacak
} 