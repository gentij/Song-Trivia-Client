'use client';

import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';

const playlistId = '42HZjTRhG1eXWu69c2KsLG'; // temp

export default function SongPlayer() {
  const [currentTrack, setCurrentTrack] = useState(0);
  // this is so we can play audio using audioRef.current.play()
  const audioRef = useRef<HTMLAudioElement>(null);

  const { data: playlistTracks, status } = useQuery({
    queryKey: 'playlist',
    queryFn: () => getPlaylistTracks(playlistId),
  });

  if (status === 'error') {
    return <p>Error fetching data</p>;
  } else if (status === 'loading') {
    return <p>Loading...</p>;
  }

  const handleNextTrack = () => {
    if (currentTrack < playlistTracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const handlePreviousTrack = () => {
    if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  return (
    <div>
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
    </div>
  );
}

const getPlaylistTracks = async (playlistId: string) =>
  axios
    .get(`http://localhost:4000/playlists/${playlistId}`)
    .then((res) => res.data)
    .then((data) => data.data);
