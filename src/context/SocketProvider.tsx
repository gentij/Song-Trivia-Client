import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import io, { Socket } from 'socket.io-client';

import { SocketContext, SocketContextType } from '@/context/SocketContext';
import { Room } from '@/interfaces/room';
import { emittingEvents } from '@/socketEvents/emittingEvents';
import {
  LISTENING_EVENTS_ENUM,
  listeningEvents,
} from '@/socketEvents/listeningEvents';

const SOCKET_SERVER_URL = 'http://localhost:4000';

interface SocketProviderProps {
  children: React.ReactNode;
}

const joinedRoom = (
  socket: Socket,
  setRoom: React.Dispatch<React.SetStateAction<undefined>>
) => {
  socket.on('userJoined', ({ message, room }) => {
    console.log('message ', message);
    console.log('room ', room);
    setRoom(room);
  });
};

const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const router = useRouter();
  const [room, setRoom] = useState<Room | null>(null);
  const [socketConnection, setSocketConnection] = useState<Socket | null>(null);

  const context: SocketContextType = {
    socket: socketConnection,
    room,
    setRoom,
    emittingEvents,
  };

  useEffect(() => {
    const socket = io(SOCKET_SERVER_URL, {
      transports: ['websocket'],
    });

    socket.on('connect', () => {
      setSocketConnection(socket);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socketConnection) {
      Object.keys(listeningEvents).forEach((event) =>
        listeningEvents[event as LISTENING_EVENTS_ENUM].call(
          this,
          context,
          router
        )
      );
    }
  }, [socketConnection]);

  return (
    <SocketContext.Provider value={context}>{children}</SocketContext.Provider>
  );
};

export { SocketProvider };
