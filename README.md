<div align="center">

# CS2 Tournament Overlay

⚡ **Modern overlay SPA for CS2 tournament broadcasts — built for OBS Browser Source**

<p>Customizable overlay application using React, TypeScript, and Tailwind CSS for professional tournament streams.</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)

**📚 <a href="https://cto.sivert.io/" target="_blank">Full Documentation</a>** • <a href="https://cto.sivert.io/getting-started/quick-start/" target="_blank">Quick Start</a> • <a href="https://discord.gg/n7gHYau7aW" target="_blank">💬 Discord Support</a>

</div>

---

## 🎯 What is this?

CS2 Tournament Overlay is a **Single Page Application** designed to provide professional-looking overlays for Counter-Strike 2 tournament broadcasts. Built with modern web technologies, it's optimized for use with **OBS Browser Source** and provides a solid foundation for creating custom tournament overlays.

### Current Status

🚧 **Baseline/Scaffolding Project** — This repository provides a clean starting point with:

- ✅ **Vite + React + TypeScript** configured and ready
- ✅ **Tailwind CSS** for rapid UI development
- ✅ **Framer Motion** for smooth animations
- ✅ **Yarn** package manager with lockfile
- ✅ **OBS-ready dev server** (listens on all interfaces)
- ✅ **Transparent overlay layout** designed for streaming
- ✅ **Architecture placeholders** for OBS spectator detection and CS2 data

**Note:** This is a *boilerplate* setup. Real features (player stats, match data, OBS integration) are not yet implemented but the architecture is ready for them.

---

## ✨ Features

🎨 **Modern Tech Stack** — React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion  
🎬 **OBS Browser Source Ready** — Dev server listens on all interfaces for easy OBS integration  
⚡ **Hot Reload** — Changes appear instantly in OBS during development  
🎮 **Architecture Placeholders** — Interfaces ready for OBS spectator tracking and CS2 GSI  
🔧 **Fully Customizable** — Build your own tournament overlay components  
📦 **Production Ready** — Build optimized static files for deployment

---

## 🚀 Quick Start

Get up and running in 3 steps:

### 1. Install

```bash
git clone https://github.com/sivert-io/cs2-tournament-overlay.git
cd cs2-tournament-overlay
yarn install
```

### 2. Run

```bash
yarn dev
```

Server starts at `http://localhost:5173` (and your network IP).

### 3. Add to OBS

In OBS Studio:

1. Add **Browser Source** to your scene
2. Set URL: `http://localhost:5173` (or `http://<your-ip>:5173`)
3. Set Width: `1920`, Height: `1080`
4. ✅ Check "Shutdown source when not visible"
5. ✅ Check "Refresh browser when scene becomes active"

**Done!** You should see the demo overlay in OBS.

👉 **[Read the full Quick Start Guide](https://cto.sivert.io/getting-started/quick-start/)** for detailed instructions.

---

## 📦 Available Scripts

| Command        | Description                              |
| -------------- | ---------------------------------------- |
| `yarn dev`     | Start development server with hot reload |
| `yarn build`   | Build for production                     |
| `yarn preview` | Preview production build                 |
| `yarn lint`    | Run ESLint                               |

---

## 🎨 Customization

The main overlay is in `src/App.tsx`. Start building by:

- Adding your tournament branding
- Creating overlay components for player stats, team logos, scores
- Integrating with CS2 Game State Integration (GSI)
- Connecting to OBS WebSocket for spectator detection
- Adding animations with Framer Motion

---

## 🏗️ Architecture

### Placeholder: OBS Spectated Player Detection

In `src/App.tsx`:

```typescript
interface SpectatedPlayerState {
  playerName?: string
  team?: string
  // Future: health, kills, weapon, etc.
}
```

**To implement:**
- Use [obs-websocket-js](https://github.com/obs-websocket-community-projects/obs-websocket-js) to connect to OBS
- Track scene/source changes to detect which player camera is active
- Update overlay based on spectator view

### Placeholder: CS2 Game State Integration

**To implement:**
- Set up CS2 GSI config (`gamestate_integration_*.cfg`)
- Create WebSocket/HTTP server to receive GSI data
- Parse player stats, round state, match score
- Display real-time data in overlay

---

## 🔗 Related Projects

This overlay is part of the CS2 tournament ecosystem:

- **[MatchZy Auto Tournament](https://github.com/sivert-io/matchzy-auto-tournament)** – Complete tournament platform with brackets, veto, and automation  
  _Manages tournaments, brackets, map veto, and server allocation_

- **[CS2 Server Manager](https://github.com/sivert-io/cs2-server-manager)** – Multi-server CS2 deployment tool  
  _Deploy multiple CS2 servers with MatchZy plugin pre-configured_

- **[MatchZy Enhanced](https://github.com/sivert-io/MatchZy)** – CS2 match automation plugin  
  _In-server match management, stats, demos, and tournament integration_

---

## 🤝 Contributing

Contributions are welcome! Whether you're:

- 🐛 Fixing bugs
- ✨ Adding overlay components
- 📚 Improving documentation
- 💡 Suggesting features

👉 **[Read the Contributing Guide](.github/CONTRIBUTING.md)**

---

## 📚 Documentation

Full documentation is available at **[cto.sivert.io](https://cto.sivert.io/)**

- [Quick Start Guide](https://cto.sivert.io/getting-started/quick-start/)
- [OBS Setup](https://cto.sivert.io/getting-started/quick-start/#adding-to-obs-browser-source)

---

## 📜 License

MIT License - see [LICENSE](LICENSE) for details

---

<div align="center">
  <strong>Made with ❤️ for the CS2 community</strong>
</div>
