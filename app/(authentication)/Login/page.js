import SignInBtn from '@/app/(authentication)/Login/SignInBtn';
import Link from 'next/link';
import { RxCross2 } from 'react-icons/rx';
export default function Login() {
   return (
      <div>
         <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <div className="w-full max-w-md space-y-8 rounded-xl border border-border bg-card px-9 py-8 shadow-2xl">
               <div className="flex justify-end">
                  <Link className="btn btn-circle btn-sm " href={'/'}>
                     <RxCross2 className='text-lg' />
                  </Link>
               </div>
               <div className="text-center">
                  <h2 className="text-4xl font-extrabold tracking-tight text-foreground">
                     Hello, <span className="text-amber-400">Welcome</span>
                  </h2>
                  <p className="mt-3 text-muted-foreground">
                     Sign in to your account to continue
                  </p>
               </div>

               <SignInBtn />

               <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Don&apos;t have an account? Contact the admin.</p>
               </div>
            </div>
         </div>
      </div>
   );
}
