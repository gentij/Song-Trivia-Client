import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function SongPlayer() {
  const [renderPlayer, setRenderPlayer] = useState(false);

  const token =
    'BQAIxQQGkiARafZvEAva9ro5QPYMScoY9vUqP2Jtmvxl6RalDTr6lZInQDnUB_vAesPCXyh4Li2Nxd0QelYAfC7RFZ0DDol8v7h3Fh2aYfD6gdksqW6xqzDKRsnZoiLheriEMo5RzQRAtTCeYRfmLt1m4DmwoOr0Gg';
  const uris = ['spotify:track:5BvGdjGZKbsrtfA05Yg23W'];

  useEffect(() => {
    setRenderPlayer(true);
  }, []);

  return (
    <div>
      <div>SongPlayer</div>
      {renderPlayer && (
        <SpotifyPlayer syncExternalDevice={false} token={token} uris={uris} />
      )}
    </div>
  );
}
