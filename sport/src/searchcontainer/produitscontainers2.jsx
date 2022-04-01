import React, { Component } from 'react'
import Produits2 from '../components/produits/produits'

 class Produitscontainers2 extends Component {
  render() {
    let sample = this.props.data
  
    return (
      <div className='produitscontainers2'>

<Produits2  books={sample}/>

 </div>
    )
  }
}
export default Produitscontainers2