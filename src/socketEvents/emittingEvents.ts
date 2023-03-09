import { Socket } from 'socket.io-client';

export type EMITTING_EVENTS_ENUM = 'createRoom' | 'joinRoom';

const createRoom = (socket: Socket) => socket.emit('createRoom');

const joinRoom = (socket: Socket, roomId: string) =>
  socket.emit('joinRoom', { roomId });

export const emittingEvents = {
  createRoom,
  joinRoom,
};
