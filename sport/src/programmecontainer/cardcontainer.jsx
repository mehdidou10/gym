import React, { Component } from 'react'
import Card from '../components/card/card'
class Cardcontainer extends Component {
    

  render() {
    
    return (
      <div style={{
          backgroundColor:'violet',
          height:'120vh',
          display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
        }} >

     <Card/>
     
      </div>
    )
  }
}
export default Cardcontainer