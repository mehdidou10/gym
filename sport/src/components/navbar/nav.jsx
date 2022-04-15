import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import {logout} from '../redux/action';
import { connect } from "react-redux";
import { withRouter } from '../withrouter/withrouter';
import { compose } from "redux";


class nav extends Component {
  render() {
    let islogged = this.props.isLogged;
    console.log(islogged,'ttytygf')
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



             <div className="item wah"> 
             <Link to={"/Home2" }>
             <button> 
                         HOME 
              </button>
              </Link>


             </div>

            


             <div className="item"> 
             <Link to={'/produitscontainers'} > <button>produits</button></Link>
             </div>
             
             <div className="item"> 
             <Link to={'/cardcontainer'} > <button> card </button></Link>
             </div>
             
             <div className="item">
             <Link to={"/Programme"}> <button> Abonnement </button></Link>
            </div>

            {islogged? <div className="item"> 
<button onClick={()=>{
  this.props.logout()
  this.props.navigate("/")

   }} >deconn</button>
             </div>:<div className="item selected">
            <Link to={"/login"}><button>  is not logged</button></Link>
            </div>}







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

const mapStateToProps = (state) => {
  return{
    isLogged:state.isLogged.isLogged

  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    logout:() => dispatch(logout()),
  }

}
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(nav); 