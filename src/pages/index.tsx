import { Fragment } from 'react';
import Head from 'next/head';
import HomePage from '@/components/page/Home';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Button component</title>
        <meta
          name="description"
          content="devChallenges.io(legacy) - Button component | by h-yoshikawa44"
        />
      </Head>
      <HomePage />
    </Fragment>
  );
};

export default Home;
