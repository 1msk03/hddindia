import Image from 'next/image';
import ImageSlider from './components/home/ImageSlider';
import Slider1 from '../public/slider-bg3.jpg';
import Slider2 from '../public/slider-bg2.jpg';
import Slider3 from '../public/slider-bg3.jpg';
// import Slider4 from '../public/slider-bg4.jpg'
import Slider5 from '../public/slider-bg.jpg';
import About from './components/home/About';
import Products from './components/home/Products';
import Support from './components/home/Support';
import Contact from './components/home/Contact';
export default function Home() {
  return (
    <>
      <ImageSlider images={[Slider1, Slider2, Slider3, Slider5]} />
      <About />
      <Products />
      <Support />
      <Contact />
    </>
  );
}
