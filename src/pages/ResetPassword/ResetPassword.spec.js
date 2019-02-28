import React from 'react';
import ResetPassword from './ResetPassword.js';

describe('Test for ResetPassword component', ()=>{
    const props = {};
    
    it('ResetPassword from render', ()=>{
        const wrapper = shallow(<ResetPassword {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});