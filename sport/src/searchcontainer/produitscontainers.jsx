import React, { Component } from 'react'
import Produits from '../components/produits/produits';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined,MailOutlined} from '@ant-design/icons';
import { Link } from "react-router-dom";


class Produitscontainers extends Component {
  constructor(props){
    super(props);
     this.state={
       data:[],
       data2:[],
       data3:[],
       collapsed: false,
       
     }
    }


componentDidMount = async () => {
//console.log(this.props.produits1,this.props.produits2,this.props.produits3);
       // console.log(response,"aaaaa")
      //console.log(response2,"rrrr")
      //console.log(response3,"zzzz")
   }


   

  render() {
//console.log(this.props.products)
    const { SubMenu } = Menu;

    return (
      

      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        flexDirection:'row',
        height:'320vh',
        width:'100%',
        backgroundColor:'orange',
      }} >
   <div style={{height:'30rem', width:'33rem',marginLeft:'.3rem',backgroundColor:'violet' }}>
        
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark"  inlineCollapsed={this.state.collapsed}>
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
            <Menu.Item key="9">panier</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>
       </Menu>

            
        
      </div>
   <Produits/>
       </div>
    )
  }
}

//const mapDispatchToProps = (dispatch)=>{    //envoie les ldonnes
  //return{
   
 




export default Produitscontainers