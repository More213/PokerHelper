export const selectedCards = (state = [], action) => {
  switch (action.type) {
    case "DELETE_SELECT_CARDS":
      return state = [];
    case "DELETE_ONE_CARD":
      return state.slice(0, state.indexOf(action.deleteCardOne))
        .concat(state.slice(state.indexOf(action.deleteCardOne) + 1));
    case "SELECT_CARD":
      if(state.length < 7 ){
        return [
          ...state,
          action.putCards
        ];
      }
    default:
      return state;
  }
};
