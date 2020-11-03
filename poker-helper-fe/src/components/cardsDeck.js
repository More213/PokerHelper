import React from 'react';
import '../App.css';
import { connect } from "react-redux";
import {getNews} from "../actions/cardDeck";
import {selectCardData} from "../actions/selectCard";

export class CardsDeck extends React.Component {
  componentDidMount() {
    this.props.onGetNews()
  }

  render() {
    const card = this.props.cardsDeck;
    if(Array.isArray(card)){
      return card.sort((a, b) => a.value - b.value)
        .sort((a, b) => a.suit.localeCompare(b.suit)).map((i) => {
          return (<div className="body_card"
                       id = {i.suit}
                       key={i.value + i.suit}
                       onClick={() => this.props.selectCard(i)}>{i.value} {i.suit}</div>);
        });
    } else {
      return <div className="server_error">{card}</div>
    }
  }
}

export const mapStateToProps = state => {
  return {
    cardsDeck: state.cardsDeck,
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    onGetNews: () => dispatch(getNews()),
    selectCard: id => dispatch(selectCardData(id)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(CardsDeck);
