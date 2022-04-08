import React, { Component } from 'react'
import { Card } from 'antd';
 class Singlecard extends Component {
  render() {
    return( <Card 
      style={{
        height:'10rem',
      }}
     
      
      cover={
      <img style={{height:'25rem'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
    >
      <Card.Meta  title="Europe Street beat" description="www.instagram.com" />
    </Card>
    )
  }
}
export default Singlecard 