import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd';


class Singlecard extends Component {
  render() {
    console.log(this.props)
    return( <Card 
      style={{
        height:'10rem',
      }}
     
      
      cover={
      <img style={{height:'20rem',width:'20rem'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
    >
      <Card.Meta  title={this.props.user1[0]?.First_Name} description={this.props.user1[0]?.Email} />
      <p>{this.props.user1[0]?.Email}</p>
    <p>{this.props.abonnement.abonnement}</p>
    <p></p>
    <input type="file" accept="image/*" />
    </Card>
  


    )
  }
}
const mapStateToProps = (state) => ({
    abonnement:state
})
export default connect(mapStateToProps, null)(Singlecard)