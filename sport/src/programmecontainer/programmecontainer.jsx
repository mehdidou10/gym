import React, { Component } from 'react'
import Programme from '../components/programme/programme';


 class Programmecontainer extends Component {
  
  render() {
    return (
      <div  style={{
        backgroundImage:'url(/image.jpg)',
        backgroundRepeat:'no-repeat',
          backgroundColor:'violet',
          height:'220vh',
        }} 
        >
            
      <Programme/>
        
        </div>
    )
  }
}
export default Programmecontainer