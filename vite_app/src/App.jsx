import { useState } from 'react';
import Navebar from './Componants/Navebar.jsx';
import Intro from './Componants/Intro.jsx';
import Range from './Componants/Range.jsx';
import Applications from './Componants/Applications.jsx';
import Certification from './Componants/Certification.jsx';
import Footer from './Componants/Footer.jsx';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navebar />
      <Intro />
      <Range />
      <Applications />
      <Certification />
      <Footer />
      
    </>
  );
}

export default App;
