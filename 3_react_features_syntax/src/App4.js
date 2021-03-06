import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'

class App4 extends Component {
    state = {
        person: [
            {name: "Abhishek", gender: "male"},
            {name: "Roopali", gender: "female"},
            {name: "Ishanvi", gender: "female"},
            {name: "Arjun", gender: "male"},
        ]
    }
    switchNameHandler = () => {
        console.log("Was Clicked");
        this.setState({
            person: [
                {name: "Abhishek K", gender: "male"},
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
                    <Person name="Abhishek" gender="male">Running</Person>
                    <Person name="Roopali" gender="female">Singing</Person>
                    <Person name="Ishanvi" gender="female">Playing</Person>
                    <Person name="Arjun" gender="male"/>
                </div>
                <div className="App">
                    <h1>Hi, Welcome to React APP</h1>
                    <button onClick={this.switchNameHandler}>Change Name</button>
                    <Person name={this.state.person[0].name} gender={this.state.person[0].gender}>Running</Person>
                    <Person name={this.state.person[1].name} gender={this.state.person[1].gender}>Singing</Person>
                    <Person name={this.state.person[2].name} gender={this.state.person[2].gender}>Playing</Person>
                    <Person name={this.state.person[3].name} gender={this.state.person[3].gender} click = {this.switchNameHandler}/>
                </div>
            </div>

        );
    }

}

export default App4;
