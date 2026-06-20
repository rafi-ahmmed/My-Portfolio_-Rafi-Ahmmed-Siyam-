'use client';
import { uploadImage } from '@/lib/imageUpload';
import {
   LayoutGrid,
   Type,
   Upload,
   FileText,
   Tag,
   Globe,
   Github,
   Save,
   X,
   Image as ImageIcon,
} from 'lucide-react';

const AddProjectForm = () => {
   const handleAddProject = async (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const title = form.get('project-title');
      const type = form.get('project-type');
      const description = form.get('projectDescription');
      const photo = form.get('thumbnail');
      const technologies = form.get('Technologies').split(',');
      const liveURL = form.get('liveLink');
      const gitHubRepoURL = form.get('githubRepo');
      // console.log(photo);

      // console.table(project);
      const imageUrl = await uploadImage(photo);
      console.log(imageUrl);
      // console.log(technologies);
      const project = {
         title,
         type,
         description,
         photo,
         technologies,
         liveURL,
         gitHubRepoURL,
      };
      // Send the project in db
      // const res = await fetch('/api/AddProject', {
      //    method: 'POST',
      //    headers: {
      //       'Content-type': 'application/json',
      //    },
      //    body: JSON.stringify(project),
      // });

      // console.log(await res.json());
   };
   return (
      <form onSubmit={handleAddProject} className="space-y-8">
         {/* Top Row: Title & Type */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <Type size={16} className="text-blue-500" /> Project Title
               </label>
               <input
                  type="text"
                  name="project-title"
                  placeholder="e.g. CarePoint"
                  className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-white"
               />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <LayoutGrid size={16} className="text-blue-500" /> Project
                  Type
               </label>
               <select
                  name="project-type"
                  className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 appearance-none text-white cursor-pointer"
               >
                  <option>Fullstack Website</option>
                  <option>Frontend Project</option>
                  <option>MERN Stack App</option>
               </select>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Description */}
            <div className=" space-y-2 w-full">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <FileText size={16} className="text-blue-500" /> Description
               </label>
               <textarea
                  name="projectDescription"
                  rows="4"
                  placeholder="Tell us about your project..."
                  className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-all text-white resize-none"
               ></textarea>
            </div>
            {/* Image Upload Area */}
            <div className=" space-y-2 w-full">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <ImageIcon size={16} className="text-blue-500" /> Project
                  Thumbnail
               </label>
               <div className="relative group border-2 border-dashed border-[#1f2937] hover:border-blue-500/50 rounded-2xl p-8 transition-all bg-[#0d1117]/50 flex flex-col items-center justify-center cursor-pointer">
                  <input
                     name="thumbnail"
                     type="file"
                     className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="p-4 bg-blue-600/10 rounded-full mb-3 group-hover:scale-110 transition-transform">
                     <Upload className="text-blue-500" size={32} />
                  </div>
                  <p className="text-sm font-medium text-gray-300">
                     Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                     PNG, JPG or WEBP (Max. 2MB)
                  </p>
               </div>
            </div>
         </div>

         {/* Tags */}
         <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
               <Tag size={16} className="text-blue-500" /> Technologies (Comma
               separated)
            </label>
            <input
               name="Technologies"
               type="text"
               placeholder="React, Node.js, MongoDB..."
               className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-white"
            />
         </div>

         {/* Links Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <Globe size={16} className="text-emerald-500" /> Live URL
               </label>
               <input
                  name="liveLink"
                  type="url"
                  placeholder="https://..."
                  className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-white"
               />
            </div>

            <div className="space-y-2">
               <label className="text-sm font-medium flex items-center gap-2 text-gray-400">
                  <Github size={16} className="text-purple-500" /> Github Repo.
                  URL
               </label>
               <input
                  name="githubRepo"
                  type="url"
                  placeholder="https://..."
                  className="w-full bg-[#0d1117] border border-[#1f2937] rounded-xl px-4 py-3 outline-none focus:border-blue-500 text-white"
               />
            </div>
         </div>

         {/* Save Button */}
         <div className="pt-6">
            <button
               type="submit"
               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20"
            >
               <Save size={20} />
               Save Project to Portfolio
            </button>
         </div>
      </form>
   );
};

export default AddProjectForm;
