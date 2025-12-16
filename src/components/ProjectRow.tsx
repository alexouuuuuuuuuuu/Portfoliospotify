import { Project } from '../types';
import { ProjectCard } from './ProjectCard';
import { ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProjectRowProps {
  title: string;
  projects: Project[];
  onPlayProject: (project: Project) => void;
  onToggleFavorite: (projectId: string) => void;
  favoriteProjects: string[];
  currentProjectId: string | null;
  isPlaying: boolean;
  onViewAll?: () => void;
}

export function ProjectRow({
  title,
  projects,
  onPlayProject,
  onToggleFavorite,
  favoriteProjects,
  currentProjectId,
  isPlaying,
  onViewAll
}: ProjectRowProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white hover:underline cursor-pointer"
          onClick={onViewAll}
        >
          {title}
        </motion.h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-sm text-neutral-400 hover:text-white flex items-center gap-1 transition-colors"
          >
            Tout afficher
            <ChevronRight size={16} />
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <ProjectCard
              project={project}
              onPlay={onPlayProject}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favoriteProjects.includes(project.id)}
              isPlaying={currentProjectId === project.id && isPlaying}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
