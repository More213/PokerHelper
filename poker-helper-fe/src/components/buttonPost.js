import React from "react";
import '../App.css';
import {connect} from "react-redux";
import {selectCardsPostData} from "../actions/selectCardsPost";

export class ButtonPost extends React.Component {
  cardsPost(date){
    this.props.postData(date)
  }
  render() {
    return (
      <button className='btn'
              onClick={ () => this.cardsPost(this.props.selectedCards)}>
        Answer
      </button>
    )
  }
}
export const mapStateToProps = state => {
  return {
    selectedCards: state.selectedCards,
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    postData: date => dispatch(selectCardsPostData(date)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonPost);
