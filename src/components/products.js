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
      const data = this.state.products
      const display = Object.keys(data).map((d, key) => {
        return ( 
          <div key={key}>
            <li >
              <ul>
              {d.attributes}
              </ul>
            </li>  
          </div> 
        )
      })
      return(
        <div>
          <ul>
            { display }
          </ul>
        </div>
      )
  }
}

export default ProductsContainer