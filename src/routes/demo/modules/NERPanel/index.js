import React from 'react';
import Panel from 'components/Panel';
import SearchField from 'components/SearchField';
import Indicator from 'components/Indicator';
import { Card, CardText}  from 'material-ui/Card';
import TokenField from '../TokenField';
import styles from './NERPanel.css';

const SAMPLE_TEXT = "paris hilton was once the toast of the town.";

const NERPanel = () => (
    <Panel depth={1}>
      <SearchField label="What do you have in your mind?" fullWidth={true} />
      <TokenField />
      <Card style={{marginTop: 10 }}>
        <CardText>
          <h3>Computer Vision</h3>
          <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={[0.6, 0.0, 0.0, 6.0, 14]} />
          <h3>Text Classification</h3>
          <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={[0.1, 0.2, 0.7, 5.0, '-']} />
        </CardText>
      </Card>
    </Panel>
);

export default NERPanel;
