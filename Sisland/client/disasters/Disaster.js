//Tüm afetler burada türetilecek. Şimdilik sadece aktiflik süresi ve teitklenme olacak.
//disasters/Disaster.js

export class Disaster {
    constructor(name) {
        this.name = name;
        this.active = false;
        this.duration = 10000; //ms 10 saniye sürecek örneğin.İleride oyun boyu sürecek.
        this.startTime = null; 
}

start() {
    this.active = true;
    this.startTime = Date.now();
    console.log(`[${this.name}] afet başladı!`);
}

update() {
    if(!this.active) return;

    const elapsed = Date.now() - this.startTime;
    if(elapsed >= this.duration) {
        this.active = false;
        console.log(`[${this.name}] afet sona erdi!`);
    }
}

isActive() {
    return this.active;
    }
}
