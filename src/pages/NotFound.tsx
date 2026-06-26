import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#f7f9fb]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-[#0ea5e9]/10 blur-[100px] transform-gpu" />
        <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#38bdf8]/10 blur-[100px] transform-gpu" />
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-8xl md:text-9xl font-bold font-sans text-slate-900 mb-4 tracking-tighter">
          4<span className="text-[#0ea5e9]">0</span>4
        </h1>
        <h2 className="text-2xl md:text-3xl font-sans text-slate-700 mb-6 font-medium">Page Not Found</h2>
        <p className="text-slate-500 max-w-md mx-auto mb-10 text-lg">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#001f2a] hover:bg-[#00384d] text-white rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
