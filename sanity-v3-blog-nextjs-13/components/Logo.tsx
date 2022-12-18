import Image from "next/image";

const Logo = (props: any) => {
  const { renderDefault, title } = props;

  return (
    <div className='flex items-center space-x-2'>
      <Image 
        className='rounded-full object-cover'
        height={50}
        width={50}
        src='https://lh3.googleusercontent.com/u/0/drive-viewer/AFDK6gOABAFsX3EUKykaQ883SGzcwZne3TM3DaaAmbBIikiHXFBiE5m0SajF2DLrG1y3GJhZQVFr8uCBCrpXoboCafF4CEJ23g=w1326-h1358'
        alt='logo'
      />
      <>{renderDefault(props)}</>
    </div>
  );
};

export default Logo;