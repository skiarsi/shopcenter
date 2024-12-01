import Navbar from '@/app/components/Navbar'; 
import { auth, currentUser } from '@clerk/nextjs/server';
import { addauthuser } from './lib/Authusercheck';


export default async function Home() {

  const user = await currentUser();
  
  // check if user is online
  // add it on user table if not exist
  user && addauthuser(user.id);

  return (
    <div className="w-full">
      <div className="w-full flex flex-col">
        <Navbar />
        <div className="w-full">
          &nbsp;
        </div>
      </div>

    </div>
  );
}
