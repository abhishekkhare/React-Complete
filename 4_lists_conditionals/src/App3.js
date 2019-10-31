import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App3 extends Component {
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

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.person

        // Never change the state, copy it, change it and then assign it.

        //const persons = this.state.person.slice();

        const persons = [...this.state.person]
        console.log("trying to delete" + persons)
        persons.splice(personIndex, 1);
        console.log("trying to delete" + persons)
        this.setState({person: persons});

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
                    {this.state.person.map((person, index) => {
                        return <Person name={person.name} gender={person.gender}
                                       changed={this.namChangedHandler}
                                       click={() => this.deletePersonHandler(index)}>Running</Person>
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

export default App3;
