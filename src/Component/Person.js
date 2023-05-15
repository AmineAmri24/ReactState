import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props){
        super(props);
        this.Person ={
            fullname : "Amine",
            Bio : "Engineer",
            Profession : "FS JS for now",
            img : "https://www.w3schools.com/howto/img_avatar.png"  
        }
        this.state = {count:0}
    }

    // this is when the counter starts to count
  componentDidMount(){
      setInterval(()=>{
          this.setState(prevState=>({
              count: prevState.count+1
          }))
      }, 1000)
  }
  componentWillUnmount(){
      clearInterval(this.state)
    }
  render() {
    return (
      <div>
       <h2>{this.Person.fullname}</h2>
       <h2>{this.Person.Bio}</h2> 
       <h2>{this.Person.Profession}</h2> 
       <img src ={this.Person.img} alt = "profilpict" />
       <div>Compteur:{this.state.count}</div>
      </div>
    )
  }
}
