import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useSocket } from '@/SocketConnection';

const JOIN_ROOM_URL = 'http://localhost:3000/room/';

interface Player {
  id: string;
  name: string;
  avatar: string;
  points: number;
}

interface Room {
  id: string;
  creator: string;
  playlist: string | null;
  totalRounds: number;
  currentRound: number;
  players: Player[];
}

const Room: React.FC = () => {
  const socket = useSocket();
  const router = useRouter();
  const { id: roomId } = router.query;

  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    socket?.emit('joinRoom', { roomId });

    socket?.on('userJoined', ({ room }: { room: Room }) => {
      setPlayers(room.players);
    });

    return () => {
      socket?.off('userJoined');
    };
  }, [socket, roomId]);

  return (
    <div className='mt-24 flex flex-col items-center justify-center'>
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

        {players.map((player: Player) => (
          <span key={player.id}>Player: {player.id}</span>
        ))}
      </div>
    </div>
  );
};

export default Room;
