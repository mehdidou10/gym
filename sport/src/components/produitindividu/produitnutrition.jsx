import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";
import { CheckSquareTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";



import './categorielist.css'
 class Produitnutrition extends Component {
  constructor(props){
    super(props);
    this.state = {
        collapsed: false,
        
    }
}
  render() {
    
    //console.log(this.props)
    return (
<div className='produitnutrition0'>


      <div className='produitmenu'>
      <Link to={"/Produitnutrition"}><button className='btncategorie'><CheckSquareTwoTone /> Nutrition Sportive </button></Link>
      <Link to={"/Produitvitamine"}><button className='btncategorie'><CheckSquareTwoTone /> Vitamines et Santé</button></Link>
      <Link to={"/Produitvetement"}> <button className='btncategorie'><CheckSquareTwoTone /> Vêtements et Accessoires</button></Link>
      </div>
    
  

      <div className='produitnutritiontitle' >
     
        <h1> Nutrition Sportive</h1>
        
      </div>


      <div className='produitnutrition1'>
        {this.props.produits1.map((el) => <Singleproduit book={el}/>)}
      </div>
   

</div>
    )
  }
}

const mapStateToProps = (state) => {     
  return{
    produits1:state.shop.products1,
  }}


  export default connect(mapStateToProps,null)(Produitnutrition);