import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className='flex items-center justify-between space-x-2
    font-bold px-10 py-5'
    >
      <div className='flex items-center space-x-2'>
        <Link href='/'>
          <Image 
            className='rounded-full'
            src='https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOABAFsX3EUKykaQ883SGzcwZne3TM3DaaAmbBIikiHXFBiE5m0SajF2DLrG1y3GJhZQVFr8uCBCrpXoboCafF4CEJ23g=w1326-h1358'
            width={50}
            height={50}
            alt='logo'
          />
        </Link>
        <h1>Wetrust global</h1>
      </div>
      <div>
        <Link
          href='/'
          className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full
          text-center'
        >
          Sign up to the Wetrust foundation
        </Link>
      </div>
    </header>
  );
};

export default Header;