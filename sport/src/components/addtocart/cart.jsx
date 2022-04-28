import React, { Component } from "react";
import Singleproduit2 from "../produits/singleproduit2";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalprix: 0,
      totalItems: 0,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    let prix = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      prix += item.qty * item.prix;
    });
    if (prevState === this.state) {
      this.setState({ totalprix: prix, totalItems: itemcount });
    }
  }
  componentDidMount() {
    let prix = 0;
    let itemcount = 0;
    let cart = this.props.cart;
    cart.forEach((item) => {
      itemcount += item.qty;
      prix += item.qty * item.prix;
    });
    this.setState({ totalprix: prix, totalItems: itemcount });
  }

  render() {
    let cart = this.props.cart;

    console.log(cart);
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          width: "100%",

          marginTop: "5.1rem",
        }}
      >
        <div
          style={{
            height: "max-content",
            width: "50rem",
            backgroundColor: "red",
            position: "absolute",
            left: "3rem",
            padding: "2rem",
            
          }}
        >
          <h1>cartt</h1>
          {cart.map((el, idx) => (
            <Singleproduit2 book={el} key={idx} />
          ))}
          {}
        </div>

        <div
          style={{
            width: "20rem",
            height: "19rem",
            backgroundColor: "brown",
            marginTop: "4rem",
            position: "fixed",
            right: "3rem",
            
            
          }}
        >
          <h2>Total</h2>
          <p>total items:{this.state.totalItems}</p>
          <p>total prix:{this.state.totalprix}$</p>
          <Link to={"/commande"}>
            <button>commander</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps, null)(Cart);
