import React, { Component } from "react";
import { Link } from "react-router-dom";
//import Programmecontainer2 from '../../programmecontainer/programmecontainer2';
//import Produitscontainers2 from '../../searchcontainer/produitscontainers2';
import Coachcontainer from "../coach/coachcontainer";
//import doto from "../MOCK_DATA (1).json";
//import doto3 from "../MOCK_DATA 3.json";
import "./bigsearch.css";
import { connect } from "react-redux";
import Singleproduit from "../produits/singleproduit";

class Bigsearch extends Component {
  render() {
    let product1 = this.props.product1;
    let product3 = this.props.product3;
    let product2 = this.props.product2;
    let products = product1.concat(product2).concat(product3);
    const _ = require("lodash");
    const sample = _.sampleSize(products, 4);
    console.log(sample);

    return (
      <div className="bigsearch">
        {/* introductionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}

        <div className="introduction">
          <h1>BUILD UP YOUR BODY</h1>
          <h1>no pain no gain</h1>
          <button className="introduction-button">joins-us</button>
        </div>
        {/* introductionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn */}
        <div>
          <h1>jlllll</h1>
        </div>

        {/* programmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmme */}

        <div className="programmme">
          <h1> PROGRAMME </h1>

          <Link to={"/Programmecontainer"}>
            <button /*onClick={() => 
      {this.props.history.push("/Produitscontainers")}}*/
            >
              Checkout voir tous les programmes
            </button>
          </Link>
        </div>

        {/* programmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmme*/}
        <div>
          <h1>hhhhhhhhhhhhhhhhhhhh</h1>
        </div>

        {/* produitsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}
        <div className="produits">
          <h1>LES PRODUITS </h1>
          {/*{<Produitscontainers2   data={sample}/>}*/}
          {sample?.map((mehdi, index) => (
            <Singleproduit book={mehdi} key={index} />
          ))}

          <Link to={"/Produitscontainers"}>
            <button>Checkout voir tous les produits</button>
          </Link>
          <h1>ddddddddddddddddddddd</h1>
        </div>

        {/* produitsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss */}

        {/* our coachhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/}
        <div className="coach">
          <h1> our coach they will be with you all the time </h1>
          {<Coachcontainer />}
        </div>
        {/*our coashhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh*/}

        <div>
          <h1>mommmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</h1>
        </div>

        {/*featuringnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn*/}
        <div className="etage">
          <div className="etage1"> premier etage</div>
          <h6>1</h6>
          <div className="etage2">deuxieme etage </div>
          <h6>2</h6>
          <div className="etage3 ">troisième etage</div>
        </div>
        {/*featuringnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn*/}

        {/*footerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr*/}

        <div className="footer">
          <div className="reseau">
            <p>Suivez-nous sur les reseau socieux </p>

            <div className="facebook">
              <img src="image/facebook.png" alt="facebook" />
              <a
                href="https://www.flaticon.com/fr/icones-gratuites/facebook"
                title="facebook icônes"
              >
                notre page de facebook
              </a>
            </div>

            <div className="instagram">
              <img src="image/instagram.png" alt="instagram" />
              <a href="https://www.youtube.com/watch?v=X-swJqjzjCI"> insta</a>
            </div>
          </div>

          
        </div>

        {/*footerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr*/}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product1: state.shop.products1,
    product2: state.shop.products2,
    product3: state.shop.products3,
  };
};

export default connect(mapStateToProps)(Bigsearch);
