import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero';
import InstagramEmbed from './components/InstagramEmbed'
import Tabs from './components/Tabs';
import Clients from './components/Clients'
import Footer from './components/Footer';
import Calendar from './components/Calendar';
import Steps from './components/Steps';
import Perks from './components/Perks';
import Contact from './components/Contact';
import { BrowserRouter } from 'react-router-dom';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>


    <Hero />
    <InstagramEmbed />
    {/* <Tabs /> */}
    <Testimonials/>
    {/* <Clients /> */}
    <Steps/>
    <Perks/>
    <CTA/>
    <Calendar />
    <Contact/>
    <Footer />
    



  </BrowserRouter>
);

reportWebVitals();
