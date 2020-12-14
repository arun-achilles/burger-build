import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount = function() {
      window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = function(event) {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

  }  

  render(){
    return (
      <>
        <nav id="header" className="header-bar">
          <div className="header-title">Burger Builder</div>
        </nav>
      </>
    );
  }
}