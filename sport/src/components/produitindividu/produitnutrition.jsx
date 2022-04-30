import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";
import './categorielist.css'
 class Produitnutrition extends Component {
  render() {
    //console.log(this.props)
    return (
<div className='produitnutrition0'>

   
        <h1> Nutrition Sportive</h1>
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