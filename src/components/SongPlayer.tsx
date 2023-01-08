import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function SongPlayer() {
  const [renderPlayer, setRenderPlayer] = useState(false);

  const token =
    'BQDj7bkaN_RqiG1xMdaPTtS7Udt9W8yPBDYcmmADZrQEnqbSf-1BnF9uFZASyaR_vrJCT9W0DCbyoxs_B-PMBPdl-okBtrZptxSbJtJJLZJj513V_W4';
  const uris = ['spotify:track:5BvGdjGZKbsrtfA05Yg23W'];

  useEffect(() => {
    setRenderPlayer(true);
  }, []);

  return (
    <div>
      <div>SongPlayer</div>
      <iframe
        style={{ borderRadius: '12px' }}
        src='https://open.spotify.com/embed/track/0Tokm27V7U5xUMfxCQk8Nu?utm_source=generator'
        width='100%'
        height='352'
        allowFullScreen={true}
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
        loading='lazy'
      ></iframe>
      {renderPlayer && (
        <SpotifyPlayer syncExternalDevice={false} token={token} uris={uris} />
      )}
    </div>
  );
}
