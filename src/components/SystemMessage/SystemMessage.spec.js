import React from 'react';
import SystemMessage from './SystemMessage.js';

describe('Test for SystemMessage component', ()=>{
    const props = {};
    
    it('SystemMessage from render', ()=>{
        const wrapper = shallow(<SystemMessage {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});