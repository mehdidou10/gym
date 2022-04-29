import React, { Component } from 'react'

import { Carousel } from 'antd';
import { connect } from "react-redux";
import {addToCart} from "../redux/action";
import { Link } from "react-router-dom";
import './singleproduits.css'
import { ShoppingCartOutlined } from '@ant-design/icons'


 class Singleproduit extends Component {
   
  render() {
     let cart = this.props.cart

    return (
      
  

<div className='singlepro' >



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





        <div className='partiebas'>
              <h5>{this.props.book.name}</h5>
              <h5>price: {this.props.book.prix}$</h5>


              <div className='partiebutton'>
              <Link to={`/leproduit/${this.props.book._id}`}> 
                 <button  className='btn2'>
                   voir le produits
                 </button>
              </Link>

             <button  className='btn2' onClick={()=>{this.props.addToCart(this.props.book._id);window.localStorage.setItem("cart", JSON.stringify(cart));}}>
                 Add to cart &nbsp;
                 <ShoppingCartOutlined />
            </button>
            </div>



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
 