import React from 'react';
import {
   ExternalLink,
   Github,
   ArrowLeft,
   AlertTriangle,
   Lightbulb,
   Globe,
   CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// dummy data fallback (যদি কোনো ফিল্ড ডাটাতে মিসিং থাকে তার জন্য)
import projects from '@/data/project.json';

export default async function ProjectDetailsPage({ params }) {
   const { id } = await params;
   const project = projects.find((p) => p.id === Number(id)) || {};

   return (
      <section className="min-h-screen bg-[#030712] text-slate-100 py-10 md:py-14 lg:py-20 px-4 sm:px-6 max-w-7xl mx-auto selection:bg-amber-500 selection:text-slate-950">
         {/* Back Button */}
         <div className="mb-8">
            <Link
               href="/#projects"
               className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-amber-500 transition-colors group"
            >
               <ArrowLeft
                  size={16}
                  className="transform group-hover:-translate-x-1 transition-transform"
               />
               Back to Projects
            </Link>
         </div>

         {/* ---------------- Main Split Section (Image on Left, Content on Right) ---------------- */}
         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12">
            {/* Left Side: Project Mockup / Image (lg screen এ শুধু sticky হবে, ছোট স্ক্রিনে normal) */}
            <div className="lg:col-span-7 w-full lg:sticky lg:top-6">
               <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-[#0b1329]/40 shadow-2xl p-2.5">
                  <Image
                     src={
                        project.image ||
                        'https://images.unsplash.com/photo-1555066931-4365d14bab8c'
                     }
                     alt={project.title || 'Project Banner'}
                     fill
                     className="object-cover object-top rounded-xl p-1"
                     priority
                  />
               </div>
            </div>

            {/* Right Side: Title, Desc, Inline Tags, Features, Links */}
            <div className="lg:col-span-5 space-y-6">
               <div>
                  <span className="text-[10px] bg-amber-500/10 text-amber-500 px-2.5 py-1 rounded-full uppercase tracking-widest font-bold border border-amber-500/20">
                     {project.type || 'Full Stack Project'}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-amber-500 mt-3 tracking-tight">
                     {project.title || 'Project Name'}
                  </h1>
               </div>

               {/* Brief Description */}
               <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {project.description ||
                     'Project description goes here. Provide deep insights into what problems this app solves and how it works.'}
               </p>

               {/* Technology Stack (Inline Tags) */}
               <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags?.map((tech, index) => (
                     <span
                        key={index}
                        className="text-xs bg-[#111827]/50 border border-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg font-medium shadow-sm"
                     >
                        {tech}
                     </span>
                  )) ||
                     [
                        'React.js',
                        'TailwindCSS',
                        'TypeScript',
                        'Shadcn UI',
                        'MongoDB',
                        'Mongoose',
                        'Express.js',
                     ].map((tech, index) => (
                        <span
                           key={index}
                           className="text-xs bg-[#111827]/50 border border-slate-800/80 text-slate-300 px-3 py-1.5 rounded-lg font-medium"
                        >
                           {tech}
                        </span>
                     ))}
               </div>

               {/* Key Features (Bullet Points) */}
               <div className="border-t border-slate-800/60 pt-5">
                  <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-3">
                     Key Features
                  </h3>
                  <ul className="space-y-2.5 text-slate-300 text-sm">
                     {project.features?.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                           <CheckCircle2
                              className="text-amber-500 shrink-0 mt-0.5"
                              size={16}
                           />
                           <span>{feature}</span>
                        </li>
                     )) ||
                        [
                           'Secure User Authentication & Dynamic Dashboards',
                           'Interactive UI built with Tailwind CSS & Framer Motion',
                           'Robust CRUD operations with MongoDB backend',
                        ].map((f, i) => (
                           <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle2
                                 className="text-amber-500 shrink-0 mt-0.5"
                                 size={16}
                              />
                              <span>{f}</span>
                           </li>
                        ))}
                  </ul>
               </div>

               {/* Action Buttons */}
               <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-800/60">
                  <a
                     href={project.githubClient || '#'}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 text-slate-200 hover:border-amber-500/50 hover:text-amber-500 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-lg"
                  >
                     <Github size={16} /> Client Repo
                  </a>

                  <a
                     href={project.liveLink || '#'}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="flex-1 flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-lg shadow-amber-500/10"
                  >
                     <Globe size={16} /> Live Demo <ExternalLink size={12} />
                  </a>
               </div>
            </div>
         </div>

         {/* ---------------- Bottom Grid Section (Challenges & Future Plans) ---------------- */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-slate-800/60">
            {/* Challenges Faced Section */}
            <div className="bg-[#0b1329]/30 border border-slate-800/60 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-red-500/20 transition-all">
               <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2.5 pb-2 border-b border-slate-800/60">
                  <AlertTriangle className="text-red-400" size={18} />{' '}
                  Challenges Faced
               </h2>
               <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {project.challenges ||
                     'Detail the technical hurdles you encountered here. For instance, handling race conditions, responsive complexity, optimization issues, or state management bumps.'}
               </p>
            </div>

            {/* Future Improvements & Plans */}
            <div className="bg-[#0b1329]/30 border border-slate-800/60 rounded-2xl p-6 shadow-xl relative overflow-hidden group hover:border-amber-500/20 transition-all">
               <h2 className="text-lg font-bold text-slate-200 mb-4 flex items-center gap-2.5 pb-2 border-b border-slate-800/60">
                  <Lightbulb className="text-amber-400" size={18} /> Future
                  Plans
               </h2>
               <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                  {project.futurePlans ||
                     'Outline future feature additions or optimizations here. For example, migrating to TypeScript, performance audits, caching implementations, or modernizing structural UI updates.'}
               </p>
            </div>
         </div>
      </section>
   );
}
