import { useQuery } from '@tanstack/react-query';
import * as React from 'react';

const SERVER_URL = 'http://localhost:4000';

type SongPlayerProps = {
  playlistLink: string;
};

const getPlaylistIdFromLink = (playlistLink: string): string => {
  return playlistLink.replace('https://open.spotify.com/playlist/', '');
};

export default function SongPlayer({ playlistLink }: SongPlayerProps) {
  const [currentTrack, setCurrentTrack] = React.useState(0);
  // this is so we can play audio using audioRef.current.play()
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playlistId = getPlaylistIdFromLink(playlistLink);

  const {
    isLoading,
    error,
    data: playlistTracks,
    refetch: refetchPlaylistTracks,
  } = useQuery({
    queryKey: ['playlistTracks'],
    queryFn: () =>
      fetch(`${SERVER_URL}/playlists/${playlistId}`)
        .then((res) => res.json())
        .then((data) => data.data),
  });

  React.useEffect(() => {
    refetchPlaylistTracks();
  }, [playlistLink, refetchPlaylistTracks]);

  if (isLoading) return <>Loading...</>;

  if (error) return <>Playlist not found</>;

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
