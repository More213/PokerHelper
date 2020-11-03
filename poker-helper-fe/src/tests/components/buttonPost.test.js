import React from 'react';
import { shallow} from 'enzyme';
import { ButtonPost , mapStateToProps, mapDispatchToProps } from '../../components/buttonPost'

describe('initial select cards post', () => {
  const props = {
    selectedCards:[
      { value: 5, suit: '♦'},
      { value: 2, suit: '♦'},
      { value: 4, suit: '♦'},
      { value: 3, suit: '♦'},
    ],
    postData: () => {}
  };
  const ButtonPostWrapper = shallow(<ButtonPost {...props}/>);
  ButtonPostWrapper.simulate('click');
  it('renders properly select card', () => {
    expect(ButtonPostWrapper).toMatchSnapshot()
  });
  it("text button", () => {
    expect(ButtonPostWrapper.text()).toBe("Answer");
  });
  it("text button post mapStateToProps", () => {
    expect(mapStateToProps(props).selectedCards).toEqual(props.selectedCards);
  });
  it("text button post mapDispatchToProps", () => {
    const dispatch = jest.fn();
    mapDispatchToProps(dispatch).postData(props.selectedCards);
  });

});
