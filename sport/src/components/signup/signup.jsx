import React, { Component } from 'react'
import './signup.css'

 class Singup extends Component {
  constructor(props){
    super(props);
    this.state = {
      First_Name:"",
      Last_Name:"",
      number_phone:"",
      age:"",
      Email: "",
      password:"",
      confirm_your_Password:""

    };
}

sendforsignup = async (sign) => {
        
  let options = {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
        First_Name:this.state.First_Name,
        Last_Name:this.state.Last_Name,
        number_phone:this.state.number_phone,
        age:this.state.age,
        Email: this.state.Email,
        password: this.state.password,
        confirm_your_Password:this.state.confirm_your_Password
      })
  };
 let data= await fetch("http://localhost:777/signup", options);
 let response= await data.json()
 
 console.log(response)
}
  render() {
    
    return (
 <div class="big"> 
              <div class='t'> 
                <h1 class='titre'>creat your profile</h1>
              </div> 
             
<div class='bigs1'>
             

       <div class="card1" data-step>
            <h3 class="step-title">This is step 1</h3>
      
            <div class="form-group1">
              <label for="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName"/>
            </div>
      
            <div class="form-group1">
              <label for="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName"/>
            </div>

            <div class="form-group1">
             <label for="number">number-phone</label>
             <input type="text" name="address" id="address"/>
           </div>
            
           <div class="form-group1">
             <label for="age">age</label>
             <input type="text" name="address" id="address"/>
           </div>
      </div>
 
      

     <div class="card1" data-step>
           <h3 class="step-title">This is step 2</h3>

           <div class="form-group1">
               <label for="address">Email</label>
               <input type="text" onChange={e => this.setState({Email: e.target.value})}  value={this.state.Email}/>
           </div>
 

           <div class="form-group1">
               <label for="password">Password</label>
              <input type="password" onChange={e => this.setState({password: e.target.value})} />
           </div>

          <div class="form-group1">
             <label for="password">confirm your Password</label>
             <input type="password" />
          </div>

         <button type="button" onClick={() => this.sendforsignup() }>Submit</button>
  
      </div>


</div>
</div>
    )
  }
}

export default Singup