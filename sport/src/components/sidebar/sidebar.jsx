import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import { AppstoreOutlined,MailOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

 class Sidebar extends Component {
    constructor(props){
        super(props);
         this.state={
            collapsed: false,
          }
        }

    render() {
    return (
        <div style={{ width: 256 }}>
        
        <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark"  inlineCollapsed={this.state.collapsed}>
          
          
          <Menu.Item  >
            Option 1
          </Menu.Item>
          <Menu.Item  >
            Option 2
          </Menu.Item>
        

          <SubMenu  icon={<MailOutlined />} title="produits">
            <Menu.Item key="5">Nutrition Sportive</Menu.Item>
            <Menu.Item key="6">Vitamines et Santé</Menu.Item>
            <Menu.Item key="7">Vêtements et Accessoires </Menu.Item>
          </SubMenu>



          <SubMenu  icon={<AppstoreOutlined />} title="panier">
            <Menu.Item key="9">panier</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
          </SubMenu>



        </Menu>
      </div>
    )
  }
}
export default Sidebar