import React from 'react';
import ProfileForm from './ProfileForm.js';

describe('Test for ProfileForm component', ()=>{
    const props = {};
    
    it('ProfileForm from render', ()=>{
        const wrapper = shallow(<ProfileForm {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});