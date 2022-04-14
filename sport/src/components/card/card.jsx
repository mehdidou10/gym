import React, { Component } from 'react';
import Singlecard from './singlecard';

class Card extends Component {
       constructor(props) {
         super(props)
       
         this.state = {
            user:[]
         }
       }

  componentDidMount = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"))
    let options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            authtoken: token,

                 },
                 };
   let data= await fetch("http://localhost:777/card",options);
   let response= await data.json();
   this.setState({
    user: response.user
  });
   console.log(response,"aaaaa")
 
}
  render() {
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
      <Singlecard user1={this.state.user}/>
      </div>
    )
  
}}



export default Card
 