import { Play, Pause, SkipBack, SkipForward, Heart, Maximize2 } from 'lucide-react';
import { Project } from '../types';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface PlayerProps {
  currentProject: Project | null;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onToggleFavorite: (projectId: string) => void;
  isFavorite: boolean;
  onExpand: () => void;
}

export function Player({ 
  currentProject, 
  isPlaying, 
  onTogglePlay, 
  onPrevious, 
  onNext,
  onToggleFavorite,
  isFavorite,
  onExpand
}: PlayerProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isPlaying && currentProject) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + 0.5;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentProject]);

  if (!currentProject) {
    return null;
  }

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-neutral-950 border-t border-neutral-800 z-50"
    >
      {/* Progress Bar */}
      <div className="relative h-1 bg-neutral-800 group cursor-pointer">
        <motion.div
          className="absolute h-full bg-green-500"
          style={{ width: `${progress}%` }}
        />
        <div 
          className="absolute h-full hover:bg-green-400/20 w-full"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setProgress(percentage);
          }}
        />
      </div>

      <div className="flex items-center justify-between px-4 py-3">
        {/* Current Project Info */}
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <motion.img
            src={currentProject.cover}
            alt={currentProject.title}
            className="w-14 h-14 rounded-md object-cover cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={onExpand}
          />
          <div className="min-w-0">
            <h4 className="text-white truncate cursor-pointer hover:underline" onClick={onExpand}>
              {currentProject.title}
            </h4>
            <p className="text-sm text-neutral-400 truncate">{currentProject.category}</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onToggleFavorite(currentProject.id)}
            className={`${
              isFavorite ? 'text-green-500' : 'text-neutral-400 hover:text-white'
            } transition-colors`}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} />
          </motion.button>
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center gap-2 flex-1">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onPrevious}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <SkipBack size={20} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onTogglePlay}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause size={20} fill="black" /> : <Play size={20} fill="black" className="ml-0.5" />}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <SkipForward size={20} />
            </motion.button>
          </div>
          
          {/* Progress Time */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>{Math.floor(progress / 100 * 180)}s</span>
            <span>/</span>
            <span>180s</span>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center justify-end gap-2 flex-1">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onExpand}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            <Maximize2 size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}