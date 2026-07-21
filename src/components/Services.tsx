import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Layout, Palette, Network, Monitor, Sparkles } from 'lucide-react';
import { SiFlutter } from 'react-icons/si';

export const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: SiFlutter,
      titleKey: 'services.s1Title',
      descKey: 'services.s1Desc',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      border: 'border-sky-500/20',
    },
    {
      icon: Layout,
      titleKey: 'services.s2Title',
      descKey: 'services.s2Desc',
      color: 'text-indigo-400',
      bg: 'bg-indigo-500/10',
      border: 'border-indigo-500/20',
    },
    {
      icon: Palette,
      titleKey: 'services.s3Title',
      descKey: 'services.s3Desc',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
    },
    {
      icon: Network,
      titleKey: 'services.s4Title',
      descKey: 'services.s4Desc',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
    },
    {
      icon: Monitor,
      titleKey: 'services.s5Title',
      descKey: 'services.s5Desc',
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/20',
    },
  ];

  return (
    <section id="services" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t('services.title')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          >
            {t('services.subtitle')}
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card glass-card-hover p-8 rounded-3xl border ${srv.border} flex flex-col justify-between group`}
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl ${srv.bg} ${srv.color} border ${srv.border} flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3 group-hover:text-sky-400 transition-colors">
                    {t(srv.titleKey)}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {t(srv.descKey)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
