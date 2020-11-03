export const cardsDeck = (state = [], action) => {
  switch (action.type) {
    case "ERROR_FETCH":
      return state = "Sorry no connection to the server";
    case "CARDS_FETCH":
      return action.cardsDeck;
    case "SELECT_CARD":
      if(state.length > 45) {
        return state.slice(0, state.indexOf(action.putCards))
          .concat(state.slice(state.indexOf(action.putCards) + 1));
      } else {
        return state
      }
    case "DELETE_ONE_CARD":
      return [
        ...state,
        action.deleteCardOne
      ];
    case "DELETE_SELECT_CARDS":
      return [
        ...state,
        ...action.deleteCards
      ];
    default:
      return state;
  }
};
