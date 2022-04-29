import React, { Component } from 'react';
import Singleproduit from './singleproduit';
import { connect } from "react-redux";
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined,MailOutlined,PlusCircleTwoTone } from '@ant-design/icons';
import { Link } from "react-router-dom";
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
        const { SubMenu } = Menu;
        return (

<div className='container' >


<div className='menu' >
    
    <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" color='silver' inlineCollapsed={this.state.collapsed}>
        <Menu.Item  >
          Option 1
        </Menu.Item>
        <Menu.Item  >
          Option 2
        </Menu.Item>
  
        <SubMenu  icon={<MailOutlined />} title="produits">
        <Link to={"/Produitnutrition"}><Menu.Item key="5">Nutrition Sportive</Menu.Item></Link>
        <Link to={"/Produitvitamine"}> <Menu.Item key="6">Vitamines et Santé</Menu.Item></Link>
        <Link to={"/Produitvetement"}> <Menu.Item key="7">Vêtements et Accessoires </Menu.Item></Link>
        </SubMenu>
        <SubMenu  icon={<AppstoreOutlined />} title="panier">
        <Link to={"/Cart"}><Menu.Item key="9">panier</Menu.Item></Link>
          <Menu.Item key="10">Option 10</Menu.Item>
        </SubMenu>
     </Menu>
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