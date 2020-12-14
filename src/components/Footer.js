import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    return (
      <>
        <footer id="red">
          <h1 class="footer-title">Product Name</h1>
          <h2 class="footer-text">&copy;  Product Information</h2>
        </footer>      
      </>
    );
  }
}