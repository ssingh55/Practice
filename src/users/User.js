import React from 'react';

//es6 component

const User = (props)=>{
    let age = props.age ? props.age : 'NA';
    if(props.children){
    return (<div>Name:{props.children} Age:{age}</div>)
    } else {
        return <div>Invalid</div>
    }
}

export default User;