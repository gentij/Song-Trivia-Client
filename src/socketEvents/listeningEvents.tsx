import { NextRouter } from 'next/router';

import { SocketContextType } from '@/context/SocketContext';

export type LISTENING_EVENTS_ENUM = 'userJoined';

const userJoined = (
  { socket, setRoom }: SocketContextType,
  router: NextRouter
) => {
  socket?.on('userJoined', ({ message, room }) => {
    console.log('message ', message);
    console.log('room ', room);
    setRoom(room);

    const roomLink = `/room/${room.id}`;

    if (router.pathname !== roomLink) router.push(roomLink);
  });
};
export const listeningEvents = {
  userJoined,
};
