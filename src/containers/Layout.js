import Header from "@components/Header";
import Head from "next/head";
import useInitialState from "@hooks/useInitialState";
import AppContext from "@context/AppContext";

const Layout = ({ children, authPage = false }) => {
    const initialState = useInitialState()
    return(
    <div>
        <Head>
            <title>Fake Shop</title>
            <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <AppContext.Provider value={initialState}>
            {!authPage && <Header />}
            {children}
        </AppContext.Provider>
    </div>
    );
  };
  
  export default Layout;