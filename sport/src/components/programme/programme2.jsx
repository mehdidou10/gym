import React, { Component } from 'react'
import Singleprogramme from './singleprogramme'


 class Programme2 extends Component {
  render() {
    return (
      <div style={{ 
        display: 'flex',
        justifyContent:'space-around',
        alignItems:'center',
        width:'80rem',
        height:'38rem',
        backgroundColor:'yellow',
      }}>
 {this.props.pro.map((el) => <Singleprogramme book={el} /> )}
</div>
    )
  }
}
export default Programme2
