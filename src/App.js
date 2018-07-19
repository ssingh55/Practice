import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: 'techasas'
  }

  changeName1 = () => {
    this.setState({
        name: 'something different'
    })
  }
  changeName = (newName)=>{
    this.setState({
      name: newName
    })
  }

  changeNameFromInput = (event)=>{
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
      <br/>
      <button onClick={this.changeName1}>Change button1</button>
      <button onClick={()=>this.changeName('Awesome sasas')}>Change button2</button>
      <button onClick={this.changeName.bind(this,'wesome bind')}>Change button3</button>
      <br/> <br/>
      <input type="text" onChange={this.changeNameFromInput} value={this.state.name}/>
      <br/>
      <div>{this.state.name}</div>
      </div>
    );
  }
}

export default App;
