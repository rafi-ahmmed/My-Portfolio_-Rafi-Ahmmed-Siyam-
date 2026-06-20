import React from 'react';
import { Code2, Server, Wrench } from 'lucide-react';
import Image from 'next/image';
import ContainerLayout from '@/components/layout/ContainerLayout';


const skillGroups = [
   {
      title: 'frontend',

      skills: [
         { name: 'HTML', url: 'https://i.ibb.co.com/3m8HYVhz/html-5.png' },
         { name: 'CSS', url: 'https://i.ibb.co.com/PZXj68h5/css-3.png' },
         { name: 'JavaScript', url: 'https://i.ibb.co.com/Xx2Hgv4Z/js.png' },
         {
            name: 'React.js',
            url: 'https://i.ibb.co.com/b5J9BdF8/react-JS.png',
         },
         {
            name: 'Next.js',
            url: 'https://i.ibb.co.com/vx4g4nPC/icons8-nextjs-100.png',
         },
      ],
   },
   {
      title: 'backend',

      skills: [
         { name: 'Node.js', url: 'https://i.ibb.co.com/qYPZYsLJ/node-js.png' },
         {
            name: 'Express.js',
            url: 'https://i.ibb.co.com/bRQ08t6M/icons8-express-js-100.png',
         },
         {
            name: 'Firebase',
            url: 'https://i.ibb.co.com/yFmpBymN/icons8-firebase-144.png',
         },
         {
            name: 'MongoDB',
            url: 'https://i.ibb.co.com/wF0qmfR5/icons8-mongodb-96.png',
         },
      ],
   },
   {
      title: 'tools',
      skills: [
         {
            name: 'Git',
            url: 'https://i.ibb.co.com/Vc2tMrx3/icons8-git-144.png',
         },
         {
            name: 'GitHub',
            url: 'https://i.ibb.co.com/yFZnTq3C/icons8-github-120.png',
         },
         {
            name: 'Vercel',
            url: 'https://i.ibb.co.com/xqqn73Cs/icons8-vercel-100.png',
         },
      ],
   },
];

export default function Skills() {
   return (
      <ContainerLayout id="skills">
         {/* Heading section center kora hoyeche */}
         <div className="mb-12 flex flex-col items-center justify-center text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
               Technical <span className="text-amber-500">Expertise</span>
            </h2>
            <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
            <p className="text-muted max-w-2xl leading-relaxed text-base md:text-lg">
               I have demonstrated expertise in the following tools and
               frameworks of modern web technology to build responsive and
               scalable web applications.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => (
               <div
                  key={index}
                  className="bg-gray-900 border border-slate-800 rounded-2xl p-5 flex flex-col items-center shadow-lg transition-transform hover:scale-[1.01]"
               >
                  <div className="flex flex-col items-center mb-6">
                     <div className="p-2 bg-slate-800 rounded-lg mb-2">
                        {group?.title === 'frontend' && (
                           <Code2 className="w-6 h-6 text-white" />
                        )}
                        {group?.title === 'backend' && (
                           <Server className="w-6 h-6 text-white" />
                        )}
                        {group?.title === 'tools' && (
                           <Wrench className="w-6 h-6 text-white" />
                        )}
                     </div>
                     <h3 className="text-white font-bold tracking-wide uppercase text-xs opacity-80">
                        {group.title}
                     </h3>
                  </div>

                  {/* justify-center class-ti ekhane add kora hoyeche */}
                  <div className="grid grid-cols-3 gap-3 w-full justify-center">
                     {group.skills.map((skill, idx) => (
                        <div
                           key={idx}
                           className="bg-gray-800/40 border border-slate-800/50 p-2 rounded-xl flex flex-col items-center justify-center gap-2 hover:bg-slate-800 transition-all group"
                        >
                           <div className="w-10 h-10 flex items-center justify-center relative">
                              {skill.url ? (
                                 <Image
                                    width={32}
                                    height={32}
                                    src={skill.url}
                                    alt={skill.name}
                                    className="w-8 h-8 object-contain group-hover:scale-110 transition-transform"
                                 />
                              ) : (
                                 <div className="w-8 h-8 bg-slate-700 rounded animate-pulse"></div>
                              )}
                           </div>
                           <span className="text-[10px] md:text-[11px] text-slate-400 font-medium text-center group-hover:text-white transition-colors">
                              {skill.name}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            ))}
         </div>
      </ContainerLayout>
   );
}
