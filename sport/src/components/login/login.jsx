import React, { Component } from 'react'
import './login.css'


 class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        Email: "",
        password:""

    };
}

sendforlogin = async (sign) => {
        console.log("dghg")
  let options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          Email: this.state.Email,
          password: this.state.password,
      })
  };
 let data= await fetch("http://localhost:777/login", options);
 let response= await data.json()
 if(data.status===200){
  localStorage.setItem("TOKEN", JSON.stringify(response.token))}
 console.log(response)
}

  render() {
    return (

<div class='big'>

  <div class="card2 " >
          <h3 class="step-title">connexion man </h3>
      <div class="form-group2">
        <label for="email">Email</label>
        <input type="email" onChange={e => this.setState({Email: e.target.value})}  value={this.state.Email}/>
      </div>

       <div class="form-group2" >
        <label for="password">Password</label>
        <input type="password" onChange={e => this.setState({password: e.target.value})}  value={this.state.password} />
      </div>
      
      <button type="button"  onClick={() => this.sendforlogin()} data-next>Connect</button>
     
  </div>
    

</div>
    )
  }
}
export default Login