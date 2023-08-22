import React from 'react'
import Navbar from "../components/Navbar";
import HomeImage from '../components/HomeImage';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <HomeImage/>
      <Footer/>
    </div>
  );
}

export default Home