import React from 'react';
import Navbar from '../HeaderComponent';

const index = ({ children }) => {
  return (
    <div className="relative">
      <div className=" absolute z-50 w-full">
        {' '}
        <Navbar />
      </div>
      <div className="pt-10"> {children}</div>
      <div className=" absolute"></div>
    </div>
  );
};

export default index;
