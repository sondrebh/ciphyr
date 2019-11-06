const appReducer = (state, action) => {
    switch (action.type) {
        
      case 'INCREMENT_COUNT':
        return {
          ...state,
          count: state.count + 1
        };

      default:
        return state
    }
};

export default appReducer;