import React, { Component } from 'react';


class Card extends Component {

  render() {
   console.log(this.props,"zzzzz")
return (
      <div style={{ 
       backgroundColor:'gold',
        width: "40%",
        height:"40rem",
        marginLeft:'2rem',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
        
    }}>
   <p> {this.props.card1[0].First_Name}</p>
   <p> {this.props.card1[0].Last_Name}</p>
   <p> {this.props.card1[0].number_phonel}</p>
   <p> {this.props.card1[0].Email}</p>
  
      </div>
    )
  
}}
export default Card