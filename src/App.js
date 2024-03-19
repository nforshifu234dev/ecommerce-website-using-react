import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

import Sidebar from './components/Sidebar';	
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return <div className='overflow-hidden'>

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='*' element={<PageNotFound />} /> {/* Catch-all route */}
      </Routes>
      <Sidebar />
      <Footer />
    </Router>

  </div>;
};

export default App;
