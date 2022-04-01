import React, { Component } from 'react'
 class Singlecoach extends Component {
  render() {
    return (
      <div style={{ 
        width: 200,
        margin: 10,
        padding:22,
        backgroundColor:'greenyellow'
    }}>
 <img  src={this.props.personnage.photo} />
      <div>
          <h5 >{this.props.personnage.first_name}</h5>
          <p style={{ 
                  backgroundColor:'gold'
                   }}>
                     {this.props.personnage.email}</p>
    
           <button >
                  Suscribe2
           </button>
      </div>

</div>
    )
  }
}
export default Singlecoach