import React from 'react';
import UserMenu from './UserMenu.js';

describe('Test for UserMenu component', ()=>{
    const props = {};
    
    it('UserMenu from render', ()=>{
        const wrapper = shallow(<UserMenu {...props} />);
        expect(wrapper).toMatchSnapshot()
    });
});