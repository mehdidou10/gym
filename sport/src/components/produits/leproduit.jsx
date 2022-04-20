import React from 'react'
import { useParams } from 'react-router-dom';

import { connect } from "react-redux";

function Leproduit({products1,products2,products3}) {

let {pro} = useParams()
let produit1 = products1.filter((items) => (items._id === pro ? true : false));
let produit2 = products2.filter((items)=> (items._id === pro ? true : false));
let produit3 = products3.filter((items) => (items._id === pro ? true : false));
let filter = produit1.concat(produit2).concat(produit3);
let item = filter[0];
 
  console.log(filter)
  return (
    <div> 
<img src={item?.photo1} alt="mlm" width={500} height={500} />
        <h2>{item?.name}</h2>
        <h5>{item?.description}</h5>
        <h1>{item?.prix}</h1>
    </div>
  );
}

const mapStateToProps = (state) => {       // recuperer les donnes 
  return{
products1:state.shop.products1,
products2:state.shop.products2,
products3:state.shop.products3
}
}

export default connect(mapStateToProps)(Leproduit);

 