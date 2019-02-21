import React from 'react';
import Masha from './Masha.js';

describe('Test for Masha component', ()=>{
    const props = {};
    
    it('Masha from render', ()=>{
        const wrapper = shallow(<Masha {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});