import React from 'react';
import { BiSearch, BiUser } from 'react-icons/bi';
import { BsArrowDown, BsBell } from 'react-icons/bs';
import { IoDownload } from 'react-icons/io5';
import { TbMessageChatbot } from 'react-icons/tb';

const Navbar = () => {
  return (
    <div className='flex flex-row w-full  justify-between px-8 py-3 items-center'>
      <div className='text-2xl font-bold text-black font-serif uppercase tracking-widest'>
        Engaze
      </div>
      <div className='flex flex-row gap-4 items-center'>
        <div className='flex flex-row items-center gap-2 text-gray-600 bg-slate-200 w-fit p-1 rounded-lg'>
          <BiSearch className='w-5' />
          <input
            type='text'
            name='search'
            id='searc'
            placeholder='Search...'
            className='w-32 bg-transparent focus:outline-none'
          />
        </div>
        <BsBell className='w-5 h-5 ' />
        <TbMessageChatbot className='w-5 h-5 ' />
        <div className='flex flex-row items-center gap-2 px-2 rounded-md border border-gray-100'>
          <BiUser className='bg-slate-300 rounded-full p-1 w-5 h-5' />
          <div className='font-medium text-slate-300 font-mono rotate-90 text-lg'>{`>`}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
