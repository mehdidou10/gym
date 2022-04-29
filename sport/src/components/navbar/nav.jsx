import React, { Component } from "react";
import { Link } from "react-router-dom";
import './nav.css';
import {logout} from '../redux/action';
import { connect } from "react-redux";
import { withRouter } from '../withrouter/withrouter';
import { compose } from "redux";
import {getallProds1} from '../redux/action';
import {getallProds2} from '../redux/action';
import {getallProds3} from '../redux/action';
import { ShoppingCartOutlined } from '@ant-design/icons'
import '../image/69840.png'
class nav extends Component {

  componentDidMount = async () => {
    let data= await fetch("http://localhost:777/produits");
    let response= await data.json();
     let data2= await fetch("http://localhost:777/produits2");
     let response2= await data2.json();

     let data3= await fetch("http://localhost:777/produits3");
     let response3= await data3.json();
//console.log(response.produits)
  
this.props.getallProds1(response.produits)
this.props.getallProds2(response2.produits2)
 this.props.getallProds3(response3.produits3)
  }


  render() {
    let islogged = this.props.isLogged;
    
    return (

<div className="navbar" >


    <div className="left-side">
      
             <div className="item wah"> 
                   <Link to={"/" }>
                      <button className="btn"> 
                        <img src="69840.png" alt="c"/>
                      </button>
                   </Link>
             </div>

            
{islogged? <> 

             <div className="item wah"> 
             <Link to={"/Home2" }><button className="btn"> HOME2</button></Link>
             </div>
             

             <div className="item"> 
             <Link to={'/produits'} > <button className="btn">produits</button></Link>
             </div>           
              
             <div className="item"> 
             <Link to={'/cardcontainer'} > <button className="btn"> card </button></Link>
             </div>
             
             <div className="item">
             <Link to={"/Programme"}> <button className="btn"> Abonnement </button></Link>
            </div>
            <div className="item selected">
            <Link to={"/cart"}><button className="btn"> <ShoppingCartOutlined /></button></Link>
            </div>


           <div className="item"><button onClick={()=>{this.props.logout();
            localStorage.removeItem("TOKEN");
            this.props.navigate("/")}}>deconnected</button></div></> 
              



            :<div className="item selected">
            <Link to={"/login"}><button> connexion</button></Link>
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
    getallProds1:(products) => dispatch((getallProds1(products))),
  
    getallProds2:(products) => dispatch((getallProds2(products))),
  

    getallProds3:(products) => dispatch((getallProds3(products))),
  }

}
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(nav); 