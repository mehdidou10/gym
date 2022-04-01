import React, { Component } from 'react'

 class Card extends Component {




    componentDidMount = async () => {
        let token = JSON.parse(localStorage.getItem("TOKEN"))
        let options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                auhtoken: token,

                     },
            
                     };
       let data= await fetch("http://localhost:777/card",options);
       let response= await data.json()
       console.log(response)
}

  render() {
   
return (
      <div>
        
      </div>
    )
  
}}
export default Card