// src/components/MainContent.jsx
import Appbar from './Appbar.jsx';
import PlaylistCard from './PlaylistCard.jsx'; 

// Données statiques pour la Semaine 2
const staticPlaylists = [
  { id: 1, title: "Mon Mix Quotidien 1", description: "Damso, PNL, Ninho et bien d'autres artistes...", imageUrl: "https://placehold.co/300x300/34D399/white?text=Mix+1" },
  { id: 2, title: "Découvertes de la Semaine", description: "La musique à découvrir de la semaine", imageUrl: "https://placehold.co/300x300/A78BFA/white?text=Discover" },
  { id: 3, title: "Workout Mix", description: "Musique pour booster vos sessions sportives", imageUrl: "https://placehold.co/300x300/F87171/white?text=Workout" },
  { id: 4, title: "Chill Lofi", description: "Détendez-vous avec des mélodies douces.", imageUrl: "https://placehold.co/300x300/FBBF24/white?text=Lofi" },
  { id: 5, title: "Classiques du Rock", description: "Les légendes du Rock dans une seule playlist.", imageUrl: "https://placehold.co/300x300/9CA3AF/white?text=Rock" },
  { id: 6, title: "Pop Hits 2025", description: "Les chansons les plus populaires du moment.", imageUrl: "https://placehold.co/300x300/4F46E5/white?text=Pop" },
];

function MainContent() {
  return (
    // Le conteneur principal défile verticalement
    <main className="flex-1 bg-zinc-900 overflow-y-auto rounded-lg flex flex-col">
      
      {/* 1. L'Appbar fixe/sticky */}
      <Appbar />

      {/* 2. Le Contenu de la Page (le corps défilant) */}
      <div className="p-6">
        
        {/* Titre Bienvenue */}
        <h1 className="text-3xl font-bold text-white mb-8">
            Bonsoir
        </h1>
        
        {/* GRILLE DES PLAYLISTS STATIQUES (Utilisation de Tailwind Grid) */}
        {/* La classe grid-cols-5 est demandée, mais j'ajoute des classes responsives pour une meilleure adaptation */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
            {/* Utilisation de .map() sur les données statiques */}
            {staticPlaylists.map(playlist => (
                <PlaylistCard 
                    key={playlist.id} 
                    title={playlist.title} 
                    description={playlist.description} 
                    imageUrl={playlist.imageUrl} 
                />
            ))}
            {/* Répéter les cartes pour simuler une grille remplie */}
             {staticPlaylists.map(playlist => (
                <PlaylistCard 
                    key={playlist.id + 10} 
                    title={playlist.title} 
                    description={playlist.description} 
                    imageUrl={playlist.imageUrl} 
                />
            ))}
        </div>

        {/* Section Émissions à tester (pour simuler un scroll) */}
        <h2 className="text-2xl font-bold text-white mt-10 mb-4">
            Émissions à tester
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 mb-20">
            {staticPlaylists.slice(0, 4).map(playlist => (
                 <PlaylistCard 
                    key={playlist.id + 20} 
                    title={playlist.title} 
                    description={playlist.description} 
                    imageUrl={playlist.imageUrl} 
                />
            ))}
        </div>
        
      </div>
    </main>
  );
}
export default MainContent;