import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';
import { connect } from "react-redux";


 class Produitvitamine extends Component {
    render() {
        //console.log(this.props)
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
    {this.props.produits2.map((el,idx) => <Singleproduit book={el} key={idx}/>)}
    
           </div>
    
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
 