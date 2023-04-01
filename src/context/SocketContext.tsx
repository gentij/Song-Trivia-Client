import { createContext } from 'react';
import { Socket } from 'socket.io-client';

import { Room } from '@/interfaces/room';
import { emittingEvents } from '@/socketEvents/emittingEvents';

export interface SocketContextType {
  socket: Socket | null;
  room: Room | null;
  setRoom: React.Dispatch<React.SetStateAction<Room | null>>;
  emittingEvents: typeof emittingEvents;
}

const AuthContextValues: SocketContextType = {
  socket: {} as Socket,
  room: null,
  setRoom: () => null,
  emittingEvents,
};

export const SocketContext =
  createContext<SocketContextType>(AuthContextValues);
