import React, { Component } from 'react'
import Coach from '../coach/coach'
import dotocoach from '../MOCK_DATA coach.json'
class Coachcontainer extends Component {
  render() {
    return (
      <div style={{
        display: 'flex',
        justifyContent:'center',
        height:'40rem',
        width:'100%',
      }}>
          <Coach co={dotocoach}/>
      </div>
    )
  }
}
export default Coachcontainer