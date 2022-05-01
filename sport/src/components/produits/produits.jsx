import React, { Component } from 'react';
import Singleproduit from './singleproduit';
import { connect } from "react-redux";
import 'antd/dist/antd.css';

import {PlusCircleTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { CheckSquareTwoTone,ShoppingCartOutlined } from '@ant-design/icons';
import './singleproduits.css';



class Produits extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:[],
            data2:[],
            data3:[],
            collapsed: false,
            count: 3
        }
    }
    componentDidMount = async () => {
        //console.log(this.props.produits1,this.props.produits2,this.props.produits3);
               // console.log(response,"aaaaa")
              //console.log(response2,"rrrr")
              //console.log(response3,"zzzz")
           }
        
        

    render(){
       
        return (

<div className='produitscontainer' >







<div className='menu' >
    
      <Link to={"/Produitnutrition"}><button className='btncategorie1'><CheckSquareTwoTone /> Nutrition Sportive </button></Link>
      <Link to={"/Produitvitamine"}><button className='btncategorie1'><CheckSquareTwoTone /> Vitamines et Santé</button></Link>
      <Link to={"/Produitvetement"}> <button className='btncategorie1'><CheckSquareTwoTone /> Vêtements et Accessoires</button></Link>

        <Link to={"/Cart"}><button className='btncategorie1'><CheckSquareTwoTone /> panier  <ShoppingCartOutlined /></button></Link>
        
       
    
  </div>





<div className='produits'>




    <div className='Nutrition-Sportive'>
        <h1 > Nutrition Sportive</h1>
        <div className='Nutrition'>
           {this.props.products1.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx} /> : <></>)}
           {<button className='btn2' type="link" style={{width:'3rem',height:'3rem'}}  onClick={e => this.setState({count: this.state.count + 2})} >
           <PlusCircleTwoTone />
               
          </button>}
        </div>
   </div>     



     <div className='Vitamines-Santé '>
        <h1>Vitamines et Santé</h1>
        <div className='Vitamines'>   
           {this.props.products2.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx} /> : <></>)}
           {<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >
               <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='mmo'/>
           </button>}
        </div>
            
     </div>            
            


   <div className='Vêtements-Accessoires'>      
                 <h1 >Vêtements et Accessoires</h1>
          <div className='Vêtements'>
            {this.props.products3.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx}/> : <></>)}
            {<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >
                <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='mom'/>
            </button>}
          </div>
   </div>             
        
   
        





        
</div>







</div>


  )
 }
}



//const mapDispatchToProps = (dispatch)=>{    //envoie les ldonnes
  //return{




const mapStateToProps = (state) => {       // recuperer les donnes 
    return{
products1:state.shop.products1,
products2:state.shop.products2,
products3:state.shop.products3
}
}

  export default connect(mapStateToProps)(Produits);