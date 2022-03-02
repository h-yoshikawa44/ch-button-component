import { FC } from 'react';
import Head from 'next/head';
import { css } from '@emotion/react';
import SideBar from '@/components/common/SideBar';
import Footer from '@/components/common/Footer';

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Button component</title>
        <meta
          name="description"
          content="devChallenges.io - Button component | by h-yoshikawa44"
        />
      </Head>
      <div css={container}>
        <SideBar />
        <div>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

const container = css`
  display: flex;
`;

export default Layout;
