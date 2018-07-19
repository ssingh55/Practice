import React, { Component } from 'react';
import User from './User';

//class component

class Users extends Component {
    render(){
        return (<div>
            <h1>{this.props.title}</h1>
            <User age="20">John</User>
            <User></User>
            <User>John</User>
            </div>
            )
    }
}

export default Users;