import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import * as React from 'react';

import { Header } from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import SongPlayer from '@/components/SongPlayer';

export default function HomePage() {
  const client = new QueryClient();
  const [playlistLink, setPlaylistLink] = React.useState('');

  return (
    <Layout>
      <Seo />
      <Header />
      <main className='min-h-main flex flex-col items-center justify-center gap-5 text-3xl'>
        <QueryClientProvider client={client}>
          <SongPlayer playlistLink={playlistLink} />
        </QueryClientProvider>

        <label htmlFor='playlist-link'>Playlist Link:</label>
        <input
          name='playlist-link'
          type='text'
          onChange={(e) => setPlaylistLink(e.target.value)}
        />
      </main>
    </Layout>
  );
}
