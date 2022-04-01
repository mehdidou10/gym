import React, { Component } from 'react'

 class singleprogramme extends Component {
  render() {
    return (
    <div   style={{ 
            width: '15rem',
            height:'20rem',
            margin: 10,
            padding:22,
            backgroundColor:'blue'
        }}>
      <img  src={this.props.book.wow} />

      <div>
          <h5 >{this.props.book.first_name}</h5>
          <p style={{ 
                  backgroundColor:'gold'
                   }}>
                     {this.props.book.email}</p>
    
           <button >
                  Suscribe2
           </button>
      </div>
     
</div>
    )
  }
}


export default singleprogramme;