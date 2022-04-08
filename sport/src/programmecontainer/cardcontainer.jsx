import React, { Component } from 'react'
import Card from '../components/card/card'

class Cardcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
         
        }
      }
componentDidMount = async () => {
        let token = JSON.parse(localStorage.getItem("TOKEN"))
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authtoken: token,

                     },
                     };
       let data= await fetch("http://localhost:777/card",options);
       let response= await data.json()
       this.setState({
        data:response.user
      });
       console.log(response,"aaaaa")
     
}
  render() {
    console.log(this.state)
    return (
      <div style={{
          backgroundColor:'violet',
          height:'120vh',
          display:'flex',
        justifyContent:'flex-start',
        alignItems:'center'
        }} >

     <Card card1={this.state.data}/>
     
      </div>
    )
  }
}
export default Cardcontainer