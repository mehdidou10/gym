import React, { Component } from 'react'
import Singlecard from './singlecard'
 class Card extends Component {



  render() {
   console.log(this.props)
return (
      <div style={{ 
       backgroundColor:'gold',
        width: "80%",
        
    }}>
   {this.props}
      </div>
    )
  
}}
export default Card