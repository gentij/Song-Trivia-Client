import React, { useEffect, useState } from 'react';
import SpotifyPlayer from 'react-spotify-web-playback';

export default function SongPlayer() {
  const [renderPlayer, setRenderPlayer] = useState(false);

  const token =
    'BQAtnbCw4-9_gk0CvSVNIuJGOrok2iY8Xj248PQ7xAO2xgsfzf1XKM7EzioNbjFglapocugWvJHRFGtHAzlp6ja2mngmHe7FmobHaYHlN0h0oah2dItvY-x4rjWMO9dbXHu0fZTret1noGvlYugP4nnZFpVmzRXYEw';
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
