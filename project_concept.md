# SurvivalIsland.io - Game Concept Overview

## 🎮 Game Type
- Browser-based, fast-paced, .io survival game.
- Each round is short and chaotic.
- Designed for casual fun with zero seriousness.
- Aimed at the same audience as Roblox players.

## 🧩 Core Concept
- Players are randomly assigned cute animal characters.
- Animals have different stats: speed, health, fall damage resistance, etc.
- Balanced gameplay: every animal has strengths and weaknesses.
- Players must survive on an island while escaping randomly triggered disasters.

## 🌋 Gameplay Flow
- Players spawn on a square-shaped island map.
- The first 15 seconds are peaceful.
- Then, a random disaster begins: earthquake, flood, tsunami, meteor, lava, fire, etc.
- Disasters interact with the physical world (falling, burning, crumbling).
- The last standing player (or team) wins.

## 🧱 Core Systems
- Modular architecture: physics, animals, disasters, maps, and networking are all separated.
- Damage system: unified, reusable system for fall damage, fire damage, etc.
- Disasters should affect anything they touch (fire burns everything, tsunami sweeps away objects, etc.)
- Entities (players, objects, animals) are all modular and reusable classes.

## 🎨 Style & Feel
- Low-poly art for performance and charm.
- Cute animal sounds, fun animations, and cartoon-like effects.
- Emphasis on humor, chaos, and light-hearted gameplay.
- Simple UI: health bar, disaster timer, remaining players, chat, leaderboard.

## 🧠 Technical Vision
- Single-player prototype first.
- Multiplayer with WebSocket (Node.js) later.
- Performance optimized for 40 players.
- Codebase will be modular, readable, and beginner-friendly.
- AI-assisted development: this project is a showcase of how games can be built from scratch with help from AI tools like ChatGPT and Cursor AI.

## 🔒 Project Philosophy
- No unnecessary code rewrites.
- No huge classes or spaghetti logic.
- Everything should be reusable, testable, and maintainable.
- The goal is not just to build a game, but to build it smart.

---

**NOTE to AI:**
You are not working on just any project. This is a mission to show the power of AI + human creativity. Please respect the modular structure, do not make major decisions on your own, and always explain your code clearly. 