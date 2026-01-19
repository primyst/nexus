import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="font-sans text-[#171717] bg-white">

      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Services */}
      <Services />

      {/* Portfolio / Work */}
      <Portfolio />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <CTA />

      {/* Contact Form */}
      <ContactForm />

    </div>
  );
};

export default HomePage;