const MainContent = () => {
  return (
    // 'flex-1' permet au contenu principal de prendre toute la largeur restante.
    <main className="flex-1 bg-zinc-900 p-6 overflow-y-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Accueil Spotify Clone</h1>
      {/* Ajoutez du contenu pour tester le défilement (scroll) */}
      <div className="h-[200vh]">
        <p className="text-gray-400">Contenu principal (défilement test)</p>
      </div>
    </main>
  );
};

export default MainContent;