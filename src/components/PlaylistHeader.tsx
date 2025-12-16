import { motion } from 'motion/react';

interface PlaylistHeaderProps {
  title: string;
  description: string;
  coverGradient: string;
  projectCount: number;
}


export function PlaylistHeader({ title, description, coverGradient, projectCount }: PlaylistHeaderProps) {
  return (
    <div 
      className="relative h-80 mb-6 rounded-lg overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${coverGradient})`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
      
      <div className="relative h-full flex items-end p-8">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-wider mb-2 text-white/80"
          >
            Playlist
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/80 mb-4 max-w-2xl"
          >
            {description}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-white/60"
          >
            {projectCount} {projectCount === 1 ? 'projet' : 'projets'}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
