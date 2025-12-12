// src/components/PlayerBar.jsx
import { 
  Shuffle, SkipBack, Play, SkipForward, Repeat2, 
  Volume2, Maximize2, Mic, ListMusic
} from 'lucide-react'; 

function PlayerBar() {
  return (
    // La barre de lecture est fixée en bas
    <footer className="bg-black text-white p-4 h-24 flex justify-between items-center border-t border-zinc-800">

      {/* 1. Infos Chanson (Partie Gauche) */}
      <div className="flex items-center space-x-3 w-1/4">
        <img 
          src="https://placehold.co/60x60" // Placeholder pour l'image d'album
          alt="Album Art" 
          className="w-14 h-14 rounded shadow-lg"
        />
        <div>
          <p className="text-sm font-semibold hover:underline cursor-pointer">Titre de Chanson Statique</p> 
          <p className="text-xs text-gray-400 hover:underline cursor-pointer">Artiste Statique</p> 
        </div>
      </div>

      {/* 2. Contrôles de Lecture (Partie Centrale) */}
      <div className="flex flex-col items-center w-1/2">
        
        {/* Icônes de Contrôle */}
        <div className="flex items-center space-x-6 text-gray-300 mb-2">
          <Shuffle size={16} className="hover:text-white cursor-pointer" />
          <SkipBack size={20} className="hover:text-white cursor-pointer" />
          {/* Bouton Play/Pause stylisé */}
          <Play size={36} fill="black" className="hover:scale-105 cursor-pointer text-black rounded-full p-1 bg-white" />
          <SkipForward size={20} className="hover:text-white cursor-pointer" />
          <Repeat2 size={16} className="hover:text-white cursor-pointer" />
        </div>
        
        {/* Barre de Progression Statique */}
        <div className="flex items-center space-x-2 w-full max-w-lg">
          <span className="text-xs text-gray-400">0:00</span>
          {/* Barre de progression statique (HTML Range Input) */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value="15" 
            className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
          />
          <span className="text-xs text-gray-400">4:30</span>
        </div>
      </div>

      {/* 3. Contrôles Volume & Extras (Partie Droite) */}
      <div className="flex items-center space-x-4 w-1/4 justify-end">
        <Mic size={16} className="hover:text-white cursor-pointer text-gray-400" />
        <ListMusic size={16} className="hover:text-white cursor-pointer text-gray-400" />
        <Volume2 size={16} className="hover:text-white cursor-pointer text-gray-400" />
        
        {/* Barre de Volume Statique */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value="75" 
          className="w-24 h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
        />
        <Maximize2 size={16} className="hover:text-white cursor-pointer text-gray-400" />
      </div>
    </footer>
  );
}
export default PlayerBar;