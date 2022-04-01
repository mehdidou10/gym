import React, { Component } from 'react'
import Produits from '../components/produits/produits';

import doto from "../components/MOCK_DATA (1).json"
//import Inscritstoi from '../components/inscription/inscritstoi';


class Produitscontainers extends Component {
  render() {
    return (
      <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        height:'120vh',
        backgroundColor:'orange',
      }} >
          
         <Produits books={doto}/>
          {/*  <Inscritstoi/>*/}
        </div>
    )
  }
}
export default Produitscontainers