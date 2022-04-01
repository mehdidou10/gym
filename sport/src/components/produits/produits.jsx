import React, { Component } from 'react';
import Singleproduit from './singleproduit';
class Produits extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 4
        }
    }
   
    
    render(){
        return (<div style={{ 
            display: 'flex',
            flexWrap: 'wrap',
            width: "80%",
            height:'32rem',
            backgroundColor:'black',
            marginLeft:'10rem'
            
        }}>
            {this.props.books.map((el,idx) => idx < this.state.count ? <Singleproduit book={el}/> : <></>)}
            {<button  type="link"  onClick={e => this.setState({count: this.state.count + 2})} >Afficher plus de résultat</button>}
        </div>)
    }
}

export default Produits;
