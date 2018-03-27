import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import Demo from 'routes/demo';
import './Root.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <Demo />
            </div>
        );
    }
}

export default App;
