import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function HomeLayout({ children }) {
   return (
      <>
         <header className="sticky top-0 z-50">
            <Navbar />
         </header>
         <main>{children}</main>
         <footer>
            <Footer />
         </footer>
      </>
   );
}
