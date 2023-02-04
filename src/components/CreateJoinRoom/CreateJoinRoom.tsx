import React from 'react';

import Button from '@/components/buttons/Button';

export const CreateJoinRoom = () => {
  return (
    <div className='max-w-[800px] text-center text-white'>
      <h2 className='text-6xl'>Who's the best?</h2>
      <h4 className='my-6 w-full'>
        Create a game and invite your friends to join you in a wild music quiz
        and challenge them to guess the songs or artists!
      </h4>
      <div>
        <Button>Create Room</Button>
        <input type='text' placeholder='create room' />
      </div>
    </div>
  );
};
