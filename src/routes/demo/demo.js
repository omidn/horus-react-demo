import React from 'react';
import { Tab, Tabs } from 'components/Tab';
import Panel from 'components/Panel';
import RaisedButton from 'material-ui/RaisedButton';
import styles from './Demo.css';
import NERPanel from './modules/NERPanel';

const inlineStyles = {
    root: {
        width: 900
    }
};

const Demo = ({ time, getTime }) => (
    <Panel style={inlineStyles.root}>
      <Tabs>
        <Tab label="HORUS Demo"><NERPanel /></Tab>
        <Tab label="PROCESS CONLL FILE">
          <div>
            <h3>{time}</h3>
            <RaisedButton label="Click me for time" onClick={getTime} />
          </div>
        </Tab>
      </Tabs>
    </Panel>
);

export default Demo;
