import React, { Component } from 'react'
import axios from 'axios'

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  getProducts() {
    axios.get('http://localhost:2200/api/v1/products.json')
      .then(response => {
      this.setState({products: response.data})
      console.log(this.state.products)
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getProducts()
  }
  

  render() {
    return (
      <div>
        {Object.keys(this.state.products).map((data, i) => (
          <div key={i}>
            <h2>{data}</h2>
            <ul>
              {this.state.products.data.map((keys, k) => (
               <React.Fragment key={k}>
                <li>{keys.attributes.item}</li>
                <li>{keys.attributes.price}</li> 
              </React.Fragment>  
              
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default ProductsContainer