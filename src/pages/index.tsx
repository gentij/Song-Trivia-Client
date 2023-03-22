import * as React from 'react';
import { BsFillPlayFill } from 'react-icons/bs';

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
        <div className='text-center text-buttercup-500'>
          <h1 className='text-4xl'>
            Challenge your friends in a <br />
            guess-the-song <br />
            competition
          </h1>
          <h4 className='my-4 text-xl font-light opacity-70'>
            Start a game and invite your friends or play <br />
            with strangers
          </h4>
          <BsFillPlayFill className='my-2 mx-auto text-9xl text-mustard-300' />
          <h2 className='text-2xl text-mustard-300'>play now</h2>
        </div>
      </main>
    </Layout>
  );
}
