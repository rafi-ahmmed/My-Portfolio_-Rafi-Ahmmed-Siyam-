import { ThemeToggleButton } from '@/components/common/ThemeToggleButton';
import { Button } from '@/components/ui/button';
import { House, TextAlignJustify } from 'lucide-react';
import Link from 'next/link';
import SignoutBtn from '../(authentication)/Login/SignoutBtn';

export const metadata = {
   title: 'Rafi | Dashboard',
   description: 'MERN Stack Developer Portfolio',
};
export default function DashLayout({ children }) {
   return (
      <>
         <div className="drawer min-h-screen lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

            <div className="drawer-content flex flex-col">
               {/* Navbar */}
               <nav className="navbar sticky top-0 z-10 border-b bg-slate-200 dark:bg-slate-900 border-slate-300 dark:border-slate-800">
                  <label
                     htmlFor="my-drawer-4"
                     className="btn btn-square  btn-ghost lg:hidden hover:text-white"
                  >
                     <TextAlignJustify className="text-muted hover:text-white" />
                  </label>
                  <div className="px-4 font-semibold">
                     <Link className="" href={'/'}>
                        <House className="text-muted" />
                     </Link>
                  </div>
                  <div>
                     <ThemeToggleButton />
                  </div>
                  <SignoutBtn />
               </nav>
               {/* Page Content */}
               <div className="flex-1 p-6">{children}</div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
               <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

               <div className="w-64 lg:w-80 min-h-full bg-slate-200 dark:bg-slate-900 border-r border-slate-300 dark:border-slate-800">
                  <nav className="navbar border-b border-slate-300 dark:border-slate-800 flex justify-center items-center">
                     <div className="px-4 font-semibold ">
                        <h1 className="text-center text-2xl text-amber-500">
                           Admin Panel
                        </h1>
                     </div>
                  </nav>
                  <ul className="menu px-4 py-6 w-full space-y-2">
                     <li className="text-base  font-medium rounded-sm text-amber-400 bg-slate-600">
                        <Link href={'/dashboard'}>Home</Link>
                     </li>
                     <li className="text-base font-medium ">
                        <Link href={'/dashboard/AddProject'}>Add Project</Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
