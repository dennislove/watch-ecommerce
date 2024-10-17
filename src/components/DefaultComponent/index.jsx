import React from 'react';
import Navbar from '../HeaderComponent';
import Footer from './Footer';

const index = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="pt-10"> {children}</div>
      <Footer />
    </div>
  );
};

export default index;
