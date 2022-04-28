import React, { Component } from 'react'
import { connect } from "react-redux";
import {addToCart,removeFromCart,adjust} from "../redux/action";
import './singleproduits.css'
import { Link } from "react-router-dom";
import { Carousel } from 'antd';
import { CloseOutlined } from '@ant-design/icons'



 class Singleproduit2 extends Component {
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
        <div style={{display:'flex',flexDirection:'row',backgroundColor:'gold',}}>
        
        
        
        
        
        <div style={{ 
            width: '40rem',
            height:'20rem',
            margin: 10,
            
            backgroundColor:'greenyellow',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'row',
        }}>


    
      <div>  

         <Carousel  autoplay>
             <div>
             <img  style={{width:'15rem',height:'15rem'}} src={this.props.book.photo1} alt='produit'/>
             </div>
         </Carousel>   
         <button onClick={()=> removeFromCart(this.props.book._id)}>
                  <CloseOutlined /> supprimer
          </button>

         </div>  



    <div  style={{ width:'25rem',height:'15rem',
    marginLeft:'1rem',
           backgroundColor:'red',
            display:'flex',
            flexDirection:'column',
            gap:'1rem'
        }}>
             <h3 className="content-title">{this.props.book.name}</h3>
              <p style={{fontsize:'9rem'}}>{this.props.book.prix}$</p>
              

              <Link to={`/leproduit/${this.props.book._id}`}> 
                 <button>
                   voir le produits
                 </button>
              </Link>

          <input type="number" min={'1'} value={this.state.qty} onChange={(event)=>{this.setState({qty:event.target.value});adjust(this.props.book._id,event.target.value)}}/>
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



  export default connect(mapStateToProps, mapDispatchToProps)(Singleproduit2);