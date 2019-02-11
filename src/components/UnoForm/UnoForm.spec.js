import React from 'react';
import UnoForm from './UnoForm.js';

describe('Test for UnoForm component', ()=>{
    const props = {};
    
    it('UnoForm from render', ()=>{
        const wrapper = shallow(<UnoForm {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});