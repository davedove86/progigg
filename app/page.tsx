import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='text-center h-lvh flex items-center justify-center'>
      <div className='absolute top-5 right-5'>
        <ModeToggle />
      </div>
      <div className='flex flex-col'>
        <div className='mb-8'>
          <h1 className='text-6xl font-semibold mb-6'>ProGigg</h1>
          <p className='mb-4'>Find a developer for your project</p>
        </div>
        <div className=''>
          <Link
            className='bg-blue-500 text-white font-bold px-4 py-4 rounded-md hover:bg-blue-600'
            href='/dashboard'
          >
            View Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
