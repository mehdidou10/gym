import React, { Component } from "react";
import "./footer.css";
import {EnvironmentOutlined,PhoneOutlined,FacebookOutlined,InstagramOutlined,} from "@ant-design/icons";
class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        {/*<p>Suivez-nous sur les reseau socieux </p>*/}





        <div className="reseau">
        <div className="sui">
          <h4>Suivez-nous</h4>
        </div>

          <div className="facebook">
            <a href="https://www.flaticon.com/fr/icones-gratuites/facebook" target="_blank">
              <FacebookOutlined />
            </a>
            <p>facebook</p>
          </div>

          <div className="instagram">
            <a href="https://www.youtube.com/watch?v=X-swJqjzjCI" target="_blank">
              <InstagramOutlined />
            </a>
            <p>instagram</p>
          </div>


        </div>




        <div className="info1">


          <div className="info">
            <a href="https://www.google.com/maps/dir//Q2HR%2B6C5+SACAL+FITNESS+GYM,+Rue+des+Frères,+Bouchouchi+16000/@36.7777468,3.0408764,345m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x128fb32129885b77:0xfba81128466d6094!2m2!1d3.0410969!2d36.7780047!3e0" target="_blank">
             <EnvironmentOutlined /> 
            </a>
            
            <p>ADRESSE</p>
            <p>Q2HR+6C5, Rue des Frères, Bouchouchi 16000</p>
          </div>



          <div className="info">
            <PhoneOutlined />
            <p>TÉLÉPHONE</p>
            <p>
            0561442657 Horaire d'attention téléphonique
            </p>
          </div>





        </div>
        
      </div>
    );
  }
}
export default Footer;
