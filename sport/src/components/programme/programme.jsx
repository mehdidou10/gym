import React, { Component } from 'react'
import Singleprogramme from './singleprogramme';

 class Programme extends Component {
  constructor(props){
    super(props);
    this.state = {
        count: 4,
        slidecount:0
    }
}
  render() {
    return (
      <div style={{ 
        display: 'flex',
        flexWrap: 'wrap',
        width: "80%",
        height:'38rem',
        backgroundColor:'yellow',
        marginLeft:'10rem'
      }}>
    
    {this.props.pro.map((el,idx) => /*this.state.slidecount <idx && */ idx < this.state.count  ? <Singleprogramme book={el} key={idx}/> : <></> )}
    {<button style={{height:'8rem'}}  type="link"  onClick={e => {this.setState({count: this.state.count + 3})
                                /* this.setState({slidecount:this.state.slidecount+3})*/ }}>Afficher plus de résultat</button>}
   
   </div>
   
    
   
  
    )
  }
}
export default Programme;