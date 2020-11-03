import React from 'react';
import { shallow} from 'enzyme';
import {CardsDeck, mapDispatchToProps, mapStateToProps} from "../../components/cardsDeck";

describe('initial deck', () => {
  const props = {
    cardsDeck:[{value: 2, suit: '♦'}],
    onGetNews: () => {},
  };

  const wrapper = shallow(<CardsDeck {...props}/>);

  it('renders properly card deck', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it("text card deck", () => {
    expect(wrapper.text()).toBe("2 ♦");
  });
  it("text select card click simulate", () => {
    const props = {
      cardsDeck: [{value: 2, suit: '♦'}],
      selectCard: () => {},
      onGetNews: () => {},
    };
    const wrap = jest.fn();
    const clickSimulate = shallow(<CardsDeck {...props}/>);
    clickSimulate.simulate('click');
    expect(wrap(props.cardsDeck[0])).toBeUndefined();
  });
  describe('test sort cards', () => {
    const props = {
      cardsDeck: [
          {value: 2, suit: '♦'},
          {value: 3, suit: '♦'},
          {value: 4, suit: '♦'},
          {value: 2, suit: '♦'},
        ],
      onGetNews: () => {},
    };

    const wrapperCard = shallow(<CardsDeck {...props}/>);
    it('renders properly card deck sort', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it("text card deck sorting", () => {
      expect(wrapperCard.first().text()).toBe("2 ♦");
    });
  });
  describe('test render error', () => {
    const props = {
      cardsDeck:"Sorry no connection to the server",
      onGetNews: () => {},
    };

    const wrapperCard = shallow(<CardsDeck {...props}/>);
    it('renders properly card deck sort', () => {
      expect(wrapper).toMatchSnapshot()
    });

    it("text card deck sorting", () => {
      expect(wrapperCard.text()).toBe("Sorry no connection to the server");
    });
  });
  describe('test mapStateToProps and mapDispatchToProps', () => {
    it("text card deck mapStateToProps", () => {
      expect(mapStateToProps(props).newCard).toEqual();
    });

    it("text card deck mapDispatchToProps selectCard", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).selectCard();
      expect(dispatch.mock.calls[0][0]).toEqual({type: "SELECT_CARD"});
    });
    it("text card deck mapDispatchToProps selectCard", () => {
      const dispatch = jest.fn();
      mapDispatchToProps(dispatch).onGetNews();
    });
  });
});
