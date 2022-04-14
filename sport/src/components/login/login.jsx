import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './login.css';
import { withRouter } from '../withrouter/withrouter';
import login from '../redux/isloggedreducer'
import { compose } from "redux";
import { connect } from "react-redux";




 class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        Email: "",
        password:""

    };
}

sendforlogin = async (Email,password) => {
        console.log("dghg")
  let options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          Email,
          password,
      })
  };
 let data= await fetch("http://localhost:777/login", options);
 let response= await data.json()
 if(data.status===200){
   this.props.login()
  localStorage.setItem("TOKEN", JSON.stringify(response.token))}
 console.log(response)
}

  render() {
    console.log(this.props.isLogged)
    const contentStyle = {
      
      color: '#fff',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#364d79',
      height:'18rem',
      width:'18rem'
    };
    return ( 

<div class='big3'>

      <div className='text'>
  <Carousel style={{ width:'42rem',height:'25rem',backgroundColor:'red'}} autoplay>
    <div>
      <img style={contentStyle} src="https://i.pinimg.com/564x/f5/c1/69/f5c169ab8625d1d651bf55b168182959.jpg" alt="mmmmmmm" />
    </div>
    <div>
      <span style={{ color:'white',fontSize:'2rem'}}>1. BE PROUD,<br /> 2. STAY STRONG,<br />   3. WORK HARD,  <br/> 4. ASK HOW,<br/>  5. EAT UP,<br /> 6. BE REALISTIC,<br /> 7. REST AND REPEAT</span>
    </div>
    
    <div>
    <img style={contentStyle} src="https://pbs.twimg.com/media/E1qphZ1WQAEJFe9.jpg" alt="opo" />
    </div>
  </Carousel>,            
        </div>




  <div class="card2 " >
          <h3 className="step-title">connexion man</h3>
      <div className="form-group2">
        <label for="email">Email</label>
        <input type="email" onChange={e => this.setState({Email: e.target.value})}  value={this.state.Email}/>
      </div>

       <div className="form-group2">
        <label for="password">Password</label>
        <input type="password" onChange={e => this.setState({password: e.target.value})}  value={this.state.password} />
      </div>
      
  <button type="button"  onClick={() => this.sendforlogin(this.state.Email,this.state.password)} data-next>Connect</button>

        {/*<button type="button"  onClick={() => this.props.navigate('/home2')} data-next>Connect</button>*/}
      
  </div>
    

</div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isLogged:state.isLogged.isLogged

  }
}
console.log(login())

const mapDispatchToProps = (dispatch)=>{
  return{
    login:() => dispatch(login()),
  }

}




export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);