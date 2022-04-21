import React, { Component } from 'react'
import Singleproduit2 from '../produits/singleproduit2';

import { connect } from "react-redux";


 class Cart extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          totalprix: 0,
          totalItems: 0,
          count: 3
        };
      }
      componentDidUpdate(prevProps, prevState) {
        let prix = 0;
        let itemcount = 0;
        let cart = this.props.cart;
        cart.forEach((item) => {
          itemcount += item.qty;
          prix += item.qty * item.prix;
        });
        if (prevState === this.state) {
          this.setState({ totalprix: prix, totalItems: itemcount });
        }
      }
      componentDidMount() {
        let prix = 0;
        let itemcount = 0;
        let cart = this.props.cart;
        cart.forEach((item) => {
          itemcount += item.qty;
          prix += item.qty * item.prix;
        });
        this.setState({ totalprix: prix, totalItems: itemcount});
      }

  render() {


     let cart1 = this.props.cart;
     console.log(cart1)
    return (
      
<div style={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
            width: '100%',
            height:'52rem',
            backgroundColor:'blue',
            marginBottom:'3rem',
            marginLeft:'2rem',
            position:'relative',
            margin:'2rem ',
            gap:'3rem',
            }}> 
   <div style={{backgroundColor:'red',height:'30rem',width:'60rem'}}>
                          <h1>cartt</h1>
 {cart1.map((el,idx)=>(  idx < this.state.count ? <Singleproduit2 book={el} key={idx}/>: <></> ))}
 {<button  type="link"  onClick={() => this.setState({count: this.state.count + 2})} >
     <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='moomom'/>
</button>}
    </div>
        <div style={{ width: '20rem',
            height:'19rem',
            backgroundColor:'brown'}}>

               <h2>Total</h2>
              <p>total items:{this.state.totalItems}</p>
              <p>total prix:{this.state.totalprix}$</p>

             </div>      
    </div>
    )
  }
}


const mapStateToProps = (state) => {     
    return{
     cart:state.shop.cart
    }}


export default connect(mapStateToProps,null)(Cart);
 