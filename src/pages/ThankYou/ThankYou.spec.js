/**
 * Snapshot test for ThankYou Component.
 * Placeholder fot the description
 * @module ThankYou.spec
 */
import React from 'react';
import ThankYou from './ThankYou';

describe('Test for ThankYou component', () => {
  const props = {};

  it ('ThankYou from render', () => {
    const wrapper = shallow(<ThankYou {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
