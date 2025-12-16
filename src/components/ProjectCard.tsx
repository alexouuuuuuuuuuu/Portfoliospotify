import { Play, Heart } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';

interface ProjectCardProps {
  project: Project;
  onPlay: (project: Project) => void;
  onToggleFavorite: (projectId: string) => void;
  isFavorite: boolean;
  isPlaying: boolean;
}

export function ProjectCard({ project, onPlay, onToggleFavorite, isFavorite, isPlaying }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-neutral-900 rounded-lg p-4 hover:bg-neutral-800 transition-all cursor-pointer"
      onClick={() => onPlay(project)}
    >
      {/* Cover Image */}
      <div className="relative mb-4 aspect-square rounded-md overflow-hidden bg-neutral-800">
        <img 
          src={project.cover} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Play Button Overlay */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl ${
              isPlaying ? 'bg-green-500' : 'bg-green-500'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              onPlay(project);
            }}
          >
            <Play size={24} fill="black" className="text-black ml-0.5" />
          </motion.button>
        </motion.div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(project.id);
          }}
          className={`absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isFavorite 
              ? 'bg-green-500 text-black' 
              : 'bg-black/60 text-neutral-400 hover:text-white opacity-0 group-hover:opacity-100'
          }`}
        >
          <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Project Info */}
      <div>
        <h3 className="text-white mb-1 truncate">{project.title}</h3>
        <p className="text-sm text-neutral-400 truncate">{project.category}</p>
      </div>

      {/* Playing Indicator */}
      {isPlaying && (
        <div className="absolute bottom-4 right-4 flex gap-0.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 bg-green-500 rounded-full"
              animate={{
                height: ['8px', '16px', '8px'],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
