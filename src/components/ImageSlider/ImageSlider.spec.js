import React from 'react';
import ImageSlider from './ImageSlider.js';

describe('Test for ImageSlider component', ()=>{
    const props = {};
    
    it('ImageSlider from render', ()=>{
        const wrapper = shallow(<ImageSlider {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});