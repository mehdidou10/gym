import React, { Component } from 'react'
import Singleprogramme from './singleprogramme';

 class Programme extends Component {
  constructor(props){
    super(props);
     this.state={
       data:[]
}
}


  componentDidMount = async () => {
  fetch()
}



 fetch= async()=>{
  let data= await fetch("http://localhost:777/programme");
  let response= await data.json()
  this.setState({
   data: response.programme
 });
  console.log(response,"aaaaa")



 }
  render() {
    return (
      <div style={{ 
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        width: "80%",
        height:'38rem',
        backgroundColor:'yellow',
        marginLeft:'10rem'
      }}>
    
    <Singleprogramme data1={this.state.data}/>
   </div>
   
    
    )
  }
}
export default Programme;