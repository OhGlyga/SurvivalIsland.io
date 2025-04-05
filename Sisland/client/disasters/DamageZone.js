//Afetlerin etkili alanlarını tanımlayan kısım burada yer alacak.
//disaster/DamageZone.js

export class DamageZone {
    constructor(x, y, radius, damagePerSecond) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.damagePerSecond = damagePerSecond;
        this.createdAt = Date.now();
        this.lifetime = this.lifetime;
        this.lastdamgeTime = 0;


        //Yangın yayılma sistemi
        this.spreadDelay = 3000; // ne kadar sürede yayılacak
        this.hasSpread = false;
    }

    applyTo(entity) {
        const dx = entity.x + entity.width / 2 - this.x;
        const dy = entity.y + entity.height / 2 - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if(distance < this.radius) {
            const now = Date.now();
            if (now - this.lastDamageTime >= 1000) {
                entity.takeDamage(this.damagePerSecond);
                console.log(`[DamageZone] ${entity.id} hasar aldı!`);
                this.lastDamageTime = now;
            }
        }
    }

    shouldSpread() {
        return !this.hasSpread && (Date.now() - this.createdAt >= this.spreadDelay);
    }
    
    spread() {
        this.hasSpread = true;

        const angles = [0, Math.PI, (2, Math.PI), (3 * Math.PI) / 2];  //Sağ, sol, aşağı ve yukarı
        const spreadZones = [];

        for (const angle of angles) {
            const nx = this.x + Math.cos(angle) * this.radius * 1.8;
            const ny = this.y + Math.sin(angle) * this.radius * 1.8;
            spreadZones.push(
                new DamageZone(nx, ny, this.radius, this.damagePerSecond, this.lifetime, this.spreadDelay)
            );
        }
        
        return spreadZones;
    }

    isExpired() {
        return Date.now() - this.createAt >= this.lifetime;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 100, 0, 0.2)';
        ctx.fill();
        ctx.strokeStyle = 'red';
        ctx.stroke();
    }
}
