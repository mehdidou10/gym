import React, { Component } from 'react'
import './singleproduits.css'
import { Carousel } from 'antd';
import { connect } from "react-redux";
import {addToCart} from "../redux/action";
import { Link } from "react-router-dom";



 class Singleproduit extends Component {
   
  render() {
     let cart = this.props.cart

    return (
      
  

<div style={{ 
            width: '20rem',
            height:'20rem',
            margin: 10,
            padding:22,
            backgroundColor:'greenyellow',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
    <div className='content'>
   <div className="content-overlay"></div>
   <Carousel  autoplay>
     <div>
<img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo1} alt='produit'/>
    </div>
    <div>
    <img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo2} alt='produit'/>
   </div>
   <div>
   <img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo3} alt='produit'/>

   </div>
     </Carousel>     
     <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{this.props.book.name}</h3>
         </div>
     </div> 
         <div>
              <h5>{this.props.book.prix}</h5>
              
              <Link to={`/leproduit/${this.props.book._id}`}> 
                 <button>
                   voir le produits
                 </button>
              </Link>

<button onClick={()=>{this.props.addToCart(this.props.book._id);window.localStorage.setItem("cart", JSON.stringify(cart));}}>
      Add to cart
</button>

          </div>
    
    </div>
    )}}
const mapStateToProps = (state) => {  // recuperer les donnes 
      return{
  cart:state.shop.cart
  }
  } 
    const mapDispatchToProps = (dispatch)=>{  //envoie les ldonnes
      return{
        addToCart:(id)=> dispatch(addToCart(id)),

      }
    }





export default connect(mapStateToProps, mapDispatchToProps)(Singleproduit); 
 