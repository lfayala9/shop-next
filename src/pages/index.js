import Carousel from "../containers/Carousel";
import Layout from "../containers/Layout";
import Hero from "../containers/Hero";
import ProductList from "../containers/ProductList";
import Parallax from "@containers/Parallax";
import 'react-tooltip/dist/react-tooltip.css';

const image1 = "https://images.unsplash.com/photo-1608329997339-4278cee1d785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwYW5kJTIwd2hpdGUlMjBidWlsZGluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"

const image2 = "https://media.istockphoto.com/id/1367140093/photo/blackn-white-night.jpg?s=612x612&w=0&k=20&c=8F9H0q5fz8JDtQg9XDwRxv-QpJa4SzBjh5FgZqIl9f0=";


export default function Home() {
  // const router = useRouter()
  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   if(token){
  //     router.push('/login')
  //   }else{
  //     return (
  //       <Layout>
  //         <Carousel/>
  //         <Parallax image={image1} text="Everything"/>
  //         <Hero />
  //         <Parallax image={image2} text="Everyone"/>
    
  //         <ProductList/>
  //       </Layout>
  //     );
  //   }
  // },[])

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
