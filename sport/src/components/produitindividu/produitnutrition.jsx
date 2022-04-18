import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";

 class Produitnutrition extends Component {
  render() {
    console.log(this.props)
    return (
        <div style={{ 
            display: 'flex',
            justifyContent:'center',
             width: '100%',
            height:'88rem',
            backgroundColor:'blue',           
            }}>

<div style={{backgroundColor:'gold',height:'20rem'
            }}>

 <h1 style={{height: '7rem',color: '#fff',lineHeight: '160px',marginBottom:'3rem'}} > Nutrition Sportive</h1>

 <div style={{backgroundColor:'red',height:'73rem' ,width:'70rem',
 display:'flex',
 justifyContent:'center',
 
 flexWrap:'wrap'
 }}>
{this.props.produits1.map((el) => <Singleproduit book={el}/>)}

       </div>

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