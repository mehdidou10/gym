import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";

 class Produitvetement extends Component {
    render() {
        //console.log(this.props)
        return (
<div className='produitvetement0' >

    <h1> Nutrition Sportive</h1>
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