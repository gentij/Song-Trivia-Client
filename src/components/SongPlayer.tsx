import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

type SongPlayerProps = {
  playlistId: string;
};

export default function SongPlayer({ playlistId }: SongPlayerProps) {
  const [currentTrack, setCurrentTrack] = React.useState(0);
  // this is so we can play audio using audioRef.current.play()
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const {
    isLoading,
    error,
    data: playlistTracks,
  } = useQuery({
    queryKey: ['playlistTracks'],
    queryFn: () =>
      fetch(`http://localhost:4000/playlists/${playlistId}`)
        .then((res) => res.json())
        .then((data) => data.data),
  });

  if (isLoading) return <>Loading...</>;

  if (error) return <>An error has occurred</>;

  const handleNextTrack = () => {
    if (currentTrack < playlistTracks.length - 1)
      setCurrentTrack(currentTrack + 1);
  };

  const handlePreviousTrack = () => {
    if (currentTrack > 0) setCurrentTrack(currentTrack - 1);
  };

  return (
    <>
      {playlistTracks.length > 0 && (
        <div>
          <audio
            ref={audioRef}
            src={playlistTracks[currentTrack].preview_url}
            controls={true}
          />
          <button
            className='rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
            onClick={handlePreviousTrack}
          >
            Previous
          </button>
          <button
            className='rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700'
            onClick={handleNextTrack}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}
