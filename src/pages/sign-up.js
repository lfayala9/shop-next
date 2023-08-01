import Layout from "@containers/Layout";
import SignForm from "@containers/SignForm";

const SignUp = () =>{
    console.log(process.env.NEXT_PUBLIC_API_URL)
    return(
        <Layout authPage={true}>
            <SignForm />
        </Layout>
    )
}

export default SignUp;