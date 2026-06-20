'use client';
import { motion } from 'motion/react';
const ContainerLayout = ({ children, bg = '', id = '' }) => {
   return (
      <section id={id} className={`${bg} py-10 md:py-14 lg:py-20  px-6 `}>
         <motion.div
            className="max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
               once: true,
               amount: 0.1,
            }}
            transition={{
               duration: 0.8,
               ease: 'easeOut',
            }}
         >
            {children}
         </motion.div>
      </section>
   );
};

export default ContainerLayout;
