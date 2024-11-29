import Navbar from '@/app/components/Navbar'; 
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Home() {

  const user = await currentUser();
  // const { userId } = await auth();

  // console.log(userId);
  
  return (
    <div className="w-full">
      <Navbar />
      {user && user?.firstName}
    </div>
  );
}
