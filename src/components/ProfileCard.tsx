import { motion } from 'motion/react';
import { Music2, Play } from 'lucide-react';

interface ProfileCardProps {
  onViewAbout: () => void;
}

export function ProfileCard({ onViewAbout }: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-6 text-white sticky top-0"
    >
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="w-32 h-32 rounded-full bg-black/20 mb-4 flex items-center justify-center overflow-hidden">
          <Music2 size={48} className="text-white" />
        </div>

        {/* Name */}
        <h2 className="text-white mb-2">Creative Designer</h2>
        <p className="text-sm text-white/80 mb-1">Designer & Developer</p>
        <p className="text-xs text-white/70 mb-6">Paris, France</p>

        {/* Stats */}
        <div className="flex gap-6 mb-6 w-full justify-center">
          <div className="text-center">
            <div className="text-white mb-1">6</div>
            <div className="text-xs text-white/70">Projets</div>
          </div>
          <div className="text-center">
            <div className="text-white mb-1">4</div>
            <div className="text-xs text-white/70">Playlists</div>
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-white/90 mb-6 leading-relaxed">
          Passionné par la création d'expériences digitales mémorables et innovantes.
        </p>

        {/* View Profile Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onViewAbout}
          className="w-full bg-black/30 hover:bg-black/40 text-white py-3 rounded-full transition-colors flex items-center justify-center gap-2"
        >
          <span>Voir mon profil</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
