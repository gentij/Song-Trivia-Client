import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import Button from '@/components/buttons/Button';

interface ProfileCardProps {
  name: string;
  avatar: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setAvatar: () => void;
}

const GenreCard: React.FC<ProfileCardProps> = ({
  name,
  avatar,
  setName,
  setAvatar,
}) => {
  return (
    <div className='flex max-w-[300px] flex-col justify-between rounded-xl bg-secondary-500 p-3 text-white'>
      <div className='flex items-center justify-between'>
        <h4 className='text-xl font-bold'>Your profile</h4>
        <AiOutlineClose className='text-2xl' />
      </div>
      <h3 className='my-2 text-sm font-bold'>Nickname</h3>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='my-2 rounded-md border-none bg-amber-400 outline-none'
      />
      <div className='flex items-center justify-between'>
        <h3 className='my-2 text-sm font-bold'>Avatar</h3>
        <Button
          onClick={() => setAvatar()}
          variant='ghost'
          className='text-amber-400'
        >
          Generate new
        </Button>
      </div>
      <img src={avatar} className='my-2' />
      <Button className='self-center text-amber-400' variant='ghost'>
        Save Changes
      </Button>
    </div>
  );
};

export default GenreCard;
