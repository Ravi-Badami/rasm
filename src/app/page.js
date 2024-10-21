'use client';
import Header from './components/Header/Header';
import '../app/styles/index.css';
import HomeSection from './components/Home/HomeSection';
import Aboutus from './components/Aboutus/Aboutus';
import OurServices from './components/OurServices/OurServices';
import WeChoose from './components/WeChoose/WeChoose';
import Prices from './components/Prices/Prices';
import Footer from './components/Footer/Footer';

export default function Home() {
  return (
    <div className=''>
      <Header />
      <HomeSection />
      <Aboutus />
      <OurServices />
      <WeChoose />
      <Prices />
      <Footer />
    </div>
  );
}
