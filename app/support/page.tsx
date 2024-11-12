import { ModeToggle } from '@/components/ModeToggle';

export default function Page() {
  return (
    <div className='p-4'>
      <div className='absolute top-5 right-5'>
        <ModeToggle />
      </div>
      <h1 className='text-2xl'>Support</h1>
    </div>
  );
}
