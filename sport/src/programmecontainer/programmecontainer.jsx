import React, { Component } from 'react'
import Programme from '../components/programme/programme';
import doto2 from "../components/MOCK_DATA.json"

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
            
      <Programme pro={doto2}   />
        
        </div>
    )
  }
}
export default Programmecontainer