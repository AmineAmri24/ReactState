import React, { Component } from 'react'
import Person from './Component/Person'
import './App.css'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {show:false}
  }
  handleClick = () => this.setState({show: !this.state.show})
  render() {
    return (
      <div className='content'>
        <button className='button-49' onClick={this.handleClick}>Toggle</button>
        {this.state.show?<Person/>:null}
      </div>
    )
  }
}

