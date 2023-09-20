import React from 'react';
import Home from './components/Home';
import Clients from './components/Clients';
import CreateAndSell from './components/CreateAndSell';
import Choose from './components/Choose';
import Marketplace from './components/Marketplace';
import Subscribe from './components/Subscribe';

export default function App() {
  return( 
    <section>
      <Home/>
      <Clients/>
      <CreateAndSell/>
      <Choose/>
      <Marketplace/>
      <Subscribe/>
    </section>
  )
}

