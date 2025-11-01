import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';
import PlayerBar from './components/PlayerBar.jsx';

function App() {
  return (
    // 1. Conteneur principal: prend tout l'espace et applique un fond noir
    <div className="bg-black min-h-screen text-white">
      
      {/* 2. FLEX CONTAINER (Sidebar + MainContent) */}
      {/* h-[calc(100vh-6rem)] : Prend 100% de la hauteur moins les 6rem (96px) de la PlayerBar. */}
      {/* p-2 et space-x-2 sont pour la marge autour des zones, comme Spotify */}
      <div className="flex h-[calc(100vh-6rem)] p-2 space-x-2"> 
        
        {/* Sidebar (largeur fixe w-72) */}
        <Sidebar /> 
        
        {/* MainContent (flex-1 pour prendre le reste) */}
        <MainContent />
      </div>

      {/* 3. PlayerBar (hauteur fixe h-24) */}
      <PlayerBar />
      
    </div>
  );
}

export default App;