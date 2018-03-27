import React, { Component } from 'react';
import logo from 'assets/images/logo.svg';
import RaisedButton from 'material-ui/RaisedButton';
import Demo from 'routes/demo';
import styles from './Root.css';

class App extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
              <Demo className={styles.container} />
            </div>
        );
    }
}

export default App;
