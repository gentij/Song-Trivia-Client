import * as React from 'react';

import { CreateJoinRoom } from '@/components/CreateJoinRoom/CreateJoinRoom';
import { Header } from '@/components/header/Header';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <Header />
      <main className='min-h-main flex items-center justify-center'>
        <CreateJoinRoom />
      </main>
    </Layout>
  );
}
