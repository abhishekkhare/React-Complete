import React from 'react';

import Radium from 'radium'

const person = (props) => {
    const style = {
        '@media (min-width: 500px)':{
            width:'450px'
        }
    };
    return (
    <div className="Person" style={style}>
        <p>I am a Person! my name is {props.name} I am a {props.gender} and I am {Math.floor(Math.random() * 30)} years old</p>
        <p>I like {props.children}</p>
        <p onClick={props.click}> click Me!</p>
        <input type="text" onChange={props.changed}/>
    </div>

)

}

export default Radium(person);