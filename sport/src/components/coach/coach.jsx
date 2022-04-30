import React, { Component } from "react";
import Singlecoach from "../coach/singlecoach";
import './singlecoach.css'
class Coach extends Component {

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
        <div className='coach' >
        {this.state.data.map((el) => (<Singlecoach personnage={el} />))}
                 
              
       
       
                
             </div>
    );
  }
}




export default Coach;
