import React, { Component } from "react";
import { Link } from "react-router-dom";
import './programme.css';
import {CheckCircleTwoTone}from "@ant-design/icons";
class singleprogramme extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="singleprogramme">


        <div className="title">
        <h5 style={{ color: "white", fontSize: "1.8rem" }}>
          {this.props.data1.programme}
        </h5>
        
        <h1>{this.props.data1.tarif}</h1>
        </div>



        <div>
        <p><CheckCircleTwoTone/>{this.props.data1.time}</p>
       
        
        <p><CheckCircleTwoTone/>{this.props.data1.coach}</p>

         </div>



        <Link to={"/cardcontainer"}>
          <button className="btn"
            onClick={(e) =>
              this.props.dispatch1({
                type: "programme",
                abonnement: this.props.data1.programme,
              })
            }
          > join now</button>
         </Link>   
          
       



      </div>
    );
  }
}

export default singleprogramme;
