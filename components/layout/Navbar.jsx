'use client';
import { Menu, Moon, Sun } from 'lucide-react';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggleButton } from '../common/ThemeToggleButton';
import useValidUser from '@/hooks/useValidUser';

export default function Navbar() {
   const pathname = usePathname();
   console.log(pathname);
   const { admin } = useValidUser();
   console.log('admin', admin);
   return (
      <nav className="bg-background/80 backdrop-blur-md border-b border-slate-300 dark:border-slate-800 w-full">
         <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-semibold text-foreground">
               Port<span className="text-amber-500">folio.</span>
            </Link>

            <div className="hidden md:flex items-center gap-6 text-muted-foreground">
               <Link
                  href="#home"
                  className="hover:text-foreground transition-colors"
               >
                  Home
               </Link>
               <Link
                  href="#about"
                  className="hover:text-foreground transition-colors"
               >
                  About
               </Link>
               <Link
                  href="#skills"
                  className="hover:text-foreground transition-colors"
               >
                  Skills
               </Link>
               <Link
                  href="#projects"
                  className="hover:text-foreground transition-colors"
               >
                  Projects
               </Link>
               <Link
                  href="#contact"
                  className="hover:text-foreground transition-colors"
               >
                  Contact
               </Link>
               {admin && (
                  <Link
                     href="/dashboard"
                     className="hover:text-foreground transition-colors"
                  >
                     Dashboard
                  </Link>
               )}

               <ThemeToggleButton />
            </div>

            {/* Mobile dropdown */}
            <div className="flex items-center gap-2 md:hidden">
               <ThemeToggleButton />

               <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                     <Button
                        variant="ghost"
                        size="icon"
                        className="text-foreground"
                     >
                        <Menu className="size-5" />
                     </Button>
                  </DropdownMenuTrigger>

                  {/* Mobile Menu Content: ডাইনামিক ব্যাকগ্রাউন্ড */}
                  <DropdownMenuContent
                     align="end"
                     className="bg-background text-foreground border-slate-200 dark:border-slate-800"
                  >
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        <Link href="#home">Home</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        <Link href="#about">About</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        <Link href="#skills">Skills</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        <Link href="#projects">Projects</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        <Link href="#contact">Contact</Link>
                     </DropdownMenuItem>
                     <DropdownMenuItem
                        asChild
                        className="focus:bg-amber-500/10"
                     >
                        {admin && (
                           <Link
                              href="/dashboard"
                              className="hover:text-foreground transition-colors"
                           >
                              Dashboard
                           </Link>
                        )}
                     </DropdownMenuItem>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>
         </div>
      </nav>
   );
}
