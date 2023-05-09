import Layout from "@containers/Layout";
import LogInForm from "@containers/LogInForm";

const LogIn = () =>{
    return(
        <Layout authPage={true}>
            <LogInForm />
        </Layout>
    )
}

export default LogIn;