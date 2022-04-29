import React, { Component } from "react";
import { connect } from "react-redux";
import "./card.css";
class Singlecard extends Component {
  updateuser = async () => {
    let token = JSON.parse(localStorage.getItem("TOKEN"));
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: token,
      },

      body: JSON.stringify({
        programme: this.props.abonnement.abonnement,
      }),
    };
    let data = await fetch("http://localhost:777/programmeuser", options);
    console.log(data.status);
  };

  render() {
    console.log(this.props)
    return (
      <div className="singlecard">

 <div className="cardor">
        <div className="image">
          <h1 >gym card </h1>
          <img style={{height:'5rem',width:'6rem'}} src='https://st4.depositphotos.com/13911342/25645/v/380/depositphotos_256451516-stock-illustration-vector-template-card-gym-identity.jpg?forcejpeg=true' alt="example" />
        {/* <input type="file" accept="image/*" />*/}
          <p>programme:{this.props.abonnement.abonnement}</p> 
        </div>


        <div className="details">
          <h1>Name:{this.props.user1[0]?.First_Name}</h1>
          <h1>User_Name:{this.props.user1[0]?.Last_Name}</h1>
          <h1>number_phone:{this.props.user1[0]?.number_phone}</h1>
          
        </div>


        <div className="sign">
      <p style={{fontSize:'1rem',position:'relative',right:'5rem'}}>session  --- to --- </p>
   
          <h4>seing</h4>
        </div>
 </div>       
         
        <div>
         <button onClick={() => this.updateuser()}>registre your card </button>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  abonnement: state,
});
export default connect(mapStateToProps, null)(Singlecard);
