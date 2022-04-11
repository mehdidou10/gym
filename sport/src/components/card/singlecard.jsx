import React, { Component } from 'react'
import { Card } from 'antd';
 class Singlecard extends Component {
  render() {
    return( <Card 
      style={{
        height:'10rem',
      }}
     
      
      cover={
      <img style={{height:'20rem',width:'20rem'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Card.Meta  title={this.props.user1.First_Name} description={this.props.user1.Email} />
    </Card>
    )
  }
}
export default Singlecard 