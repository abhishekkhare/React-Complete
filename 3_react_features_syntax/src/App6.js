import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App6 extends Component {
    state = {
        person: [
            {name: "Abhishek", gender: "male"},
            {name: "Roopali", gender: "female"},
            {name: "Ishanvi", gender: "female"},
            {name: "Arjun", gender: "male"},
        ]
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

    namChangedHandler = (event) =>{
        this.setState({
            person: [
                {name: event.target.value, gender: "male"},
                {name: "Roopali R", gender: "female"},
                {name: "Ishanvi K", gender: "female"},
                {name: "Arjun K", gender: "male"},
            ]
        })
    }
    render() {
        return (
            <div>
                <div className="App">
                    <h1>Hi, Welcome to React APP</h1>
                    <button onClick={this.switchNameHandler.bind(this, "Yo Yo")}>Change Name</button>
                    <Person name={this.state.person[0].name} gender={this.state.person[0].gender} changed={this.namChangedHandler}>Running</Person>
                    <Person name={this.state.person[1].name} gender={this.state.person[1].gender}>Singing</Person>
                    <Person name={this.state.person[2].name} gender={this.state.person[2].gender}>Playing</Person>
                    <Person name={this.state.person[3].name} gender={this.state.person[3].gender}
                            click={this.switchNameHandler.bind(this, "Handsome")}/>
                </div>
                <div className="App">
                    <h1>Hi, Welcome to React APP</h1>
                    <button onClick={() => this.switchNameHandler("Funky")}>Change Name</button>
                    <Person name={this.state.person[0].name} gender={this.state.person[0].gender}>Running</Person>
                    <Person name={this.state.person[1].name} gender={this.state.person[1].gender}>Singing</Person>
                    <Person name={this.state.person[2].name} gender={this.state.person[2].gender}>Playing</Person>
                    <Person name={this.state.person[3].name} gender={this.state.person[3].gender}
                            click={() => this.switchNameHandler("Lucky")}/>
                </div>
            </div>
        );
    }
}

export default App6;
