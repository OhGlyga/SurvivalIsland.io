// ui.js - Oyun kullanıcı arayüzü

/**
 * Kullanıcı arayüzünü başlatır
 * @param {Object} gameState - Oyun durumu
 */
export function initUI(gameState) {
  // UI bileşenleri için container
  let uiContainer = document.getElementById('game-ui');
  
  if (!uiContainer) {
    uiContainer = document.createElement('div');
    uiContainer.id = 'game-ui';
    document.body.appendChild(uiContainer);
    
    // UI container stil ayarları
    uiContainer.style.position = 'absolute';
    uiContainer.style.top = '0';
    uiContainer.style.left = '0';
    uiContainer.style.width = '100%';
    uiContainer.style.height = '100%';
    uiContainer.style.pointerEvents = 'none'; // Canvas olaylarının geçmesini sağlar
  }
  
  // UI bileşenlerini oluştur
  createResourcesUI(uiContainer);
  createPlayerStatsUI(uiContainer);
  createMenuButton(uiContainer);
  
  // Oyun durumu değiştiğinde UI'yi güncelle
  setupUIUpdates(uiContainer, gameState);
  
  console.log('UI başlatıldı');
  
  return {
    // UI referansı
    container: uiContainer,
    
    // UI'yi güncelle
    update: function() {
      updateUI(uiContainer, gameState);
    },
    
    // Bildirim göster
    showNotification: function(message, type = 'info') {
      showNotification(uiContainer, message, type);
    }
  };
}

/**
 * Kaynak göstergeleri oluşturur (odun, taş, yemek vb.)
 * @param {HTMLElement} container - UI container elemanı
 */
function createResourcesUI(container) {
  const resourcesPanel = document.createElement('div');
  resourcesPanel.id = 'resources-panel';
  resourcesPanel.classList.add('ui-panel');
  
  // Panel stil ayarları
  resourcesPanel.style.position = 'absolute';
  resourcesPanel.style.top = '10px';
  resourcesPanel.style.right = '10px';
  resourcesPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  resourcesPanel.style.color = 'white';
  resourcesPanel.style.padding = '10px';
  resourcesPanel.style.borderRadius = '5px';
  resourcesPanel.style.pointerEvents = 'auto';
  
  // Kaynak göstergeleri
  const resources = ['wood', 'stone', 'food'];
  resources.forEach(resource => {
    const resourceElement = document.createElement('div');
    resourceElement.id = `${resource}-counter`;
    resourceElement.textContent = `${resource.charAt(0).toUpperCase() + resource.slice(1)}: 0`;
    resourceElement.style.margin = '5px 0';
    resourcesPanel.appendChild(resourceElement);
  });
  
  container.appendChild(resourcesPanel);
}

/**
 * Oyuncu durumu göstergelerini oluşturur (sağlık, açlık vb.)
 * @param {HTMLElement} container - UI container elemanı
 */
function createPlayerStatsUI(container) {
  const statsPanel = document.createElement('div');
  statsPanel.id = 'player-stats';
  statsPanel.classList.add('ui-panel');
  
  // Panel stil ayarları
  statsPanel.style.position = 'absolute';
  statsPanel.style.bottom = '10px';
  statsPanel.style.left = '10px';
  statsPanel.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  statsPanel.style.color = 'white';
  statsPanel.style.padding = '10px';
  statsPanel.style.borderRadius = '5px';
  
  // Sağlık çubuğu
  const healthBar = document.createElement('div');
  healthBar.id = 'health-bar';
  healthBar.style.width = '200px';
  healthBar.style.height = '20px';
  healthBar.style.backgroundColor = '#444';
  healthBar.style.borderRadius = '3px';
  healthBar.style.overflow = 'hidden';
  healthBar.style.margin = '5px 0';
  
  const healthFill = document.createElement('div');
  healthFill.id = 'health-fill';
  healthFill.style.width = '100%';
  healthFill.style.height = '100%';
  healthFill.style.backgroundColor = '#ff3333';
  healthBar.appendChild(healthFill);
  
  const healthLabel = document.createElement('div');
  healthLabel.id = 'health-label';
  healthLabel.textContent = 'Sağlık: 100%';
  
  statsPanel.appendChild(healthLabel);
  statsPanel.appendChild(healthBar);
  
  container.appendChild(statsPanel);
}

/**
 * Menü düğmesi oluşturur
 * @param {HTMLElement} container - UI container elemanı
 */
function createMenuButton(container) {
  const menuButton = document.createElement('button');
  menuButton.id = 'menu-button';
  menuButton.textContent = 'Menü';
  
  // Düğme stil ayarları
  menuButton.style.position = 'absolute';
  menuButton.style.top = '10px';
  menuButton.style.left = '10px';
  menuButton.style.padding = '8px 16px';
  menuButton.style.backgroundColor = '#4CAF50';
  menuButton.style.color = 'white';
  menuButton.style.border = 'none';
  menuButton.style.borderRadius = '4px';
  menuButton.style.cursor = 'pointer';
  menuButton.style.pointerEvents = 'auto';
  
  // Menü tıklama olayı
  menuButton.addEventListener('click', () => {
    toggleMenu();
  });
  
  container.appendChild(menuButton);
}

/**
 * Oyun durumu değiştiğinde UI güncellemelerini ayarlar
 * @param {HTMLElement} container - UI container elemanı
 * @param {Object} gameState - Oyun durumu
 */
function setupUIUpdates(container, gameState) {
  // Bu fonksiyon, gameState değişiklikleriyle UI güncellemelerini ilişkilendirir
  // Gerçek bir uygulamada bir event sistemi kullanılabilir
}

/**
 * UI bileşenlerini günceller
 * @param {HTMLElement} container - UI container elemanı
 * @param {Object} gameState - Oyun durumu
 */
function updateUI(container, gameState) {
  // Kaynakları güncelle
  if (gameState.resources) {
    for (const [resource, amount] of Object.entries(gameState.resources)) {
      const resourceElement = document.getElementById(`${resource}-counter`);
      if (resourceElement) {
        resourceElement.textContent = `${resource.charAt(0).toUpperCase() + resource.slice(1)}: ${amount}`;
      }
    }
  }
  
  // Oyuncu sağlığını güncelle
  if (gameState.player && gameState.player.health !== undefined) {
    const healthFill = document.getElementById('health-fill');
    const healthLabel = document.getElementById('health-label');
    
    if (healthFill && healthLabel) {
      const healthPercent = (gameState.player.health / gameState.player.maxHealth) * 100;
      healthFill.style.width = `${healthPercent}%`;
      healthLabel.textContent = `Sağlık: ${Math.floor(healthPercent)}%`;
    }
  }
}

/**
 * Menüyü açar/kapatır
 */
function toggleMenu() {
  let menu = document.getElementById('game-menu');
  
  if (menu) {
    // Menü zaten varsa kapat/aç
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
  } else {
    // Menü yoksa oluştur
    menu = document.createElement('div');
    menu.id = 'game-menu';
    
    // Menü stil ayarları
    menu.style.position = 'absolute';
    menu.style.top = '50%';
    menu.style.left = '50%';
    menu.style.transform = 'translate(-50%, -50%)';
    menu.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    menu.style.color = 'white';
    menu.style.padding = '20px';
    menu.style.borderRadius = '10px';
    menu.style.minWidth = '300px';
    menu.style.textAlign = 'center';
    menu.style.pointerEvents = 'auto';
    
    // Menü başlığı
    const title = document.createElement('h2');
    title.textContent = 'SurvivalIsland.io';
    menu.appendChild(title);
    
    // Menü düğmeleri
    const buttons = [
      { text: 'Devam Et', action: 'continue' },
      { text: 'Seçenekler', action: 'options' },
      { text: 'Ana Menü', action: 'main-menu' }
    ];
    
    buttons.forEach(buttonInfo => {
      const button = document.createElement('button');
      button.textContent = buttonInfo.text;
      button.dataset.action = buttonInfo.action;
      button.style.display = 'block';
      button.style.width = '100%';
      button.style.padding = '10px';
      button.style.margin = '10px 0';
      button.style.backgroundColor = '#4CAF50';
      button.style.color = 'white';
      button.style.border = 'none';
      button.style.borderRadius = '4px';
      button.style.cursor = 'pointer';
      
      // Devam Et düğmesi için olay dinleyicisi
      if (buttonInfo.action === 'continue') {
        button.addEventListener('click', () => {
          menu.style.display = 'none';
        });
      }
      
      menu.appendChild(button);
    });
    
    // Kapatma düğmesi
    const closeButton = document.createElement('span');
    closeButton.textContent = '✖';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '10px';
    closeButton.style.right = '10px';
    closeButton.style.cursor = 'pointer';
    
    closeButton.addEventListener('click', () => {
      menu.style.display = 'none';
    });
    
    menu.appendChild(closeButton);
    document.body.appendChild(menu);
  }
}

/**
 * Bildirim gösterir
 * @param {HTMLElement} container - UI container elemanı
 * @param {string} message - Bildirim mesajı
 * @param {string} type - Bildirim tipi ('info', 'warning', 'error')
 */
function showNotification(container, message, type = 'info') {
  const notification = document.createElement('div');
  notification.classList.add('notification', `notification-${type}`);
  notification.textContent = message;
  
  // Bildirim stil ayarları
  notification.style.position = 'absolute';
  notification.style.bottom = '80px';
  notification.style.left = '50%';
  notification.style.transform = 'translateX(-50%)';
  notification.style.backgroundColor = type === 'error' ? '#ff3333' : type === 'warning' ? '#ff9800' : '#4CAF50';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.opacity = '0';
  notification.style.transition = 'opacity 0.3s';
  
  container.appendChild(notification);
  
  // Gösterme animasyonu
  setTimeout(() => {
    notification.style.opacity = '1';
  }, 10);
  
  // Otomatik kaldırma
  setTimeout(() => {
    notification.style.opacity = '0';
    setTimeout(() => {
      container.removeChild(notification);
    }, 300);
  }, 3000);
} 