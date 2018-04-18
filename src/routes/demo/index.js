import React from 'react';
import { connect } from 'react-redux';
import { getTimeAsync } from 'store/actions';
import Demo from './demo';

const mapStateToProps = state => ({
    time: state.time.message
});

const mapDispatchToProps = dispatch => ({
    getTime: () => dispatch(getTimeAsync())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);

