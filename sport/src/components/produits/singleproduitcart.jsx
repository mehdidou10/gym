import React, { Component } from 'react'
import { connect } from "react-redux";
import {addToCart,removeFromCart,adjust} from "../redux/action";
import './singleproduits.css'
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { CloseOutlined } from '@ant-design/icons'



 class Singleproduitcart extends Component {
constructor(props) {
  super(props)
  this.state = {
     qty:this.props.book.qty
  }
}

  render() {
    let cart = this.props.cart;
    let removeFromCart = this.props.removeFromCart;
    
    let adjust = this.props.adjust;

    return (
        <div style={{display:'flex',
        flexDirection:'row',
        backgroundColor:'silver',
        borderBottom:'solid .5rem red',
        borderRadius: '1rem',
       width:'40rem'
        }}>
        
        
        <div style={{ 
            width: '35rem',
            height:'12rem',
            margin: 10,
            
           
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
        }}>


    
      <div>  

         <Carousel  autoplay>
             <div>
             <img  style={{width:'15rem',height:'10rem'}} src={this.props.book.photo1} alt='produit'/>
             </div>
         </Carousel>   
         <button className='sup' onClick={()=> removeFromCart(this.props.book._id)}>
                  <CloseOutlined /> supprimer
          </button>
          <Link to={`/leproduit/${this.props.book._id}`}> 
                       <button className='btnvoirleproduit'>
                             voir le produits
                      </button>
          </Link>
         </div>  



    <div  style={{ 
            width:'30rem',
            height:'10rem',
            marginLeft:'1rem',
            marginBottom:'1.6rem',
           
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL059nkeQsi-iF77cCJs9ribS1P1iMw_zPYg&usqp=CAU")',
            backgroundOrigin: 'content-box',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
             <h3 style={{textShadow:'4px 4px 8px red',color:'white'}}>{this.props.book.name}</h3>
              <p style={{fontsize:'19',color:'white' }}>prix:{this.props.book.prix}$</p>
              
            <p style={{fontsize:'19rem',color:'red' }}>nombre de commande</p><input style={{width:'10rem',height:'1.5rem'}} type="number" min={'1'} value={this.state.qty} onChange={(event)=>{this.setState({qty:event.target.value});adjust(this.props.book._id,event.target.value)}}/>
             
                  

                 
            
     
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
      removeFromCart:(id)=>dispatch(removeFromCart(id)),
      adjust:(id,value)=>dispatch(adjust(id,value))

    }
  }



  export default connect(mapStateToProps, mapDispatchToProps)(Singleproduitcart);