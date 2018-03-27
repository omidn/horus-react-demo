import React from 'react';
import Panel from 'components/Panel';
import SearchField from 'components/SearchField';
import TextField from 'material-ui/TextField';
import styles from './NERPanel.css';

const NERPanel = () => (
    <Panel depth={1}>
      <SearchField label="What do you have in your mind?" fullWidth={true} />
    </Panel>
);

export default NERPanel;
