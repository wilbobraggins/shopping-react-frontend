
import React, { Component } from 'react';
import './App.css';
import ProductsContainer from './components/products.js';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <h1>Product List</h1>
        </div>
        <ProductsContainer />
      </div>
    );
  }
}

export default App;
