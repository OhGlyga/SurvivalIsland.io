// ==== IMPORTLAR ====
import { GravitySystem } from './physics/gravitySystem.js';
import { getRandomAnimal } from './characters/animalFactory.js';
import { createHUD, updateHUD, updateDisasterStatus, updateDisasterTimer } from './ui/ui.js';
import { CollisionSystem } from './collisions/collisionSystem.js';
import { CollisionBox } from './collisions/collisionBox.js';
import { getRandomDisaster } from './disasters/disasterFactory.js';
import { DamageZone } from './disasters/DamageZone.js';
import { Input } from './core/input.js';

// ==== CANVAS ====
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// ==== SİSTEMLERİ BAŞLAT ====
const input = new Input();
const collisionSystem = new CollisionSystem();
const gravitySystem = new GravitySystem();
const disaster = getRandomDisaster(); // Afet tanımlandı
const damageZones = []

let disasterCountdown = 15;
let lastTime = Date.now();

// ==== OYUNCU TANIMI ====
const player = getRandomAnimal({
  id: 'player',
  x: 100,
  y: 100
});
createHUD(player);

// ==== SABİT NESNE ====
const rock = {
  id: 'rock',
  x: 120,
  y: 300,
  width: 30,
  height: 30,
  color: 'gray',
  collisionBox: new CollisionBox(120, 300, 30, 30)
};
collisionSystem.addEntity(player);
collisionSystem.addEntity(rock);

// ==== GAME LOOP ====
function gameLoop() {
  const now = Date.now();
  const delta = now - lastTime;

  // === AFET ZAMANLAYICI ===
  if (disasterCountdown > 0 && delta >= 1000) {
    disasterCountdown--;
    lastTime = now;
  }

  updateDisasterTimer(disasterCountdown);

  if (disasterCountdown === 0 && !disaster.isActive()) {
    disaster.start();
    updateDisasterStatus(disaster.name);  //Buraya daha sonra her afete özel emoji eklenecek.

    //Eğer afet yangınsa hasar alanı oluşturur
    if (disaster.name === 'Yangın') {
        const fireZone = new DamageZone(canvas.width / 2, canvas.height / 2, 100, 5);
        damageZones.push(fireZone);
    }

}
console.log("Hasar alanları:", damageZones);

  disaster.update(); // Afeti güncelle

  // === TEMİZLEME ===
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // === OYUNCU GÜNCELLE ===
  player.handleInput(input);

  if (input.isKeyPressed('h')) {
    player.takeDamage(10);
    console.log('Hasar verildi! Kalan can:', player.health);
  }

  if (input.isKeyPressed('j')) {
    player.heal(10);
    console.log('Can yenilendi! Yeni can:', player.health);
  }

  // === Zıplama ve Yerçekimi ===
  if (input.isKeyPressed(' ')) {
    gravitySystem.jump(player);
    console.log('Zıplama tuşuna basıldı!');
  }

  gravitySystem.apply(player);

  // === ZEMİN ALGILAMA ===
  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
    player.onGround = true;
  } else {
    player.onGround = false;
  }

  console.log('OnGround:', player.onGround);

  // === HAREKET ===
  const speed = 3;
  if (input.isKeyPressed('a')) player.x -= speed;
  if (input.isKeyPressed('d')) player.x += speed;

  // === ÇARPIŞMA VE GÜNCELLEMELER ===
  player.updatePosition();
  player.collisionBox.x = player.x;
  player.collisionBox.y = player.y;

  const hits = collisionSystem.checkCollisions(player);
  if (hits.length > 0) {
    console.log('Çarpışma var:', hits.map(e => e.id));
  }

  // === ÇİZİM ===
  ctx.fillStyle = player.color;
  ctx.fillRect(player.x, player.y, player.width, player.height);

  ctx.fillStyle = rock.color;
  ctx.fillRect(rock.x, rock.y, rock.width, rock.height);

  //Her sahnede hasar çemberlerini çiz
  for (let i = damageZones.length - 1; i >= 0; i--) {
    const zone = damageZones[i];
  
    // Oyuncuya hasar uygula
    zone.applyTo(player);
  
    // Çizimi yap
    zone.draw(ctx);
  
    // Süresi dolmuşsa sil
    if (zone.isExpired()) {
      damageZones.splice(i, 1);
      continue;
    }
  
    // Yayılması gerekiyorsa yeni zone'lar oluştur
    if (zone.shouldSpread()) {
      const newZones = zone.spread();
      damageZones.push(...newZones);
    }
  }
  
  updateHUD(player);

  requestAnimationFrame(gameLoop);
}

console.log(player.type); // Test: karakter tipi
gameLoop();
