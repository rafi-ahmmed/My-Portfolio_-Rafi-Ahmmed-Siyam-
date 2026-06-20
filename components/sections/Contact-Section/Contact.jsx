import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialLinks from '@/components/common/SocialLinks';
import ContainerLayout from '@/components/layout/ContainerLayout';

export default function Contact() {
   return (
      <ContainerLayout id="contact">
         <div className="max-w-6xl mx-auto">
            {/* Section Heading */}
            <div className="mb-16 flex flex-col items-center justify-center text-center">
               <h2 className="text-3xl md:text-4xl font-bold text-forground mb-4">
                  Get In <span className="text-amber-500">Touch</span>
               </h2>
               <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
               <p className="text-slate-400 max-w-xl">
                  Have a project in mind or just want to say hi? Feel free to
                  reach out! I am always open to discussing new opportunities.
               </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
               {/* Left Side: Contact Information */}
               <div className="space-y-8">
                  <div className="flex flex-col gap-6 border border-slate-300 dark:border-slate-800 text-amber-500 p-5 rounded-2xl">
                     <h2 className="text-2xl font-bold ">Rafi Ahmmed</h2>
                     {/* Email */}
                     <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-all">
                           <Mail size={24} />
                        </div>
                        <div>
                           <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                              Email Me
                           </p>
                           <p className="text-muted font-medium break-all sm:break-words">
                              rafi.ahmmed920@gmail.com
                           </p>
                        </div>
                     </div>

                     {/* Phone */}
                     <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-all">
                           <Phone size={24} />
                        </div>
                        <div>
                           <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                              Call Me
                           </p>
                           <p className="text-muted font-medium">
                              +880 1815 321383
                           </p>
                        </div>
                     </div>

                     {/* Location */}
                     <div className="flex items-center gap-5 group">
                        <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center text-amber-500 group-hover:border-amber-500/50 transition-all">
                           <MapPin size={24} />
                        </div>
                        <div>
                           <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
                              Location
                           </p>
                           <p className="text-muted font-medium">
                              Bogura, Bangladesh
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Social Links in Contact */}
                  <p className="text-muted text-sm ">Follow me on</p>
                  <SocialLinks />
               </div>

               {/* Right Side: Contact Form */}
               <ContactForm />
            </div>
         </div>
      </ContainerLayout>
   );
}
