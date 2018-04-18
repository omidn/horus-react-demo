import React from 'react';
import Panel from 'components/Panel';
import Token from 'components/Token';
import { connect } from 'react-redux';
import { changeSelectedIndex } from 'store/actions';

const inlineStyles = {
  root: {
    marginTop: 10
  },
  token: {
    margin: 2,
    display: 'inline-block'
  }
};

const TokenField = ({data, selectedIndex, setSelectedIndex}) => (
  <Panel depth={1} style={inlineStyles.root}>
    {data.map((token, i) =>
      <Token
        key={i}
        label={token.text}
        isSelected={i === selectedIndex}
        onClick={e => token.aux || setSelectedIndex(i)}
        isNeutral={token.aux} />)
    }
  </Panel>
);

const mapStateToProps = (state) => ({
  selectedIndex: state.demo.selectedIndex
});

const mapDispatchToProps = (dispatch) => ({
  setSelectedIndex: index => dispatch(changeSelectedIndex(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(TokenField);
