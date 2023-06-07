import styles from "@styles/Home.module.css";
import Carousel from "../containers/Carousel";
import Layout from "../containers/Layout";
import Hero from "../containers/Hero";
import ProductList from "../containers/ProductList";
import CheckOrders from "@containers/CheckOrders";
import Parallax from "@containers/Parallax";
import 'react-tooltip/dist/react-tooltip.css';

const image1 = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg"

const image2 = "https://media.istockphoto.com/id/1367140093/photo/blackn-white-night.jpg?s=612x612&w=0&k=20&c=8F9H0q5fz8JDtQg9XDwRxv-QpJa4SzBjh5FgZqIl9f0=";


export default function Home() {
  return (
    <Layout>
      <Carousel/>
      <Parallax image={image1} text="Everything"/>
      <Hero />
      <Parallax image={image2} text="Everyone"/>

      <ProductList/>
    </Layout>
  );
}
