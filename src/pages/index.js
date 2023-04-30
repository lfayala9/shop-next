import styles from "@/styles/Home.module.css";
import Carousel from "@/containers/Carousel";
import Layout from "@/containers/Layout";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <h1>Home</h1>
    </Layout>
  );
}
