import React from 'react';
import { motion } from 'framer-motion';
import { SiFlutter } from 'react-icons/si';

interface LoadingScreenProps {
  onFinish?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
    >
      <div className="relative flex flex-col items-center">
        {/* Glow effect behind logo */}
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-50 animate-pulse" />

        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10 flex items-center justify-center p-6 bg-slate-900/80 border border-slate-700/50 rounded-3xl shadow-2xl backdrop-blur-xl mb-6"
        >
          <SiFlutter className="w-16 h-16 text-sky-400 drop-shadow-[0_0_15px_rgba(56,189,248,0.6)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 mb-2"
        >
          Ali Al-Zoodi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-sm text-slate-400 tracking-widest uppercase mb-8"
        >
          Flutter Developer & IT Graduate
        </motion.p>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700/40">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
};
