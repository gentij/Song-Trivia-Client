import IconButton from '@/components/buttons/IconButton';
import React from 'react';
import { FaUser } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className='w-100vw h-fit rounded-bl-3xl rounded-br-3xl bg-primary-900'>
      <div className='container mx-auto flex h-24 items-center justify-between px-4 py-2'>
        <h1 className='h-full -rotate-90 text-right text-2xl leading-5 text-white'>
          guess <br /> the <br /> song
        </h1>
        <h1 className='text-2xl text-white'>Song Trivia</h1>
        <IconButton variant='light' className='text-3xl' icon={FaUser} />
      </div>
    </header>
  );
};
