import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person.js'

const App5 = () => {
    const [personState, setPersonState] = useState({
        person: [
            {name: "Abhishek", gender: "male"},
            {name: "Roopali", gender: "female"},
            {name: "Ishanvi", gender: "female"},
            {name: "Arjun", gender: "male"},
        ]
    });

    const switchNameHandler = () => {
        console.log("Was Clicked");
        setPersonState({
            person: [
                {name: "Abhishek K", gender: "male"},
                {name: "Roopali R", gender: "female"},
                {name: "Ishanvi K", gender: "female"},
                {name: "Arjun K", gender: "male"},
            ]
        })
    }
    return (
        <div>
            <div className="App">
                <h1>Hi, Welcome to React APP</h1>
                <Person name="Abhishek" gender="male">Running</Person>
                <Person name="Roopali" gender="female">Singing</Person>
                <Person name="Ishanvi" gender="female">Playing</Person>
                <Person name="Arjun" gender="male"/>
            </div>
            <div className="App">
                <h1>Hi, Welcome to React APP</h1>
                <button onClick={switchNameHandler}>Change Name</button>
                <Person name={personState.person[0].name} gender={personState.person[0].gender}>Running</Person>
                <Person name={personState.person[1].name} gender={personState.person[1].gender}>Singing</Person>
                <Person name={personState.person[2].name} gender={personState.person[2].gender}>Playing</Person>
                <Person name={personState.person[3].name} gender={personState.person[3].gender}/>
            </div>
        </div>

    );
}


export default App5;
