import { Inter, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import NextAuthProvider from './providers/NextAuthProvider';

const inter = Inter({
   subsets: ['latin'],
   variable: '--font-inter',
   display: 'swap',
});

const roboto = Roboto({
   subsets: ['latin'],
   weight: ['400', '500', '700'],
   variable: '--font-roboto',
   display: 'swap',
});

export const metadata = {
   title: 'Rafi | Web Developer',
   description: 'MERN Stack Developer Portfolio',
};

export default function RootLayout({ children, session }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={`${inter.variable} ${roboto.variable} antialiased transition-colors duration-300`}
         >
            <NextAuthProvider session={session}>
               <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
               >
                  <main>{children}</main>
               </ThemeProvider>
            </NextAuthProvider>
         </body>
      </html>
   );
}
