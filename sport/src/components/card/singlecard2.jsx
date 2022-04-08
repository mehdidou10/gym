import React, { Component } from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';



 class Singlecard2 extends Component {

  render() {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
    return (
        <div style={{
            width:'25rem'
        }}>
      <Carousel effect="fade">
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>,
      </div>
    )
  }
}
export default Singlecard2