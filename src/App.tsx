import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ProjectCard } from './components/ProjectCard';
import { Player } from './components/Player';
import { ProjectView } from './components/ProjectView';
import { PlaylistHeader } from './components/PlaylistHeader';
import { ProjectRow } from './components/ProjectRow';
import { PlaylistCard } from './components/PlaylistCard';
import { ProfileCard } from './components/ProfileCard';
import { projects, playlists } from './data/projects';
import { Project } from './types';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('home');
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [favoriteProjects, setFavoriteProjects] = useState<string[]>([]);
  const [isProjectViewOpen, setIsProjectViewOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Tout');

  const handlePlayProject = (project: Project) => {
    setCurrentProject(project);
    setIsPlaying(true);
    setIsProjectViewOpen(false);
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleToggleFavorite = (projectId: string) => {
    setFavoriteProjects((prev) =>
      prev.includes(projectId)
        ? prev.filter((id) => id !== projectId)
        : [...prev, projectId]
    );
  };

  const handlePrevious = () => {
    if (!currentProject) return;
    const currentPlaylist = getFilteredProjects();
    const currentIndex = currentPlaylist.findIndex((p) => p.id === currentProject.id);
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : currentPlaylist.length - 1;
    setCurrentProject(currentPlaylist[prevIndex]);
  };

  const handleNext = () => {
    if (!currentProject) return;
    const currentPlaylist = getFilteredProjects();
    const currentIndex = currentPlaylist.findIndex((p) => p.id === currentProject.id);
    const nextIndex = currentIndex < currentPlaylist.length - 1 ? currentIndex + 1 : 0;
    setCurrentProject(currentPlaylist[nextIndex]);
  };

  const getFilteredProjects = (): Project[] => {
    if (activeView === 'all') {
      return projects;
    }
    if (activeView === 'favorites') {
      return projects.filter((p) => favoriteProjects.includes(p.id));
    }
    const playlist = playlists.find((pl) => pl.id === activeView);
    if (playlist) {
      return projects.filter((p) => playlist.projects.includes(p.id));
    }
    return projects;
  };

  const getViewTitle = (): string => {
    if (activeView === 'home') return 'Accueil';
    if (activeView === 'all') return 'Tous les projets';
    if (activeView === 'favorites') return 'Mes Favoris';
    if (activeView === 'about') return 'À propos';
    if (activeView === 'contact') return 'Contact';
    const playlist = playlists.find((pl) => pl.id === activeView);
    return playlist?.name || 'Portfolio';
  };

  const getViewDescription = (): string => {
    if (activeView === 'top-france') {
      return 'Mes meilleurs projets, classés par pertinence et impact. Une sélection de réalisations qui ont marqué ma carrière créative.';
    }
    if (activeView === 'ui-ux') {
      return 'Une collection de projets centrés sur l\'expérience utilisateur et le design d\'interface.';
    }
    if (activeView === 'web') {
      return 'Développements web, applications et expériences digitales interactives.';
    }
    if (activeView === 'motion') {
      return 'Motion design, animations 3D et expériences visuelles immersives.';
    }
    if (activeView === 'all') {
      return 'L\'intégralité de mes projets créatifs dans tous les domaines.';
    }
    if (activeView === 'favorites') {
      return 'Vos projets favoris sauvegardés pour un accès rapide.';
    }
    return '';
  };

  const getGradient = (): string => {
    if (activeView === 'top-france') return '#1DB954, #1ed760';
    if (activeView === 'ui-ux') return '#9333EA, #C026D3';
    if (activeView === 'web') return '#3B82F6, #06B6D4';
    if (activeView === 'motion') return '#F59E0B, #EF4444';
    return '#1DB954, #1ed760';
  };

  const filteredProjects = getFilteredProjects();

  const renderContent = () => {
    if (activeView === 'home') {
      // Page d'accueil avec sections multiples
      const recentProjects = [...projects].slice(0, 6);
      const trendingProjects = [projects[1], projects[0], projects[3], projects[2], projects[4], projects[5]];
      const topProjects = [...projects].sort((a, b) => b.id.localeCompare(a.id)).slice(0, 6);
      const uiuxProjects = projects.filter(p => p.category.includes('UI/UX'));

      const playlistsData = [
        { id: 'top-france', title: 'Top France', gradient: '#1DB954, #1ed760', cover: projects[0]?.cover },
        { id: 'ui-ux', title: 'UI/UX Essentials', gradient: '#9333EA, #C026D3', cover: projects[1]?.cover },
        { id: 'web', title: 'Web Projects', gradient: '#3B82F6, #06B6D4', cover: projects[2]?.cover },
        { id: 'motion', title: 'Motion & 3D', gradient: '#F59E0B, #EF4444', cover: projects[3]?.cover },
        { id: 'all', title: 'Tous les projets', gradient: '#EC4899, #8B5CF6', cover: projects[4]?.cover },
        { id: 'favorites', title: 'Mes Favoris', gradient: '#10B981, #059669', cover: projects[5]?.cover },
      ];

      const categories = [
        { label: 'Tout', view: 'all' },
        { label: 'UI/UX', view: 'ui-ux' },
        { label: 'Web', view: 'web' },
        { label: 'Motion', view: 'motion' },
        { label: '3D', view: 'motion' }
      ];
      
      return (
        <div>
          {/* Top Bar with Avatar and Filters */}
          <div className="flex items-center gap-4 mb-8">
            {/* Profile Avatar */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveView('about')}
              className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white flex-shrink-0"
            >
              <span className="text-xl">A</span>
            </motion.button>

            {/* Filter Pills */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2 overflow-x-auto pb-2 flex-1"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setActiveView(category.view)}
                  className="px-5 py-2 rounded-full whitespace-nowrap transition-all bg-neutral-800 text-white hover:bg-neutral-700"
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Playlists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-10">
            {playlistsData.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <PlaylistCard
                  title={playlist.title}
                  cover={playlist.cover}
                  gradient={playlist.gradient}
                  onClick={() => setActiveView(playlist.id)}
                />
              </motion.div>
            ))}
          </div>

          {/* Dernières sorties */}
          <ProjectRow
            title="Dernières sorties"
            projects={recentProjects}
            onPlayProject={handlePlayProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteProjects={favoriteProjects}
            currentProjectId={currentProject?.id || null}
            isPlaying={isPlaying}
            onViewAll={() => setActiveView('all')}
          />

          {/* En tendance */}
          <ProjectRow
            title="En tendance"
            projects={trendingProjects}
            onPlayProject={handlePlayProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteProjects={favoriteProjects}
            currentProjectId={currentProject?.id || null}
            isPlaying={isPlaying}
            onViewAll={() => setActiveView('top-france')}
          />

          {/* Top France */}
          <ProjectRow
            title="Top France - Projets les plus écoutés"
            projects={topProjects}
            onPlayProject={handlePlayProject}
            onToggleFavorite={handleToggleFavorite}
            favoriteProjects={favoriteProjects}
            currentProjectId={currentProject?.id || null}
            isPlaying={isPlaying}
            onViewAll={() => setActiveView('top-france')}
          />

          {/* UI/UX Design */}
          {uiuxProjects.length > 0 && (
            <ProjectRow
              title="UI/UX Essentials"
              projects={uiuxProjects}
              onPlayProject={handlePlayProject}
              onToggleFavorite={handleToggleFavorite}
              favoriteProjects={favoriteProjects}
              currentProjectId={currentProject?.id || null}
              isPlaying={isPlaying}
              onViewAll={() => setActiveView('ui-ux')}
            />
          )}
        </div>
      );
    }
    
    if (activeView === 'about') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <div className="mb-8">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-green-400 to-green-600 mb-6" />
            <h1 className="text-white mb-4">À propos</h1>
            <p className="text-xl text-neutral-300 mb-6">
              Designer & Développeur Full Stack passionné par la création d'expériences digitales mémorables.
            </p>
          </div>

          <div className="space-y-6 text-neutral-300">
            <p>
              Avec plus de 5 ans d'expérience dans le design et le développement web, je combine expertise technique et sensibilité créative pour concevoir des produits digitaux qui allient esthétique et performance.
            </p>
            <p>
              Mon approche est centrée sur l'utilisateur : je crois fermement qu'un bon design doit résoudre des problèmes réels tout en offrant une expérience agréable et intuitive.
            </p>
            <p>
              Spécialisé en UI/UX Design, développement React, et motion design, j'accompagne les entreprises dans leur transformation digitale en créant des interfaces qui captivent et convertissent.
            </p>

            <div className="mt-12 pt-8 border-t border-neutral-800">
              <h2 className="text-white mb-6">Compétences</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['UI/UX Design', 'React & Next.js', 'Figma', 'Motion Design', 'TypeScript', 'Design Systems', 'Prototypage', 'Three.js', 'User Research'].map((skill) => (
                  <div key={skill} className="bg-neutral-900 rounded-lg px-4 py-3 text-center">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    if (activeView === 'contact') {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="text-white mb-6">Contact</h1>
          <p className="text-xl text-neutral-300 mb-12">
            Envie de collaborer ou simplement discuter d'un projet ? N'hésitez pas à me contacter !
          </p>

          <div className="space-y-6">
            <a
              href="mailto:hello@portfolio.com"
              className="flex items-center gap-4 p-6 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Mail className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-white">Email</p>
                <p className="text-neutral-400">hello@portfolio.com</p>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Github className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-white">GitHub</p>
                <p className="text-neutral-400">@portfolio</p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-neutral-900 hover:bg-neutral-800 rounded-lg transition-colors group"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                <Linkedin className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-white">LinkedIn</p>
                <p className="text-neutral-400">/in/portfolio</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-6 bg-neutral-900 rounded-lg">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                <MapPin className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-white">Localisation</p>
                <p className="text-neutral-400">Paris, France</p>
              </div>
            </div>
          </div>
        </motion.div>
      );
    }

    return (
      <>
        <PlaylistHeader
          title={getViewTitle()}
          description={getViewDescription()}
          coverGradient={getGradient()}
          projectCount={filteredProjects.length}
          onPlayAll={() => {
            if (filteredProjects.length > 0) {
              handlePlayProject(filteredProjects[0]);
            }
          }}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-neutral-400 text-lg">Aucun projet dans cette playlist</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCard
                  project={project}
                  onPlay={handlePlayProject}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favoriteProjects.includes(project.id)}
                  isPlaying={currentProject?.id === project.id && isPlaying}
                />
              </motion.div>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <div className="min-h-screen bg-black">
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        favoriteProjects={favoriteProjects}
      />

      <main className="ml-64 p-8 pb-32">
        {renderContent()}
      </main>

      <Player
        currentProject={currentProject}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={currentProject ? favoriteProjects.includes(currentProject.id) : false}
        onExpand={() => setIsProjectViewOpen(true)}
      />

      <ProjectView
        project={currentProject}
        isOpen={isProjectViewOpen}
        onClose={() => setIsProjectViewOpen(false)}
        isPlaying={isPlaying}
        onTogglePlay={handleTogglePlay}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={currentProject ? favoriteProjects.includes(currentProject.id) : false}
      />
    </div>
  );
}