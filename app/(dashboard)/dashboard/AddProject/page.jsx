import React from 'react';

import AddProjectForm from './AddProjectForm';
import { LayoutGrid } from 'lucide-react';
const AddProject = () => {
   return (
      <div className=" text-gray-300">
         <div className="max-w-5xl mx-auto rounded-2xl  overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-[#1f2937] flex items-center gap-3 bg-[#111827]">
               <div className="p-2 bg-blue-600/20 rounded-lg">
                  <LayoutGrid className="text-blue-500" size={24} />
               </div>
               <h2 className="text-xl font-bold text-white tracking-tight">
                  Add New Project
               </h2>
            </div>

            <div className='mt-10'>
               <AddProjectForm />
            </div>
         </div>
      </div>
   );
};

export default AddProject;
