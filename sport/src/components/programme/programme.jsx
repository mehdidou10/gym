import React, { Component } from 'react'
import Singleprogramme from './singleprogramme';
import { connect } from 'react-redux'
import './programme.css'

 class Programme extends Component {
  constructor(props){
    super(props);
     this.state={
       data:[]
}
}

  componentDidMount = async () => {
  let data= await fetch("http://localhost:777/programme");
  let response= await data.json()
  this.setState({
   data: response.programme
 });
  console.log(response,"aaaaa")

 }
  render() {
    let dispatch = this.props.dispatch;

console.log(this.props,'oippoioo')
    return (

      <div className='pr1' style={{ 
        
        }}>


  <h1 style={{display: 'flex',justifyContent:'center',}}>choose your programme</h1>

      <div className='programme' style={{ 
        
      }}>
    

    
    {this.state.data.map((el)=> <Singleprogramme data1={el} dispatch1={dispatch}/>)}
   </div>
   </div>
    
    )
  }
}
 
export default connect( null)(Programme)