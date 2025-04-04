# SurvivalIsland.io

Hayatta kalma temalı bir 2D çok oyunculu adada hayatta kalma oyunu.

## Proje Hakkında

SurvivalIsland.io, oyuncuların bir ada üzerinde kaynak toplayıp, yapılar inşa ederek ve doğal afetlerden korunarak hayatta kalmaya çalıştığı bir tarayıcı tabanlı oyundur.

## Klasör Yapısı

```
SurvivalIsland.io/
├── client/
│   ├── core/          # gameLoop, input, renderer
│   ├── physics/       # Fizik hesaplamaları
│   ├── collisions/    # Çarpışma algılama
│   ├── characters/    # Oyuncu karakterleri
│   ├── disasters/     # Doğal afetler
│   ├── maps/          # Harita oluşturma ve yönetimi
│   ├── assets/        # Görseller, sesler ve diğer medya dosyaları
│   ├── config/        # Oyun yapılandırması
│   ├── ui/            # Kullanıcı arayüzü
│   ├── modes/         # Oyun modları
│   └── main.js        # Oyunu başlatan dosya
├── server/            # Multiplayer'a geçtiğimizde doldurulacak
└── README.md          # Bu dosya
```

## Özellikler

- 2D izometrik grafik
- Çok oyunculu destek
- Farklı doğal afetlerle mücadele (fırtına, deprem, yanardağ patlaması vb.)
- Kaynak toplama ve yapı inşa etme
- Farklı oyun modları (hayatta kalma, takım, vb.)

## Geliştirme

Projeyi yerel makinenizde çalıştırmak için:

1. Repoyu klonlayın
2. Tarayıcıda `client/index.html` dosyasını açın (ya da basit bir yerel sunucu kurun)

## Katkıda Bulunma

Katkıda bulunmak isteyenler için proje henüz geliştirme aşamasındadır. İlerleyen aşamalarda katkıda bulunma rehberi eklenecektir. 