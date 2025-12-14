import { motion } from 'framer-motion'

/**
 * Placeholder for OBS spectated player detection
 * In a real implementation, this would:
 * - Listen to OBS WebSocket events
 * - Track which player is currently being spectated
 * - Update overlay content based on the spectated player
 * - Integrate with CS2 GSI (Game State Integration) for player data
 */
interface SpectatedPlayerState {
  playerName?: string
  team?: string
  // Future: add more player data like health, kills, etc.
}

function App() {
  // Placeholder state - in real implementation this would come from OBS/GSI
  const spectatedPlayer: SpectatedPlayerState = {
    playerName: undefined,
    team: undefined,
  }

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none">
      {/* Transparent background - OBS will handle transparency */}
      <div className="absolute inset-0 bg-transparent" />
      
      {/* Demo overlay content */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-auto"
      >
        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-6 py-3 shadow-xl border border-white/20">
          <h1 className="text-2xl font-bold text-white text-center">
            CS2 Tournament Overlay
          </h1>
          <p className="text-sm text-gray-300 text-center mt-1">
            {spectatedPlayer.playerName 
              ? `Spectating: ${spectatedPlayer.playerName}` 
              : 'Ready for OBS Browser Source'}
          </p>
        </div>
      </motion.div>

      {/* Placeholder for future overlay components */}
      {/* Example: player stats, team scores, round timer, etc. */}
    </div>
  )
}

export default App
