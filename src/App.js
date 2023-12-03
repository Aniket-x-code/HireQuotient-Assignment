
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Capability from './components/Capability';
import Card from './components/Card';
import Cardset from './components/Cardset';
import More from './components/More';
import Integration from './components/Integration';
import Faq from './components/Faq';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import Avatarblock from './components/Avatarblock';
import User from './components/User';
import Footer from './components/Footer';


function App() {
   const [count , setCount] = useState(0)


  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Capability/>
      <Card/>
      <Cardset/>
      <More/>
      <Integration/>
      <Faq/>
      <Pricing/>
      <Testimonial/>
      <User/>
      <Footer/>
    </div>
  );
}

export default App;
