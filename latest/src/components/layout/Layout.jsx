import React from 'react';
import Header from '../Header/Header';
import Menu from '../menu/Menu';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Section from '../Section/Section';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Section />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;