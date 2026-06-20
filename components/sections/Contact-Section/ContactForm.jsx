'use client';
import { Send } from 'lucide-react';
import { motion } from 'motion/react';

const ContactForm = () => {
   return (
      <motion.div
         whileTap={{ scale: 1.02 }}
         transition={{
            duration: 0.2,
            ease: 'easeInOut',
         }}
         className="bg-gray-900 border border-slate-800 p-5  md:p-8 lg:p-8 rounded-2xl shadow-xl"
      >
         <form className="space-y-5">
            <input
               type="text"
               placeholder="Your Name"
               className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors w-full"
            />
            <input
               type="email"
               placeholder="Your Email"
               className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors w-full"
            />

            <textarea
               placeholder="Your Message"
               rows="4"
               className="bg-slate-950 border border-slate-800 text-white rounded-xl px-4 py-3 focus:outline-none focus:border-amber-500/50 transition-colors w-full resize-none"
            ></textarea>

            <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all group">
               Send Message
               <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
               />
            </button>
         </form>
      </motion.div>
   );
};

export default ContactForm;
