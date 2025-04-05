// ui/ui.js

export function createHUD(player) {
    const hud = document.createElement('div');
    hud.id = 'hud';
    hud.style.position = 'absolute';
    hud.style.top = '20px';
    hud.style.left = '20px';
    hud.style.padding = '10px 15px';
    hud.style.backgroundColor = 'rgba(0,0,0,0.6)';
    hud.style.color = 'white';
    hud.style.borderRadius = '8px';
    hud.style.fontFamily = 'sans-serif';
    hud.style.zIndex = 1000;
    hud.style.pointerEvents = 'none';

    const timer = document.createElement('div');
    timer.id = 'hud-timer';
    timer.innerText = 'Afet: Başlamadı';
    timer.style.marginTop = '8px';
    hud.appendChild(timer);
  
    const name = document.createElement('div');
    name.id = 'hud-name';
    name.innerText = `Karakter: ${player.type}`;
  
    const healthText = document.createElement('div');
    healthText.id = 'hud-health-text';
    healthText.innerText = `Can: ${player.health} / ${player.maxHealth}`;
  
    const healthBarWrapper = document.createElement('div');
    healthBarWrapper.style.width = '150px';
    healthBarWrapper.style.height = '12px';
    healthBarWrapper.style.backgroundColor = '#444';
    healthBarWrapper.style.borderRadius = '6px';
    healthBarWrapper.style.marginTop = '5px';
  
    const healthBar = document.createElement('div');
    healthBar.id = 'hud-health-bar';
    healthBar.style.height = '100%';
    healthBar.style.width = '100%';
    healthBar.style.backgroundColor = 'limegreen';
    healthBar.style.borderRadius = '6px';
  
    healthBarWrapper.appendChild(healthBar);
  
    hud.appendChild(name);
    hud.appendChild(healthText);
    hud.appendChild(healthBarWrapper);
    document.body.appendChild(hud);

    const disasterStatus = document.createElement('div');
    disasterStatus.id = 'hud-disaster';
    disasterStatus.innerText = 'Afet: Henüz yok';
    disasterStatus.style.marginTop = '5px';
    disasterStatus.style.fontWeight = 'bold';
    hud.appendChild(disasterStatus)
  }
  
  export function updateHUD(player) {
    const name = document.getElementById('hud-name');
    const healthText = document.getElementById('hud-health-text');
    const healthBar = document.getElementById('hud-health-bar');
  
    if (name) name.innerText = `Karakter: ${player.type}`;
    if (healthText) healthText.innerText = `Can: ${Math.floor(player.health)} / ${player.maxHealth}`;
    if (healthBar) {
      const percent = Math.max(0, player.health / player.maxHealth) * 100;
      healthBar.style.width = `${percent}%`;
      healthBar.style.backgroundColor = percent <= 30 ? 'red' : percent <= 60 ? 'orange' : 'limegreen';
    }
  } 
  export function updateDisasterTimer(secondsLeft) {
    const timer = document.getElementById('hud-timer');
    if(!timer) return;

    if(secondsLeft > 0) {
        timer.innerText = `Afet: ${secondsLeft} saniye sonra başlıyor...`;
    } else {
        timer.innerText = `🌪️  Afet: Başladı!`;
        timer.style.color = 'red';
    }
}
  export function updateDisasterStatus(name) {
    const label = document.getElementById('hud-disaster');
    if(!label) return;

    const emojiMap = {
        'Yangın': '🔥',
        'Deprem': '🌍',
        'Tsunami': '🌊',
        'Meteor Yağmuru': '☄️',
        'Sel': '🌪️',
    }

    const emoji = emojiMap[name] || '🌪️';     
    label.innerText = name ? `${emoji} Aktif Afet: ${name}` : 'Afet: Henüz yok';
  } 