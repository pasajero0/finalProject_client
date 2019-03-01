import React from 'react';
import Profile from './Profile.js';

describe('Test for Profile component', ()=>{
    const props = {};
    
    it('Profile from render', ()=>{
        const wrapper = shallow(<Profile {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});