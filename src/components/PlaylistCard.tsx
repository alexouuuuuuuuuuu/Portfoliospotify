import { motion } from 'motion/react';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  title: string;
  cover: string;
  gradient: string;
  onClick: () => void;
}

export function PlaylistCard({ title, cover, gradient, onClick }: PlaylistCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="group relative bg-neutral-900 hover:bg-neutral-800 rounded-md overflow-hidden flex items-center transition-colors w-full"
    >
      <div 
        className="w-20 h-20 flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${gradient})`
        }}
      >
        {cover && (
          <img 
            src={cover} 
            alt={title}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      
      <div className="flex-1 px-4 text-left">
        <h3 className="text-white truncate">{title}</h3>
      </div>

      {/* Play button on hover */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all"
      >
        <Play size={20} fill="black" className="text-black ml-0.5" />
      </motion.div>
    </motion.button>
  );
}
