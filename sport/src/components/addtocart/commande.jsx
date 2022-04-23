import React, { Component } from "react";
import { connect } from "react-redux";

class Commande extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adress: "",
    };
  }

  render() {
    let cart = this.props.cart;

    let neworders = async () => {
      let token = JSON.parse(localStorage.getItem("TOKEN"));
      let response = await fetch("http://localhost:777/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authtoken: token,
        },
        body: JSON.stringify({
          produits: cart,
          adress: this.state.adress,
        }),
      });
      console.log(response.status);
    };

    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ adress: e.target.value })}
        />
        <button onClick={() => neworders()}>commande</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};
export default connect(mapStateToProps, null)(Commande);
