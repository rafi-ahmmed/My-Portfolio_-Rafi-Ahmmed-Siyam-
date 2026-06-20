import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

export default function Loading() {
   return (
      <div className="bg-[#020617] min-h-screen w-full overflow-hidden">
         
         <section className="min-h-[calc(100vh-100px)] w-full flex justify-center items-center px-5 py-10 md:py-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 w-full">
               {/* Left Side: Text Content */}
               <div className="flex-1 text-center md:text-left w-full order-2 md:order-1">
                  <Skeleton className="h-5 w-32 bg-slate-800 mx-auto md:mx-0 mb-4" />
                  <div className="space-y-3 mb-6">
                     <Skeleton className="h-12 md:h-16 w-3/4 mx-auto md:mx-0 bg-slate-800" />
                  </div>
                  <div className="space-y-3 mb-7 max-w-xl mx-auto md:mx-0">
                     <Skeleton className="h-4 w-full bg-slate-900" />
                     <Skeleton className="h-4 w-[90%] bg-slate-900" />
                     <Skeleton className="h-4 w-[60%] bg-slate-900" />
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                     <Skeleton className="h-14 w-40 rounded-xl bg-slate-800" />
                     <Skeleton className="h-14 w-40 rounded-xl bg-slate-900" />
                  </div>
                  <div className="flex gap-4 mt-10 justify-center md:justify-start">
                     {[1, 2, 3].map((i) => (
                        <Skeleton
                           key={i}
                           className="h-10 w-10 rounded-full bg-slate-800"
                        />
                     ))}
                  </div>
               </div>
               
               <div className="flex-1 flex justify-center items-center order-1 md:order-2">
                  <Skeleton className="w-64 h-64 md:w-96 md:h-96 rounded-full border-12 border-slate-900 bg-slate-800" />
               </div>
            </div>
         </section>

         {/* --- 2. ABOUT ME SECTION SKELETON --- */}
         <section className="max-w-7xl mx-auto px-5 py-20">
            <Skeleton className="h-10 w-40 bg-slate-800 mb-12" />
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="flex-1 space-y-6">
                  <Skeleton className="h-8 w-3/4 bg-slate-800" />
                  <div className="space-y-4">
                     <Skeleton className="h-4 w-full bg-slate-900" />
                     <Skeleton className="h-4 w-full bg-slate-900" />
                     <Skeleton className="h-4 w-2/3 bg-slate-900" />
                  </div>
                  <div className="flex gap-4 pt-4">
                     <Skeleton className="h-20 w-44 rounded-2xl bg-slate-900 border border-slate-800" />
                     <Skeleton className="h-20 w-44 rounded-2xl bg-slate-900 border border-slate-800" />
                  </div>
               </div>
               <div className="flex-1 flex justify-center gap-6">
                  <Skeleton className="h-56 w-44 rounded-3xl bg-slate-800 -rotate-6" />
                  <Skeleton className="h-56 w-44 rounded-3xl bg-slate-800 translate-y-8 rotate-6" />
               </div>
            </div>
         </section>

         {/* --- 3. TECHNICAL EXPERTISE SKELETON --- */}
         <section className="max-w-7xl mx-auto px-5 py-20">
            <div className="text-center mb-16">
               <Skeleton className="h-10 w-64 bg-slate-800 mx-auto mb-4" />
               <Skeleton className="h-4 w-96 bg-slate-900 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                  <div
                     key={i}
                     className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 space-y-6"
                  >
                     <Skeleton className="h-8 w-24 mx-auto bg-slate-800" />
                     <div className="grid grid-cols-2 gap-4">
                        {[1, 2, 3, 4].map((j) => (
                           <Skeleton
                              key={j}
                              className="h-16 w-full rounded-xl bg-slate-800/50"
                           />
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* --- 4. PROJECTS SECTION SKELETON --- */}
         <section className="max-w-7xl mx-auto px-5 py-20">
            <div className="text-center mb-16">
               <Skeleton className="h-10 w-72 bg-slate-800 mx-auto mb-4" />
               <Skeleton className="h-4 w-80 bg-slate-900 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {[1, 2, 3].map((i) => (
                  <div
                     key={i}
                     className="rounded-4xl p-5 bg-slate-900/50 border border-slate-800 space-y-5"
                  >
                     <Skeleton className="h-52 w-full rounded-2xl bg-slate-800" />
                     <div className="flex justify-between items-center">
                        <Skeleton className="h-7 w-32 bg-slate-800" />
                        <Skeleton className="h-5 w-24 rounded-full bg-slate-900" />
                     </div>
                     <div className="space-y-2">
                        <Skeleton className="h-4 w-full bg-slate-900" />
                        <Skeleton className="h-4 w-4/5 bg-slate-900" />
                     </div>
                     <div className="flex gap-2 flex-wrap">
                        {[1, 2, 3, 4].map((t) => (
                           <Skeleton
                              key={t}
                              className="h-6 w-16 rounded-md bg-slate-900"
                           />
                        ))}
                     </div>
                     <div className="flex gap-3 pt-2">
                        <Skeleton className="h-11 flex-1 rounded-xl bg-slate-800" />
                        <Skeleton className="h-11 flex-1 rounded-xl bg-slate-900" />
                        <Skeleton className="h-11 flex-1 rounded-xl bg-slate-900" />
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* --- 5. CONTACT SECTION SKELETON --- */}
         <section className="max-w-7xl mx-auto px-5 py-20">
            <div className="text-center mb-16">
               <Skeleton className="h-10 w-56 bg-slate-800 mx-auto mb-4" />
               <Skeleton className="h-4 w-64 bg-slate-900 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {/* Contact Info Box */}
               <div className="p-10 rounded-4xl bg-slate-900/40 border border-slate-800 space-y-8">
                  <Skeleton className="h-8 w-40 bg-slate-800" />
                  <div className="space-y-6">
                     {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                           <Skeleton className="h-12 w-12 rounded-2xl bg-slate-800" />
                           <div className="space-y-2">
                              <Skeleton className="h-3 w-20 bg-slate-900" />
                              <Skeleton className="h-5 w-48 bg-slate-800" />
                           </div>
                        </div>
                     ))}
                  </div>
                  <div className="flex gap-4 pt-6">
                     {[1, 2, 3, 4].map((i) => (
                        <Skeleton
                           key={i}
                           className="h-10 w-10 rounded-xl bg-slate-800"
                        />
                     ))}
                  </div>
               </div>
               {/* Contact Form */}
               <div className="p-10 rounded-4xl bg-slate-900/20 border border-slate-800 space-y-5">
                  <Skeleton className="h-14 w-full rounded-2xl bg-slate-900" />
                  <Skeleton className="h-14 w-full rounded-2xl bg-slate-900" />
                  <Skeleton className="h-40 w-full rounded-2xl bg-slate-900" />
                  <Skeleton className="h-14 w-full rounded-2xl bg-orange-600/20" />
               </div>
            </div>
         </section>
      </div>
   );
}
