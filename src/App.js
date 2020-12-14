import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Burger from './components/Burger';

function App() {
  return (
    <>
        <Header />
        <div className="burgerContent">
          <Burger />
        </div>
        <Footer />
    </>
  );
}

export default App;
