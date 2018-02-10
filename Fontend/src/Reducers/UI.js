
const UIReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_BUTTON_SHOWING':
      return { buttonShowing: action.buttonShowing };
  }
}

export default UIReducer
