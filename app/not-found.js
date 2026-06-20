import Link from 'next/link';
export const metadata = {
   title: '404 - Page Not Found',
   description: 'The page you are looking for does not exist.',
};

export default function GlobalNotFound() {
   return (
      <section className="flex min-h-screen flex-col items-center justify-center bg-background text-foreground transition-colors duration-300">
         <div className="container flex flex-col items-center justify-center gap-6 px-4 text-center">
            <h1 className="text-9xl font-extrabold tracking-tighter text-muted-foreground/20">
               404
            </h1>

            <div className="space-y-2">
               <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Oops! Page not found
               </h2>
               <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Sorry, the page you are looking for doesn&apos;t exist or has
                  been moved.
               </p>
            </div>

            {/* Action Button */}
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
               <Link
                  href="/"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
               >
                  Go Back Home
               </Link>
            </div>
         </div>
      </section>
   );
}
