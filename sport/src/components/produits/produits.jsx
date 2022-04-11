import React, { Component } from 'react';
import Singleproduit from './singleproduit';

class Produits extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 3
        }
    }
    render(){
        return (<div style={{ 
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:'column',
            width: '75%',
            height:'122rem',
            backgroundColor:'blue',
            marginBottom:'3rem',
            marginLeft:'2rem',
            position:'relative',
            margin:'2rem ',
            gap:'3rem',
            }}>

<div style={{backgroundColor:'gold'}}>

              <h1 style={{height: '7rem',color: '#fff',lineHeight: '160px',marginBottom:'3rem'}} > Nutrition Sportive</h1>

 <div style={{backgroundColor:'red',height:'23rem' ,width:'70rem',marginTop:'' ,  display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row',overflow:'hidden',overflowX:'scroll'}}>
{this.props.fitn.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx}/> : <></>)}
{<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >
     <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='moomom'/>
</button>}
       </div>

</div>     



<div style={{backgroundColor:'black'}}>
        
         <h1 style={{height: '160px',color: '#fff',lineHeight: '160px'}}>Vitamines et Santé</h1>

<div style={{backgroundColor:'black',height:'23rem' ,width:'70rem',display: 'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',overflow:'hidden',overflowX:'scroll'}}>
{this.props.fitn2.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx} /> : <></>)}
{<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >
     <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='mmo'/>
</button>}
         </div>
            
</div>            
            


<div style={{backgroundColor:'brown'}}>      
             <h1 style={{height: '160px',color: '#fff',lineHeight: '160px'}}>Vêtements et Accessoires</h1>

<div style={{marginBottom:'10rem',backgroundColor:'black',height:'23rem' ,width:'70rem',   display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'row',overflow:'hidden',overflowX:'scroll'}}>
{this.props.fitn3.map((el,idx) => idx < this.state.count ? <Singleproduit book={el} key={idx}/> : <></>)}
{<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >
     <img style={{width:'3rem',height:'3rem'}} src="https://static.vecteezy.com/ti/vecteur-libre/p2/567102-icone-plus-supplementaire-gratuit-vectoriel.jpg" alt='mom'/>
</button>}
           </div>
</div>             
        
   
        
        
</div>)
    }
}

export default Produits;
