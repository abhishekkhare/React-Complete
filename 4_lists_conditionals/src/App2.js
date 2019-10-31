import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App2 extends Component {
    state = {
        person: [
            {name: "Abhishek", gender: "male"},
            {name: "Roopali", gender: "female"},
            {name: "Ishanvi", gender: "female"},
            {name: "Arjun", gender: "male"},
        ],
        showPersons: false
    }
    switchNameHandler = (newName) => {
        console.log("Was Clicked");
        this.setState({
            person: [
                {name: "Abhishek K", gender: "male"},
                {name: "Roopali R", gender: "female"},
                {name: "Ishanvi K", gender: "female"},
                {name: newName, gender: "male"},
            ]
        })
    }

    namChangedHandler = (event) => {
        this.setState({
            person: [
                {name: event.target.value, gender: "male"},
                {name: "Roopali R", gender: "female"},
                {name: "Ishanvi K", gender: "female"},
                {name: "Arjun K", gender: "male"},
            ]
        })
    }


    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: "pointer"
        };
        let persons = null
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.person.map(person => {
                        return <Person name={person.name} gender={person.gender}
                                       changed={this.namChangedHandler}>Running</Person>
                    })}
                </div>
            )
        }
        return (
            <div className="App">
                <h1>Hi, Welcome to React APP</h1>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

                {persons}
            </div>
        );
    }
}

export default App2;
