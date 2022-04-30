import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";


 class Produitvitamine extends Component {
    render() {
        //console.log(this.props)
        return (
<div className='produitvitamine0'>
    
    <div className='produitvitamine1'>
    <h1> Nutrition Sportive</h1>
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
 