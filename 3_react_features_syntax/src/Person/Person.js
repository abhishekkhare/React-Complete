import React from 'react';
import Person from './Person.css'

const person = (props) => {return (
    <div className="Person">
        <p>I am a Person! my name is {props.name} I am a {props.gender} and I am {Math.floor(Math.random() * 30)} years old</p>
        <p>I like {props.children}</p>
        <p onClick={props.click}> click Me!</p>
        <input type="text" onChange={props.changed}/>
    </div>

)

}

export default person;