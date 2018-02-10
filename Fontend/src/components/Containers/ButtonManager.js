import React from 'react';
import { connect } from 'react-redux';

import { setButtonShowing } from '../../Actions/UI';

const mapStateToProps = (state) => {
  return {
    buttonShowing: state.UI.buttonShowing //TODO: use selectors
  }
};



const mapDispatchToProps = (dispatch) => ({
  onClickButton: (showing) => {dispatch(setButtonShowing(showing))}
})


class ButtonManager extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}} onClick={() => this.props.onClickButton(!this.props.buttonShowing)}>
        <h1>{'test'}{this.props.buttonShowing.toString()}</h1>
      </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonManager);
