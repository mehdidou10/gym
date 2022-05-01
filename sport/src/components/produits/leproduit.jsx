import React from 'react'
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";
import './leproduit.css'
//import { Carousel } from 'antd';
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import { CheckCircleTwoTone ,ShoppingCartOutlined} from "@ant-design/icons";

function Leproduit({products1,products2,products3}) {

let {pro} = useParams()
let produit1 = products1.filter((items) => (items._id === pro ? true : false));
let produit2 = products2.filter((items)=> (items._id === pro ? true : false));
let produit3 = products3.filter((items) => (items._id === pro ? true : false));
let filter = produit1.concat(produit2).concat(produit3);
let item = filter[0];
 
  console.log(filter,pro)
  return (


<div className='le'> 
<h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>TOP VENTES !</h1>
<div className='leproduit' >





        <div className='imageleprodui'>

                      {/*<Carousel  autoplay>
                          <div>
                            <img  width={480} height={400} src={item?.photo1} alt='produit'/>
                           </div>
                           <div>
                             <img  width={480} height={400} src={item?.photo2} alt='produit'/>
                           </div>
                            <div>
                            <img  width={480} height={400} src={item?.photo3} alt='produit'/>
                            </div>
                       </Carousel>   */}


         
        </div>



        <div className='infoleproduit'>
         
                 <div className='nameleproduit'>
                      <h2 style={{textShadow:'2px 2px 5px red',color:'white'}}>{item?.name}</h2>
                      <h5 style={{textShadow:'2px 2px 5px',color:'white'}}><CheckCircleTwoTone/> {item?.description}</h5>
                 </div>






                 
                 <div className='descriptionleproduit' >  
                 <Carousel isAutoPlaying={true} autoPlayInterval={3000} widgetsHasShadow={true} hasIndexBoard={false}  hasDotButtons={"bottom"} hasSizeButton={false} hasMediaButton={false}  hasThumbnails={false}>

                     <div className='detailleproduit'>
                         <h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>LES PLUS DU PRODUIT</h1>
                      <h5><CheckCircleTwoTone/> {item?.description}</h5>
                      <h5><CheckCircleTwoTone/> {item?.description}</h5>
                      <h5><CheckCircleTwoTone/> {item?.description}</h5>
                      <h5><CheckCircleTwoTone/> {item?.description}</h5>
                    </div>


                      <div className='utilistationleproduit'>

                       <h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>UTILISATION</h1>
                       <p><CheckCircleTwoTone/></p>
                       <p><CheckCircleTwoTone/></p>
                       <p><CheckCircleTwoTone/></p>

                      </div>

                      <div className='utilistationleproduit'>

                       <h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>CE QU'EN DISENT NOS COACHS</h1>
                       <p><CheckCircleTwoTone/> </p>
                       <p><CheckCircleTwoTone/></p>
                       <p><CheckCircleTwoTone/></p>

                      </div>

                      <div className='utilistationleproduit'>

                       <h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>PRÉCAUTION</h1>
                      <p><CheckCircleTwoTone/>{item?.description}</p>
                       <p><CheckCircleTwoTone/></p>
                       <p><CheckCircleTwoTone/></p>

                      </div>
                  </Carousel>

                 </div> 
                 













                 <div className='prixleproduit'> 
                      <h1 style={{textShadow:'2px 2px 5px red',color:'white'}}>prix : {item?.prix} $</h1>
                      <button className='btnleproduit'>ajouter au panier <ShoppingCartOutlined/></button>
                 </div>  


        </div>   


</div>


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

 