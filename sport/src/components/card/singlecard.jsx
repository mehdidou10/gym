import React, { Component } from 'react'
import { connect } from 'react-redux'
class Singlecard extends Component {


 updateuser = async()=>{
  let token = JSON.parse(localStorage.getItem("TOKEN"))
  let options = {
      method: "PUT",
      headers: {
          "Content-Type": "application/json",
          authtoken: token,
              },

      body:JSON.stringify({
      programme:this.props.abonnement.abonnement,

      })
    };
  let data = await fetch("http://localhost:777/programmeuser",options);
  console.log(data.status)

}

  render() {
    //console.log(this.props)
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
    <button onClick={()=>this.updateuser()}>confirm</button>
    </div>
  
    )
  }
}




const mapStateToProps = (state) => ({
    abonnement:state
})
export default connect(mapStateToProps, null)(Singlecard)