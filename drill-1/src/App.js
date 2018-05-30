import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addGuest, removeGuest } from './ducks/guestList'

class App extends Component {
  constructor() {
    super()
      
    this.state = {
      userInput: ''
    }
    
    this.updateUserInput = this.updateUserInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateUserInput(val){
    this.setState({
      userInput: val
    })
  }

  submit(e){
    e.preventDefault();
    this.props.addGuest(this.state.userInput);
    this.setState({userInput: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>DevMountain Hackathon</h1>
        <h3>Guest List:</h3>
        <ul>
          {this.props.guests.map((guest, i)=>{
            return (
              <div key={i} className="list-item">
              <li>{guest}</li>
              <button type="" className="" onClick={()=> this.props.removeGuest(guest)}>Remove</button>
            </div>)
          })}
        </ul>
        <form
          onSubmit={this.submit}
          className="add-guest"
          value={this.state.userInput} >
          Add guest: <input type="" className="" onChange={(e)=> this.updateUserInput(e.target.value)}/>
          <button type="" className="">Add</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {guests: state.guests}
}

export default connect(mapStateToProps, {addGuest, removeGuest})(App);
