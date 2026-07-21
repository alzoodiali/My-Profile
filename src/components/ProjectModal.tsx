import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export interface ProjectData {
  id: string;
  titleKey: string;
  tagKey: string;
  descKey: string;
  longDescKey: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'iot';
  githubUrl: string;
  demoUrl: string;
  image: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t } = useTranslation();

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl glass-card max-h-[90vh] flex flex-col"
        >
          {/* Top Image Banner */}
          <div className="relative h-56 sm:h-64 w-full bg-slate-950 overflow-hidden">
            <img
              src={project.image}
              alt={t(project.titleKey)}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
            
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 border border-slate-700 text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Tag Badge */}
            <div className="absolute bottom-4 left-6">
              <span className="px-3.5 py-1.5 rounded-full bg-sky-500/20 border border-sky-500/40 text-sky-300 text-xs font-semibold">
                {t(project.tagKey)}
              </span>
            </div>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                {t(project.titleKey)}
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t(project.longDescKey)}
              </p>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-xs font-semibold text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Footer */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-colors"
              >
                <SiGithub className="w-4 h-4" />
                <span>{t('projects.viewCode')}</span>
              </a>

              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-sm shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{t('projects.liveDemo')}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
