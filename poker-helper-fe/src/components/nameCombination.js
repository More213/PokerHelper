import React from "react";
import '../App.css';
import {connect} from "react-redux";
export class NameCombination extends React.Component {
  render() {
    return (
      <div className="result">
        {this.props.nameCombs}
      </div>
    )
  }
}
export const mapStateToProps = state => {
  return {
    nameCombs: state.nameCombs,
  }
};

export default connect(mapStateToProps)(NameCombination);
