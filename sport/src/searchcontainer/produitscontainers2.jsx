import React, { Component } from 'react'
import Produits2 from '../components/produits/produits2.jsx'
 class Produitscontainers2 extends Component {
  render() {
    let sample = this.props.data
  
    return (
      <div style={{
        display:'flex',
       alignItems:'center',
        justifyContent:'center',
        height:'40rem',
        width:'88%',
        backgroundColor:'orange',
      }} >

<Produits2  books={sample}/>

 </div>
    )
  }
}
export default Produitscontainers2