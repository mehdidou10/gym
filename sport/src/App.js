import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import Home from './components/home/home';
import Bigsearch from './components/bigSearch/bigsearch';
import Produitscontainers from '../src/searchcontainer/produitscontainers';
//import Programmecontainer from '../src/programmecontainer/programmecontainer';
import Nav from './components/navbar/nav';
import Login from './components/login/login';
import Singup from './components/signup/signup';
import Cardcontainer from './programmecontainer/cardcontainer';
import Programme from './components/programme/programme';
import { Provider } from 'react-redux';
import {store } from './components/redux/reducer';
class App extends Component {
 render(){
    console.log(this.props)
    return (
      <Provider store={store}>
    <div style={{
     height:'120vh',
     }}>
     
    <Router>
    <Nav/>
   <Routes>
     
     <Route exact path="/" element={<Bigsearch/>} /> 
     <Route path="/Produitscontainers" element={<Produitscontainers/>} />
    
    <Route path="/login" element={<Login/>}/>
    <Route path="/signup" element={<Singup/>}/>
    <Route path="/cardcontainer" element={<Cardcontainer/>}/>
    <Route path="/programme" element={<Programme/>}/>
    

   </Routes>
   </Router>   
   </div>
  </Provider>  
    );
  }
}
export default App;