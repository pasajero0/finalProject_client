/**
 * Snapshot test for ProductListHeader Component.
 * Placeholder fot the description
 * @module ProductListHeader.spec
 */
import React from 'react';
import ProductListHeader from './ProductListHeader';

describe('Test for ProductListHeader component', () => {
  const props = {};

  it ('ProductListHeader from render', () => {
    const wrapper = shallow(<ProductListHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
