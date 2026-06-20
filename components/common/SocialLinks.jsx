import { Facebook, Github, Mail } from 'lucide-react';
import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

const SocialLinks = ({py=""}) => {
   return (
      <div className={`flex items-center gap-3.5 justify-center md:justify-start ${py}`}>
         <a
            href="https://github.com/Rafi-Ahmmed-Siyam"
            target="_blank"
            className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
         >
            <Github size={24} />
         </a>

         <a
            href="https://www.linkedin.com/in/rafi-ahmmed-061a1a357/"
            target="_blank"
            className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
         >
            <FaLinkedin className="size-6" />
         </a>

         <a
            href="https://www.facebook.com/rafi.ahmmed.96742"
            target="_blank"
            className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
         >
            <Facebook size={24} />
         </a>

         <a
            href="mailto:rafi.ahmmed920@gmail.com"
            className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:text-amber-500 hover:border-amber-500/50 transition-all"
         >
            <Mail size={24} />
         </a>
      </div>
   );
};

export default SocialLinks;