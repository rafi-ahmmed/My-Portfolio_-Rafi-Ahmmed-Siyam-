import Link from 'next/link';
export const metadata = {
   title: '404 - Page Not Found',
   description: 'The page you are looking for does not exist.',
};

export default function DashboardNotFound() {
   return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center">
         <h2 className="text-2xl font-bold text-red-500">
            Dashboard Area: 404
         </h2>
         <p className="text-muted-foreground mt-2">
            দুঃখিত, ড্যাশবোর্ডের এই সেকশনটি খুঁজে পাওয়া যায়নি।
         </p>
         <Link
            href="/dashboard"
            className="mt-4 px-4 py-2 bg-[#3B4355] text-white rounded-md"
         >
            Back to Dashboard Home
         </Link>
      </div>
   );
}