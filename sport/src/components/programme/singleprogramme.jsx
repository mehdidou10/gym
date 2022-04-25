import React, { Component } from "react";
import { Link } from "react-router-dom";

class singleprogramme extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: "25rem",
          height: "30rem",
          margin: 10,
          padding: 22,
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h5 style={{ color: "white", fontSize: "1.8rem" }}>
          {this.props.data1.programme}
        </h5>
        <p style={{ backgroundColor: "gold" }}>{this.props.data1.tarif}</p>
        <p style={{ backgroundColor: "gold" }}>{this.props.data1.time}</p>
        <h1 style={{ color: "red" }}>{this.props.data1.coach}</h1>

        <Link to={"/cardcontainer"}>
          <button
            onClick={(e) =>
              this.props.dispatch1({
                type: "programme",
                abonnement: this.props.data1.programme,
              })
            }
          >
            Ok
          </button>
        </Link>
      </div>
    );
  }
}

export default singleprogramme;
