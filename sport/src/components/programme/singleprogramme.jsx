import React, { Component } from 'react'
import { Link } from "react-router-dom";

 class singleprogramme extends Component {
  render() {
    console.log(this.props)
    return (
    <div   style={{ 
            width: '15rem',
            height:'20rem',
            margin: 10,
            padding:22,
            backgroundColor:'blue',
            display:'flex',
            alignItems:'center'
        }}>
      

  <img style={{width:'5rem',height:'5rem'}} src="" alt={this.props.data1.coach}/>
      <h5 style={{color:'white',fontSize:"2rem"}}>{this.props.data1.programme}</h5>
          <p style={{
                  backgroundColor:'gold'
                   }}>
                     {this.props.data1.tarif}</p>
                     <Link to={"/cardcontainer" }>
 <button  onClick={e => this.props.dispatch1({type: "programme", abonnement: this.props.data1.programme})}>
                       Ok</button>
                       </Link>
     
</div>
    )
  }
}


export default singleprogramme;