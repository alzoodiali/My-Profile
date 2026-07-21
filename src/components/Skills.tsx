import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrench, Layers, Code2, Terminal, Database, ShieldCheck } from 'lucide-react';
import {
  SiFlutter,
  SiDart,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiGit,
  SiGithub,
  SiAndroidstudio,
  SiFirebase,
} from 'react-icons/si';

interface SkillItem {
  name: string;
  category: 'mobile' | 'frontend' | 'programming' | 'concepts' | 'tools';
  icon: React.ElementType;
  level: number; // Percentage
  levelTextKey: string;
  color: string;
}

export const Skills: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<string>('all');

  const skillsList: SkillItem[] = [
    // Mobile
    { name: 'Flutter', category: 'mobile', icon: SiFlutter, level: 90, levelTextKey: 'skills.proficient', color: '#38bdf8' },
    { name: 'Dart', category: 'mobile', icon: SiDart, level: 88, levelTextKey: 'skills.proficient', color: '#6366f1' },

    // Frontend
    { name: 'React.js', category: 'frontend', icon: SiReact, level: 75, levelTextKey: 'skills.intermediate', color: '#22d3ee' },
    { name: 'JavaScript', category: 'frontend', icon: SiJavascript, level: 80, levelTextKey: 'skills.proficient', color: '#facc15' },
    { name: 'HTML5', category: 'frontend', icon: SiHtml5, level: 92, levelTextKey: 'skills.proficient', color: '#f97316' },
    { name: 'CSS3', category: 'frontend', icon: Code2, level: 88, levelTextKey: 'skills.proficient', color: '#3b82f6' },

    // Programming
    { name: 'C++', category: 'programming', icon: Terminal, level: 75, levelTextKey: 'skills.intermediate', color: '#0284c7' },
    { name: 'C#', category: 'programming', icon: Code2, level: 70, levelTextKey: 'skills.intermediate', color: '#a855f7' },
    { name: 'SQL', category: 'programming', icon: SiMysql, level: 82, levelTextKey: 'skills.proficient', color: '#0284c7' },

    // Concepts
    { name: 'Object-Oriented Programming (OOP)', category: 'concepts', icon: Layers, level: 90, levelTextKey: 'skills.proficient', color: '#818cf8' },
    { name: 'Database Design', category: 'concepts', icon: Database, level: 85, levelTextKey: 'skills.proficient', color: '#38bdf8' },
    { name: 'REST APIs', category: 'concepts', icon: ShieldCheck, level: 85, levelTextKey: 'skills.proficient', color: '#c084fc' },
    { name: 'Responsive UI Design', category: 'concepts', icon: Layers, level: 92, levelTextKey: 'skills.proficient', color: '#f472b6' },

    // Tools
    { name: 'Git', category: 'tools', icon: SiGit, level: 85, levelTextKey: 'skills.proficient', color: '#f97316' },
    { name: 'GitHub', category: 'tools', icon: SiGithub, level: 88, levelTextKey: 'skills.proficient', color: '#e2e8f0' },
    { name: 'VS Code', category: 'tools', icon: Code2, level: 90, levelTextKey: 'skills.proficient', color: '#38bdf8' },
    { name: 'Android Studio', category: 'tools', icon: SiAndroidstudio, level: 82, levelTextKey: 'skills.proficient', color: '#4ade80' },
    { name: 'Firebase', category: 'tools', icon: SiFirebase, level: 85, levelTextKey: 'skills.proficient', color: '#f59e0b' },
  ];

  const categories = [
    { key: 'all', labelKey: 'skills.all' },
    { key: 'mobile', labelKey: 'skills.mobile' },
    { key: 'frontend', labelKey: 'skills.frontend' },
    { key: 'programming', labelKey: 'skills.programming' },
    { key: 'concepts', labelKey: 'skills.concepts' },
    { key: 'tools', labelKey: 'skills.tools' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsList 
    : skillsList.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Wrench className="w-4 h-4" />
            <span>{t('skills.title')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {t('skills.subtitle')}
          </motion.h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeTab === cat.key
                    ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={skill.name}
                  className="glass-card glass-card-hover p-6 rounded-2xl relative overflow-hidden group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-900 border border-slate-800 text-2xl group-hover:scale-110 transition-transform"
                      style={{ color: skill.color }}
                    >
                      <Icon />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-800/80 text-[10px] font-bold text-slate-300 border border-slate-700">
                      {t(skill.levelTextKey)}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {skill.name}
                  </h3>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
