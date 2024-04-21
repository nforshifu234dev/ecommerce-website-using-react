import React, { useEffect, useRef, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ComingSoon from './pages/ComingSoon';

import Sidebar from './components/Sidebar';	
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound'

const App = () => {

  const [stateValue, setStateValue] = useState('');
  const parentRef = useRef(null);

  useEffect(() => {

    if (parentRef.current) {
      parentRef.current.scrollTop = 0;
    }

  }, [stateValue]);

  return <div ref={parentRef} className='overflow-hidden'>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/details' element={<ComingSoon />} />
        <Route path='*' element={<PageNotFound />} /> {/* Catch-all route */}
      </Routes>
      <Sidebar />
      <Footer />
    </Router>

  </div>;
};

export default App;
