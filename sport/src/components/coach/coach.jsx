import React, { Component } from 'react'
import Singlecoach from '../coach/singlecoach';
class Coach extends Component {
    constructor(props){
        super(props);
         this.state={
           theyare:3
}
    }
  render() {
    return (
      <div style={{ 
        display: 'flex',
        justifyContent:'center',
        marginTop:'2rem',
        height:'28rem',
        width: "80%",
        backgroundColor:'blue',
      }}>
          
          
{this.props.co.map((el,idx)=> idx = this.state.theyare ? <Singlecoach personnage={el} /> : <></> )}     
          
          
    </div>
    )
  }
}
export default Coach