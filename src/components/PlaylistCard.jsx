// src/components/PlaylistCard.jsx
import { Play } from 'lucide-react'; 

function PlaylistCard({ title, description, imageUrl }) {
  return (
    // Card container avec effets de survol
    <div className="bg-zinc-800/50 p-4 rounded-lg hover:bg-zinc-800 transition-colors duration-200 group relative">
      
      {/* Bouton Play (Masqué par défaut, affiché au survol) */}
      <button className="absolute right-4 bottom-24 p-3 bg-green-500 rounded-full shadow-xl opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 translate-y-2">
        <Play fill="black" className="text-black" />
      </button>

      {/* Image */}
      <img 
        src={imageUrl} 
        alt={title} 
        className="w-full h-auto rounded shadow-md mb-4 aspect-square object-cover"
      />

      {/* Titre */}
      <h3 className="text-white font-bold text-base truncate">{title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-1 line-clamp-2">{description}</p>
    </div>
  );
}

export default PlaylistCard;