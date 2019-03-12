import React from 'react';
import Checkout from './Checkout.js';

describe('Test for Checkout component', ()=>{
    const props = {};
    
    it('Checkout from render', ()=>{
        const wrapper = shallow(<Checkout {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});