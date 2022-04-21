import React, { Component } from 'react'
import Singleproduit2 from '../produits/singleproduit2';

import { PlusOutlined } from '@ant-design/icons'
import { connect } from "react-redux";
import { Link } from "react-router-dom";


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
let neworders= async() =>{ 
  let token = JSON.parse(localStorage.getItem("TOKEN"))
  let response  = await fetch("http://localhost:777/orders",{
    method :'POST',
    headers: {
            "Content-Type": "application/json",
            authtoken: token,
        },
    body:JSON.stringify({
         produits1:cart1[0],
         produits2:cart1[1],
         produits3:cart1[2],

    })
                 
                 
  })
      console.log(response.status)
    }

     let cart1 = this.props.cart;
     console.log(cart1)
    return (
      
<div style={{ 
            display: 'flex',
            justifyContent:'center',
           flexDirection:'row',
            width: '100%',
            height:'52rem',
            backgroundColor:'blue',
           gap:'3rem',
            }}> 





   <div style={{height:'30rem',width:'50rem',backgroundColor:'red'}}>
                          <h1>cartt</h1>
 {cart1.map((el,idx)=>(  idx < this.state.count ? <Singleproduit2 book={el} key={idx}/>: <></> ))}
 {<button  type="link"  onClick={() => this.setState({count: this.state.count + 2})} >
 <PlusOutlined /> plus de resultat
</button>}
    </div>







        <div style={{ width: '20rem',height:'19rem',backgroundColor:'brown',marginTop:'2rem',
       
        }}>
              <h2>Total</h2>
              <p>total items:{this.state.totalItems}</p>
              <p >total prix:{this.state.totalprix}$</p>
              <Link to={"/commande"}>
              <button onClick={()=>neworders()}>commander</button>
              </Link>
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
 