/**
 * Snapshot test for OrderHistoryDetails Component.
 * Placeholder fot the description
 * @module OrderHistoryDetails.spec
 */
import React from 'react';
import OrderHistoryDetails from './OrderHistoryDetails';

describe('Test for OrderHistoryDetails component', () => {
  const props = {};

  it ('OrderHistoryDetails from render', () => {
    const wrapper = shallow(<OrderHistoryDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
