import { useSession } from 'next-auth/react';

export default function useValidUser() {
   const session = useSession();
   // console.log(session);
   const validEmail = [
      'rafi.ahmmed920@gmail.com',
      'rafiahmmed920@gmail.com',
      'rafi220330@gmail.com',
   ];
   const isAdmin = validEmail.includes(session?.data?.user?.email) || false;
   return { admin: isAdmin };
}
