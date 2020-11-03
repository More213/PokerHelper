import React from 'react';
import './App.css';
import NameCombination from "./components/nameCombination";
import ButtonPost from "./components/buttonPost";
import SelectCards from "./components/selectCards";
import CardsDeck from "./components/cardsDeck";
import ButtonReset from "./components/buttonReset";
class App extends React.Component {
  render() {
    return (
      <div className='row'>
        <div className='text-center'><h1>Poker Hand Checker</h1></div>
        <div className='table-area'>
          <div className='row'>
            <div className=' picked-cards-area'>
              <SelectCards/>
            </div>
            <div>
              <div className='row'>
                <div>
                  <ButtonReset/>
                  <ButtonPost/>
                </div>
              </div>
            </div>
            <NameCombination/>
          </div>
        </div>
        <div className="column_deck">
          <div className="flex_box" >
            <CardsDeck/>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
