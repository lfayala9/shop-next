import Layout from "@containers/Layout";
import SignForm from "@containers/SignForm";

const SignUp = () =>{
    return(
        <Layout authPage={true}>
            <SignForm />
        </Layout>
    )
}

export default SignUp;