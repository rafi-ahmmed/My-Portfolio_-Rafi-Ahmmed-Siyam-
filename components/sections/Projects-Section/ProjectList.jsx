import dbConnect from '@/lib/db_connect';
import React from 'react';
import ProjectCard from './ProjectCard';

export default async function ProjectList({ projects }) {
   
   return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
         ))}
      </div>
   );
}
