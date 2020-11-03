import React from "react";
import '../App.css';
import {connect} from "react-redux";
import {deleteSelectCardOne} from "../actions/deleteOneCard";

export class SelectCards extends React.Component {
  render() {
    return this.props.newCard.map((i) => {
      return (<div className="body_card_activ"
                   id = {i.suit}
                   key={i.value + i.suit}
                   onClick={() => this.props.delete(i)}>{i.value} {i.suit}</div>);
    })
  }
}
export const mapStateToProps = state => {
  return {
    newCard: state.selectedCards,
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    delete: card => dispatch(deleteSelectCardOne(card))
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectCards);
