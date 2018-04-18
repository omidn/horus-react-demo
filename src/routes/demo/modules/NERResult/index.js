import React from 'react';
import { compose, renderComponent, renderNothing, branch } from 'recompose';
import Indicator from 'components/Indicator';
import { Card, CardText}  from 'material-ui/Card';
import TokenField from '../TokenField';

const Spinner = () => (
  <h3>Loading...</h3>
);

const IndicatorsWrapperPure = ({ selectedIndex, data }) => {
  console.log('okay', data);
  return (
    <Card style={{ marginTop: 10 }}>
      <CardText>
        <h3>Computer Vision</h3> 
        <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={data[selectedIndex].cv_indicators} />
        <h3>Text Classification</h3>
        <Indicator labels={['LOC', 'ORG', 'PER', 'DIS', 'PLC']} values={data[selectedIndex].tc_indicators}  />
      </CardText>
    </Card>  
  );
}

const IndicatorsWrapper = branch(({selectedIndex}) => selectedIndex === -1, renderNothing)(IndicatorsWrapperPure);

const NERResult = ({ data = [], ...otherProps }) => (
  <div>
    <TokenField data={ data } {...otherProps}/>
    <IndicatorsWrapper data={data} {...otherProps}  />
  </div>
);

export default compose(
  branch(({ isLoading }) => isLoading, renderComponent(Spinner)),
  branch(({ data }) => !data || data.length === 0, renderNothing)
)(NERResult);
