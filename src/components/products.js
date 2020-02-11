import React, { Component } from 'react'

class ProductsContainer extends Component {
  render() {
    return (
      <div>
  <div className="inputContainer">
    <input className="productInput" type="text" 
      placeholder="Add a product" maxLength="50" />
  </div>        
  <div className="listWrapper">
     <ul className="productList">
     </ul>
  </div>
      </div>    
    )
  }
}

export default ProductsContainer