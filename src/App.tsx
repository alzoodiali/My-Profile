import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n/i18n';

import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Career } from './components/Career';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { BackToTop } from './components/BackToTop';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [showCvNotice, setShowCvNotice] = useState<boolean>(false);

  // Initial loading splash screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  // Handle LTR / RTL Document Direction & Font Class Changes
  useEffect(() => {
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;
    i18n.changeLanguage(currentLang);

    if (currentLang === 'ar') {
      document.body.classList.remove('font-poppins');
      document.body.classList.add('font-cairo');
    } else {
      document.body.classList.remove('font-cairo');
      document.body.classList.add('font-poppins');
    }
  }, [currentLang, i18n]);

  // Handle Dark / Light Mode Class Toggle
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  }, [isDarkMode]);

  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setCurrentLang(lang);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDownloadCv = () => {
    setShowCvNotice(true);
    setTimeout(() => setShowCvNotice(false), 4000);
  };

  return (
    <>
      {/* Initial Animated Loading Screen */}
      {isLoading && <LoadingScreen />}

      <div className={`min-h-screen bg-slate-950 text-slate-100 selection:bg-purple-500 selection:text-white transition-colors duration-300 ${
        isDarkMode ? 'dark' : 'light-mode'
      }`}>
        {/* Sticky Glass Navbar */}
        <Navbar
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
          isDarkMode={isDarkMode}
          onThemeToggle={handleThemeToggle}
        />

        {/* CV Download Notification Banner */}
        {showCvNotice && (
          <div className="fixed top-24 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 text-white font-bold text-xs shadow-2xl animate-bounce">
            📄 Ali Al-Zoodi's Resume Downloaded Successfully!
          </div>
        )}

        {/* Main Page Sections */}
        <main>
          <Hero onDownloadCv={handleDownloadCv} />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Career />
          <Services />
          <Contact />
        </main>

        {/* Back-to-top floating button & Footer */}
        <BackToTop />
        <Footer />
      </div>
    </>
  );
};

export default App;
