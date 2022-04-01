import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css'

class nav extends Component {
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
                     <button>produits</button>
             </div>
            
             <div className="item"> 
                <button> programme </button>
             </div>
    
             <div className="item">
                 <button> contact us  </button>
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
export default nav