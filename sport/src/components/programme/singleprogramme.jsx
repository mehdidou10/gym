import React, { Component } from 'react'

 class singleprogramme extends Component {
  render() {
    console.log(this.props.data1)
    return (
    <div   style={{ 
            width: '15rem',
            height:'20rem',
            margin: 10,
            padding:22,
            backgroundColor:'blue',
            display:'flex',
            alignItems:'center'
        }}>
      

  <img style={{width:'5rem',height:'5rem'}} src="" alt={this.props.data1.coach} />
      <h5 style={{color:'white',fontSize:"2rem"}}>{this.props.data1.programme}</h5>
          <p style={{
                  backgroundColor:'gold'
                   }}>
                     {this.props.data1.tarif}</p>
    
           <button >
                  Suscribe2
           </button>
      
     
</div>
    )
  }
}


export default singleprogramme;