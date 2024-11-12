'use client';

import * as React from 'react';
import { LifeBuoy, Mails, Handshake, Settings, LayoutGrid } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
// import { NavProjects } from '@/components/nav-projects';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';

export const data = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '/profile.jpg',
    initials: 'JD',
    skills: ['Front End Developer', 'Back End Developer, Webflow Developer'],
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: LayoutGrid,
    },
    {
      title: 'Giggs',
      url: '#',
      icon: Handshake,
      isActive: true,
      items: [
        {
          title: 'All Giggs',
          url: '#',
        },
        {
          title: 'Applied Giggs',
          url: '#',
        },
        {
          title: 'Responses',
          url: '#',
        },
      ],
    },
    {
      title: 'Messages',
      url: '#',
      icon: Mails,
      items: [
        {
          title: 'All Messages',
          url: '#',
        },
        {
          title: 'Sent Messages',
          url: '#',
        },
        {
          title: 'Deleted Messages',
          url: '#',
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Settings',
      url: '/settings',
      icon: Settings,
    },
    {
      title: 'Support',
      url: '/support',
      icon: LifeBuoy,
    },
    // {
    //   title: 'Feedback',
    //   url: '#',
    //   icon: Send,
    // },
  ],
  // projects: [
  //   {
  //     name: 'Design Engineering',
  //     url: '#',
  //     icon: Frame,
  //   },
  //   {
  //     name: 'Sales & Marketing',
  //     url: '#',
  //     icon: PieChart,
  //   },
  //   {
  //     name: 'Travel',
  //     url: '#',
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant='inset' {...props}>
      <SidebarHeader>
        <p className='tex-1xl font-bold'>ProGigg</p>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
        <NavSecondary items={data.navSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
