import { unstable_getServerSession } from 'next-auth';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

const Header = async () => {
  const session = await unstable_getServerSession();

  if (session) {
    return (
      <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
        <div className='flex space-x-2'>
          <Image 
            src={session.user?.image!}
            alt='Profile Picture'
            height={10}
            width={50}
            className='rounded-full mx-2 object-contain'
          />
          <div>
            <p className='text-blue-400'>Logged in as:</p>
            <p className='font-bold text-large'>{session.user?.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    )
  }

  return (
    <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
      <div className='flex flex-col items-center space-y-5'>
        <div className='flex space-x-2 items-center'>
          <Image
            src='https://links.papareact.com/jne'
            alt='logo'
            height={10}
            width={50}
          />
          <p className='text-blue-400'>Welcome to Meta Messenger</p>
        </div>
      </div>
    </header>
  );
};

export default Header;