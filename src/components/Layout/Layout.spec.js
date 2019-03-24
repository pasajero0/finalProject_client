/**
 * Snapshot test for Layout Component.
 * Placeholder fot the description
 * @module Layout.spec
 */
import React from 'react';
import Layout from './Layout';

describe('Test for Layout component', () => {
  const props = {};

  it ('Layout from render', () => {
    const wrapper = shallow(<Layout {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
