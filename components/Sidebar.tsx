import React from 'react';
import {
  BiHome,
  BiBook,
  BiCog,
  BiFile,
  BiSolidDashboard,
} from 'react-icons/bi';

const sidebarItems = [
  { label: 'Home', icon: <BiHome className='w-5 h-5 text-gray-600' /> },
  { label: 'Blogs', icon: <BiBook className='w-5 h-5 text-gray-600' /> },
  {
    label: 'Dashboards',
    icon: <BiSolidDashboard className='w-5 h-5 text-gray-600' />,
  },
  { label: 'Settings', icon: <BiCog className='w-5 h-5 text-gray-600' /> },
  {
    label: 'Resume Builder',
    icon: <BiFile className='w-5 h-5 text-gray-600' />,
  },
];

const Sidebar = () => {
  return (
    <div className='w-1/6 h-full pt-8 border-e border-slate-100 flex flex-col gap-2 px-4 text-gray-600 text-sm '>
      {sidebarItems.map((item, index) => (
        <div
          key={index}
          className='flex flex-row gap-2 items-center hover:bg-slate-200 p-2 rounded-lg cursor-pointer'
        >
          {item.icon} {item.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
