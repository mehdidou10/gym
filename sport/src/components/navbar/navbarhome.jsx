import React, { Component } from 'react'
import './nav.css'
import { Link } from "react-router-dom";


 class Navbarhome extends Component {
  render() {
    return (
        <div className="navbar" >


        <div className="left-side">
                 <div className="item wah"> 
                       <Link to={"/" }>
                          <button> 
                             HOME 
                          </button>
                       </Link>
                 </div>
               
                 <div className="item"> 
                 <Link to={'/produitscontainers'} > <button>produits</button></Link>
                 </div>
                 
               <div className="item">
               <Link to={"/Programme"}> <button> Abonnement </button></Link>
               </div>
                 
                <div className="item selected">
                <Link to={"/login"}><button> Sign in / Login</button></Link>
                </div>
                <div className="item selected ">
                <Link to={"/signup" }>
                    <button className="signup"> Sign up </button>
                </Link>
                </div>
                
             
        </div>
    
    
    </div>
    
    )
  }
}
export default Navbarhome