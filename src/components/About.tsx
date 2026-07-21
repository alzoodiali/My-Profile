import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Languages, Target, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useTranslation();

  const infoCards = [
    {
      icon: GraduationCap,
      titleKey: 'about.educationTitle',
      valueKey: 'about.educationValue',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
    },
    {
      icon: Languages,
      titleKey: 'about.englishLevelTitle',
      valueKey: 'about.englishLevelValue',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
    {
      icon: Target,
      titleKey: 'about.focusTitle',
      valueKey: 'about.focusValue',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
    {
      icon: MapPin,
      titleKey: 'about.locationTitle',
      valueKey: 'about.locationValue',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <UserCheck className="w-4 h-4" />
            <span>{t('about.title')}</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {t('about.subtitle')}
          </motion.h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Biography Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Sparkles className="w-6 h-6 text-sky-400" />
              <span>Ali Al-Zoodi</span>
            </h3>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {t('about.bio')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Modern Responsive UI</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">Flutter & Dart Specialist</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">React.js Web Development</span>
              </div>
              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs font-medium text-slate-200">OOP & Database Architecture</span>
              </div>
            </div>
          </motion.div>

          {/* Metadata Cards Column */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {infoCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`p-6 rounded-2xl bg-slate-900/80 border ${card.border} backdrop-blur-lg hover:scale-[1.03] transition-transform`}
                >
                  <div className={`w-12 h-12 rounded-xl ${card.bg} ${card.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {t(card.titleKey)}
                  </h4>
                  <p className="text-sm font-bold text-white">
                    {t(card.valueKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
