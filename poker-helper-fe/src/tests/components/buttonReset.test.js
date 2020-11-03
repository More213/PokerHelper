import React from 'react';
import { shallow} from 'enzyme';
import { ButtonReset, mapStateToProps, mapDispatchToProps } from '../../components/buttonReset'

describe('initial select cards', () => {
  const props = {
    selectedCards:[
      { value: 5, suit: '♦'},
      { value: 2, suit: '♦'},
      { value: 4, suit: '♦'},
      { value: 3, suit: '♦'},
    ],
    deleteAllData: () => {}
  };
  const ButtonResetWrapper = shallow(<ButtonReset {...props}/>);
  it('renders properly select card', () => {
    expect(ButtonResetWrapper).toMatchSnapshot()
  });
  it("text select card", () => {
    expect(ButtonResetWrapper.text()).toBe("Reset cards");
  });
  it("text button reset mapStateToProps", () => {
    expect(mapStateToProps(props).selectedCards).toEqual(props.selectedCards);
  });
  it("text button reset mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).deleteAllData();
    expect(dispatch.mock.calls[0][0]).toEqual({type: "DELETE_SELECT_CARDS"});
  });
  it("text button reset click simulate", () => {
    const wrap = jest.fn();
    const clickSimulate = shallow(<ButtonReset {...props}/>);
    clickSimulate.simulate('click');
    expect(wrap(props.deleteAllData)).toBeUndefined();
  });
});
