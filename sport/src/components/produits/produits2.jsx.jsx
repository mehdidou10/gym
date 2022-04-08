import React, { Component } from 'react'
import Singleproduit from './singleproduit';




class Produits2 extends Component {
  
  render() {
    
    return (
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        width: "90%",
        height:'32rem',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
       
        
    }}>

{this.props.books.map((el) =>  <Singleproduit book={el}/> )}
  
      

    </div>
    )
  }
}
export default Produits2
