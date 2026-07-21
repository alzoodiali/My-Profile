import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight, Send } from 'lucide-react';

export const Career: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="career" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden glass-card p-8 sm:p-12 border border-slate-700/80 shadow-2xl bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900"
        >
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-start">
            
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Briefcase className="w-4 h-4" />
                <span>{t('career.title')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
                {t('career.subtitle')}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
                {t('career.description')}
              </p>
            </div>

            {/* CTA Button */}
            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-extrabold text-sm shadow-xl shadow-indigo-500/30 hover:scale-105 transition-all duration-300 group"
              >
                <Send className="w-4 h-4" />
                <span>{t('career.cta')}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
