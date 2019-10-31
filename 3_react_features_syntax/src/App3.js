import React from 'react';
import './App.css';
import Person from './Person/Person.js'

function App3() {
    return (
        <div className="App">
            <h1>Hi, Welcome to React APP</h1>
            <Person name = "Abhishek" gender = "male">Running</Person>
            <Person name = "Roopali" gender = "female">Singing</Person>
            <Person name = "Ishanvi" gender = "female">Playing</Person>
            <Person name = "Arjun" gender = "male"/>
        </div>
    );
}

export default App3;
