'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { Button } from '../../../components/ui/button';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

const SignInBtn = () => {
   const session = useSession();
   console.log(session);
   const router = useRouter();
   console.log(router);
   const handleSocialLogin = (type) => {
      signIn(type, { callbackUrl: '/dashboard' });
   };
   return (
      <div className="mt-8 space-y-4">
         {/* Google Login Button */}
         <Button
            onClick={() => handleSocialLogin('google')}
            className={`w-full py-5 rounded-md bg-blue-400 hover:bg-blue-500 text-black`}
            variant="default"
         >
            <FaGoogle className="size-4 text-white" />
            Continue with Google
         </Button>

         {/* GitHub Login Button */}
         <Button
            onClick={() => handleSocialLogin('github')}
            className={`w-full py-5 rounded-md hover:bg-slate-500`}
            variant="outline"
         >
            <FaGithub className="size-5" />
            Continue with Github
         </Button>
      </div>
   );
};

export default SignInBtn;
