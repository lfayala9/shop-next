import Header from '@components/Header';
import Head from 'next/head';

const Layout = ({ children, authPage = false }) => {
  return (
    <div>
      <Head>
        <title>Fake Shop</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {!authPage && <Header />}
      {children}
    </div>
  );
};

export default Layout;
