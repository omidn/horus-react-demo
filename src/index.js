import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'layouts/Root';
import 'assets/styles/global.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MuiThemeProvider><Root /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
