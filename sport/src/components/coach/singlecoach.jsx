import React, { Component } from 'react'
import './singlecoach.css'
 class Singlecoach extends Component {
  render() {
    return (
      <div className='singlecoach' >




<div className='content'>
  <div class="content-overlay"></div>
  <img className='content-image' style={{width:'18rem',height:'20rem'}} src={this.props.personnage.photo} alt='coach'/>
      
      <div class="content-details fadeIn-bottom">
        <h3 class="content-title">{this.props.personnage.name} </h3>
        <a class="content-text" href={this.props.personnage.instagram} target='_blank' ><img style={{width:'2rem',height:'2rem'}} src="https://icones.pro/wp-content/uploads/2021/02/original-instagram-icone2.png" alt='instagram'/></a>
      </div>
</div> 
     


     <div>
          <h5 style={{color:'red',fontSize:'1rem'}}>{this.props.personnage.name}</h5>
          
      </div>




</div>
    )
  }
}
export default Singlecoach