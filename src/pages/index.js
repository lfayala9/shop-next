import styles from "@/styles/Home.module.css";
import Carousel from "@/containers/Carousel";
import Layout from "@/containers/Layout";
import Hero from "@/containers/Hero";
import ProductList from "@/containers/ProductList";

export default function Home() {
  return (
    <Layout>
      <Carousel />
      <Hero />
      <ProductList />
    </Layout>
  );
}
