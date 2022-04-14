import React, { Component } from 'react'
import Singleproduit from '../produits/singleproduit';




 class Produitnutrition extends Component {
  render() {
    return (
        <div style={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            width: '75%',
            height:'122rem',
            backgroundColor:'blue',
            marginBottom:'3rem',
            marginLeft:'2rem',
            position:'relative',
            margin:'2rem ',
            gap:'3rem',
            }}>

<div style={{backgroundColor:'gold'}}>

              <h1 style={{height: '7rem',color: '#fff',lineHeight: '160px',marginBottom:'3rem'}} > Nutrition Sportive</h1>

 <div style={{backgroundColor:'red',height:'23rem' ,width:'70rem',marginTop:'' ,  display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row',overflow:'hidden',overflowX:'scroll'}}>
{this.props.fitn.map((el) => <Singleproduit book={el} /> )}
{<button  type="link"  >
    
</button>}
       </div>

</div>     
</div>
    )
  }
}
export default Produitnutrition