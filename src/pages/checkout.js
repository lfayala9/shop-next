import CheckOrders from "@containers/CheckOrders";
import Layout from "@containers/Layout";

const Checkout = () => {
  return (
    <Layout authPage={true}>
        <CheckOrders />
    </Layout>
  );
};

export default Checkout;
