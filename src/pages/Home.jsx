import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import About from '../components/About';
import CallToActionCitizen from "../components/CallToActionCitizen";
import Footer from '../components/Footer';
import Info from '../components/InfoHome';

const Home = () => {
  return (
    <>
      <Header />
      <Hero  />
      <Services />
      <Features />
      <Info />
      <About />
      <CallToActionCitizen />
      <Footer />
    </>
  );
};

export default Home;