import React from 'react';
import { BookOpen, Code, Heart, Laptop } from 'lucide-react';
import ContainerLayout from '../../layout/ContainerLayout';
import AboutVisuals from './AboutVisuals';

export default function About() {
   return (
      <ContainerLayout id="about">
         <div>
            {/* Section Header */}
            <div className="mb-12 text-center md:text-left ">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 ">
                  About <span className="text-amber-500">Me</span>
               </h2>
               <div className="h-1 w-20 bg-amber-500 rounded-full mb-8 md:mx-0 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left Side: Text Content */}
               <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white">
                     I am a{' '}
                     <span className="text-amber-500">
                        MERN Stack Developer
                     </span>{' '}
                     dedicated to crafting modern web applications.
                  </h3>

                  <p className="text-muted text-lg leading-relaxed">
                     I am a MERN Stack Developer dedicated to crafting modern,
                     scalable web applications.
                  </p>

                  <p className="text-muted text-lg leading-relaxed mt-4">
                     I enjoy exploring new technologies and continuously
                     learning better ways to build applications. I love creating
                     projects from scratch and solving real-world problems
                     through clean, efficient, and user-focused solutions.
                  </p>

                  <p className="text-muted text-lg leading-relaxed mt-4">
                     Currently, I am pursuing a Diploma in Computer Science and
                     Technology, where I am strengthening my technical
                     foundation through both academic learning and hands-on
                     projects.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                     {/* Education Info */}
                     <div className="flex items-start gap-4 p-4 bg-gray-800 dark:bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-colors group">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                           <BookOpen size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Education</h4>
                           <p className="text-slate-500 text-sm">
                              Diploma in Computer Science & Technology
                           </p>
                        </div>
                     </div>

                     {/* Passion Info */}
                     <div className="flex items-start gap-4 p-4 bg-gray-800  dark:bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-amber-500/30 transition-colors group">
                        <div className="p-3 bg-amber-500/10 rounded-xl text-amber-500 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                           <Heart size={24} />
                        </div>
                        <div>
                           <h4 className="text-white font-bold">Passion</h4>
                           <p className="text-slate-500 text-sm">
                              Building Interactive & User-Centric Apps
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Right Side: Visual Display */}
               <AboutVisuals />
            </div>
         </div>
      </ContainerLayout>
   );
}
