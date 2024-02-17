import React from 'react';
import First from "./components/First";
import Second from './components/Second';
import Nav from "./components/Nav";
import Collections from './components/Collections';
import Promo from "./components/Promo";
import Testimonials from './components/Testimonials';
function App() {
  return (
    <div >
      {/* <h1 className="text-7xl text-center text-blue-400">hello</h1> */}
      <Nav/>
      <Promo />
      <Collections/>
      <First />
      <Testimonials/>
      <Second />
     

    </div>
  );
}

export default App;
