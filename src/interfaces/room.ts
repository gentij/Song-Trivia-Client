import { Player } from '@/interfaces/player';

export interface Room {
  id: string;
  creator: string;
  playlist: string | null;
  totalRounds: number;
  currentRound: number;
  players: Player[];
}
