import React from "react";
import '../App.css';
import {connect} from "react-redux";
import {deleteSelectCardsData} from "../actions/deleteAllSelectCards";

export class ButtonReset extends React.Component {
   render() {
    return (
      <button className='btn'
              onClick={ () => this.props.deleteAllData(this.props.selectedCards)}>
        Reset cards
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
    deleteAllData: id => dispatch(deleteSelectCardsData(id)),
  }
};
export default connect(mapStateToProps, mapDispatchToProps)(ButtonReset);
