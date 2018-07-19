import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import UniqueId from 'react-html-id';

class App extends Component {
  constructor(){
    super();
    UniqueId.enableUniqueIds(this)

  this.state = {
    users:[
      {id:this.nextUniqueId(),name:'john',age:25},
      {id:this.nextUniqueId(),name:'jjill',age:26},
      {id:this.nextUniqueId(),name:'rahul',age:27},
    ]
  }
  console.log(this.state)
  }

  changeUserName = (id,e)=>{
    const index = this.state.users.findIndex((user)=>{
      return user.id === id
    })
    const user = Object.assign({},this.state.users[index]);


    user.name = e.target.value;

    const users = Object.assign([],this.state.users);

    users[index] = user;

    this.setState({users:users})

  }

  deleteUser = (index,e)=>{
    const users = Object.assign([],this.state.users);
    users.splice(index,1);
    this.setState({users:users})
  }
  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user,index)=>{
              return(<User 
                age={user.age}
                key={user.id}
                changeEvent={this.changeUserName.bind(this,user.id)}
              delEvent={this.deleteUser.bind(this,index)}
              >{user.name}</User>)
            })
          }
        </ul>
        </div>
    );
  }
}

export default App;
