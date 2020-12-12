import React, { Component } from 'react';
import MaterialTable from "material-table";

export default class OrderDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      dishes: this.props.dishes
    }
  }

  rowData = () => {
    let rows = [];
    let dishes = this.state.dishes;
    for (let i = 0; i < dishes.length; i++) {
      rows.push({name: `Burger-${i+1}`, ingredients: `Lettuce: ${dishes[i].lettuce}x | Cheese: ${dishes[i].cheese}x | Tomato: ${dishes[i].tomato}x | Meat: ${dishes[i].meat}x`})
    }
    return rows;
  }

  render(){
    let dishesCount = this.state.dishes.length;

    const columns = [
      {
        title: "Name",
        field: "name",
      },
      {
        title: "Ingredients",
        field: "ingredients",
      }
    ];

    return (
      <>
        <h4> Order Details </h4>
        <p> There are {dishesCount} dishes in total</p> 
        <MaterialTable title="Order Details" data={this.rowData()} columns={columns} />
        <button onClick={() => this.props.back()}> Order More </button>
      </>
    );
  }
}