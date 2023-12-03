
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
    </div>
  );
}

export default App;
