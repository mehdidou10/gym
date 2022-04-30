import React, { Component } from "react";
import Singlecard from "./singlecard";
import './card.css'
class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: [],
    };
  }

  componentDidMount = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    let options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: token,
      },
    };
    let data = await fetch("http://localhost:777/card", options);
    let response = await data.json();
    this.setState({
      user: response.user,
    });
    // console.log(response,"aaaaa")
  };
  render() {
    return (

<div className="Cardcontainer" >

      <div className="card">
        
          <Singlecard user1={this.state.user} />
        

        <div className="conseil">
         <p> this card is your badge acces to the gym ,
          <br /> every time you go in ,
          <br /> its should be with you ,<br /> 
          without here you can't enter</p>
        </div>
         
      </div>


      </div>
    );
  }
}

export default Card;
