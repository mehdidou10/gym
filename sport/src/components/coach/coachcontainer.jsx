import React, { Component } from 'react'
import Coach from '../coach/coach'

class Coachcontainer extends Component {
  constructor(props){
    super(props);
     this.state={
       data:[]

     }

    }

  componentDidMount = async () => {
  
   let data= await fetch("http://localhost:777/coaches");
   let response= await data.json()
   this.setState({
    data: response.coaches
  });
   console.log(response,"aaaaa")

}
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent:'center',
        height:'40rem',
        width:'100%',
        backgroundColor:'red'
      }}>
          <Coach co={this.state.data}/>
      </div>
    )
  }
}
export default Coachcontainer