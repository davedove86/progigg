import jobListings from '@/app/data';
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Applied Giggs</h2>
          <div className='flex flex-col gap-6'>
            {jobListings
              .filter((job) => job.applied)
              .map((job) => (
                <div key={job.id} className='flex justify-between'>
                  <p>{job.name}</p>
                  {/* TODO add dynamic colors for the pills depending on status */}
                  <span className='bg-green-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                    {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                  </span>
                </div>
              ))}
          </div>
        </div>

        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Messages</h2>
        </div>
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-2'>
        <h2 className='text-xl mb-4'>Available Gigs</h2>
        <Table>
          <TableCaption>A list of available Giggs.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Gigg Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead className='text-right w-[150px]'>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobListings
              .filter((job) => !job.applied)
              .map((job) => (
                <TableRow key={job.id}>
                  <TableCell className='font-medium'>{job.name}</TableCell>
                  <TableCell>{job.company}</TableCell>
                  <TableCell>{job.skills.join(', ')}</TableCell>
                  <TableCell className='text-right'>
                    <Button className='bg-blue-600 rounded-md text-xs text-white font-bold py-1 px-2'>
                      Apply for Gigg
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
