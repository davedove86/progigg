'use client';
import { data } from '@/components/app-sidebar';
import { ModeToggle } from '@/components/ModeToggle';
import Image from 'next/image';

export default function Page() {
  const user = data.user;

  return (
    <div className='p-4'>
      <div className='absolute top-5 right-5'>
        <ModeToggle />
      </div>
      <h1 className='text-2xl'>Account</h1>
      <div className='bg-secondary flex flex-col my-6 rounded-sm p-4'>
        <Image
          className='h-16 w-16 rounded-full mb-6'
          src={user.avatar}
          alt={user.name}
          width={100}
          height={100}
        />
        <div className='flex flex-col gap-2'>
          <p>
            <span className='font-bold'>Name: </span>
            {user.name}
          </p>
          <p>
            <span className='font-bold'>Email: </span>
            {user.email}
          </p>
          <p>
            <span className='font-bold'>Skills: </span>
            {user.skills.join(', ')}
          </p>
        </div>
      </div>
    </div>
  );
}
