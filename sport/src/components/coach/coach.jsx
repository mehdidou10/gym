import React, { Component } from 'react'
import Singlecoach from '../coach/singlecoach';
class Coach extends Component {
  

  render() {
    console.log(this.props)
    return (
      <div style={{ 
        display: 'flex',
        justifyContent:'center',
        marginTop:'2rem',
        height:'28rem',
        width: "90%",
        backgroundColor:'blue',
       gap:'7rem'
      }}>
          
          
{this.props.co.map((el)=>  <Singlecoach personnage={el}/>)}     
          
          
    </div>
    )
  }
}
export default Coach