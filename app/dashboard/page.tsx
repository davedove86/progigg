export default function Page() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Applied Giggs</h2>
          <ul className='flex flex-col gap-6'>
            <div className='flex justify-between'>
              <li>Front End Developer</li>
              <span className='bg-green-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                Recieved
              </span>
            </div>
            <div className='flex justify-between'>
              <li>Webflow Developer</li>
              <span className='bg-orange-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                Sent
              </span>
            </div>
            <div className='flex justify-between'>
              <li>Back End Developer</li>
              <span className='bg-purple-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                In Review
              </span>
            </div>
            <div className='flex justify-between'>
              <li>Front End Developer</li>
              <span className='bg-green-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                Recieved
              </span>
            </div>
            <div className='flex justify-between'>
              <li>Front End Developer</li>
              <span className='bg-green-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                Recieved
              </span>
            </div>
          </ul>
        </div>

        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Messages</h2>
        </div>
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-2'>
        <h2 className='text-xl mb-4'>Available Gigs</h2>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
          {/* Headings */}
          <div className='font-bold'>Gigg Title</div>
          <div className='font-bold'>Company</div>
          <div className='font-bold'>Skills</div>
          <div className='font-bold'>Status</div>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
          {/* list items */}
          <p>Front End Developer</p>
          <p>Google</p>
          <p>React, TypeScript</p>
          <button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
            Apply for Gigg
          </button>
        </div>
      </div>
    </div>
  );
}
