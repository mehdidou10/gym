import React, { Component } from "react";
import Singleproduitcart from "../produits/singleproduitcart";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './cart.css'
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
      window.localStorage.setItem("cart", JSON.stringify(cart));
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
      <div className="cartcontainer">



        <div className="cart">
          <h1>Panier</h1>
          {cart.map((el, idx) => ( <Singleproduitcart book={el} key={idx} />))}
          {}
        </div>



        <div className="commandecart">
          <h2>RÉSUMÉ DU PANIER : Total</h2>
          <p>nombre total de produits:{this.state.totalItems}</p>
          <p>prix total:{this.state.totalprix}$</p>
          <Link to={"/commande"}>
            <button className="btn5" >commander</button>
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
