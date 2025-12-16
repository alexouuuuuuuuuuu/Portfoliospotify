import { X, Play, Pause, Heart, ExternalLink } from 'lucide-react';
import { Project } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectViewProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onToggleFavorite: (projectId: string) => void;
  isFavorite: boolean;
}

export function ProjectView({ 
  project, 
  isOpen, 
  onClose, 
  isPlaying, 
  onTogglePlay,
  onToggleFavorite,
  isFavorite 
}: ProjectViewProps) {
  if (!project) return null;

  // Images du projet (utilisation de la cover + variations)
  const projectImages = [
    project.cover,
    project.cover,
    project.cover,
    project.cover,
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-40 overflow-y-auto"
        >
          <div className="min-h-screen pb-32">
            {/* Header with gradient */}
            <div 
              className="relative h-96 bg-gradient-to-b from-neutral-900 to-black"
              style={{
                background: `linear-gradient(180deg, ${project.color}40 0%, #000000 100%)`
              }}
            >
              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 bg-black/60 hover:bg-black rounded-full flex items-center justify-center text-white z-10"
              >
                <X size={24} />
              </motion.button>

              {/* Project Cover and Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="max-w-7xl mx-auto flex items-end gap-6">
                  <motion.img
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    src={project.cover}
                    alt={project.title}
                    className="w-60 h-60 rounded-lg shadow-2xl object-cover"
                  />
                  <div className="flex-1 pb-4">
                    <p className="text-sm text-white/80 mb-2">PROJET</p>
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="text-white mb-4"
                    >
                      {project.title}
                    </motion.h1>
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-4 text-sm text-white/80"
                    >
                      <span>{project.role}</span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="max-w-7xl mx-auto px-8 py-6">
              <div className="flex items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onTogglePlay}
                  className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center transition-colors"
                >
                  {isPlaying ? (
                    <Pause size={28} fill="black" className="text-black" />
                  ) : (
                    <Play size={28} fill="black" className="text-black ml-1" />
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onToggleFavorite(project.id)}
                  className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                    isFavorite
                      ? 'border-green-500 text-green-500'
                      : 'border-neutral-600 text-neutral-400 hover:border-white hover:text-white'
                  }`}
                >
                  <Heart size={24} fill={isFavorite ? 'currentColor' : 'none'} />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-8 pb-8">
              {/* Main Content */}
              <div className="space-y-8">
                {/* Description */}
                <motion.section
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h2 className="text-white mb-4">Présentation</h2>
                  <p className="text-neutral-300 leading-relaxed">{project.description}</p>
                </motion.section>

                {/* Tools */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="flex flex-wrap gap-2"
                >
                  {project.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-neutral-900 text-neutral-300 rounded-full text-sm border border-neutral-800"
                    >
                      {tool}
                    </span>
                  ))}
                </motion.div>

                {/* Images Grid */}
                <motion.section
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="grid grid-cols-2 gap-4"
                >
                  {projectImages.map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="aspect-video rounded-lg overflow-hidden bg-neutral-900"
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </motion.div>
                  ))}
                </motion.section>

                {/* Problem */}
                <motion.section
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <h2 className="text-white mb-4">Problématique</h2>
                  <p className="text-neutral-300 leading-relaxed">{project.problem}</p>
                </motion.section>

                {/* Process */}
                <motion.section
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <h2 className="text-white mb-4">Process</h2>
                  <p className="text-neutral-300 leading-relaxed">{project.process}</p>
                </motion.section>

                {/* Result */}
                <motion.section
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="bg-neutral-900 rounded-lg p-6 border border-neutral-800"
                >
                  <h2 className="text-white mb-4">Résultat Final</h2>
                  <p className="text-neutral-300 leading-relaxed">{project.result}</p>
                </motion.section>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}