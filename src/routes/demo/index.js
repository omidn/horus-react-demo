import React from 'react';
import { Tab, Tabs } from 'components/Tab';
import Panel from 'components/Panel';
import styles from './Demo.css';
import NERPanel from './modules/NERPanel';

const inlineStyles = {
    
}

const Demo = () => (
    <Panel className={styles.demo} >
      <Tabs>
        <Tab label="Playground"><NERPanel /></Tab>
        <Tab label="Import"><div>page 2</div></Tab>
      </Tabs>
    </Panel>
);

export default Demo;




