import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useSocket } from '@/context/useSocket';

const JOIN_ROOM_URL = 'http://localhost:3000/room/';

const Room: React.FC = () => {
  const { socket, room, emittingEvents } = useSocket();
  const router = useRouter();
  const { id: roomId } = router.query;

  useEffect(() => {
    if (socket) {
      // Dont emit joinRoom if room was just created
      if (room === null) emittingEvents.joinRoom(socket!, roomId as string);

      return () => {
        socket?.off('userJoined');
      };
    }
  }, [socket, roomId, emittingEvents, room]);

  return (
    <div className='mt-24 flex flex-col items-center justify-center text-white'>
      <div className='flex flex-row gap-5'>
        <span className='text-3xl font-black'>room: </span>
        <span className='text-3xl font-medium'>{roomId}</span>
      </div>
      <div className='mt-3 flex w-full justify-start gap-5 text-xl font-medium'>
        <span className='font-bold'>
          Send this link to your friends to invite them:{' '}
        </span>
        <span>{`${JOIN_ROOM_URL}${roomId}`}</span>
      </div>
      <div className='flex flex-col gap-2 text-xl'>
        <span className='text-center'>Players</span>

        {room?.players.map((player) => (
          <span key={player.id}>Player: {player.id}</span>
        ))}
      </div>
    </div>
  );
};

export default Room;
