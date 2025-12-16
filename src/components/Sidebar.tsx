import { Home, Trophy, Grid3x3, Palette, Code, Film, User, Mail, Heart } from 'lucide-react';

interface SidebarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  favoriteProjects: string[];
}

export function Sidebar({ activeView, onNavigate, favoriteProjects }: SidebarProps) {
  const mainLinks = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'top-france', label: 'Top France', icon: Trophy },
    { id: 'all', label: 'Tous les projets', icon: Grid3x3 }
  ];

  const playlists = [
    { id: 'ui-ux', label: 'UI/UX Essentials', icon: Palette },
    { id: 'web', label: 'Web Projects', icon: Code },
    { id: 'motion', label: 'Motion & 3D', icon: Film }
  ];

  const footerLinks = [
    { id: 'about', label: 'À propos', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  return (
    <div className="w-64 bg-black h-screen flex flex-col fixed left-0 top-0 border-r border-neutral-900">
      {/* Logo */}
      <div className="p-6">
        <button 
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14.5c-.2.3-.5.4-.8.4-.2 0-.3 0-.5-.1-2.4-1.5-5.4-1.8-9-.9-.4.1-.8-.2-.9-.6-.1-.4.2-.8.6-.9 4-.9 7.3-.5 10.1 1.1.4.2.5.7.3 1zm1.1-2.5c-.2.4-.7.5-1.1.3-2.8-1.7-7-2.2-10.3-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.8-1.1 8.4-.6 11.6 1.4.4.2.6.7.4 1.1zm.1-2.6c-3.4-2-9-2.2-12.2-1.2-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 3.7-1.1 10.1-.9 14.1 1.4.5.3.7 1 .4 1.5-.3.5-1 .7-1.5.4z"/>
            </svg>
          </div>
          <span className="text-white tracking-tight">Portfolio</span>
        </button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <div className="space-y-1 mb-6">
          {mainLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`w-full flex items-center gap-4 px-3 py-2 rounded-md transition-colors ${
                  isActive 
                    ? 'bg-neutral-800 text-white' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Playlists */}
        <div className="mb-6">
          <h3 className="px-3 mb-2 text-xs uppercase tracking-wider text-neutral-500">
            Playlists
          </h3>
          <div className="space-y-1">
            {playlists.map((playlist) => {
              const Icon = playlist.icon;
              const isActive = activeView === playlist.id;
              return (
                <button
                  key={playlist.id}
                  onClick={() => onNavigate(playlist.id)}
                  className={`w-full flex items-center gap-4 px-3 py-2 rounded-md transition-colors ${
                    isActive 
                      ? 'bg-neutral-800 text-white' 
                      : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                  }`}
                >
                  <Icon size={20} />
                  <span>{playlist.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Library */}
        <div>
          <h3 className="px-3 mb-2 text-xs uppercase tracking-wider text-neutral-500">
            Bibliothèque
          </h3>
          <button
            onClick={() => onNavigate('favorites')}
            className={`w-full flex items-center gap-4 px-3 py-2 rounded-md transition-colors ${
              activeView === 'favorites'
                ? 'bg-neutral-800 text-white'
                : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
            }`}
          >
            <Heart size={20} />
            <span>Favoris</span>
            {favoriteProjects.length > 0 && (
              <span className="ml-auto text-xs bg-neutral-700 px-2 py-0.5 rounded-full">
                {favoriteProjects.length}
              </span>
            )}
          </button>
        </div>
      </nav>

      {/* Footer Links */}
      <div className="p-3 border-t border-neutral-900">
        <div className="space-y-1">
          {footerLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`w-full flex items-center gap-4 px-3 py-2 rounded-md transition-colors text-sm ${
                  isActive 
                    ? 'bg-neutral-800 text-white' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                <Icon size={18} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}