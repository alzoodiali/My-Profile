import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code2, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 flex items-center justify-center text-white font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <p className="text-base font-bold text-white">Ali Al-Zoodi</p>
              <p className="text-xs text-sky-400">IT Graduate | Flutter Developer</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-xs text-slate-400">
            <p>© {currentYear} Ali Al-Zoodi. {t('footer.rights')}</p>
            <p className="mt-1 text-slate-400 flex items-center justify-center gap-1">
              <span>{t('footer.designedBy')}</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-400">
            <a
              href="https://github.com/AliAlzoodi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:alialzoodi@example.com"
              className="hover:text-sky-400 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
