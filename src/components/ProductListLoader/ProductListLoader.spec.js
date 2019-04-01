/**
 * Snapshot test for ProductListLoader Component.
 * Placeholder fot the description
 * @module ProductListLoader.spec
 */
import React from 'react';
import ProductListLoader from './ProductListLoader';

describe('Test for ProductListLoader component', () => {
  const props = {};

  it ('ProductListLoader from render', () => {
    const wrapper = shallow(<ProductListLoader {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
