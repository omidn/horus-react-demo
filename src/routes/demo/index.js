import { connect } from 'react-redux';
import { request_demo } from 'store/actions';
import Demo from './demo';

const mapStateToProps = state => ({
  data: state.demo.result,
  q: state.demo.q,
  isLoading: state.demo.isLoading
});

const mapDispatchToProps = dispatch => ({
  onInputChanged: (q) => dispatch(request_demo(q))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Demo);

