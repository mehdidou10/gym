import React, { Component } from 'react'
import Produits from '../components/produits/produits';
import Sidebar from '../components/sidebar/sidebar';

class Produitscontainers extends Component {
  constructor(props){
    super(props);
     this.state={
       data:[],
       data2:[],
       data3:[]
     }
    }


    componentDidMount = async () => {
    let data= await fetch("http://localhost:777/produits");
    let response= await data.json();
     let data2= await fetch("http://localhost:777/produits2");
     let response2= await data2.json();

     let data3= await fetch("http://localhost:777/produits3");
     let response3= await data3.json();

     this.setState({
      data: response.produits,
      data2: response2.produits2,
      data3:response3.produits3
    });

      console.log(response,"aaaaa")
      console.log(response2,"rrrr")
      console.log(response3,"zzzz")
   }

  render() {
    return (
      <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'flex-start',
        height:'320vh',
        width:'100%',
        backgroundColor:'orange',
      }} >
   <Sidebar/>

    <Produits fitn={this.state.data} fitn2={this.state.data2} fitn3={this.state.data3} />
          
        </div>
    )
  }
}
export default Produitscontainers