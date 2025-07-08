'use client';

import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutExosome from '../components/AboutExosome';
import Effects from '../components/Effects';
import Features from '../components/Features';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import DoctorIntro from '../components/DoctorIntro';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutExosome />
      <Effects />
      <Features />
      <Process />
      <Pricing />
      <FAQ />
      <DoctorIntro />
      <Contact />
      <Footer />
    </div>
  );
}