import { setButtonShowing } from '../../Actions/UI';

const mapStateToProps = (state) => {
  return {
    buttonShowing: state.UIReducer.buttonShowing //TODO: use selectors
  }
};

const mapDispatchToProps = (dispatch) => {
  onClickButton: (buttonShowing) => dispatch(setButtonShowing(buttonShowing ? buttonShowing++ : 0))
}

const render = ({ buttonShowing, onClickButton }) => {
  <div onClick={() => onClickButton(buttonShowing)}>{buttonShowing}</div>
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(render);
