import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from 'next/head';

const Layout = ({ children, authPage = false }) => {
  return (
    <div>
      <Head>
        <title>Fake Shop</title>
        <meta name='description' content='this is a dummy store'/>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {!authPage && <Header />}
      {children}
      {!authPage && <Footer />}
    </div>
  );
};

export default Layout;
