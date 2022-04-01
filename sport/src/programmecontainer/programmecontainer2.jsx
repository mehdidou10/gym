import React, { Component } from 'react'
import Programme2 from '../components/programme/programme2';

 class Programmecontainer2 extends Component {
  render() {
    let prog3 =this.props.prog2
    return (
      <div>
          {<Programme2 pro={prog3} />}
      </div>
    )
  }
}
export default Programmecontainer2