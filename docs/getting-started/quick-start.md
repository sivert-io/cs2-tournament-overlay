# Quick Start

Get the CS2 Tournament Overlay up and running in minutes.

## Prerequisites

- **Node.js** 18+ and **Yarn** package manager
- **OBS Studio** (optional, for testing with Browser Source)
- **Git** for cloning the repository

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/sivert-io/cs2-tournament-overlay.git
cd cs2-tournament-overlay
```

### 2. Install Dependencies

```bash
yarn install
```

This will install:

- React 19 + TypeScript
- Vite (development server and build tool)
- Tailwind CSS (utility-first CSS framework)
- Framer Motion (animation library)

### 3. Start Development Server

```bash
yarn dev
```

The development server will start at:

- **Local**: `http://localhost:5173`
- **Network**: `http://<your-ip>:5173` (accessible from other devices on your network)

You should see output like:

```
VITE v7.2.4  ready in 234 ms

➜  Local:   http://localhost:5173/
➜  Network: http://192.168.1.100:5173/
➜  press h + enter to show help
```

## Adding to OBS Browser Source

### Method 1: Local Development (Recommended for testing)

1. **Open OBS Studio**
2. **Add a Browser Source**:
   - Click `+` in the Sources panel
   - Select **Browser**
   - Name it "CS2 Tournament Overlay"
3. **Configure the Browser Source**:
   - **URL**: `http://localhost:5173` (or use your network IP if OBS is on a different machine)
   - **Width**: `1920`
   - **Height**: `1080`
   - ✅ Check **Shutdown source when not visible**
   - ✅ Check **Refresh browser when scene becomes active**
4. **Click OK**

The overlay should appear in your OBS scene!

### Method 2: Production Build

For production use or better performance:

```bash
# Build the application
yarn build

# Preview the production build
yarn preview
```

The production build will be in the `dist/` directory. You can:

- Serve it with a static file server
- Host it on a web server (nginx, Apache, etc.)
- Use the preview server URL in OBS

## Verify Installation

### In Browser

Open `http://localhost:5173` in your browser. You should see:

- A centered title: "CS2 Tournament Overlay"
- Subtitle: "Ready for OBS Browser Source"
- A dark semi-transparent card with smooth fade-in animation

### In OBS

The overlay should:

- Have a transparent background
- Display the demo text in the center
- Animate smoothly when the scene loads
- Not interfere with other sources

## Available Scripts

| Command        | Description                                       |
| -------------- | ------------------------------------------------- |
| `yarn dev`     | Start development server with hot reload         |
| `yarn build`   | Build for production (output in `dist/`)         |
| `yarn preview` | Preview production build locally                 |
| `yarn lint`    | Run ESLint to check code quality                 |
| `yarn tsc`     | Run TypeScript type checking                     |

## Next Steps

### Customizing the Overlay

The main overlay component is in `src/App.tsx`. You can:

- Add your tournament branding
- Create custom overlay components
- Integrate with CS2 GSI (Game State Integration)
- Connect to OBS WebSocket for spectator data
- Add team logos, player stats, match timers, etc.

### Project Structure

```
cs2-tournament-overlay/
├── src/
│   ├── App.tsx          # Main overlay component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles (Tailwind)
├── public/              # Static assets
├── docs/                # Documentation (MkDocs)
└── vite.config.ts       # Vite configuration
```

### Development Tips

**Testing in OBS:**

- Use `http://localhost:5173` for development (hot reload works)
- Changes to the code will automatically refresh in OBS
- Use browser DevTools in OBS: Right-click the source → Interact

**Performance:**

- Overlay should be lightweight and performant
- Animations should not drop frames on stream
- Test with OBS running a stream to ensure smooth performance

**Transparent Background:**

- The overlay uses `bg-transparent` and `pointer-events-none` for transparency
- Make sure OBS Browser Source doesn't have a custom background color set

## Placeholder Features

The current overlay includes architectural placeholders for:

### OBS Spectated Player Detection

In `src/App.tsx`, you'll find:

```typescript
interface SpectatedPlayerState {
  playerName?: string;
  team?: string;
  // Future: add more player data
}
```

**To implement:**

- Use [OBS WebSocket](https://github.com/obsproject/obs-websocket) to detect scene changes
- Parse the active video source to determine which player is being spectated
- Update the overlay in real-time based on spectator camera

### CS2 Game State Integration

**To implement:**

- Set up CS2 GSI configuration file
- Create a WebSocket server to receive GSI data
- Parse game state (player health, kills, round status, etc.)
- Display relevant stats in the overlay

## Troubleshooting

### Overlay not showing in OBS

- Check that the URL is correct (`http://localhost:5173`)
- Verify the development server is running (`yarn dev`)
- Make sure Width and Height are set to 1920x1080
- Try refreshing the browser source (right-click → Refresh)

### Hot reload not working

- Check browser console in OBS (right-click source → Interact)
- Restart the development server
- Clear OBS browser cache: Settings → Advanced → Delete Cache

### Styles not applying

- Ensure Tailwind CSS is properly installed (`yarn install`)
- Check that `index.css` imports Tailwind: `@import "tailwindcss";`
- Rebuild the app: `yarn build`

## Need Help?

- **GitHub Issues**: [Report a bug or request a feature](https://github.com/sivert-io/cs2-tournament-overlay/issues)
- **Discussions**: [Ask questions](https://github.com/sivert-io/cs2-tournament-overlay/discussions)
- **Discord**: [Join the community](https://discord.gg/n7gHYau7aW)

---

**Related Projects:**

- [MatchZy Auto Tournament](https://mat.sivert.io/) – Tournament management platform
- [CS2 Server Manager](https://csm.sivert.io/) – CS2 server deployment
- [MatchZy Enhanced](https://me.sivert.io/) – CS2 match plugin
