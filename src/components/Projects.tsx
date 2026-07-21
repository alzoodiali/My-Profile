import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Info } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { ProjectModal } from './ProjectModal';
import type { ProjectData } from './ProjectModal';

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');

  const projects: ProjectData[] = [
    {
      id: 'p1',
      titleKey: 'projects.p1.title',
      tagKey: 'projects.p1.tag',
      descKey: 'projects.p1.desc',
      longDescKey: 'projects.p1.longDesc',
      technologies: ['Flutter', 'Dart', 'ESP32', 'IoT', 'Firebase'],
      category: 'iot',
      githubUrl: 'https://github.com/AliAlzoodi/Smart-Home-Flutter-ESP32',
      demoUrl: 'https://github.com/AliAlzoodi/Smart-Home-Flutter-ESP32',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'p2',
      titleKey: 'projects.p2.title',
      tagKey: 'projects.p2.tag',
      descKey: 'projects.p2.desc',
      longDescKey: 'projects.p2.longDesc',
      technologies: ['Flutter', 'Dart', 'Firebase', 'State Management', 'REST API'],
      category: 'mobile',
      githubUrl: 'https://github.com/AliAlzoodi/Flutter-Mobile-Apps',
      demoUrl: 'https://github.com/AliAlzoodi/Flutter-Mobile-Apps',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'p3',
      titleKey: 'projects.p3.title',
      tagKey: 'projects.p3.tag',
      descKey: 'projects.p3.desc',
      longDescKey: 'projects.p3.longDesc',
      technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind'],
      category: 'web',
      githubUrl: 'https://github.com/AliAlzoodi/React-Web-Projects',
      demoUrl: 'https://github.com/AliAlzoodi/React-Web-Projects',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <FolderGit2 className="w-4 h-4" />
            <span>{t('projects.title')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {t('projects.subtitle')}
          </motion.h2>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t('projects.all')}
            </button>
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'mobile'
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t('projects.mobile')}
            </button>
            <button
              onClick={() => setActiveTab('web')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'web'
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t('projects.web')}
            </button>
            <button
              onClick={() => setActiveTab('iot')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'iot'
                  ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t('projects.iot')}
            </button>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group"
              >
                {/* Project Image */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-semibold text-sky-400 backdrop-blur-md">
                    {t(project.tagKey)}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-extrabold text-white mb-2 group-hover:text-sky-400 transition-colors">
                      {t(project.titleKey)}
                    </h3>
                    <p className="text-sm text-slate-300 mb-6 leading-relaxed line-clamp-3">
                      {t(project.descKey)}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-2 pt-4 border-t border-slate-800/80">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-sky-400 transition-colors"
                      >
                        <Info className="w-4 h-4" />
                        <span>{t('projects.details')}</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
                        title="GitHub"
                      >
                        <SiGithub className="w-4 h-4" />
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 text-white hover:scale-105 transition-transform"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Deep-dive */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
