'use client';

import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

export default function SongPlayer() {
  const playlistId = '42HZjTRhG1eXWu69c2KsLG';

  const { data: playlistTracks, status } = useQuery({
    queryKey: 'playlist',
    queryFn: () => getPlaylistTracks(playlistId),
  });

  if (status === 'error') {
    return <p>Error fetching data</p>;
  } else if (status === 'loading') {
    return <p>Loading...</p>;
  }

  console.log(playlistTracks);

  // const trackUri = '03yOjwHoOPDlTUg0NRxN6t';

  // const spotifyFrame = useRef<any>(null);

  // useEffect(() => {
  //   console.log(
  //     spotifyFrame?.current?.contentWindow.document.querySelector(
  //       'data-testid="play-pause-button"'
  //     )
  //   );
  // }, [spotifyFrame]);

  return <></>;
}

async function getPlaylistTracks(playlistId: string) {
  return axios
    .get(`http://localhost:4000/playlists/${playlistId}`)
    .then((res) => res.data)
    .then((data) => data.data);
}
