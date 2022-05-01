import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";
import { CheckSquareTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './categorielist.css'

 class Produitvetement extends Component {
    render() {
        //console.log(this.props)
        return (
<div className='produitvetement0' >

  
      <div className='produitmenu'>
      <Link to={"/Produitnutrition"}><button className='btncategorie'><CheckSquareTwoTone />Nutrition Sportive </button></Link>
      <Link to={"/Produitvitamine"}><button className='btncategorie'><CheckSquareTwoTone />Vitamines et Santé</button></Link>
      <Link to={"/Produitvetement"}> <button className='btncategorie'><CheckSquareTwoTone />Vêtements et Accessoires</button></Link>
      </div>


     <div className='produitvetementtitle'>
    <h1>Vêtements et Accessoires</h1>
    </div>


    <div className='produitvetement1'>
    {this.props.produits3.map((el) => <Singleproduit book={el}/>)}
    </div>
    
</div>     
    
        )
      }
}
const mapStateToProps = (state) => {     
    return{
      produits3:state.shop.products3,
    }}
  
  
export default connect(mapStateToProps,null)(Produitvetement);