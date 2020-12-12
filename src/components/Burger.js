import React, { Component } from 'react';
import './BurgerStyle.css';
import BurgerBuild from './BurgerBuild.js';
import OrderDetail from './OrderDetail.js';

export default class Burger extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: [],
      isBurgerBuild: false,
      isOrder: true
    }
  }

  addToCart = (dish) => {
    this.state.dishes.push(dish)
    this.setState({
      ...this.state,
      isBurgerBuild: false,
      isOrder: true
    })
  }

  buildBurger = () => {
    this.setState({
      ...this.state,
      isBurgerBuild: true,
      isOrder: false
    })
  }

  render(){
    let dishesDetail = {
      back: this.buildBurger,
      dishes: this.state.dishes
    }
    return (
      <>
        {this.state.isBurgerBuild && <BurgerBuild add={this.addToCart} />}
        {this.state.isOrder && <OrderDetail {...dishesDetail} />}
      </>
    );
  }
}