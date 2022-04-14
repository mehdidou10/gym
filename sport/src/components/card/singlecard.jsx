import React, { Component } from 'react'
import { connect } from 'react-redux'

class Singlecard extends Component {
  render() {
    console.log(this.props)
    return( 
    
    <div style={{
        height:'30rem',
        width:'35rem',
        backgroundColor:'blue',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column'

      }}>
      
 <img style={{height:'10rem',width:'10rem'}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
   
    
    <p>{this.props.abonnement.abonnement}</p>
    <h1>{this.props.user1[0]?.First_Name}</h1>
    <h1>{this.props.user1[0]?.Last_Name}</h1>
    <h1>{this.props.user1[0]?.Email}</h1>
    <input type="file" accept="image/*" />
    </div>
  


    )
  }
}
const mapStateToProps = (state) => ({
    abonnement:state
})
export default connect(mapStateToProps, null)(Singlecard)