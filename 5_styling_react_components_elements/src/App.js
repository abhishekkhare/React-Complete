import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
    state = {
        person: [
            {id: 1, name: "Abhishek", gender: "male"},
            {id: 2, name: "Roopali", gender: "female"},
            {id: 3, name: "Ishanvi", gender: "female"},
            {id: 4, name: "Arjun", gender: "male"},
        ],
        showPersons: false
    }

    namChangedHandler = (event, id) => {
        const personIndex = this.state.person.findIndex(p => {
            return p.id === id
        })

        const person = {...this.state.person[personIndex]}
        person.name = event.target.value;

        const persons = [...this.state.person];
        persons[personIndex] = person;

        this.setState({
            person: persons
        })
    }

    deletePersonHandler = (personIndex) => {
        //const persons = this.state.person

        // Never change the state, copy it, change it and then assign it.

        //const persons = this.state.person.slice();
        const persons = [...this.state.person]
        persons.splice(personIndex, 1);
        this.setState({person: persons});

    }

    togglePersonHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
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
                                       changed={(event) => this.namChangedHandler(event, person.id)}
                                       click={() => this.deletePersonHandler(index)} key={person.id}>Running</Person>
                    })}
                </div>
            );
            style.backgroundColor = 'red';
        }

        let classes = [];

        if (this.state.person.length <= 3) {
            classes.push('red');
        }
        if (this.state.person.length <= 2) {
            classes.push('italic');
        }
        return (
            <div className="App">
                <h1 className={classes.join(' ')}>Hi, Welcome to React APP</h1>
                <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

                {persons}
            </div>
        );
    }
}

export default App;
