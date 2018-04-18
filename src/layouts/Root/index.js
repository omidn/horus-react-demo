import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from 'store';
import Demo from 'routes/demo';
import styles from './Root.css';

class App extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
              <Provider store={store}>
                <Demo className={styles.container} />
              </Provider>
            </div>
        );
    }
}

export default App;
