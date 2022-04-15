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
       collapsed: false
     }
    }

    componentDidMount = async () => {
    let data= await fetch("http://localhost:777/produits");
    let response= await data.json();
     let data2= await fetch("http://localhost:777/produits2");
     let response2= await data2.json();

     let data3= await fetch("http://localhost:777/produits3");
     let response3= await data3.json();

     this.setState({
      data: response.produits,
      data2: response2.produits2,
      data3:response3.produits3
    });

      console.log(response,"aaaaa")
      console.log(response2,"rrrr")
      console.log(response3,"zzzz")
   }

  render() {

    const { SubMenu } = Menu;

    return (
      
      
      <div>
 <div style={{ width: 256 }}>
        
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark"  inlineCollapsed={this.state.collapsed}>
          
          
          <Menu.Item  >
            Option 1
          </Menu.Item>
          <Menu.Item  >
            Option 2
          </Menu.Item>
        

          <SubMenu  icon={<MailOutlined />} title="produits">
          <Link to={"/Produitnutrition" }> <Menu.Item key="5">Nutrition Sportive</Menu.Item></Link>
            <Menu.Item key="6">Vitamines et Santé</Menu.Item>
            <Menu.Item key="7">Vêtements et Accessoires </Menu.Item>
          </SubMenu>



          <SubMenu  icon={<AppstoreOutlined />} title="panier">
            <Menu.Item key="9">panier</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>

        </Menu>
      </div>







      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        height:'320vh',
        width:'100%',
        backgroundColor:'orange',
      }} >
   

    <Produits fitn={this.state.data} fitn2={this.state.data2} fitn3={this.state.data3} />
          
        </div>
        
        </div>
    )
  }
}
export default Produitscontainers