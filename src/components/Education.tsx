import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Building2, Award, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="education" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <GraduationCap className="w-4 h-4" />
            <span>{t('education.title')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {t('education.subtitle')}
          </motion.h2>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-3xl mx-auto relative">
          
          {/* Vertical Glow Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-600 rounded-full opacity-40" />

          {/* Education Card Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10 glass-card p-8 sm:p-10 rounded-3xl border border-slate-700/60 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {t('education.degree')}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4" />
                    {t('education.university')}
                  </p>
                </div>
              </div>

              {/* Date Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-purple-300">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{t('education.period')}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
              {t('education.description')}
            </p>

            {/* Coursework Chips */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" /> Key Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {(t('education.highlights', { returnObjects: true }) as unknown as string[]).map((item: string, idx: number) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-medium text-slate-200"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
