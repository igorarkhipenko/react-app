import React from 'react'
import { Product } from './Product'
import { products } from './constants'

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products, filter: '' }
    this.filterInput = this.filterInput.bind(this)
    this.showAddInfo = this.showAddInfo.bind(this)
  }

  filterInput(e) {
    this.setState({ filter: e.target.value });
  }

  showAddInfo(key) {
    let newProductState = this.state.products.map(p => {
      if (p.key === key) {
        return Object.assign({}, p, { isClicked: !p.isClicked })
      }
      return p;
    })
    this.setState({ products: newProductState });
  }

  render() {
    let activeProductList = this.state.products;
    if (this.state.filter !== '') {
      activeProductList = activeProductList.filter(item =>
        item.name.toLowerCase().includes(
          this.state.filter.toLowerCase()
        )
      )
    }

    return (
      <div>    
        <div className="row">
          <input className="search col-sm-6 col-xs-12 col-sm-offset-3" 
                 onInput={this.filterInput} 
                 placeholder="Search" />
        </div>            
        <div className="row">
          {activeProductList.map(product => (
            <Product {...product} 
                     onClick={() => this.showAddInfo(product.key)}
            />
          ))}
        </div>
      </div>
    )
  }
}