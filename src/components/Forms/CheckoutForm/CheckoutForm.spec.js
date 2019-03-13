import React from 'react';
import CheckoutForm from './CheckoutForm.js';

describe('Test for CheckoutForm component', ()=>{
    const props = {};
    
    it('CheckoutForm from render', ()=>{
        const wrapper = shallow(<CheckoutForm {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});