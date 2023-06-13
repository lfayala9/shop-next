import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "@styles/globals.css";
import useInitialState from "@hooks/useInitialState";
import AppContext from "@context/AppContext";
import { useEffect } from "react";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


function App({ Component, pageProps }) {
  
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const initialState = useInitialState()

  
  return (
    <AppContext.Provider value={initialState}>
        <Component {...pageProps} />   
    </AppContext.Provider> 
  );
}

export default App;
