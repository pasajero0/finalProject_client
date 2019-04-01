/**
 * Snapshot test for SeoHeaderRender Component.
 * Placeholder fot the description
 * @module SeoHeaderRender.spec
 */
import React from 'react';
import SeoHeaderRender from './SeoHeaderRender';

describe('Test for SeoHeaderRender component', () => {
  const props = {};

  it ('SeoHeaderRender from render', () => {
    const wrapper = shallow(<SeoHeaderRender {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
