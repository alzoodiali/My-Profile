import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Sun, Moon, Menu, X, Code2, Send } from 'lucide-react';

interface NavbarProps {
  currentLang: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onLanguageChange,
  isDarkMode,
  onThemeToggle,
}) => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'projects', href: '#projects' },
    { key: 'education', href: '#education' },
    { key: 'career', href: '#career' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-none tracking-tight text-white dark:text-white light-mode:text-slate-900 group-hover:text-sky-400 transition-colors">
                Ali Al-Zoodi
              </span>
              <span className="text-[11px] text-sky-400 font-medium tracking-wider uppercase">
                Flutter Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-sky-400 rounded-lg hover:bg-slate-800/50 transition-all duration-200"
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Action Buttons: Language Toggle, Theme Toggle, Hire Me */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-200 hover:text-sky-400 hover:border-sky-500/50 transition-all duration-200"
              title="Switch Language"
            >
              <Globe className="w-4 h-4 text-sky-400" />
              <span>{currentLang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Dark/Light Mode Toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:text-amber-400 hover:border-amber-400/50 transition-all duration-200"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* Hire Me CTA Button */}
            <button
              onClick={() => handleNavClick('#contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 hover:from-sky-400 hover:to-purple-500 text-white font-semibold text-xs tracking-wide shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-200"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t('nav.hireMe')}</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-xs font-bold text-sky-400"
            >
              {currentLang === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-amber-400"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 hover:text-sky-400"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-950/95 border-b border-slate-800 backdrop-blur-xl px-4 pt-4 pb-6"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="w-full text-start px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-900 rounded-xl transition-all"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <button
                  onClick={() => onLanguageChange(currentLang === 'en' ? 'ar' : 'en')}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-700 text-xs font-semibold text-sky-400"
                >
                  <Globe className="w-4 h-4" />
                  <span>{currentLang === 'en' ? 'العربية' : 'English'}</span>
                </button>
                <button
                  onClick={() => handleNavClick('#contact')}
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold text-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('nav.hireMe')}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
