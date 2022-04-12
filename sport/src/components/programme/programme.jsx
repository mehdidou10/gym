import React, { Component } from 'react'
import Singleprogramme from './singleprogramme';
import { connect } from 'react-redux'

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
      <div style={{ 
        display: 'flex',
        justifyContent:'center',
        flexWrap: 'wrap',
        width: "80%",
        height:'38rem',
        backgroundColor:'yellow',
        marginLeft:'10rem'
      }}>
    
    {this.state.data.map((el)=> <Singleprogramme data1={el} dispatch1={dispatch}/>)}
   </div>
   
    
    )
  }
}
 
export default connect( null)(Programme)