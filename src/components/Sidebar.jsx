// src/components/Sidebar.jsx
import { Home, Search, Library } from 'lucide-react'; 

function Sidebar() {
  return (
    // Conteneur principal de la Sidebar
    // Ajout de h-full pour prendre toute la hauteur disponible
    <div className="bg-zinc-900 w-72 flex-shrink-0 p-6 flex flex-col space-y-6 h-full">
      
      {/* 1. Navigation Principale (Accueil, Rechercher) */}
      <nav className="space-y-4">
        
        {/* Accueil */}
        <a href="#" className="flex items-center space-x-4 text-white font-bold hover:text-green-500 transition duration-150">
             <Home size={24} /> 
             <span>Accueil</span>
        </a>
        
        {/* Rechercher */}
         <a href="#" className="flex items-center space-x-4 text-gray-400 hover:text-white transition duration-150">
             <Search size={24} /> 
             <span>Rechercher</span>
        </a>
      </nav>

      <hr className="border-t border-zinc-700" /> {/* Séparateur visuel */}

      {/* 2. Section Bibliothèque */}
      <div className="space-y-4 pt-2">
        <a href="#" className="flex items-center space-x-4 text-gray-400 hover:text-white transition duration-150">
            <Library size={24} /> 
            <span className="font-semibold">Bibliothèque</span>
        </a>
      </div>

      {/* 3. Section Playlists (texte statique) */}
      {/* flex-1 permet à cette section de prendre tout l'espace restant et d'être scrollable */}
      <div className="flex-1 overflow-y-auto space-y-3 text-sm text-gray-400 custom-scrollbar">
        <h3 className="text-white font-bold mb-3">Playlists (Section Statique)</h3>
        <ul className="space-y-3">
          {/* Liste des playlists statiques demandées */}
          <li className="hover:text-white cursor-pointer transition duration-150">Ma Super Playlist Chill</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Rock Classique</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Mix Rap US</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Playlists d'Été</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Playlist de l'utilisateur 1</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Playlist de l'utilisateur 2</li>
          <li className="hover:text-white cursor-pointer transition duration-150">Playlist de l'utilisateur 3</li>
        </ul>
      </div>

    </div>
  );
}

export default Sidebar;