// src/Layout.jsx
import Sidebar from './Sidebar'; // Assurez-vous que le chemin est correct

function Layout() {
  return (
    // Conteneur principal: 100% de la hauteur de la fenêtre (h-screen)
    // Utilise Flex pour aligner la sidebar et le contenu côte à côte
    <div className="flex h-screen bg-zinc-950">
      
      {/* Colonne de Gauche: La Sidebar (taille fixe w-72 définie dans Sidebar.jsx) */}
      <Sidebar />
      
      {/* Colonne de Droite: Le Contenu Principal */}
      {/* flex-1 permet au contenu de prendre tout l'espace restant */}
      <div className="flex-1 overflow-y-auto">
        
        {/* Ici sera placé le composant 'Header' (barres de navigation Haut/Bas) et la vue principale */}
        <main className="p-8">
          <h1 className="text-3xl text-white font-bold mb-6">Contenu Principal (Home View)</h1>
          
          {/* Exemple de contenu pour simuler la zone principale */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bg-zinc-800 p-4 rounded-lg shadow-xl hover:bg-zinc-700 transition duration-300">
                <div className="w-full h-32 bg-zinc-700 rounded mb-3"></div>
                <p className="text-white font-semibold">Titre Album {i + 1}</p>
                <p className="text-gray-400 text-sm">Artiste</p>
              </div>
            ))}
          </div>
          
        </main>
        
        {/* Espace pour le Footer/Lecteur global (qui sera ajouté plus tard) */}
        <footer className="h-24 bg-black border-t border-zinc-800 flex items-center justify-center text-white mt-auto">
            Lecteur Audio Global
        </footer>
        
      </div>
      
    </div>
  );
}

export default Layout;