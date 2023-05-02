import styles from "@/styles/Home.module.css";
import Carousel from "@/containers/Carousel";
import Layout from "@/containers/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <h1 className="mt-5 pt-5 mb-5 pb-5" id="home">Home</h1>
    </Layout>
  );
}
