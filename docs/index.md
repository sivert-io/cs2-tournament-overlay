---
title: CS2 Tournament Overlay
hide:
  - navigation
  - toc
---

# CS2 Tournament Overlay

A modern, customizable overlay application for CS2 tournament broadcasts, built with React, TypeScript, and Tailwind CSS. Designed to be loaded in OBS via Browser Source for professional-looking tournament streams.

## What is it?

This is a **Single Page Application (SPA)** that provides:

- 🎨 **Customizable overlays** for CS2 tournament broadcasts
- 🎬 **OBS Browser Source integration** for seamless streaming
- ⚡ **Real-time updates** with Framer Motion animations
- 🎮 **Placeholder architecture** for OBS spectated player detection
- 🔌 **Ready for CS2 GSI integration** (Game State Integration)

## Current Status

🚧 **This is a baseline/scaffolding project.** It provides:

- ✅ Vite + React + TypeScript setup
- ✅ Tailwind CSS configured and working
- ✅ Framer Motion for smooth animations
- ✅ Basic overlay layout with transparent background
- ✅ Dev server configured for OBS access
- ✅ Architecture placeholders for future features

**Not yet implemented:**

- Real OBS integration (OBS WebSocket)
- CS2 Game State Integration (GSI)
- Tournament data ingestion
- Player statistics display
- Team logos and branding
- Match scores and timers

## Quick Start

Get the overlay running locally:

```bash
# Clone the repository
git clone https://github.com/sivert-io/cs2-tournament-overlay.git
cd cs2-tournament-overlay

# Install dependencies
yarn install

# Start development server
yarn dev
```

The server will be available at `http://localhost:5173` and accessible on your network for OBS.

👉 **See [Quick Start Guide](getting-started/quick-start.md)** for detailed setup instructions.

## Related Projects

This overlay is designed to work with the CS2 tournament ecosystem:

- **[MatchZy Auto Tournament](https://mat.sivert.io/)** – Complete tournament management platform with brackets, veto, and server allocation
- **[CS2 Server Manager](https://csm.sivert.io/)** – Multi-server CS2 deployment with MatchZy plugin
- **[MatchZy Enhanced](https://me.sivert.io/)** – CS2 match automation plugin for tournament integration

## Architecture Overview

The overlay uses a modular architecture with placeholders for future integration:

- **OBS Spectator Detection**: Placeholder interface for tracking which player OBS is spectating
- **CS2 GSI Integration**: Future connection to Counter-Strike 2 Game State Integration
- **Real-time Updates**: Framer Motion for smooth, broadcast-quality animations
- **Transparent Overlay**: Designed for OBS Browser Source with transparency support

## Support

- [GitHub Issues](https://github.com/sivert-io/cs2-tournament-overlay/issues) – Report bugs or request features
- [Discussions](https://github.com/sivert-io/cs2-tournament-overlay/discussions) – Ask questions and share ideas
- [Discord Community](https://discord.gg/n7gHYau7aW) – Real-time support and chat

## License

MIT License – see [LICENSE](https://github.com/sivert-io/cs2-tournament-overlay/blob/main/LICENSE) for details.

---

<div align="center" markdown>

**Made with :material-heart: for the CS2 community**

</div>
