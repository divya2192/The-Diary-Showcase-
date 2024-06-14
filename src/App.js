import React from 'react';
import './App.css';
//import'./Images';
//import './Components/Images';
//import './public/index';
import Header from './Components/Header';
import HomeSection from './Components/HomeSection';
import AboutSection from './Components/AboutSection';
import IconSection from './Components/IconSection';
import ProductSection from './Components/ProductSection';
import ReviewSection from './Components/ReviewSection';
import ContactSection from './Components/ContactSection';
import FooterSection from './Components/FooterSection';

function App() {
  return (
      <div>
          <Header />
          <HomeSection />
          <AboutSection />
          <IconSection/>
          <ProductSection/>
          <ReviewSection/>
          <ContactSection/>
          <FooterSection/>
          {/* Render other sections */}
      </div>
  );
}

export default App;