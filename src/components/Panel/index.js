import React from 'react';
import Paper from 'material-ui/Paper';
import styles from './Panel.css';

const Panel = ({children, depth = 3}) => (
    <Paper zDepth={depth}>
      <div className={styles.wrapper}> 
        { children }
      </div>
    </Paper>
);

export default Panel
