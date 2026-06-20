'use client';
import { ReactTyped } from 'react-typed';

const AnimatedIntro = () => {
   return (
      <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold mt-4 mb-6 text-foreground leading-tight">
         <span>I&apos;m </span>{' '}
         <ReactTyped
            className="text-amber-500 uppercase"
            strings={['Rafi Ahmmed', 'coder', 'web developer']}
            typeSpeed={60}
            backSpeed={40}
            loop
         />
      </h2>
   );
};

export default AnimatedIntro;
