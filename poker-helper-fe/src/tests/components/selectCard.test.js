import React from 'react';
import { shallow} from 'enzyme';
import { SelectCards, mapStateToProps, mapDispatchToProps } from '../../components/selectCards'

describe('initial select cards', () => {
  const props = {
    newCard:[
      { value: 2, suit: '♦'},
    ],
    delete: () => {}
  };
  const selectCardWrapper = shallow(<SelectCards {...props}/>);
  it('renders properly select card', () => {
    expect(selectCardWrapper).toMatchSnapshot()
  });
  it("text select card", () => {
    expect(selectCardWrapper.text()).toBe("2 ♦");
  });
  it("text select card mapStateToProps", () => {
    expect(mapStateToProps(props).newCard).toEqual();
  });
  it("text select card mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).delete();
    expect(dispatch.mock.calls[0][0]).toEqual({type: "DELETE_ONE_CARD"});
  });
  it("text select card click simulate", () => {
    const wrap = jest.fn();
    const clickSimulate = shallow(<SelectCards {...props}/>);
    clickSimulate.simulate('click');
    expect(wrap(props.newCard)).toBeUndefined();
  });
});
