'use client'
import { getProviders, signIn } from 'next-auth/react';

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>;
}

const SignInComponent = ({ providers }: Props) => {
  return (
    <div className='flex flex-col justify-center items-center'>
      {
        Object.values(providers!).map((provider) => (
          <div key={provider.id}>
            <button 
              onClick={() => signIn(provider.id, {
                callbackUrl: process.env.VERCEL_URL || 'http://localhost:3000'
              })}
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default SignInComponent
