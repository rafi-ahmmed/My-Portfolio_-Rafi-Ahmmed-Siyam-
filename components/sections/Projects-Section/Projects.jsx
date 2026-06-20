import { Suspense } from 'react';
import ContainerLayout from '../../layout/ContainerLayout';
import ProjectList from './ProjectList';

// const projects = [
//    {
//       title: 'Digital Wallet',
//       description:
//          'High-performance Full Stack digital wallet built with React/TypeScript, featuring secure operations and a sleek UI.',
//       image: 'https://i.ibb.co.com/rRzbt9DW/mustang-4250-1024x576.jpg',
//       type: 'Full Stack Project',
//       tags: [
//          'React.js',
//          'TailwindCSS',
//          'TypeScript',
//          'Shadcn UI',
//          'MongoDB',
//          'Mongoose',
//          'Express.js',
//       ],
//       clientLink: '#',
//       serverLink: '#',
//       liveLink: '#',
//    },
//    {
//       title: 'LivingNest',
//       description:
//          'A room rental platform featuring user authentication and separate dashboards for users, members, and admins.',
//       image: 'https://i.ibb.co.com/rRzbt9DW/mustang-4250-1024x576.jpg',
//       type: 'Full Stack Project',
//       tags: ['React.js', 'TailwindCSS', 'Firebase', 'MongoDB', 'Express.js'],
//       clientLink: '#',
//       serverLink: '#',
//       liveLink: '#',
//    },
//    {
//       title: 'CarePoint',
//       description:
//          'CarePoint is a scalable platform for volunteer management, built with React, TailwindCSS, Firebase, Express, and MongoDB!',
//       image: 'https://i.ibb.co.com/PvJw5z0m/packge.jpg',
//       type: 'Fullstack Website',
//       tags: ['React', 'Node.js', 'Express', 'MongoDB'],
//       clientLink: '#',
//       serverLink: '#',
//       liveLink: '#',
//    },
// ];

export default async function Projects() {
   return (
      <ContainerLayout id="projects">
         <div className="">
            {/* Section Heading */}
            <div className="mb-16 flex flex-col items-center justify-center text-center">
               <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  My Creative <span className="text-amber-500">Projects</span>
               </h2>
               <div className="h-1 w-20 bg-amber-500 rounded-full mb-6"></div>
               <p className="text-muted max-w-2xl text-sm md:text-base">
                  A selection of my recent works where I&apos;ve applied my MERN
                  stack skills to solve real-world problems.
               </p>
            </div>

            {/* <Suspense fallback={'Projects Loading'}>
               <ProjectList />
            </Suspense> */}
            <ProjectList />
         </div>
      </ContainerLayout>
   );
}
