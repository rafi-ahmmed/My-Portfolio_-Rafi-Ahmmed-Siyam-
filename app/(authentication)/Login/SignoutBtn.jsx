'use client';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';
import React from 'react';

const SignoutBtn = () => {
   return (
      <div className="ml-3">
         <Button className={''} onClick={() => signOut()}>
            <LogOut />
            Logout
         </Button>
      </div>
   );
};

export default SignoutBtn;
