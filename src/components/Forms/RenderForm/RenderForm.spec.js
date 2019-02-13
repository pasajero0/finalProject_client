import React from 'react';
import RenderForm from './RenderForm.js';

describe('Test for RenderForm component', ()=>{
    const props = {};
    
    it('RenderForm from render', ()=>{
        const wrapper = shallow(<RenderForm {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});