import React from 'react';
import { compose, renderComponent, renderNothing, branch } from 'recompose'
import Indicator from 'components/Indicator';
import { Card, CardText}  from 'material-ui/Card';
import TokenField from '../TokenField';

const Spinner = () => (
  <h3>Loading...</h3>
)

const NERResult = ({data}) => (
  <div>
    <TokenField />
    <Card style={{marginTop: 10 }}>
      <CardText>
        <h3>Computer Vision</h3>
        <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={[0.6, 0.0, 0.0, 6.0, 14]} />
        <h3>Text Classification</h3>
        <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={[0.1, 0.2, 0.7, 5.0, '-']} />
      </CardText>
    </Card>
  </div>
);

export default compose(
  branch(({isLoading}) => isLoading, renderComponent(Spinner)),
  branch(({data}) => data.length === 0, renderNothing)
)(NERResult);
