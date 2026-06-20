import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const SkillCard = () => {
   return (
      <Card
         key={index}
         className="relative bg-slate-900/40 border-slate-800 pt-14 pb-8 px-5 group hover:bg-slate-900 transition-all duration-300 border-b-4 hover:border-b-amber-500 shadow-xl w-87.5 sm:w-[45%] lg:w-[23%]"
      >
         {/* Floating Icon Holder */}
         <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full p-3 shadow-2xl z-10 border-4 border-slate-950 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
            <div className="relative w-full h-full">
               <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
               />
            </div>
         </div>

         <CardContent className="text-center">
            <h3 className="text-xl font-bold text-amber-500 mb-3  tracking-wide">
               {skill.name}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
               {skill.desc}
            </p>
         </CardContent>
      </Card>
   );
};

export default SkillCard;
