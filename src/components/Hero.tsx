import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, Smartphone, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { SiFlutter, SiReact, SiDart, SiFirebase } from 'react-icons/si';

interface HeroProps {
  onDownloadCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onDownloadCv }) => {
  const { t } = useTranslation();

  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-600/20 via-indigo-600/20 to-purple-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 backdrop-blur-md mb-6 shadow-inner"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {t('hero.badge')}
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4 leading-tight"
            >
              {t('hero.title')}
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-bold text-gradient mb-6"
            >
              {t('hero.subtitle')}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-slate-300 mb-8 max-w-2xl leading-relaxed font-normal"
            >
              {t('hero.description')}
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 w-full sm:w-auto"
            >
              {/* View Projects Button */}
              <a
                href="#projects"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>{t('hero.viewProjects')}</span>
              </a>

              {/* Download CV Button */}
              <button
                onClick={onDownloadCv}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-white font-semibold text-sm shadow-md hover:border-sky-500/50 hover:scale-[1.02] transition-all"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>{t('hero.downloadCv')}</span>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="flex-1 sm:flex-none flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-white font-medium text-sm transition-all"
              >
                <Mail className="w-4 h-4 text-purple-400" />
                <span>{t('hero.contactMe')}</span>
              </a>
            </motion.div>

            {/* Quick Highlights / Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400"
            >
              <span className="font-semibold text-slate-300">{t('hero.techStack')}:</span>
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-sky-400">
                  <SiFlutter className="w-3.5 h-3.5" /> Flutter
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-indigo-400">
                  <SiDart className="w-3.5 h-3.5" /> Dart
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-cyan-400">
                  <SiReact className="w-3.5 h-3.5" /> React.js
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-amber-400">
                  <SiFirebase className="w-3.5 h-3.5" /> Firebase
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Column: Interactive Flutter Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[340px]"
            >
              {/* Glow backdrop */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 rounded-[48px] blur-xl opacity-40 animate-pulse-glow" />

              {/* Mobile Phone Mockup Body */}
              <div className="relative rounded-[44px] bg-slate-950 p-4 border-4 border-slate-800 shadow-2xl overflow-hidden glass-card">
                
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20 flex items-center justify-center">
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Simulated Screen */}
                <div className="rounded-[36px] bg-slate-900/90 pt-8 pb-6 px-4 border border-slate-800 overflow-hidden min-h-[500px] flex flex-col justify-between">
                  
                  {/* Top Screen App Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-400">
                          <SiFlutter className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-white">Ali Portfolio App</p>
                          <p className="text-[10px] text-sky-400">v2.5.0 • Live Preview</p>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
                        Running
                      </span>
                    </div>

                    {/* Animated Mobile Card 1 */}
                    <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 mb-3 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Smart Home IoT
                        </span>
                        <span className="text-[10px] text-indigo-300 font-mono">ESP32 + Firebase</span>
                      </div>
                      <div className="w-full bg-slate-700/50 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-sky-400 to-indigo-500 h-full w-[85%]" />
                      </div>
                    </div>

                    {/* Animated Mobile Card 2 */}
                    <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/60 mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-white flex items-center gap-1.5">
                          <Smartphone className="w-3.5 h-3.5 text-sky-400" /> Cross-Platform UI
                        </span>
                        <span className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Ready
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 line-clamp-2">
                        Clean architecture & responsive UI components for mobile & web.
                      </p>
                    </div>

                    {/* Flutter Code Snippet Widget */}
                    <div className="p-3 rounded-2xl bg-slate-950/90 border border-slate-800 font-mono text-[10px] leading-relaxed text-slate-300">
                      <div className="text-slate-500 mb-1">// Flutter Widget Tree</div>
                      <div><span className="text-sky-400">class</span> <span className="text-amber-300">AliPortfolio</span> <span className="text-sky-400">extends</span> <span className="text-purple-400">StatelessWidget</span> &#123;</div>
                      <div className="pl-3"><span className="text-indigo-400">@override</span></div>
                      <div className="pl-3"><span className="text-sky-400">Widget</span> build(<span className="text-purple-300">BuildContext</span> context) &#123;</div>
                      <div className="pl-6 text-emerald-400">return FlutterDeveloper(ready: true);</div>
                      <div className="pl-3">&#125;</div>
                      <div>&#125;</div>
                    </div>
                  </div>

                  {/* Floating Tech Badges on Phone */}
                  <div className="flex items-center justify-around pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1 text-sky-400 font-semibold">
                      <SiFlutter /> Flutter
                    </span>
                    <span className="flex items-center gap-1 text-purple-400 font-semibold">
                      <Code2 /> Clean Code
                    </span>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
