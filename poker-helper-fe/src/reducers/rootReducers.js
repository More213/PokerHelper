import { combineReducers } from "redux";
import { cardsDeck } from "./cards";
import { selectedCards } from "./selectCards";
import { nameCombs } from "./selectCardsPost";

const rootReducer = combineReducers({
  cardsDeck,
  selectedCards,
  nameCombs,
});
export default rootReducer
