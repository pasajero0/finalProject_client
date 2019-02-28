/**
 * Snapshot test for __componentName__ Component.
 * Placeholder fot the description
 * @module __componentName__.spec
 */
import React from 'react';
import __componentName__ from './__componentName__';

describe('Test for __componentName__ component', () => {
  const props = {};

  it ('__componentName__ from render', () => {
    const wrapper = shallow(<__componentName__ {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
