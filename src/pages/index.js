import styles from "@/styles/Home.module.css";
import Carousel from "@/containers/Carousel";
import Layout from "@/containers/Layout";
import Hero from "@/containers/Hero";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Hero />
    </Layout>
  );
}
