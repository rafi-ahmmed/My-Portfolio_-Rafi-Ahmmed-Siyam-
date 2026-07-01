'use client';
import { ExternalLink, Layout, List, Server } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
   return (
      <motion.div
         whileHover={{
            scale: 1.02,
         }}
         transition={{
            duration: 0.1,
            ease: 'easeInOut',
         }}
         className="bg-gray-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col hover:border-amber-500/30 transition-all group "
      >
         {/* Project Image */}
         <Link href={`/projects/${project.id}`}>
            <div className="relative overflow-hidden aspect-video cursor-pointer">
               <Image
                  src={project?.image}
                  alt={project?.title}
                  fill
                  className="object-cover object-top pt-2.5 px-2.5 rounded-t-[20px] "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
               />
            </div>
         </Link>

         {/* Project Content */}
         <div className="p-5 flex flex-col grow">
            <div className="flex justify-between items-start mb-3">
               <h3 className="text-lg font-bold text-amber-500 group-hover:text-amber-400 transition-colors">
                  {project?.title}
               </h3>
               <span className="text-[9px] bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold border border-amber-500/20">
                  {project?.type}
               </span>
            </div>

            <p className="text-slate-400 text-[13px] leading-relaxed mb-5 line-clamp-3">
               {project?.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
               {project?.tags?.map((tag, i) => (
                  <span
                     key={i}
                     className="text-[10px] bg-[#1f2937]/50 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800"
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {/* 3 Buttons in 1 Row */}
            <div className="mt-auto flex items-center gap-2">
               <a
                  href={project?.liveLink}
                  title="Live Demo"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2 rounded-lg transition-all text-[11px]"
               >
                  <ExternalLink size={14} /> Live
               </a>
               <a
                  href={`/projects/${project.id}`}
                  title="Server Code"
                  className="flex-1 flex items-center justify-center gap-1.5 bg-amber-500/5 border border-amber-500/20 text-amber-500 hover:bg-amber-500/10 hover:border-amber-500/40 font-semibold py-2 rounded-lg transition-all text-[11px]"
               >
                  <List size={14} /> Details
               </a>
            </div>
         </div>
      </motion.div>
   );
};

export default ProjectCard;
