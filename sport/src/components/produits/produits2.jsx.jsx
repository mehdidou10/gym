import React, { Component } from 'react'
import Singleproduit from './singleproduit';




class Produitsbigsearch extends Component {
  
  render() {
    
    return (
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%",
        backgroundColor:'black',
        marginLeft:'10rem'
        
    }}>

{this.props.books.map((el) =>  <Singleproduit book={el}/> )}
  
      




    </div>
    )
  }
}
export default Produitsbigsearch
