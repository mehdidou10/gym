import React, { Component } from 'react'
import Coach from '../coach/coach'
import Singlecoach from "../coach/singlecoach";
import './singlecoach.css'

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
   //console.log(response,"aaaaa")

}
  render() {
    return (
      <div className='container' >
 {this.state.data.map((el) => (<Singlecoach personnage={el} />))}
          
       


          <Coach co={this.state.data}/>
      </div>
    )
  }
}
export default Coachcontainer