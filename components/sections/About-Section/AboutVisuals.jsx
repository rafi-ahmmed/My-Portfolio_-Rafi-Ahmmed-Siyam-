'use client';
import { Code, Laptop } from 'lucide-react';
import { motion } from 'motion/react';

const AboutVisuals = () => {
   return (
      <div className="relative py-10 w-full max-w-4xl mx-auto">
         {/* Background Glow */}
         <div className="absolute -inset-4 bg-amber-500/5 dark:bg-amber-500/10 blur-3xl rounded-full"></div>

         {/* Grid Container: Pashapashi soman width rakhar jonno */}
         <div className="relative grid grid-cols-2 gap-6 items-stretch">
            {/* Left Box */}
            <motion.div
               animate={{ y: [-50, 50] }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
               }}
               className="bg-gray-800 dark:bg-gray-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-amber-500/50 transition-all shadow-xl"
            >
               <Code className="text-amber-500 mb-2" size={32} />
               <span className="text-2xl md:text-3xl font-bold text-white">
                  MERN
               </span>
               <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                  Specialist
               </span>
            </motion.div>

            {/* Right Box */}
            <motion.div
               animate={{ y: [50, -50] }}
               transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'linear',
               }}
               className="bg-gray-800 dark:bg-gray-900 border border-slate-800 p-8 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 hover:border-amber-500/50 transition-all shadow-xl"
            >
               <Laptop className="text-amber-500 mb-2" size={32} />
               <span className="text-2xl md:text-3xl font-bold text-white">
                  Modern
               </span>
               <span className="text-slate-500 text-sm uppercase tracking-widest font-semibold">
                  Solutions
               </span>
            </motion.div>
         </div>
      </div>
   );
};

export default AboutVisuals;
