import { jobListings, messages } from '@/app/data';
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
import Image from 'next/image';

export default function Page() {
  return (
    <div className='flex flex-1 flex-col gap-4 p-4 pt-0'>
      <div className='grid auto-rows-min gap-4 md:grid-cols-2'>
        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Applied Giggs</h2>
          <Table>
            <TableCaption className='hidden'>
              A list of applied Giggs.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Gigg Title</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {jobListings
                .filter((job) => job.applied)
                .map((job) => (
                  <TableRow key={job.id}>
                    <TableCell>
                      <p className='my-2'>{job.name}</p>
                    </TableCell>
                    <TableCell>{job.company}</TableCell>
                    <TableCell
                      className={`font-bold text-white text-center ${
                        job.status === 'applied'
                          ? 'bg-green-400'
                          : job.status === 'received'
                          ? 'bg-orange-400'
                          : job.status === 'proposal'
                          ? 'bg-purple-400'
                          : job.status === 'rejected'
                          ? 'bg-red-400'
                          : ''
                      }`}
                    >
                      {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <div className='aspect-video rounded-xl bg-muted/50 p-2'>
          <h2 className='text-xl mb-4'>Messages</h2>
          <Table>
            <TableCaption className='hidden'>
              A list of applied Giggs.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Message</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {messages.map((message) => (
                <TableRow key={message.id}>
                  <TableCell className='h-[100%] flex gap-2 items-center'>
                    <Image
                      src={message.avatar}
                      alt={message.name}
                      width={50}
                      height={50}
                      className='h-[50px] rounded-full my-2'
                    />
                    <div className='flex flex-col'>
                      <p className='font-bold'>{message.name}</p>
                      <p>{message.company}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p>{message.message}</p>
                    <p>{message.time}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className='min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min p-2'>
        <h2 className='text-xl mb-4'>Available Gigs</h2>
        <Table>
          <TableCaption className='hidden'>
            A list of available Giggs.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Gigg Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Skills</TableHead>
              <TableHead className='text-right w-[150px]'>Apply</TableHead>
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
