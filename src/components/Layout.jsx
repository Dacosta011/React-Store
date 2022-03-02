import React from 'react';

import Header from './Header';
import Footer from './Footer';

import '../styles/components/Layout.css';

const Layout = (props) => {
  return (
    <div className="Main">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
