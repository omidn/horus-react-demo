import React from 'react';
import Panel from 'components/Panel';
import SearchField from 'components/SearchField';
import NERResult from '../NERResult';


import get from 'lodash/get';
import styles from './NERPanel.css';

const NERPanel = ({ onInputChanged, ...otherProps }) => {
  return (
    <Panel depth={1}>
      <SearchField
        label="What do you have in your mind?"
        fullWidth={true}
        onChange={x => onInputChanged(x.target.value)} />
      <NERResult {...otherProps} />
    </Panel>
  );
}
export default NERPanel;
