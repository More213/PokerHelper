import React from 'react';
import { shallow} from 'enzyme';
import { NameCombination } from '../../components/nameCombination'
import { mapStateToProps } from '../../components/nameCombination'
describe('initial name combination', () => {
  const props = {
    nameCombs:"Hello guys",
  };
  const selectCardWrapper = shallow(<NameCombination {...props}/>);
  it('renders properly name combination', () => {
    expect(selectCardWrapper).toMatchSnapshot()
  });
  it("text name combination", () => {
    expect(selectCardWrapper.text()).toBe("Hello guys");
  });
  it("text name combination mapStateToProps", () => {
    expect(mapStateToProps(props).nameCombs).toEqual("Hello guys");
  });
});
