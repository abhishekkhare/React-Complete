import React from 'react';
import './App.css';

function App2() {
    //return React.createElement('div',null,'h1','Hi, Welcome to React APP')
    //return React.createElement('div',null,React.createElement('h1',null,'Hi, Welcome to React APP'))
    return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, Welcome to React APP'))

}

export default App2;
