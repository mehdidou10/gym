import React, { Component } from 'react'
import './singleproduits.css'
import { Carousel } from 'antd';

//import { Card } from 'antd';

 class Singleproduit extends Component {
  render() {
     
    return (
      
  /*  <div>
<Card style={{ width: 200,margin: 10}}
        cover={ <img src={this.props.book.photo1} /> }
      price={this.props.book.prix}
    >
 <Card.Meta
        
        title={this.props.book.name}
        description={this.props.book.description}
        />

</Card>
</div>
    
  
    )
    }
}*/


<div style={{ 
            width: '23rem',
            height:'20rem',
            margin: 10,
            padding:22,
            backgroundColor:'greenyellow',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column'
        }}>
    <div className='content'>
   <div class="content-overlay"></div>
   <Carousel  autoplay>
     <div>
<img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo1} alt='produit'/>
    </div>
    <div>
    <img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo2} alt='produit'/>
   </div>
   <div>
   <img className='content-image' style={{width:'15rem',height:'15rem'}} src={this.props.book.photo3} alt='produit'/>

   </div>
     </Carousel>     
     <div className="content-details fadeIn-bottom">
            <h3 className="content-title">{this.props.book.name}</h3>
         </div>
     </div> 
         <div>
              <h5 >{this.props.book.prix}</h5>
               <button >
                      Suscribe2
               </button>
          </div>
    
    </div>
    )}}
export default Singleproduit