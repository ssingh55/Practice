import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent'

class App extends Component {
  state={
    title: 'placeholder title'
  }
  changeTheWorld = (newTitle)=>{
    this.setState({title:newTitle})
  }

  render() {
    return (
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this,'new World')} 
         keepTheWorldEvent={this.changeTheWorld.bind(this,'same World')} 
         title={this.state.title}/> 
      </div>
    );
  }
}

export default App;
