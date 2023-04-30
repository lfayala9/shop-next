import Header from "@/components/Header";

const Layout = ({ children, authPage = false }) => {
    return(
    <div>
        {!authPage && <Header />}
        {children}
    </div>
    );
  };
  
  export default Layout;