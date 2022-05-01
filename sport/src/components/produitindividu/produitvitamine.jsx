import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";
import { CheckSquareTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './categorielist.css'

 class Produitvitamine extends Component {
    render() {
        //console.log(this.props)
        return (
<div className='produitvitamine0'>
     <div className='produitmenu'>
      <Link to={"/Produitnutrition"}><button className='btncategorie'><CheckSquareTwoTone />Nutrition Sportive </button></Link>
      <Link to={"/Produitvitamine"}><button className='btncategorie'><CheckSquareTwoTone />Vitamines et Santé</button></Link>
      <Link to={"/Produitvetement"}> <button className='btncategorie'><CheckSquareTwoTone />Vêtements et Accessoires</button></Link>
      </div>

      <div className='produitvitaminetitle'>
         <h1>Vitamines et Santé</h1>
         </div>
    <div className='produitvitamine1'>
    {this.props.produits2.map((el,idx) => <Singleproduit book={el} key={idx}/>)}
    </div>  

</div>
        )
      }
}

const mapStateToProps = (state) => {     
    return{
      produits2:state.shop.products2,
    }}
  
  
export default connect(mapStateToProps,null)(Produitvitamine);
 