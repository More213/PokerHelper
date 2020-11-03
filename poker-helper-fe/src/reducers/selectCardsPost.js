export const nameCombs = (state = "Select 5-7 cards", action) => {
  switch (action.type) {
    case "SELECT_CARDS_POST":
      return  action.nameCombs;
    case "POST_ERROR":
      return  state = "Sorry there was an error";
    case "DELETE_SELECT_CARDS":
      return state = "Select 5-7 cards";
    default:
      return state;
  }
};
